import { goatcounterCode } from "./site.js";

// Counts a page view with GoatCounter, without loading its script: one small
// request per page, with the address, the page title and, on the first page
// of a visit, the site the visitor came from. GoatCounter sets no cookies and
// stores no IP addresses.
//
// Nothing is sent while `goatcounterCode` in src/site.js is empty, on
// localhost (development and tests), or when the browser asks not to be
// tracked (Do Not Track or Global Privacy Control).

let lastPath = null;
let firstView = true;

const optedOut = () =>
  navigator.doNotTrack === "1" ||
  window.doNotTrack === "1" ||
  navigator.globalPrivacyControl === true;

export function countPageView() {
  const { hostname, origin, pathname } = window.location;

  if (
    !goatcounterCode ||
    hostname === "localhost" ||
    hostname === "127.0.0.1" ||
    optedOut() ||
    pathname === lastPath
  ) {
    return;
  }

  lastPath = pathname;

  const params = new URLSearchParams({
    p: pathname,
    t: document.title,
    // Stops browsers caching the request.
    rnd: Math.random().toString(36).slice(2),
  });

  if (firstView && document.referrer && !document.referrer.startsWith(origin)) {
    params.set("r", document.referrer);
  }

  firstView = false;

  const url = `https://${goatcounterCode}.goatcounter.com/count?${params}`;

  if (!navigator.sendBeacon?.(url)) {
    new Image().src = url;
  }
}
