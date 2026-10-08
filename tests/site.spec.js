import { expect, test } from "@playwright/test";

import { aircraft } from "../src/aircraft.js";

const slugs = aircraft
  .filter((entry) => entry.available)
  .map((entry) => entry.slug);

// Opens a route and waits for the boot overlay to finish. Any uncaught
// error, console error or failed request for the site's own files fails the
// test. Photos and fonts from other sites are left out: a slow or refused
// Wikimedia image is not a bug in this code and should not block a deploy.
async function open(page, hash) {
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

  await page.goto(hash);
  await expect(page.getByText("Initializing visual systems")).toBeHidden();

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
  const routes = [
    "#/",
    "#/archive",
    "#/compare",
    "#/timeline",
    ...slugs.map((slug) => `#/${slug}`),
    ...slugs.map((slug) => `#/${slug}/gallery`),
  ];

  for (const route of routes) {
    test(route, async ({ page }) => {
      const errors = await open(page, route);

      await expect(page.locator("h1").first()).toBeVisible();
      expect(errors).toEqual([]);
    });
  }

  test("legacy #gallery opens the J-20 gallery", async ({ page }) => {
    await open(page, "#gallery");

    await expect(page.locator("h1").first()).toContainText("IN FRAME");
  });

  test("an unknown slug falls back to the hangar", async ({ page }) => {
    await open(page, "#/not-an-aircraft");

    await expect(page.locator("#aircraft")).toBeAttached();
  });
});

test.describe("menu", () => {
  const cases = [
    {
      name: "aircraft page, desktop",
      route: "#/j-20",
      label: "Reference",
      section: "reference",
      viewport: {
        width: 1060,
        height: 900,
      },
    },
    {
      name: "hangar, phone",
      route: "#/",
      label: "Analysis",
      section: "analysis",
      viewport: {
        width: 390,
        height: 844,
      },
    },
    {
      name: "compare, phone",
      route: "#/compare",
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
    await open(page, "#/");

    await page.getByRole("button", { name: "Open menu" }).click();
    await page.getByRole("searchbox", { name: "Search aircraft by name" }).fill("raf");
    await page.locator("header").getByRole("link", { name: /Rafale/ }).click();

    await expect(page).toHaveURL(/#\/rafale$/);
  });

  test("search says when nothing matches", async ({ page }) => {
    await open(page, "#/");

    await page.getByRole("button", { name: "Open menu" }).click();
    await page.getByRole("searchbox", { name: "Search aircraft by name" }).fill("zzz");

    await expect(page.getByText("No aircraft match")).toBeVisible();
  });
});

test.describe("compare", () => {
  const picker = (page) =>
    page.getByRole("group", { name: "Choose aircraft to compare" });

  test("a shared link preselects its aircraft", async ({ page }) => {
    await open(page, "#/compare/f-22,j-20,typhoon");

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
    await open(page, "#/compare/f-22,j-20,typhoon");

    await picker(page).getByRole("button", { name: "Gripen" }).click();

    await expect(page).toHaveURL(/#\/compare\/j-20,typhoon,gripen$/);
    await expect(picker(page).getByRole("button", { name: "F-22" })).toHaveAttribute(
      "aria-pressed",
      "false",
    );
  });

  test("invalid slugs in a link are ignored", async ({ page }) => {
    await open(page, "#/compare/nope,rafale");

    await expect(page).toHaveURL(/#\/compare\/rafale$/);
  });

  test("table headers sort the rows", async ({ page }) => {
    await open(page, "#/compare");

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
    await open(page, "#/timeline");

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
