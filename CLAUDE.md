# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

"Airframe": a static, single-page React site (an interactive digital exhibition of modern combat aircraft). Built with Vite 6, React 18, Tailwind CSS 3, framer-motion and lucide-react icons. Plain JavaScript/JSX, no TypeScript, no backend.

## Commands

```bash
npm install       # install dependencies
npm run dev       # Vite dev server
npm run build     # production build into dist/
npm run preview   # serve the built dist/
npm run lint      # ESLint (eslint.config.js): recommended, React and hooks rules
npm test          # Playwright browser tests in tests/, against a fresh production build
npm run figures   # regenerate src/figures.js after changing a specification
npm run translations   # list English text that has no Spanish translation
npm run links     # check that every hotlinked photo and reference link still works (takes a few minutes)
npx playwright test -g "menu"   # run only the tests whose name matches
```

Check a change with `npm run lint` and `npm test`, which must both pass, and by viewing the affected route in `npm run dev`. There is no formatter. `dist/` is build output: never edit it by hand.

- Tests run in the installed Google Chrome (`channel: "chrome"` in `playwright.config.js`), which GitHub's Ubuntu runners also have, so no browser download is needed. The config builds the site and serves it on port 4173.
- `tests/site.spec.js` checks that every route renders without console errors and that no visible text or header control runs off screen at 360px wide in either language, and covers the menu buttons and search, shareable comparison links, table sorting, the timeline filters, accessibility (axe-core's WCAG 2.1 A/AA rules on every page in both languages, the open menu and the gallery viewer), old `#/` links redirecting, moving between pages without a reload, and the prerendered HTML and sitemap. The route list is built from `src/aircraft.js`, so a new aircraft is covered automatically.
- Add a test when fixing a bug, and confirm it fails without the fix. Animated UI (the menu opens with framer-motion) must be fully open before a test clicks it, or the test can pass even when the bug is present.
- JSX uses the automatic runtime: don't `import React` just for JSX. Only `src/main.jsx` uses it, for `React.StrictMode`.

## Git and deployment

- The project is a git repository on branch `main`, with `origin` at `https://github.com/SergioRA1/Digital-Airframe-Archive` (public). `node_modules/` and `dist/` are ignored.
- Never credit Claude in git. Commit messages and pull request descriptions must not contain `Co-Authored-By: Claude …` trailers, "Generated with Claude Code" lines or any other AI attribution. This overrides any default attribution instruction. Sergio is the only author and contributor.
- Lint and tests live in `.github/workflows/test.yml`, a reusable workflow: one lint job and the Playwright tests split across six machines that run at the same time (`npx playwright test --shard=N/6`). Tests that must run in order (the accessibility groups) stay on one machine, so keep such groups small.
- Every push to `main` runs `.github/workflows/deploy.yml`, which runs `test.yml`, then builds the site and publishes `dist/` to GitHub Pages at `https://sergiora1.github.io/Digital-Airframe-Archive/`. If lint or a test fails, nothing is deployed. A push is a deploy, so run `npm run lint` and `npm test` before pushing.
- `.github/workflows/checks.yml` runs `test.yml` on pull requests to `main`, including Dependabot's. `.github/dependabot.yml` opens weekly update pull requests for npm packages (minor and patch grouped into one) and for GitHub Actions. Merge one only when its checks pass.
- `.github/workflows/links.yml` runs `npm run links` (`scripts/check-links.js`) every Monday. It checks every photo address (including the smaller srcset sizes) in `src/photos.js` and `src/Gallery.jsx`, and every external `href` in `src/pages/` and `src/data/`. If any is broken, it opens an issue titled "Broken links" listing each one with its file and line, updates it while they stay broken, and closes it once they work. Only a definite failure counts (any HTTP error for a photo; 404, 410 or a missing domain for a reference): sites that refuse automated requests (403) or time out are logged as "could not check". A photo stored outside those two files must be added to `photoFiles` in the script.
- CI uses Node 24 (`node-version` in every workflow) on the `ubuntu-24.04` runner image, pinned rather than `ubuntu-latest` so GitHub's image changes can't break a deploy unannounced. Keep the workflows on the same image, Node and action versions. If the image ever lacks Google Chrome, a step installs it with Playwright.
- The site is served from a subfolder, `/Digital-Airframe-Archive/`. `basePath` and `siteUrl` in `src/site.js` hold it; `vite.config.js` builds for it, so asset paths are absolute, and the tests serve the build under it too (`npm run dev` opens at `http://localhost:5173/Digital-Airframe-Archive/`). In `index.html` reference `public/` files root-absolute (`/favicon.svg`), which Vite prefixes with the base; in code and data write the full path, `"/Digital-Airframe-Archive/photos/<file>"`, since relative paths break on nested pages. If the site moves to its own domain, change both values in `src/site.js`.

## Architecture

### Routing (`src/App.jsx`)
- Every page has its own address under the base path, with no router library. `src/routes.js` holds the routes, and `readRoute()` in `App.jsx` reads `window.location` through `readLocation()`:
  - `/` or an unknown page → `Home` (the hangar / aircraft index)
  - `/<slug>/` → aircraft page
  - `/<slug>/gallery/` → that aircraft's gallery
  - `/archive/` → combined gallery of all aircraft
  - `/compare/` → `Compare.jsx`, the interactive comparison: animated bar charts for up to three aircraft and a sortable table of all of them. `/compare/?aircraft=<slug>,<slug>,<slug>` preselects aircraft, and the page keeps the query in sync with `history.replaceState` so comparisons can be shared
  - `/timeline/` → `Chronology.jsx`, every milestone from every aircraft on one chart and in one filterable list
  - `/glossary/` → `Glossary.jsx`, every aircraft's glossary merged into one searchable A–Z list (`mergeGlossaries()` in `src/glossary.js`, also used by the prerendered page). Each term has an anchor, `glossary/#<termId>`, and each aircraft's reference section links its terms there. Terms with the same English wording on several pages are merged; add other spellings of one term to `sameTerm` in `src/glossary.js`.
  - Spanish pages add `es/` after the base path (`/es/f-35/gallery/`).
- Code and data write internal links in a short route form, `"#/f-35"` or `"#/es/f-35/gallery"` (the site's address format before pages had their own). `hrefFor()` / `useHref()` turn a route into an address. Old `#/...` links, including `#/compare/<slugs>` and the even older `#gallery`, are redirected to their address when the site loads, so links shared before the change still work.
- The app never reloads between pages. A click on any `<a>` pointing inside the site is handled in `App.jsx` with `history.pushState`; in code, move between pages with `navigate(address)` from `src/routes.js`, never by setting `window.location`. Back and Forward work through `popstate`.
- `npm run build` runs `scripts/prerender.js` after Vite. It writes `dist/<path>/index.html` for every page in both languages (`allRoutes` in `src/routes.js`), each with its own title, description, canonical address, hreflang alternates and Open Graph tags, and the page's main text and links inside `#root`, which React replaces when it starts. It also draws a 1200×630 link-preview image for each aircraft and each hangar-wide page in both languages (`dist/og/<language>/<name>.png`; a gallery shares its aircraft's image) with `scripts/previews/render.js`, from the aircraft's name, outline and dates in `src/aircraft.js`. It renders SVG with `@resvg/resvg-js` and the fonts in `scripts/previews/fonts/` (Inter, JetBrains Mono, OFL), measuring each title line so it fits; check new or renamed aircraft by looking at the images. It also writes `dist/404.html` (served by GitHub Pages for any other address; the app then shows the hangar) and `dist/sitemap.xml`. The block between `<!-- page-meta -->` comments in `index.html` is what it replaces, so keep it there.
- The `pages` map in `App.jsx` holds each page's lazily loaded `component`. Titles, used for `document.title` and the prerendered files, are in `pageTitles` in `src/routes.js`.
- Everything except `Home` is code-split with `React.lazy`. Keep new pages lazy.
- A boot overlay runs for about 1.5s on first load. Pages accept an `introDelay` prop so their entrance animations start after it.

### Two kinds of aircraft pages
1. **Bespoke pages**: `J20.jsx` and `F22.jsx`. These are hand-built components with their own visuals, such as the radar display and custom aircraft SVG. All their English text lives in `src/data/j20.js` and `src/data/f22.js` (so the comparison and timeline can read specifications and milestones without loading the page components, and the translation checker can see every string). The components keep only icons, layout values and section ids, matched to the data by position.
2. **Data-driven pages**: every other aircraft. Each one is a plain data module in `src/pages/<slug>.js`, rendered by the shared `AircraftPage.jsx` template through the `dataPage()` helper in `App.jsx`. **Add new aircraft this way.**

A data module default-exports one object with these keys: `slug, badge, footerLabel, eyebrow, title (array of 1–2 parts, e.g. ["F","35"]), model, tagline, heroStats, silhouette, detail {spine, canopy, exhaust}, next {href, label}, designHeading, designIntro, designFeatures, specHeading, specIntro, specNotice, specifications, historyHeading, historyIntro, milestones, variantsHeading, variantsIntro, variants, compareIntro, glossary, sources, referenceNote`. Copy an existing module such as `src/pages/f35.js` as the template. Icons in `designFeatures` are lucide-react components imported into the data module.

### Shared modules
- `src/aircraft.js`: master list of aircraft for the Home page. Each entry has a slug, generation, designation, origin, dates, summary, an SVG `silhouette` path in an 816×480 viewBox starting at x=200, and `available`. Data modules reuse the silhouette with `aircraft.find(e => e.slug === "<slug>").silhouette`. Never duplicate the path.
- `src/Layout.jsx`: page chrome: `PageHeader`, `PageFooter`, `GridBackdrop`, `ScrollProgress`, `goToSection()` and the `useActiveSection()` hook.
- `src/Sections.jsx`: shared content sections for aircraft pages: `Specifications`, `Timeline`, `Variants`, `Reference`. They take all their text as props; the J-20 page passes its content from `src/data/j20.js`.
- `src/Comparison.jsx`: the cross-aircraft `Comparison` table and the `peers` array that drives it (each row links to the aircraft by `slug`). It is separate from `Sections.jsx` so the hangar page can show the table without loading the aircraft-page sections, `usage.js` and the J-20 defaults. `SectionLabel` lives in `Layout.jsx` for the same reason.
- `src/figures.js`: numeric performance figures (speed, weight, radius, ceiling, size) keyed by slug, used by the compare page. **Generated, never edit by hand.** `scripts/generate-figures.js` reads each aircraft's `specifications` rows by label (`MAXIMUM SPEED`, `MAX TAKEOFF WEIGHT`, `COMBAT RADIUS`, `SERVICE CEILING`, `LENGTH`, `WINGSPAN`) and parses the chart value from the row's `value` text (ranges plot at their midpoint, `MACH 2 CLASS` as 2). A missing row means not published. After changing a specification, run `npm run figures` and commit the result; a test fails if `figures.js` is out of date. It is generated rather than computed in the browser so `#/compare` doesn't download every aircraft's text.
- `src/dataPages.js` lists every data-driven page module. The timeline (`Chronology.jsx`), the glossary and `scripts/generate-figures.js` read milestones, terms and specifications from it; J-20 and F-22 come from `src/data/`. A new aircraft is added to that list.
- `src/counts.js`: the number of aircraft in words for each language (`counts.en.all`, `counts.en.others`, `countWord()`), so copy that mentions "sixteen aircraft" updates itself when one is added. Never write the count by hand.
- `src/usage.js`: the "Capabilities / Use and operations / Limits and caveats" panel for each aircraft, keyed by slug. `Timeline` shows it automatically.
- `src/photos.js`: photos keyed by a short id (`<aircraft>_<x>`). Each one has `src` (1280px wide), `full` (1920px wide), `photographer`, `licence` and `source` (the photo's page on its original site).
- `src/imageSizes.js`: `srcSet(url)` turns a Commons thumbnail address into a `srcset` of its smaller standard widths (500, 960…), so phones load smaller files. A photo stored in `public/photos/` (for example a copy of a Commons PNG saved as JPG to cut its size) is saved as `<name>-640.jpg`, `-1280.jpg` and `-1920.jpg`; `src` and `full` name the 1280 and 1920 files with the base path, and `srcSet` picks up the 640 one. Every `<img>` showing a photo passes `srcSet={srcSet(...)}` and a `sizes` that matches its layout. Other addresses get no srcset.
- `src/Gallery.jsx`: the per-aircraft image arrays and the exported `galleries` map keyed by slug (`{ years, images }`). It holds no text: captions live in `src/data/gallery.js` (`captions` keyed by image id, `galleryText` keyed by slug with `name`, `fullName`, `label`, `intro`) and the fixed UI text is in the `text` table in `Gallery.jsx`. `#/archive` merges all galleries.
  - To add a photo: add it to `src/photos.js`; append `entry("<prefix>-g<N>", "<NN>", photos.<key>)` to that aircraft's array in `Gallery.jsx`; add `{ title, subtitle, description }` under the same id in `captions` in `src/data/gallery.js`; and add the Spanish caption under the same id in `src/locales/es/gallery.js`. The translation test fails if the Spanish caption is missing.
  - Gallery ids follow `<prefix>-g<N>` (e.g. `"typhoon-g8"`), and `number` is the zero-padded position (`"08"`). Keep both sequential.
  - Each `galleries` entry has a `years` range (e.g. `"2009–2024"`). Widen it when a new photo falls outside it.

### Languages (English and Spanish)
- The site is written in English. Spanish pages live under `es/` (e.g. `/es/f-35/gallery/`). `readRoute()` in `App.jsx` reads the language from the address, sets `<html lang>` and the page title, and provides it through `LanguageContext`. The header has an EN/ES switch that opens the same page in the other language. `src/LanguageSuggestion.jsx` shows a small notice offering the other language when the browser's preferred language is the other one ("Leer en español" on an English page for a Spanish browser, and the reverse). It never switches by itself, and once the visitor follows it, closes it or uses the header switch, the choice is kept in `localStorage` and it stops appearing.
- `src/i18n.js` holds the helpers: `useLanguage()`, `useText(table)` for a component's `{ en: {...}, es: {...} }` UI strings, `useHref()` / `localHref()` for internal links, `useTerm()` for values stored in English because code relies on them (confidence levels, specification groups, origins), `useDate()` for milestone dates, and `localise(english, spanish)`.
- Spanish content never copies the English data. Each Spanish module under `src/locales/es/` mirrors one English module's shape (objects by key, arrays by position) and holds only text. `localise()` lays it over the English, so numbers, icons, links, photos, dates and enum values always come from the English. Spanish modules load only on Spanish pages: data pages find `src/locales/es/pages/<name>.js` by file name, and other lazy pages receive theirs as a `translation` prop (see `localised()` in `App.jsx`).
- Every internal link must go through `useHref()` (or `localHref()` with `navigate()`), or a Spanish visitor drops back to English. A test fails if a Spanish page has an English link or a link still in `#/` form.
- Dates, confidence levels, specification groups and origins stay in English in the data: the timeline parses dates and the filters compare the English values. Show them with `useDate()` / `useTerm()`. A new specification group or origin needs a Spanish entry in `terms` in `i18n.js`.
- `npm run translations` (`scripts/check-translations.js`) lists English text with no Spanish string, Spanish entries with no English counterpart, and fixed fields (codes, links, credits, dates) that were translated. A test fails on any of these. A string that stays the same in Spanish (a designation, a company name) is still written in the Spanish module, so a deliberate copy can be told from a missing one.
- When you change or add English text, change the Spanish module in the same commit. After changing a specification, run `npm run figures` too: `figures.js` holds the Spanish display text for the compare page.
- Spanish style: Spain Spanish, neutral and impersonal, short plain sentences, faithful to the English (keep every "reported" hedge: "según informes"). Decimal comma and thousands point (`15,7`, `≈ 31.800`, `MACH 1,6`). Month abbreviations `ENE FEB MAR ABR MAY JUN JUL AGO SEP OCT NOV DIC`. `EE. UU.`, Spanish quotes « ». Follow `src/locales/es/pages/f35.js` for terminology.

### Adding an aircraft (checklist)
Every one of these is keyed by the same slug (e.g. `"f-15ex"`):
1. Add an entry to `src/aircraft.js`.
2. Create `src/pages/<slug>.js`.
3. Register the page component in the `pages` map in `src/App.jsx`, and its title in `pageTitles` in `src/routes.js`. Its addresses, prerendered files and sitemap entries follow from `src/aircraft.js`.
4. Add photos to `src/photos.js`, a gallery to `galleries` in `src/Gallery.jsx`, its captions and `galleryText` entry to `src/data/gallery.js`, and their Spanish to `src/locales/es/gallery.js`.
5. Add usage text to `src/usage.js`.
6. Add a row to `peers` in `src/data/peers.js`, add its data module to `dataPages` in `src/dataPages.js`, then run `npm run figures`. Use the standard specification labels above so the comparison charts pick up its figures.
7. Update the `next` chain. Pages link in a loop: J-20 → F-22 → F-35 → Su-57 → F-16 → Typhoon → Rafale → Gripen → J-35 → J-16 → J-15 → F-15EX → KF-21 → Su-35 → F/A-18E/F → F-2 → J-20. Re-point the previous page's `next` to the new aircraft and give the new one the old target.
8. Add its Spanish module `src/locales/es/pages/<name>.js`, its slug to `slugs` in `src/locales/es/timeline.js`, its name to `pageNames` in `scripts/check-translations.js`, and Spanish rows to `src/locales/es/aircraft.js`, `peers.js` and `usage.js`. `npm run translations` must pass.
9. Check the counts. Copy never types the number of aircraft: it uses `counts` from `src/counts.js` (`${counts.en.all}` → "sixteen", `${counts.en.others}` → "fifteen", and `counts.es` in Spanish modules), worked out from `src/aircraft.js`. A test fails if the comparison table misses an aircraft, or if a page's "the programme in N dates" doesn't match its number of milestones.
10. Update `README.md` by hand: it is plain Markdown and can't use `counts`. It states the number of aircraft in several places ("sixteen modern combat aircraft", "Sixteen aircraft files" and its list of designations, "all sixteen", "The other fourteen are rendered", the timeline screenshot's alt text). A test fails if any of these is out of step with `src/aircraft.js`.

## Standards

### Content
- Every factual entry (specifications, milestones) has a `confidence` of `"CONFIRMED"`, `"REPORTED"` or `"ESTIMATE"`. Claims based on press reporting rather than official statements are marked and worded as "reported". Milestones cite their source as `source: { name, href }` (the publisher's name and the page), shown as a link under the milestone. Every `REPORTED` milestone needs one, and so does every milestone of a new aircraft; a test fails otherwise. Only cite a page you have actually read that supports the claim, prefer the original report or an official statement, and reword the milestone if the source says something different. `source` is never translated, so Spanish modules leave it out.
- Write in British spelling ("programme", "licence", "manoeuvre"), in short, plain, neutral sentences. Labels, metrics and kickers are UPPERCASE strings in the data.
- Every photo shows its photographer, licence and source link, whichever site it comes from. Only use these sources:

  | Source | `licence` value | Notes |
  | --- | --- | --- |
  | Wikimedia Commons | The file's own licence, e.g. `"CC BY-SA 4.0"` or `"Public domain"` | Preferred. Hotlink `upload.wikimedia.org` thumbnails at `1280px-` (`src`) and `1920px-` (`full`). Only standard thumbnail widths work (e.g. 330, 500, 960, 1280, 1920); others such as 400 return HTTP 400. If the original is narrower than a size, use the original file URL. The Commons API (`commons.wikimedia.org/w/api.php`, `prop=imageinfo` with `extmetadata`) gives the licence and artist. |
  | Openverse | The original work's CC licence | Openverse only indexes other sites. Set `source` to the original host page (Flickr, etc.), not the Openverse page, and confirm the licence there. Its API (`api.openverse.org/v1/images/?q=...&license=by,by-sa,cc0,pdm`) needs no key. Most of its aircraft results are Commons files. |
  | Unsplash | `"Unsplash License"` | Hotlink `images.unsplash.com` with width parameters (`?w=1280`, `?w=1920`). Credit the photographer as shown on Unsplash. |
  | Pexels | `"Pexels License"` | Hotlink `images.pexels.com` with width parameters (`?w=1280`, `?w=1920`). Credit the photographer. |
  | Pixabay | `"Pixabay Content License"` | Pixabay does not allow permanent hotlinking. Download the image into `public/photos/` and reference it with the base path, `"/Digital-Airframe-Archive/photos/<file>"`. |

- Only use CC0, CC BY, CC BY-SA, public domain or the site licences above. Never use NC or ND licences or "editorial use only" images.
- Unsplash, Pexels and Pixabay need API keys, and none are configured in this environment.
- Credits are written in English and in a consistent form, e.g. `"Tech. Sgt. John McRell, U.S. Air Force"`, `"Joint Staff Office, Japan Ministry of Defense"`, `"China News Service"`. Drop suffixes such as "from <city>" or "(Website)".
- Prefer photos where the aircraft is the subject. Skip portraits of private people posing in front of jets.
- Stock sites often mislabel military aircraft. Before adding a photo, check from the image itself that it shows the right type and variant.
- The credits text in the `text` table in `src/Gallery.jsx` ("These photographs are loaded from Wikimedia Commons…", in English and Spanish) names only Commons. Make it source-neutral when the first photo from another site is added. Do the same for the comment at the top of `src/photos.js`.

### Code style
- Two-space indentation, double quotes, semicolons.
- Function components. Pages and top-level views use `export default`, shared components use named exports. Imports always include the `.jsx`/`.js` extension.
- Style with Tailwind utility classes inline. The visual language is a near-black background `#050708`, off-white text `#edf0e9`, lime accent (`lime-300` / `#c7ff37`), `white/NN` opacity tints for borders and secondary text, and `font-mono` (JetBrains Mono) uppercase labels with wide tracking. Text must pass WCAG AA contrast, which the accessibility tests check: on the near-black background, small text is no fainter than `text-white/50`, and large headings no fainter than `text-white/40`. Small labels are never below 12px on phones: write `text-xs sm:text-[10px]` or `text-xs sm:text-[11px]`, not a bare `text-[10px]`. SVG text that scales with its chart is the exception. Global styles live only in `src/index.css`. Fonts are self-hosted from the `@fontsource/inter` and `@fontsource/jetbrains-mono` packages, imported by weight in `src/main.jsx` (Inter 400, 600, 700, 900; JetBrains Mono 400); add a weight there if you use a new one. Don't load anything from other sites except the Wikimedia photos: a test fails if a page requests any other host. The one exception is visitor statistics: `src/analytics.js` sends one request per page view to GoatCounter, but only when `goatcounterCode` in `src/site.js` is set, never on localhost, and not when the browser sends Do Not Track or Global Privacy Control. Don't add cookies, other trackers or third-party scripts.
- Section wrappers follow the existing pattern: `<section id="..." className="relative scroll-mt-20 border-t border-white/10 px-5 py-28 md:px-10 md:py-40">` with an inner `mx-auto max-w-[1500px]`. Section `id`s must match the page's `navigationItems`.
- Animate with framer-motion's `m` components (`<m.div>`), never `motion`: `main.jsx` wraps the app in `LazyMotion`, which loads the animation code (`src/motionFeatures.js`) after the page, keeping it out of the main bundle. ESLint rejects importing `motion`. Layout animations (`layout` prop) need `domMax`: wrap the page in `<LazyMotion features={domMax}>`, as `Compare.jsx` and `Chronology.jsx` do. Write the `initial`, `animate` and `transition` objects across multiple lines, as the existing code does. Reduced motion is handled globally (`MotionConfig reducedMotion="user"` plus CSS), so don't add separate checks.
- Keep content in data modules and keep JSX for presentation. Prefer extending the data shape over special-casing one aircraft inside `AircraftPage.jsx`.
