import { expect, test } from "@playwright/test";

import { readdirSync, readFileSync } from "node:fs";

import { aircraft } from "../src/aircraft.js";
import { checkTranslations, pairs } from "../scripts/check-translations.js";
import { readAddresses, readReferences } from "../scripts/check-links.js";
import { countWord } from "../src/counts.js";
import { peers } from "../src/data/peers.js";
import { siteUrl } from "../src/site.js";
import {
  allRoutes,
  basePath,
  documentTitle,
  pageName,
  routePath,
} from "../src/routes.js";
import { outputPath, renderFigures } from "../scripts/generate-figures.js";

const slugs = aircraft
  .filter((entry) => entry.available)
  .map((entry) => entry.slug);

// A page's address relative to the base URL ("es/f-35/gallery/"), for
// page.goto().
const address = (route) => routePath(route).slice(basePath.length) || "./";

// Opens a page and waits for the boot overlay to finish. Any uncaught
// error, console error or failed request for the site's own files fails the
// test. Photos and fonts from other sites are left out: a slow or refused
// Wikimedia image is not a bug in this code and should not block a deploy.
async function open(page, path) {
  const errors = [];
  const isOwnFile = (url) => url.startsWith("http://localhost");

  page.on("pageerror", (error) => errors.push(error.message));
  page.on("console", (message) => {
    const isOtherSiteFile =
      message.text().startsWith("Failed to load resource") &&
      !isOwnFile(message.location().url);

    if (message.type() === "error" && !isOtherSiteFile) {
      errors.push(message.text());
    }
  });
  page.on("response", (response) => {
    if (isOwnFile(response.url()) && response.status() >= 400) {
      errors.push(`${response.status()} ${response.url()}`);
    }
  });

  await page.goto(path);
  await expect(page.locator("[data-boot]")).toHaveCount(0);

  return errors;
}

// True once the section's top edge sits just under the 80px fixed header.
async function sectionAtTop(page, sectionId) {
  const top = await page
    .locator(`#${sectionId}`)
    .evaluate((element) => element.getBoundingClientRect().top);

  return top >= -2 && top <= 120;
}

test.describe("every route renders", () => {
  // Every page in both languages, from src/routes.js.
  for (const route of allRoutes) {
    const path = address(route);

    test(path, async ({ page }) => {
      const errors = await open(page, path);

      await expect(page.locator("h1").first()).toBeVisible();
      await expect(page.locator("html")).toHaveAttribute("lang", route.language);
      // A page missing from the pages map in App.jsx would show the hangar.
      await expect(page).toHaveTitle(documentTitle(route));
      await expect(page.locator(".prerender")).toHaveCount(0);
      expect(errors).toEqual([]);
    });
  }

  const phoneRoutes = [
    "./",
    "compare/",
    "timeline/",
    "archive/",
    ...slugs.map((slug) => `${slug}/`),
    "f-15ex/gallery/",
  ];

  // Spanish runs longer, so check every page in both languages.
  phoneRoutes.push(
    ...phoneRoutes.map((route) => (route === "./" ? "es/" : `es/${route}`)),
  );

  for (const route of phoneRoutes) {
    test(`${route} keeps its text on screen on a phone`, async ({ page }) => {
      await page.setViewportSize({
        width: 360,
        height: 780,
      });
      // Entrance animations start off to the side, so turn them off.
      await page.emulateMedia({
        reducedMotion: "reduce",
      });
      await open(page, route);

      // Scroll through once so every scroll-triggered entrance has played.
      await page.evaluate(async () => {
        for (let y = 0; y < document.body.scrollHeight; y += 400) {
          window.scrollTo(0, y);
          await new Promise((resolve) => setTimeout(resolve, 30));
        }
      });
      await page.waitForTimeout(300);

      // Visible text that runs past the screen edge, ignoring anything inside
      // a box that scrolls or clips on purpose (such as the wide tables).
      const offscreen = await page.evaluate(() => {
        const clipped = (element) => {
          for (let node = element.parentElement; node && node !== document.body; node = node.parentElement) {
            if (getComputedStyle(node).overflowX !== "visible") {
              return true;
            }
          }

          return false;
        };

        return [...document.querySelectorAll("body *")]
          .filter((element) =>
            [...element.childNodes].some(
              (node) => node.nodeType === Node.TEXT_NODE && node.textContent.trim(),
            ),
          )
          .filter((element) => !element.closest(".sr-only, [aria-hidden='true']"))
          .filter((element) => {
            const box = element.getBoundingClientRect();

            return box.width > 0 && (box.right > window.innerWidth + 1 || box.left < -1);
          })
          .filter((element) => !clipped(element))
          .map((element) => element.textContent.trim().slice(0, 60));
      });

      expect(offscreen).toEqual([]);

      // Header controls hold icons rather than text, so check them too.
      const clippedControls = await page.evaluate(() =>
        [...document.querySelectorAll("header a, header button")]
          .filter((element) => {
            const box = element.getBoundingClientRect();

            return box.width > 0 && (box.right > window.innerWidth || box.left < 0);
          })
          .map((element) => element.getAttribute("aria-label") ?? element.textContent.trim()),
      );

      expect(clippedControls).toEqual([]);
    });
  }

  test("an unknown page falls back to the hangar", async ({ page }) => {
    await open(page, "not-an-aircraft/");

    await expect(page.locator("#aircraft")).toBeAttached();
  });
});

