// The combined glossary: every aircraft's glossary merged into one list.
// Used by the glossary page (Glossary.jsx), by the links to it from each
// aircraft's reference section, and by the prerendered glossary page.

// Terms written differently on different pages but meaning the same thing,
// keyed by the English term in lower case.
const sameTerm = {
  "aesa radar": "aesa",
};

// The anchor for a term on the glossary page: "Low observable (LO)" →
// "low-observable-lo", "Célula" → "celula".
export function termId(term) {
  return term
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

// The letter a term is listed under: "Ángulo" → "A", "3D" → "#".
export function letterOf(term) {
  const letter = term.normalize("NFD")[0].toUpperCase();

  return /[A-Z]/.test(letter) ? letter : "#";
}

// Merges glossaries given in hangar order as [{ slug, english, shown }],
// where `shown` is the same entries in the language being displayed. A term
// that appears on several pages keeps the first page's wording and lists
// every page it appears on. `aliases` holds the anchors of the other
// wordings, so a link from any page lands on the merged entry.
export function mergeGlossaries(sources, language) {
  const merged = new Map();

  for (const { slug, english, shown } of sources) {
    english.forEach((entry, index) => {
      const lower = entry.term.toLowerCase();
      const key = sameTerm[lower] ?? lower;
      const local = shown[index];

      if (!merged.has(key)) {
        merged.set(key, {
          term: local.term,
          definition: local.definition,
          anchors: new Set(),
          aircraft: [],
        });
      }

      const item = merged.get(key);

      item.anchors.add(termId(local.term));

      if (!item.aircraft.includes(slug)) {
        item.aircraft.push(slug);
      }
    });
  }

  return [...merged.values()]
    .map(({ anchors, ...item }) => ({
      ...item,
      id: termId(item.term),
      aliases: [...anchors].filter((anchor) => anchor !== termId(item.term)),
    }))
    .sort((a, b) =>
      a.term.localeCompare(b.term, language, { sensitivity: "base" }),
    );
}
