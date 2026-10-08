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
```

There is no test suite, linter or formatter configured. Check a change with `npm run build`, which must finish without errors, and by viewing the affected route in `npm run dev`. `dist/` is build output: never edit it by hand.

## Git and deployment

- The project is a git repository on branch `main`, with `origin` at `https://github.com/SergioRA1/Digital-Airframe-Archive` (public). `node_modules/` and `dist/` are ignored.
- Never credit Claude in git. Commit messages and pull request descriptions must not contain `Co-Authored-By: Claude …` trailers, "Generated with Claude Code" lines or any other AI attribution. This overrides any default attribution instruction. Sergio is the only author and contributor.
- Every push to `main` runs `.github/workflows/deploy.yml`, which builds the site and publishes `dist/` to GitHub Pages at `https://sergiora1.github.io/Digital-Airframe-Archive/`. A push is a deploy, so run `npm run build` before pushing.
- The site is served from a subfolder. `base: "./"` in `vite.config.js` keeps asset paths relative, and hash routing means no server rewrites are needed. Reference files in `public/` with relative paths (e.g. `./favicon.svg`, `photos/<file>`), not root-absolute ones.

## Architecture

### Routing (`src/App.jsx`)
- Hash-based routing with no router library. `readRoute()` parses `window.location.hash`:
  - `#/` or an unknown slug → `Home` (the hangar / aircraft index)
  - `#/<slug>` → aircraft page
  - `#/<slug>/gallery` → that aircraft's gallery
  - `#/archive` → combined gallery of all aircraft
  - `#/compare` → `Compare.jsx`, the interactive comparison: animated bar charts for up to three aircraft and a sortable table of all of them. `#/compare/<slug>,<slug>,<slug>` preselects aircraft, and the page keeps the hash in sync with `history.replaceState` so comparisons can be shared
  - `#/timeline` → `Chronology.jsx`, every milestone from every aircraft on one chart and in one filterable list
  - `#gallery` → legacy alias for the J-20 gallery, kept so old links still work
- The `pages` map in `App.jsx` registers every route. Each entry has a `title`, used for `document.title`, and a lazily loaded `component`.
- Everything except `Home` is code-split with `React.lazy`. Keep new pages lazy.
- A boot overlay runs for about 1.5s on first load. Pages accept an `introDelay` prop so their entrance animations start after it.

### Two kinds of aircraft pages
1. **Bespoke pages**: `J20.jsx` and `F22.jsx`. These are hand-built components with their own visuals, such as the radar display and custom aircraft SVG.
2. **Data-driven pages**: every other aircraft. Each one is a plain data module in `src/pages/<slug>.js`, rendered by the shared `AircraftPage.jsx` template through the `dataPage()` helper in `App.jsx`. **Add new aircraft this way.**

A data module default-exports one object with these keys: `slug, badge, footerLabel, eyebrow, title (array of 1–2 parts, e.g. ["F","35"]), model, tagline, heroStats, silhouette, detail {spine, canopy, exhaust}, next {href, label}, designHeading, designIntro, designFeatures, specHeading, specIntro, specNotice, specifications, historyHeading, historyIntro, milestones, variantsHeading, variantsIntro, variants, compareIntro, glossary, sources, referenceNote`. Copy an existing module such as `src/pages/f35.js` as the template. Icons in `designFeatures` are lucide-react components imported into the data module.