test.describe("addresses", () => {
  const redirects = [
    ["#/f-35", "f-35/"],
    ["#/es/f-35/gallery", "es/f-35/gallery/"],
    ["#/archive", "archive/"],
    ["#gallery", "j-20/gallery/"],
    ["#/compare/f-22,j-20", "compare/?aircraft=f-22,j-20"],
    ["#/es/compare/typhoon", "es/compare/?aircraft=typhoon"],
  ];

  for (const [old, current] of redirects) {
    test(`an old ${old} link opens ${current}`, async ({ page }) => {
      await open(page, `./${old}`);

      await expect(page).toHaveURL(
        (url) => url.pathname + url.search + url.hash === basePath + current,
      );
    });
  }

  test("links open pages without reloading, and Back returns", async ({
    page,
  }) => {
    await open(page, "./");
    await page.evaluate(() => {
      window.notReloaded = true;
    });

    await page.locator(`a[href="${basePath}f-35/"]`).first().click();
    await expect(page).toHaveURL(new RegExp(`${basePath}f-35/$`));
    await expect(page).toHaveTitle("F-35 | Airframe Archive");

    await page.goBack();
    await expect(page).toHaveURL(new RegExp(`${basePath}$`));
    await expect(page.locator("#aircraft")).toBeAttached();
    expect(await page.evaluate(() => window.notReloaded)).toBe(true);
  });

  // What search engines and link previews read before any script runs.
  test("every page has its own HTML file", async ({ request }) => {
    for (const route of allRoutes) {
      const html = await (await request.get(address(route))).text();
      const url = siteUrl + routePath(route).slice(basePath.length);

      expect(html, address(route)).toContain(`<html lang="${route.language}">`);
      expect(html, address(route)).toContain(`<title>${documentTitle(route)}</title>`);
      expect(html, address(route)).toContain(`<link rel="canonical" href="${url}" />`);
      expect(html, address(route)).toMatch(/<div class="prerender">.*<h1>/s);
    }
  });

  test("the sitemap lists every page, and 404.html is not indexed", async ({
    request,
  }) => {
    const sitemap = await (await request.get("sitemap.xml")).text();
    const notFound = await (await request.get("404.html")).text();

    expect(sitemap.match(/<loc>/g)).toHaveLength(allRoutes.length);
    expect(notFound).toContain('<meta name="robots" content="noindex" />');
  });
});

