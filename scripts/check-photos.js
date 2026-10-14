// Checks that every photo the site loads from another website still exists.
//
// Photos are hotlinked from Wikimedia Commons (and could come from the other
// sources listed in CLAUDE.md), where files are sometimes renamed or deleted.
// This reads every `src`, `full` and `source` address from src/photos.js and
// src/Gallery.jsx and asks each server for it. Local files (photos/<file>)
// are checked on disk.
//
// Run `npm run photos`. It exits with 1 if anything is broken, and writes a
// Markdown report to the file given with --report, which the weekly workflow
// (.github/workflows/photos.yml) posts as an issue.

import { existsSync, readFileSync, writeFileSync } from "node:fs";
import { fileURLToPath } from "node:url";

const root = new URL("../", import.meta.url);
const files = ["src/photos.js", "src/Gallery.jsx"];

// Wikimedia asks automated clients to identify themselves.
const userAgent =
  "DigitalAirframeArchive-PhotoCheck/1.0 (https://github.com/SergioRA1/Digital-Airframe-Archive)";

const attempts = 4;
const concurrency = 4;

export function readAddresses() {
  const found = new Map();

  for (const file of files) {
    const text = readFileSync(new URL(file, root), "utf8");

    for (const match of text.matchAll(/\b(src|full|source):\s*"([^"]+)"/g)) {
      const [, field, address] = match;

      if (!found.has(address)) {
        const line = text.slice(0, match.index).split("\n").length;

        found.set(address, { address, field, where: `${file}:${line}` });
      }
    }
  }

  return [...found.values()];
}

const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

// Rate limits, server errors and network failures are retried with a growing
// pause; a 404 is final.
async function check({ address }) {
  if (!/^https?:\/\//.test(address)) {
    const path = new URL(`public/${address.replace(/^\.?\//, "")}`, root);

    return existsSync(path)
      ? { ok: true }
      : { ok: false, status: "missing from public/" };
  }

  let last;

  for (let attempt = 1; attempt <= attempts; attempt += 1) {
    try {
      // Some servers refuse HEAD, so fall back to a GET for a single byte.
      let response = await fetch(address, {
        method: "HEAD",
        headers: { "User-Agent": userAgent },
        redirect: "follow",
      });

      if (response.status === 405 || response.status === 501) {
        response = await fetch(address, {
          headers: { "User-Agent": userAgent, Range: "bytes=0-0" },
          redirect: "follow",
        });
        await response.body?.cancel();
      }

      if (response.ok) {
        return { ok: true };
      }

      last = `HTTP ${response.status}`;

      if (response.status !== 429 && response.status < 500) {
        return { ok: false, status: last };
      }

      const retryAfter = Number(response.headers.get("retry-after"));

      await wait(retryAfter > 0 ? retryAfter * 1000 : attempt * 2000);
    } catch (error) {
      last = error.cause?.code ?? error.message;
      await wait(attempt * 2000);
    }
  }

  return { ok: false, status: last };
}

export async function checkPhotos(addresses = readAddresses()) {
  const results = [];
  let next = 0;

  const worker = async () => {
    while (next < addresses.length) {
      const entry = addresses[next];

      next += 1;
      results.push({ ...entry, ...(await check(entry)) });
    }
  };

  await Promise.all(Array.from({ length: concurrency }, worker));

  return results;
}

function report(broken, total) {
  const rows = broken
    .sort((a, b) => a.where.localeCompare(b.where, "en", { numeric: true }))
    .map(
      ({ where, field, status, address }) =>
        `| \`${where}\` | \`${field}\` | ${status} | ${address} |`,
    );

  return [
    `${broken.length} of ${total} photo addresses failed the weekly check.`,
    "",
    "| Where | Field | Result | Address |",
    "| --- | --- | --- | --- |",
    ...rows,
    "",
    "A `src` or `full` that fails means a blank image on the site. Find the file on its source page (it may have been renamed), or replace the photo following the photo procedure in CLAUDE.md. Run `npm run photos` to check again locally.",
  ].join("\n");
}

if (process.argv[1] === fileURLToPath(import.meta.url)) {
  const reportIndex = process.argv.indexOf("--report");
  const reportFile = reportIndex > -1 ? process.argv[reportIndex + 1] : null;
  const results = await checkPhotos();
  const broken = results.filter((result) => !result.ok);

  for (const { where, field, status, address } of broken) {
    console.log(`✗ ${where} ${field}: ${status}\n    ${address}`);
  }

  console.log(
    `${results.length - broken.length}/${results.length} photo addresses reachable`,
  );

  if (reportFile) {
    writeFileSync(reportFile, broken.length ? report(broken, results.length) : "");
  }

  process.exitCode = broken.length ? 1 : 0;
}
