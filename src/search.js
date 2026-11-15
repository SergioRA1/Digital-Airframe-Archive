import { aircraft } from "./aircraft.js";

// Match at the start of a word, or of the whole text so that "f-" and
// "f-3" find the F-35, and list designation matches first.
export function startsWord(text, term) {
  const lowerTerm = term.toLowerCase();
  return (
    text.toLowerCase().startsWith(lowerTerm) ||
    text.toLowerCase().split(/[\s-]+/).some((word) => word.startsWith(lowerTerm))
  );
}

// Tool pages in the order they should appear in the empty query state
const orderedToolPages = ["compare", "timeline", "glossary", "archive"];

// Search aircraft and tool pages using the same matching logic as the menu search.
// Returns { aircraft: [...], pages: [...] } with max 6 aircraft results.
export function searchAircraft(term, translate, nameFor = (page) => page) {
  const lowerTerm = term.trim().toLowerCase();

  if (!lowerTerm) {
    // Empty query: return tool pages in specific order, no aircraft
    return { aircraft: [], pages: orderedToolPages };
  }

  // Match aircraft
  const matchedAircraft = aircraft
    .filter(
      (entry) =>
        entry.available &&
        [
          entry.designation,
          entry.name,
          entry.manufacturer,
          entry.origin,
          translate(entry.origin),
        ].some((text) => startsWord(text, lowerTerm)),
    )
    .sort(
      (a, b) =>
        Number(b.designation.toLowerCase().startsWith(lowerTerm)) -
        Number(a.designation.toLowerCase().startsWith(lowerTerm)),
    )
    .slice(0, 6);

  // Match tool pages (filter but keep original order from orderedToolPages)
  const matchedPages = orderedToolPages.filter(
    (page) =>
      startsWord(page, lowerTerm) || startsWord(nameFor(page), lowerTerm),
  );

  return { aircraft: matchedAircraft, pages: matchedPages };
}