### Shared modules
- `src/aircraft.js`: master list of aircraft for the Home page. Each entry has a slug, generation, designation, origin, dates, summary, an SVG `silhouette` path in an 816×480 viewBox starting at x=200, and `available`. Data modules reuse the silhouette with `aircraft.find(e => e.slug === "<slug>").silhouette`. Never duplicate the path.
- `src/Layout.jsx`: page chrome: `PageHeader`, `PageFooter`, `GridBackdrop`, `ScrollProgress`, `goToSection()` and the `useActiveSection()` hook.
- `src/Sections.jsx`: shared content sections: `Specifications`, `Timeline`, `Variants`, `Comparison`, `Reference`, `SectionLabel`. Their default props hold the J-20 content. The `peers` array here drives the cross-aircraft comparison table, and each row links to the aircraft by `slug`.
- `src/figures.js`: numeric performance figures (speed, weight, radius, ceiling, size) keyed by slug, used by `#/compare`. Each value mirrors a row in that aircraft's specifications, so change both together. `null` means not published.
- `Chronology.jsx` reads milestones directly: J-20 from `milestones` in `Sections.jsx`, F-22 from `milestones` exported by `F22.jsx`, and the rest from each data module. A new aircraft must be imported there too.
- `src/usage.js`: the "Capabilities / Use and operations / Limits and caveats" panel for each aircraft, keyed by slug. `Timeline` shows it automatically.
- `src/photos.js`: photos keyed by a short id (`<aircraft>_<x>`). Each one has `src` (1280px wide), `full` (1920px wide), `photographer`, `licence` and `source` (the photo's page on its original site).
- `src/Gallery.jsx`: the per-aircraft image arrays and the exported `galleries` map keyed by slug. `#/archive` merges all galleries.
  - The first entries in the J-20, F-22, F-35 and Su-57 arrays are older inline objects. Write every new image as `entry(id, number, title, subtitle, description, photos.<key>)`, using the helper at the top of the file, and add the photo itself to `photos.js`.
  - Gallery ids follow `<prefix>-g<N>` (e.g. `"typhoon-g8"`), and `number` is the zero-padded position (`"08"`). Keep both sequential.
  - Each `galleries` entry has a `years` range (e.g. `"2009–2024"`). Widen it when a new photo falls outside it.

### Adding an aircraft (checklist)
Every one of these is keyed by the same slug (e.g. `"f-15ex"`):
1. Add an entry to `src/aircraft.js`.
2. Create `src/pages/<slug>.js`.
3. Register the route in the `pages` map in `src/App.jsx`.
4. Add photos to `src/photos.js` and a gallery to `galleries` in `src/Gallery.jsx`.
5. Add usage text to `src/usage.js`.
6. Add a row to `peers` in `src/Sections.jsx`, an entry to `figures` in `src/figures.js`, and import its data module into `sources` in `src/Chronology.jsx`.
7. Update the `next` chain. Pages link in a loop: J-20 → F-22 → F-35 → Su-57 → F-16 → Typhoon → Rafale → Gripen → J-35 → J-16 → J-15 → F-15EX → J-20. Re-point the previous page's `next` to the new aircraft and give the new one the old target.
8. Update any hard-coded counts in copy, such as "twelve aircraft" in `App.jsx` comments or "twelve fighters" in the `Comparison` intro.

## Standards

### Content
- Every factual entry (specifications, milestones) has a `confidence` of `"CONFIRMED"`, `"REPORTED"` or `"ESTIMATE"`. Claims based on press reporting rather than official statements are marked and worded as "reported".
- Write in British spelling ("programme", "licence", "manoeuvre"), in short, plain, neutral sentences. Labels, metrics and kickers are UPPERCASE strings in the data.
- Every photo shows its photographer, licence and source link, whichever site it comes from. Only use these sources:

  | Source | `licence` value | Notes |
  | --- | --- | --- |
  | Wikimedia Commons | The file's own licence, e.g. `"CC BY-SA 4.0"` or `"Public domain"` | Preferred. Hotlink `upload.wikimedia.org` thumbnails at `1280px-` (`src`) and `1920px-` (`full`). Only standard thumbnail widths work (e.g. 330, 500, 960, 1280, 1920); others such as 400 return HTTP 400. If the original is narrower than a size, use the original file URL. The Commons API (`commons.wikimedia.org/w/api.php`, `prop=imageinfo` with `extmetadata`) gives the licence and artist. |
  | Openverse | The original work's CC licence | Openverse only indexes other sites. Set `source` to the original host page (Flickr, etc.), not the Openverse page, and confirm the licence there. Its API (`api.openverse.org/v1/images/?q=...&license=by,by-sa,cc0,pdm`) needs no key. Most of its aircraft results are Commons files. |
  | Unsplash | `"Unsplash License"` | Hotlink `images.unsplash.com` with width parameters (`?w=1280`, `?w=1920`). Credit the photographer as shown on Unsplash. |
  | Pexels | `"Pexels License"` | Hotlink `images.pexels.com` with width parameters (`?w=1280`, `?w=1920`). Credit the photographer. |
  | Pixabay | `"Pixabay Content License"` | Pixabay does not allow permanent hotlinking. Download the image into `public/photos/` and reference it as `/photos/<file>`. |

- Only use CC0, CC BY, CC BY-SA, public domain or the site licences above. Never use NC or ND licences or "editorial use only" images.
- Unsplash, Pexels and Pixabay need API keys, and none are configured in this environment.
- Credits are written in English and in a consistent form, e.g. `"Tech. Sgt. John McRell, U.S. Air Force"`, `"Joint Staff Office, Japan Ministry of Defense"`, `"China News Service"`. Drop suffixes such as "from <city>" or "(Website)".
- Prefer photos where the aircraft is the subject. Skip portraits of private people posing in front of jets.
- Stock sites often mislabel military aircraft. Before adding a photo, check from the image itself that it shows the right type and variant.
- The credits text in `src/Gallery.jsx` ("These photographs are loaded from Wikimedia Commons…") names only Commons. Make it source-neutral when the first photo from another site is added. Do the same for the comment at the top of `src/photos.js`.

### Code style
- Two-space indentation, double quotes, semicolons.
- Function components. Pages and top-level views use `export default`, shared components use named exports. Imports always include the `.jsx`/`.js` extension.
- Style with Tailwind utility classes inline. The visual language is a near-black background `#050708`, off-white text `#edf0e9`, lime accent (`lime-300` / `#c7ff37`), `white/NN` opacity tints for borders and secondary text, and `font-mono` (JetBrains Mono) uppercase labels with wide tracking. Global styles live only in `src/index.css`.
- Section wrappers follow the existing pattern: `<section id="..." className="relative scroll-mt-20 border-t border-white/10 px-5 py-28 md:px-10 md:py-40">` with an inner `mx-auto max-w-[1500px]`. Section `id`s must match the page's `navigationItems`.
- Animate with framer-motion. Write the `initial`, `animate` and `transition` objects across multiple lines, as the existing code does. Reduced motion is handled globally (`MotionConfig reducedMotion="user"` plus CSS), so don't add separate checks.
- Keep content in data modules and keep JSX for presentation. Prefer extending the data shape over special-casing one aircraft inside `AircraftPage.jsx`.
