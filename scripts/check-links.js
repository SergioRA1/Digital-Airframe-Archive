// Checks that every photo and reference link on the site still works.
//
// Photos are hotlinked from Wikimedia Commons (and could come from the other
// sources listed in CLAUDE.md), where files are sometimes renamed or deleted,
// and the sources each aircraft page cites move or disappear too. This
// reads:
//   - photos: every `src`, `full` and `source` address in src/photos.js and
//     src/Gallery.jsx, plus the smaller sizes phones load
//     (src/imageSizes.js). Local files (/Digital-Airframe-Archive/photos/<file>)
//     are checked on disk.
//   - references: every external `href` in the data modules (src/pages/,
//     src/data/), which the Reference section of each page lists.
// and asks each server for it.
//
// Only a definite answer counts as broken: any HTTP error for a photo, and
// "not found" (404, 410) or a domain that no longer exists for a reference.
// Many official sites refuse automated requests (403) while working fine in
// a browser, and any site can time out on a given day, so those are listed
// as "could not check" without failing.
//
// Run `npm run links`. It exits with 1 if anything is broken, and writes a
// Markdown report to the file given with --report, which the weekly workflow
// (.github/workflows/links.yml) posts as an issue.

import { existsSync, readdirSync, readFileSync, writeFileSync } from "node:fs";
import { fileURLToPath } from "node:url";

import { sizesOf } from "../src/imageSizes.js";
import { basePath } from "../src/site.js";

const root = new URL("../", import.meta.url);
const photoFiles = ["src/photos.js", "src/Gallery.jsx"];
const referenceFiles = () =>
  ["src/pages", "src/data"].flatMap((folder) =>
    readdirSync(new URL(folder, root))
      .filter((file) => file.endsWith(".js"))
      .map((file) => `${folder}/${file}`),
  );

// Wikimedia asks automated clients to identify themselves.
const userAgent =
  "DigitalAirframeArchive-LinkCheck/1.0 (https://github.com/SergioRA1/Digital-Airframe-Archive)";

const attempts = 4;
const concurrency = 4;

const lineOf = (text, index) => text.slice(0, index).split("\n").length;

// Every photo address, with where it is written.
export function readAddresses() {
  const found = new Map();

  for (const file of photoFiles) {
    const text = readFileSync(new URL(file, root), "utf8");

    for (const match of text.matchAll(/\b(src|full|source):\s*"([^"]+)"/g)) {
      const [, field, address] = match;
      const where = `${file}:${lineOf(text, match.index)}`;

      // The smaller versions phones load through srcset (src/imageSizes.js).
      const versions =
        field === "source"
          ? []
          : sizesOf(address).filter((size) => size.url !== address);

      for (const [each, label] of [
        [address, field],
        ...versions.map((size) => [size.url, `${field} ${size.width}w`]),
      ]) {
        if (!found.has(each)) {
          found.set(each, { kind: "photo", address: each, field: label, where });
        }
      }
    }
  }

  return [...found.values()];
}

// Every external reference link in the data modules.
export function readReferences() {
  const found = new Map();

  for (const file of referenceFiles()) {
    const text = readFileSync(new URL(file, root), "utf8");

    for (const match of text.matchAll(/\bhref:\s*"(https?:\/\/[^"]+)"/g)) {
      const address = match[1];

      if (!found.has(address)) {
        found.set(address, {
          kind: "reference",
          address,
          field: "href",
          where: `${file}:${lineOf(text, match.index)}`,
        });
      }
    }
  }

  return [...found.values()];
}

const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

// Whether a failed answer means the link is really gone.
const isDefinite = (kind, status) =>
  kind === "photo"
    ? typeof status === "number" && status < 500 && status !== 429
    : status === 404 || status === 410 || status === "ENOTFOUND";

// Rate limits, server errors and network failures are retried with a growing
// pause; other errors are final.
async function check({ kind, address }) {
  if (!/^https?:\/\//.test(address)) {
    const file = address.startsWith(basePath)
      ? address.slice(basePath.length)
      : address.replace(/^\.?\//, "");

    return existsSync(new URL(`public/${file}`, root))
      ? { ok: true }
      : { ok: false, broken: true, status: "missing from public/" };
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

      if (response.status === 403 || response.status === 405 || response.status === 501) {
        response = await fetch(address, {
          headers: { "User-Agent": userAgent, Range: "bytes=0-0" },
          redirect: "follow",
        });
        await response.body?.cancel();
      }

      if (response.ok) {
        return { ok: true };
      }

      last = response.status;

      if (response.status !== 429 && response.status < 500) {
        break;
      }

      const retryAfter = Number(response.headers.get("retry-after"));

      await wait(retryAfter > 0 ? retryAfter * 1000 : attempt * 2000);
    } catch (error) {
      last = error.cause?.code ?? error.message;

      // A domain that doesn't exist won't start existing on a retry.
      if (last === "ENOTFOUND") {
        break;
      }

      await wait(attempt * 2000);
    }
  }

  return {
    ok: false,
    broken: isDefinite(kind, last),
    status: typeof last === "number" ? `HTTP ${last}` : last,
  };
}

export async function checkLinks(
  addresses = [...readAddresses(), ...readReferences()],
) {
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

  return results.sort((a, b) =>
    a.where.localeCompare(b.where, "en", { numeric: true }),
  );
}

const table = (rows) => [
  "| Where | Field | Result | Address |",
  "| --- | --- | --- | --- |",
  ...rows.map(
    ({ where, field, status, address }) =>
      `| \`${where}\` | \`${field}\` | ${status} | ${address} |`,
  ),
];

function report(broken, total) {
  const photos = broken.filter((entry) => entry.kind === "photo");
  const references = broken.filter((entry) => entry.kind === "reference");

  return [
    `${broken.length} of ${total} links failed the weekly check.`,
    ...(photos.length
      ? [
          "",
          "### Photos",
          "",
          ...table(photos),
          "",
          "A `src` or `full` that fails means a blank image on the site. Find the file on its source page (it may have been renamed), or replace the photo following the photo procedure in CLAUDE.md.",
        ]
      : []),
    ...(references.length
      ? [
          "",
          "### References",
          "",
          ...table(references),
          "",
          "Find where the page moved, or replace the source with another that supports the same facts.",
        ]
      : []),
    "",
    "Run `npm run links` to check again locally.",
  ].join("\n");
}

if (process.argv[1] === fileURLToPath(import.meta.url)) {
  const reportIndex = process.argv.indexOf("--report");
  const reportFile = reportIndex > -1 ? process.argv[reportIndex + 1] : null;
  const results = await checkLinks();
  const broken = results.filter((result) => !result.ok && result.broken);
  const unchecked = results.filter((result) => !result.ok && !result.broken);

  for (const { where, field, status, address } of broken) {
    console.log(`✗ ${where} ${field}: ${status}\n    ${address}`);
  }

  for (const { where, field, status, address } of unchecked) {
    console.log(`? ${where} ${field}: could not check (${status})\n    ${address}`);
  }

  console.log(
    `${results.length - broken.length - unchecked.length}/${results.length} links work, ` +
      `${broken.length} broken, ${unchecked.length} could not be checked`,
  );

  if (reportFile) {
    writeFileSync(reportFile, broken.length ? report(broken, results.length) : "");
  }

  process.exitCode = broken.length ? 1 : 0;
}