test.describe("menu", () => {
  const cases = [
    {
      name: "aircraft page, desktop",
      route: "j-20/",
      label: "Reference",
      section: "reference",
      viewport: {
        width: 1060,
        height: 900,
      },
    },
    {
      name: "hangar, phone",
      route: "./",
      label: "Analysis",
      section: "analysis",
      viewport: {
        width: 390,
        height: 844,
      },
    },
    {
      name: "compare, phone",
      route: "compare/",
      label: "Table",
      section: "table",
      viewport: {
        width: 390,
        height: 844,
      },
    },
  ];

  for (const { name, route, label, section, viewport } of cases) {
    test(`section buttons close the menu and scroll (${name})`, async ({
      page,
    }) => {
      await page.setViewportSize(viewport);
      await open(page, route);

      await page.getByRole("button", { name: "Open menu" }).click();

      // Click only once the menu has finished opening, as a person would.
      // Clicking mid-animation hid the bug this test guards against.
      const button = page.getByRole("button", { name: label, exact: true }).last();

      await expect(button).toBeInViewport({ ratio: 1 });
      await page.waitForTimeout(500);
      await button.click();

      await expect(page.getByRole("button", { name: "Open menu" })).toBeVisible();
      await expect.poll(() => sectionAtTop(page, section)).toBe(true);
    });
  }

  test("search finds an aircraft and opens its page", async ({ page }) => {
    await open(page, "./");

    await page.getByRole("button", { name: "Open menu" }).click();
    await page.getByRole("searchbox", { name: "Search aircraft by name" }).fill("raf");
    await page.locator("header").getByRole("link", { name: /Rafale/ }).click();

    await expect(page).toHaveURL(/\/rafale\/$/);
  });

  test("search says when nothing matches", async ({ page }) => {
    await open(page, "./");

    await page.getByRole("button", { name: "Open menu" }).click();
    await page.getByRole("searchbox", { name: "Search aircraft by name" }).fill("zzz");

    await expect(page.getByText("No aircraft match")).toBeVisible();
  });
});

test.describe("language", () => {
  test("the switch opens the same page in the other language", async ({
    page,
  }) => {
    await open(page, "f-35/");

    await page.getByRole("link", { name: "Ver en español" }).click();
    await expect(page).toHaveURL(/\/Digital-Airframe-Archive\/es\/f-35\/$/);
    await expect(page.locator("html")).toHaveAttribute("lang", "es");
    await expect(page.getByText("Un diseño, tres misiones.")).toBeVisible();

    await page.getByRole("link", { name: "View in English" }).click();
    await expect(page).toHaveURL(/\/Digital-Airframe-Archive\/f-35\/$/);
    await expect(page.getByText("One design, three roles.")).toBeVisible();
  });

  test("links on a Spanish page stay in Spanish", async ({ page }) => {
    await open(page, "es/f-35/");

    await expect(
      page.locator(`a[href="${basePath}es/f-35/gallery/"]`).first(),
    ).toBeAttached();
    await expect(page.locator(`a[href="${basePath}es/su-57/"]`).first()).toBeAttached();
    // The language switch and the language suggestion (marked lang="en")
    // are the links that leave Spanish on purpose.
    await expect(
      page.locator(
        `a[href^="${basePath}"]:not([href^="${basePath}es/"]):not([lang="en"], [lang="en"] *)`,
      ),
    ).toHaveCount(0);
    // Nothing still links in the old "#/..." form.
    await expect(page.locator('a[href^="#/"]')).toHaveCount(0);
  });

  test("dates, confidence and groups are shown in Spanish", async ({ page }) => {
    await open(page, "es/f-35/");

    await expect(page.getByText("15 DIC 2006").first()).toBeAttached();
    await expect(page.getByText("CONFIRMADO").first()).toBeAttached();
    await expect(page.getByRole("button", { name: "DIMENSIONES" })).toBeAttached();
  });
});

test.describe("language suggestion, Spanish browser", () => {
  test.use({ locale: "es-ES" });

  const notice = (page) => page.getByRole("complementary", { name: "Idioma" });

  test("an English page offers Spanish, and following it is remembered", async ({
    page,
  }) => {
    await open(page, "f-35/");

    await notice(page).getByRole("link", { name: "Leer en español" }).click();
    await expect(page).toHaveURL(new RegExp(`${basePath}es/f-35/$`));
    await expect(notice(page)).toHaveCount(0);

    await open(page, "f-35/");
    await page.waitForTimeout(500);
    await expect(notice(page)).toHaveCount(0);
  });

  test("closing it is remembered", async ({ page }) => {
    await open(page, "./");

    await notice(page).getByRole("button", { name: "Cerrar" }).click();
    await expect(notice(page)).toHaveCount(0);

    await open(page, "timeline/");
    await page.waitForTimeout(500);
    await expect(notice(page)).toHaveCount(0);
  });

  test("a Spanish page offers nothing", async ({ page }) => {
    await open(page, "es/");
    await page.waitForTimeout(500);

    await expect(page.locator("aside[lang]")).toHaveCount(0);
  });
});

