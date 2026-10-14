// framer-motion's animation code, loaded separately from the main bundle by
// LazyMotion in main.jsx so the first page can render sooner. It covers
// animate, exit, variants, hover, tap and in-view animations. Layout
// animations (`layout`) need domMax, which Compare.jsx and Chronology.jsx
// load for themselves.
export { domAnimation as default } from "framer-motion";
