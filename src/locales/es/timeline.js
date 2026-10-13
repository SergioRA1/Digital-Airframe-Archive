// Spanish milestones for the combined timeline (src/Chronology.jsx), keyed by
// slug. Gathered from each aircraft's Spanish module, so there is nothing to
// translate here. Loaded only on the Spanish timeline page.

import f22 from "./f22.js";
import j20 from "./j20.js";

const pages = import.meta.glob("./pages/*.js", {
  eager: true,
});

// File name → slug, as in src/App.jsx.
const slugs = {
  f35: "f-35",
  su57: "su-57",
  f16: "f-16",
  typhoon: "typhoon",
  rafale: "rafale",
  gripen: "gripen",
  j35: "j-35",
  j16: "j-16",
  j15: "j-15",
  f15ex: "f-15ex",
};

export default {
  milestones: {
    "j-20": j20.milestones,
    "f-22": f22.milestones,
    ...Object.fromEntries(
      Object.entries(pages).map(([path, module]) => [
        slugs[path.match(/([\w-]+)\.js$/)[1]],
        module.default.milestones,
      ]),
    ),
  },
};