test.describe("language suggestion, English browser", () => {
  test.use({ locale: "en-GB" });

  test("an English page offers nothing", async ({ page }) => {
    await open(page, "./");
    await page.waitForTimeout(500);

    await expect(page.locator("aside[lang]")).toHaveCount(0);
  });

  test("a Spanish page offers English, and the header switch counts as a choice", async ({
    page,
  }) => {
    await open(page, "es/f-35/");

    const notice = page.getByRole("complementary", { name: "Language" });

    await expect(notice.getByRole("link", { name: "Read in English" })).toHaveAttribute(
      "href",
      `${basePath}f-35/`,
    );

    // Choosing Spanish in the header means the visitor wants Spanish.
    await page.getByRole("link", { name: "View in English" }).click();
    await page.getByRole("link", { name: "Ver en español" }).click();
    await expect(page).toHaveURL(new RegExp(`${basePath}es/f-35/$`));
    await expect(notice).toHaveCount(0);
  });
});

test.describe("compare", () => {
  const picker = (page) =>
    page.getByRole("group", { name: "Choose aircraft to compare" });

  test("a shared link preselects its aircraft", async ({ page }) => {
    await open(page, "compare/?aircraft=f-22,j-20,typhoon");

    await expect(picker(page).getByRole("button", { name: "Typhoon" })).toHaveAttribute(
      "aria-pressed",
      "true",
    );
    await expect(picker(page).getByRole("button", { name: "Su-57" })).toHaveAttribute(
      "aria-pressed",
      "false",
    );
  });

  test("a fourth pick replaces the oldest and updates the link", async ({
    page,
  }) => {
    await open(page, "compare/?aircraft=f-22,j-20,typhoon");

    await picker(page).getByRole("button", { name: "Gripen" }).click();

    await expect(page).toHaveURL(/\/compare\/\?aircraft=j-20,typhoon,gripen$/);
    await expect(picker(page).getByRole("button", { name: "F-22" })).toHaveAttribute(
      "aria-pressed",
      "false",
    );
  });

  test("invalid slugs in a link are ignored", async ({ page }) => {
    await open(page, "compare/?aircraft=nope,rafale");

    await expect(page).toHaveURL(/\/compare\/\?aircraft=rafale$/);
  });

  test("chart figures come from the aircraft's specifications", async ({
    page,
  }) => {
    await open(page, "compare/?aircraft=f-15ex");

    const chart = page.locator("#chart");

    await expect(chart.getByText("MACH 2.5")).toBeVisible();
    await expect(chart.getByText("≈ 36,700")).toBeVisible();
    // Ranges keep their published wording in the chart.
    await page.goto("compare/?aircraft=j-20");
    await expect(chart.getByText("20.4–21.2")).toBeVisible();
  });

  test("table headers sort the rows", async ({ page }) => {
    await open(page, "compare/");

    const header = page.getByRole("columnheader", { name: /Maximum speed/ });
    const firstRow = page.locator("#table tbody tr").first();

    await header.getByRole("button").click();
    await expect(header).toHaveAttribute("aria-sort", "descending");
    const highest = await firstRow.getByRole("rowheader").innerText();

    await header.getByRole("button").click();
    await expect(header).toHaveAttribute("aria-sort", "ascending");
    await expect(firstRow.getByRole("rowheader")).not.toHaveText(highest);
  });
});

test.describe("timeline", () => {
  test("filters narrow the milestones shown", async ({ page }) => {
    await open(page, "timeline/");

    const counter = page.getByText(/milestones shown/i);
    const count = async () =>
      (await counter.textContent()).match(/(\d+)\s*of (\d+)/).slice(1).map(Number);
    const [before, total] = await count();

    expect(before).toBe(total);

    await page
      .getByRole("group", { name: "Origin" })
      .getByRole("button")
      .nth(1)
      .click();

    const [shown] = await count();

    expect(shown).toBeGreaterThan(0);
    expect(shown).toBeLessThan(total);
  });
});

test("src/figures.js matches the aircraft specifications", () => {
  expect(
    readFileSync(outputPath, "utf8"),
    "A specification changed: run `npm run figures` and commit src/figures.js.",
  ).toBe(renderFigures());
});

