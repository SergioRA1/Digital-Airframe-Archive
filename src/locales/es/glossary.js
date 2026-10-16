// Spanish glossaries for the combined glossary page (src/Glossary.jsx), keyed
// by slug. Gathered from each aircraft's Spanish module, so there is nothing
// to translate here. Loaded only on the Spanish glossary page.

import f22 from "./f22.js";
import j20 from "./j20.js";
import { slugs } from "./timeline.js";

const pages = import.meta.glob("./pages/*.js", {
  eager: true,
});

export default {
  glossary: {
    "j-20": j20.glossary,
    "f-22": f22.glossary,
    ...Object.fromEntries(
      Object.entries(pages).map(([path, module]) => [
        slugs[path.match(/([\w-]+)\.js$/)[1]],
        module.default.glossary,
      ]),
    ),
  },
};
