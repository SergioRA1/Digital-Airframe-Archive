// Numeric figures for the interactive comparison, keyed by slug. Each value
// mirrors the matching row in that aircraft's specifications, so change both
// together. `value` drives the charts, `display` is the published wording and
// `null` means the figure is not published on the aircraft's page.

const figure = (value, display, confidence) => ({
  value,
  display,
  confidence,
});

export const metrics = [
  {
    key: "speed",
    label: "Maximum speed",
    unit: "MACH",
  },
  {
    key: "mtow",
    label: "Max takeoff weight",
    unit: "KG",
  },
  {
    key: "radius",
    label: "Combat radius",
    unit: "KM",
  },
  {
    key: "ceiling",
    label: "Service ceiling",
    unit: "M",
  },
  {
    key: "length",
    label: "Length",
    unit: "M",
  },
  {
    key: "wingspan",
    label: "Wingspan",
    unit: "M",
  },
];

export const figures = {
  "f-22": {
    speed: figure(2.0, "MACH 2 CLASS", "CONFIRMED"),
    mtow: figure(38000, "38,000", "CONFIRMED"),
    radius: null,
    ceiling: figure(15000, "15,000+", "CONFIRMED"),
    length: figure(18.9, "18.9", "CONFIRMED"),
    wingspan: figure(13.6, "13.6", "CONFIRMED"),
  },
  "f-35": {
    speed: figure(1.6, "MACH 1.6", "CONFIRMED"),
    mtow: figure(31800, "≈ 31,800", "CONFIRMED"),
    radius: figure(1090, "> 1,090", "CONFIRMED"),
    ceiling: figure(15000, "15,000", "CONFIRMED"),
    length: figure(15.7, "15.7", "CONFIRMED"),
    wingspan: figure(10.7, "10.7", "CONFIRMED"),
  },
  "j-20": {
    speed: figure(2.0, "MACH 2.0", "ESTIMATE"),
    mtow: figure(37000, "≈ 37,000", "ESTIMATE"),
    radius: figure(2000, "≈ 2,000", "ESTIMATE"),
    ceiling: figure(20000, "≈ 20,000", "ESTIMATE"),
    length: figure(20.8, "20.4–21.2", "ESTIMATE"),
    wingspan: figure(13.25, "13.0–13.5", "ESTIMATE"),
  },
  "j-35": {
    speed: figure(1.8, "≈ MACH 1.8", "ESTIMATE"),
    mtow: figure(25000, "≈ 25,000", "ESTIMATE"),
    radius: figure(1250, "≈ 1,250", "ESTIMATE"),
    ceiling: null,
    length: figure(17, "≈ 17", "ESTIMATE"),
    wingspan: figure(11.5, "≈ 11.5", "ESTIMATE"),
  },
  "su-57": {
    speed: figure(2.0, "MACH 2 CLASS", "ESTIMATE"),
    mtow: figure(35000, "≈ 35,000", "ESTIMATE"),
    radius: null,
    ceiling: figure(20000, "≈ 20,000", "ESTIMATE"),
    length: figure(20.1, "20.1", "REPORTED"),
    wingspan: figure(14.1, "14.1", "REPORTED"),
  },
  "f-15ex": {
    speed: figure(2.5, "MACH 2.5", "REPORTED"),
    mtow: figure(36700, "≈ 36,700", "REPORTED"),
    radius: figure(1270, "≈ 1,270", "ESTIMATE"),
    ceiling: figure(20000, "≈ 20,000", "REPORTED"),
    length: figure(19.4, "19.4", "CONFIRMED"),
    wingspan: figure(13.1, "13.1", "CONFIRMED"),
  },
  typhoon: {
    speed: figure(2.0, "MACH 2 CLASS", "REPORTED"),
    mtow: figure(23500, "≈ 23,500", "REPORTED"),
    radius: figure(1390, "≈ 1,390", "REPORTED"),
    ceiling: figure(19800, "≈ 19,800", "REPORTED"),
    length: figure(16.0, "16.0", "CONFIRMED"),
    wingspan: figure(11.0, "11.0", "CONFIRMED"),
  },
  rafale: {
    speed: figure(1.8, "MACH 1.8", "REPORTED"),
    mtow: figure(24500, "≈ 24,500", "REPORTED"),
    radius: figure(1850, "> 1,850", "REPORTED"),
    ceiling: figure(15800, "≈ 15,800", "REPORTED"),
    length: figure(15.3, "15.3", "CONFIRMED"),
    wingspan: figure(10.8, "10.8", "CONFIRMED"),
  },
  "j-16": {
    speed: figure(2.0, "≈ MACH 2", "ESTIMATE"),
    mtow: figure(34000, "≈ 34,000", "ESTIMATE"),
    radius: figure(1500, "≈ 1,500", "ESTIMATE"),
    ceiling: figure(17000, "≈ 17,000", "ESTIMATE"),
    length: figure(21.9, "≈ 21.9", "ESTIMATE"),
    wingspan: figure(14.7, "≈ 14.7", "ESTIMATE"),
  },
  "j-15": {
    speed: figure(2.0, "≈ MACH 2", "ESTIMATE"),
    mtow: figure(32500, "≈ 32,500", "ESTIMATE"),
    radius: figure(1000, "≈ 1,000", "ESTIMATE"),
    ceiling: null,
    length: figure(21.9, "≈ 21.9", "ESTIMATE"),
    wingspan: figure(14.7, "≈ 14.7", "ESTIMATE"),
  },
  "f-16": {
    speed: figure(2.0, "MACH 2 CLASS", "CONFIRMED"),
    mtow: figure(19200, "≈ 19,200", "REPORTED"),
    radius: null,
    ceiling: figure(15000, "15,000+", "CONFIRMED"),
    length: figure(15.1, "15.1", "CONFIRMED"),
    wingspan: figure(10.0, "10.0", "CONFIRMED"),
  },
  gripen: {
    speed: figure(2.0, "MACH 2 CLASS", "REPORTED"),
    mtow: figure(14000, "≈ 14,000", "REPORTED"),
    radius: figure(800, "≈ 800", "ESTIMATE"),
    ceiling: figure(15000, "> 15,000", "REPORTED"),
    length: figure(14.1, "14.1", "CONFIRMED"),
    wingspan: figure(8.4, "8.4", "CONFIRMED"),
  },
};
