// Every data-driven aircraft page module (src/pages/), in one list. The
// combined timeline and the glossary read milestones and terms from here,
// so a new aircraft is added once. J-20 and F-22 keep their content in
// src/data/ and are added by name where needed.
import f15ex from "./pages/f15ex.js";
import f16 from "./pages/f16.js";
import f2 from "./pages/f2.js";
import f35 from "./pages/f35.js";
import fa18 from "./pages/fa18.js";
import gripen from "./pages/gripen.js";
import j15 from "./pages/j15.js";
import j16 from "./pages/j16.js";
import j35 from "./pages/j35.js";
import kf21 from "./pages/kf21.js";
import rafale from "./pages/rafale.js";
import su35 from "./pages/su35.js";
import su57 from "./pages/su57.js";
import typhoon from "./pages/typhoon.js";

export const dataPages = [
  f35,
  su57,
  f16,
  typhoon,
  rafale,
  gripen,
  j35,
  j16,
  j15,
  f15ex,
  kf21,
  su35,
  fa18,
  f2,
];