test("every English text has a Spanish translation", async () => {
  const problems = (await checkTranslations()).flatMap((entry) =>
    entry.notSetUp
      ? [`${entry.name}: English module not found`]
      : [
          ...entry.missing.map((path) => `${entry.name}: missing ${path}`),
          ...entry.extra.map((path) => `${entry.name}: not in English ${path}`),
          ...entry.fixedTranslated.map(
            (path) => `${entry.name}: fixed field translated ${path}`,
          ),
        ],
  );

  expect(problems, "Run `npm run translations` for details.").toEqual([]);
});

// Counts of aircraft come from src/counts.js. These cover the two kinds of
// count that can't: the comparison rows, and each page's "in N dates".
test("the comparison table lists every aircraft in the hangar", () => {
  expect(peers.map((row) => row.slug).sort()).toEqual(
    aircraft
      .filter((entry) => entry.available)
      .map((entry) => entry.slug)
      .sort(),
  );
});

test("\"the programme in N dates\" matches each page's milestones", async () => {
  const strings = (value) =>
    typeof value === "string"
      ? [value]
      : value && typeof value === "object"
        ? Object.values(value).flatMap(strings)
        : [];
  const findMilestones = (value) =>
    Array.isArray(value?.milestones)
      ? value.milestones
      : value && typeof value === "object"
        ? Object.values(value).map(findMilestones).find(Boolean)
        : undefined;
  const problems = [];

  for (const pair of pairs) {
    const english = await pair.english();
    const milestones = findMilestones(english);

    if (!milestones) {
      continue;
    }

    for (const [language, module] of [
      ["en", english],
      ["es", await pair.spanish()],
    ]) {
      for (const text of strings(module)) {
        const match = text.match(/\b(?:in|en) (\S+) (?:dates|fechas)\b/);

        if (match && match[1] !== countWord(milestones.length, language)) {
          problems.push(
            `${pair.name} (${language}): "${match[0]}", but it has ${milestones.length} milestones`,
          );
        }
      }
    }
  }

  expect(problems).toEqual([]);
});

// The weekly link check (scripts/check-links.js) reads photos from photos.js
// and Gallery.jsx and references from src/pages/ and src/data/, so a link
// anywhere else would never be checked.
test("every photo and reference link is where the weekly check looks", () => {
  const checked = new Set(
    [...readAddresses(), ...readReferences()].map(({ address }) => address),
  );
  const elsewhere = readdirSync("src", { recursive: true })
    .filter((file) => /\.jsx?$/.test(file))
    .flatMap((file) =>
      [
        ...readFileSync(`src/${file}`, "utf8").matchAll(
          /\b(?:src|full):\s*"([^"]+)"|\bhref:\s*"(https?:[^"]+)"/g,
        ),
      ]
        .map((match) => match[1] ?? match[2])
        .filter((address) => !checked.has(address))
        .map((address) => `src/${file}: ${address}`),
    );

  expect(readAddresses().length).toBeGreaterThan(100);
  expect(readReferences().length).toBeGreaterThan(20);
  expect(elsewhere).toEqual([]);
});

// README.md is plain Markdown, so it can't use src/counts.js. This keeps its
// aircraft counts and list in step with the hangar.
test("README.md counts and lists every aircraft", () => {
  const readme = readFileSync("README.md", "utf8");
  const available = aircraft.filter((entry) => entry.available);
  const all = countWord(available.length);
  const numberWord = new RegExp(
    `\\b(${Array.from({ length: 21 }, (_, n) => countWord(n)).join("|")})\\b`,
    "i",
  );
  const problems = [];

  for (const match of readme.matchAll(
    /\b(\w+) (?:modern combat aircraft|aircraft files|programmes)\b|\ball (\w+)\b/gi,
  )) {
    const word = match[1] ?? match[2];

    if (numberWord.test(word) && word.toLowerCase() !== all) {
      problems.push(`"${match[0]}" should say ${all}`);
    }
  }

  // The J-20 and F-22 pages are hand-built; the rest share one template.
  const others = readme.match(/The other (\w+) are rendered/)?.[1];

  if (others !== countWord(available.length - 2)) {
    problems.push(`"The other ${others} are rendered" should say ${countWord(available.length - 2)}`);
  }

  const list = readme.match(/\*\*\w+ aircraft files\*\*: ([^.]+)\./)?.[1] ?? "";

  for (const entry of available) {
    if (![entry.designation, pageName(entry.slug, "en")].some((name) => list.includes(name))) {
      problems.push(`the aircraft files list is missing ${entry.designation}`);
    }
  }

  expect(problems).toEqual([]);
});
