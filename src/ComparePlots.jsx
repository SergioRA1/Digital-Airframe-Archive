import { useId, useLayoutEffect, useMemo, useRef, useState } from "react";
import { m } from "framer-motion";
import { ChevronDown } from "lucide-react";

import { aircraft } from "./aircraft.js";
import {
  alternativesByLanguage,
  figuresByLanguage,
  metrics,
  metricsByLanguage,
} from "./figures.js";
import { useLanguage, useTerm, useText } from "./i18n.js";
import { peers } from "./data/peers.js";
import {
  altitudes,
  buildModel,
  calibration,
  curve,
  loads,
  machRange,
  topSpeedOf,
} from "./performanceModel.js";

// Plots of the whole hangar for the compare page, after StatShark's flight
// model calculator: a settings panel beside one large chart, the chosen
// aircraft drawn in their series colours over the others.

const text = {
  en: {
    settings: "Plot settings",
    chartGroup: "Choose a plot",
    chartTypes: {
      scatter: "Scatter",
      profile: "Profile",
      programme: "Programme",
      performance: "Performance model",
    },
    descriptions: {
      scatter:
        "Every aircraft placed by two published figures. Change the axes to see how one figure trades against another.",
      profile:
        "Each figure as a share of the highest in the hangar, so all six read on one scale. Faint lines are the other aircraft.",
      programme:
        "From first flight to entry into service. The longer the line, the longer the programme took to reach squadrons.",
      performance:
        "Thrust, drag and acceleration across the speed range, from a simplified model built on each aircraft's published figures.",
    },
    curve: "Curve",
    curves: {
      forces: "Thrust and drag",
      acceleration: "Acceleration",
      power: "Excess power",
    },
    curveUnits: {
      forces: "KN",
      acceleration: "M/S²",
      power: "M/S",
    },
    altitude: "Altitude",
    seaLevel: "Sea level",
    load: "Weight",
    loadOption: (percent) => `${percent}% of max takeoff`,
    thrustKey: "Thrust",
    dragKey: "Drag",
    topSpeed: "Top speed",
    peak: "Peak",
    mach: "Mach",
    modelNotice: (altitude, percent) =>
      `Simplified model, not measured data. Real thrust and drag curves are not published. Each aircraft's drag is scaled so that it reaches its published top speed at ${altitude} m and ${percent}% of max takeoff weight; the shapes of thrust lapse, drag rise and induced drag are generic. Use it to see how the published figures interact, not to rank the aircraft.`,
    noModel: "No model, thrust not published:",
    engineLabel: (name) => `${name} engine`,
    engineOptions: {
      current: (engine) => `${engine}, current`,
      alternative: (engine) => `${engine}, reported`,
      both: "Both",
    },
    alternativeNotice: (engine, display, current) =>
      `${engine} thrust is reported, not official: published estimates run from ${display} kN per engine, plotted at the midpoint. Drag is still set by the published top speed with the ${current}, so the ${engine} curves show the effect of the extra thrust alone.`,
    performanceSummary: (curveName) =>
      `Line chart of modelled ${curveName.toLowerCase()} against Mach number for the chosen aircraft. It is a simplified model, not measured data.`,
    xAxis: "X axis",
    yAxis: "Y axis",
    shortLabels: {
      speed: "Speed",
      mtow: "Weight",
      radius: "Radius",
      ceiling: "Ceiling",
      length: "Length",
      wingspan: "Span",
      thrust: "Thrust",
      thrustToWeight: "T/W",
    },
    others: "Other aircraft",
    filled: "Filled: both figures confirmed",
    hollow: "Hollow: reported or estimated",
    firstFlightKey: "First flight",
    serviceKey: "In service",
    notPlotted: "Not plotted, figure not published:",
    notPublished: "Not published",
    percent: "% of hangar highest",
    year: "Year",
    years: (count) => `${count} ${count === 1 ? "yr" : "yrs"}`,
    firstFlight: "First flight",
    service: "In service",
    scatterSummary: (x, y) =>
      `Scatter plot of ${y} against ${x} for every aircraft with both figures. The table below lists every figure.`,
    profileSummary:
      "Line chart of each aircraft's six figures as a share of the highest in the hangar. The table below lists every figure.",
    programmeSummary:
      "Chart of each aircraft's first flight and entry into service. The table below lists both years.",
  },
  es: {
    settings: "Ajustes del gráfico",
    chartGroup: "Elegir un gráfico",
    chartTypes: {
      scatter: "Dispersión",
      profile: "Perfil",
      programme: "Programa",
      performance: "Modelo de prestaciones",
    },
    descriptions: {
      scatter:
        "Cada avión situado según dos cifras publicadas. Cambia los ejes para ver cómo se relaciona una cifra con otra.",
      profile:
        "Cada cifra como porcentaje de la más alta del hangar, para leer las seis en una sola escala. Las líneas tenues son los demás aviones.",
      programme:
        "Del primer vuelo a la entrada en servicio. Cuanto más larga es la línea, más tardó el programa en llegar a los escuadrones.",
      performance:
        "Empuje, resistencia y aceleración en todo el margen de velocidades, según un modelo simplificado basado en las cifras publicadas de cada avión.",
    },
    curve: "Curva",
    curves: {
      forces: "Empuje y resistencia",
      acceleration: "Aceleración",
      power: "Potencia específica sobrante",
    },
    curveUnits: {
      forces: "KN",
      acceleration: "M/S²",
      power: "M/S",
    },
    altitude: "Altitud",
    seaLevel: "Nivel del mar",
    load: "Peso",
    loadOption: (percent) => `${percent} % del peso máximo`,
    thrustKey: "Empuje",
    dragKey: "Resistencia",
    topSpeed: "Velocidad máxima",
    peak: "Máximo",
    mach: "Mach",
    modelNotice: (altitude, percent) =>
      `Modelo simplificado, no datos medidos. Las curvas reales de empuje y resistencia no se publican. La resistencia de cada avión se ajusta para que alcance su velocidad máxima publicada a ${altitude} m y al ${percent} % del peso máximo al despegue; las formas de la caída de empuje, el aumento de resistencia y la resistencia inducida son genéricas. Sirve para ver cómo se combinan las cifras publicadas, no para clasificar los aviones.`,
    noModel: "Sin modelo, empuje no publicado:",
    engineLabel: (name) => `Motor del ${name}`,
    engineOptions: {
      current: (engine) => `${engine}, actual`,
      alternative: (engine) => `${engine}, según informes`,
      both: "Ambos",
    },
    alternativeNotice: (engine, display, current) =>
      `El empuje del ${engine} procede de informes, no de cifras oficiales: las estimaciones publicadas van de ${display} kN por motor, y se representa el punto medio. La resistencia sigue ajustada a la velocidad máxima publicada con el ${current}, así que las curvas del ${engine} muestran solo el efecto del empuje adicional.`,
    performanceSummary: (curveName) =>
      `Gráfico de líneas de ${curveName.toLowerCase()} modelada frente al número de Mach para los aviones elegidos. Es un modelo simplificado, no datos medidos.`,
    xAxis: "Eje X",
    yAxis: "Eje Y",
    shortLabels: {
      speed: "Velocidad",
      mtow: "Peso",
      radius: "Radio",
      ceiling: "Techo",
      length: "Longitud",
      wingspan: "Envergadura",
      thrust: "Empuje",
      thrustToWeight: "Empuje/peso",
    },
    others: "Otros aviones",
    filled: "Relleno: ambas cifras confirmadas",
    hollow: "Hueco: según informes o estimada",
    firstFlightKey: "Primer vuelo",
    serviceKey: "En servicio",
    notPlotted: "Sin representar, cifra no publicada:",
    notPublished: "No publicado",
    percent: "% del máximo del hangar",
    year: "Año",
    years: (count) => `${count} ${count === 1 ? "año" : "años"}`,
    firstFlight: "Primer vuelo",
    service: "En servicio",
    scatterSummary: (x, y) =>
      `Gráfico de dispersión de ${y} frente a ${x} para cada avión con ambas cifras. La tabla siguiente recoge todas las cifras.`,
    profileSummary:
      "Gráfico de líneas con las seis cifras de cada avión como porcentaje de la más alta del hangar. La tabla siguiente recoge todas las cifras.",
    programmeSummary:
      "Gráfico del primer vuelo y la entrada en servicio de cada avión. La tabla siguiente recoge ambos años.",
  },
};

const chartTypes = ["scatter", "profile", "programme", "performance"];
const curveTypes = ["forces", "acceleration", "power"];

const figures = figuresByLanguage.en;

const designations = Object.fromEntries(
  aircraft.map((entry) => [entry.slug, entry.designation]),
);

// Chart chrome, matching the site's white/NN tints on the near-black background.
const surface = "#050708";
const ink = "rgba(237,240,233,.85)";
const mutedInk = "rgba(255,255,255,.5)";
const gridLine = "rgba(255,255,255,.08)";
const otherMark = "rgba(255,255,255,.4)";

const metricMaximum = Object.fromEntries(
  metrics.map((metric) => [
    metric.key,
    Math.max(
      ...peers
        .map((peer) => figures[peer.slug][metric.key]?.value)
        .filter((value) => value != null),
    ),
  ]),
);

// Round tick values (1, 2, 2.5 or 5 times a power of ten) covering min to max.
function niceScale(min, max, count = 5) {
  const rough = (max - min || Math.abs(max) || 1) / count;
  const power = 10 ** Math.floor(Math.log10(rough));
  const step = [1, 2, 2.5, 5, 10]
    .map((factor) => factor * power)
    .find((candidate) => candidate >= rough);
  const start = Math.floor(min / step) * step;
  const end = Math.ceil(max / step) * step;
  const ticks = [];

  for (let value = start; value <= end + step / 2; value += step) {
    ticks.push(Number(value.toFixed(6)));
  }

  return {
    min: start,
    max: end,
    ticks,
  };
}

function useNumberFormat() {
  const language = useLanguage();

  return useMemo(() => {
    const format = new Intl.NumberFormat(language === "es" ? "es-ES" : "en-GB", {
      maximumFractionDigits: 2,
      // Spanish groups thousands from four digits too (5.000), as the data does.
      useGrouping: "always",
    });

    return (value) => format.format(value);
  }, [language]);
}

// Charts draw at the container's real width, so their text stays at a
// readable size on phones instead of shrinking with a viewBox.
function useWidth() {
  const ref = useRef(null);
  const [width, setWidth] = useState(0);

  useLayoutEffect(() => {
    const element = ref.current;
    const observer = new ResizeObserver(([entry]) =>
      setWidth(Math.floor(entry.contentRect.width)),
    );

    setWidth(Math.floor(element.getBoundingClientRect().width));
    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return [ref, width];
}

function pointerPosition(event) {
  const box = event.currentTarget.getBoundingClientRect();

  return {
    x: event.clientX - box.left,
    y: event.clientY - box.top,
  };
}

function Tooltip({ hover, width, children }) {
  const ref = useRef(null);
  const [tooltipWidth, setTooltipWidth] = useState(0);

  useLayoutEffect(() => {
    if (ref.current) {
      setTooltipWidth(ref.current.offsetWidth);
    }
  }, [hover]);

  if (!hover) {
    return null;
  }

  // Right of the pointer on the left half, left of it on the right half, and
  // never past either edge of the chart.
  const preferred =
    hover.x < width / 2 ? hover.x + 16 : hover.x - 16 - tooltipWidth;
  const left = Math.min(Math.max(preferred, 0), Math.max(width - tooltipWidth, 0));

  return (
    <div
      ref={ref}
      className="pointer-events-none absolute z-10 w-max max-w-[16rem] border border-white/15 bg-[#050708]/95 px-3 py-2.5 font-mono text-xs uppercase tracking-[.12em] text-white/60 shadow-[0_10px_30px_rgba(0,0,0,.5)]"
      style={{
        left,
        top: hover.y + 16,
      }}
    >
      {children}
    </div>
  );
}

function TooltipRow({ colour, value, label }) {
  return (
    <div className="flex items-center gap-2 py-0.5">
      {colour && (
        <span
          className="h-0.5 w-3 shrink-0"
          style={{ backgroundColor: colour }}
        />
      )}
      <span className="font-semibold text-white">{value}</span>
      <span>{label}</span>
    </div>
  );
}

function ConfidenceMark({ confidence }) {
  const term = useTerm();

  return <span className="text-white/50">· {term(confidence)}</span>;
}

function AxisLabel({ x, y, children, anchor = "middle", rotate = false }) {
  return (
    <text
      x={x}
      y={y}
      fill={mutedInk}
      fontSize={11}
      letterSpacing=".16em"
      textAnchor={anchor}
      transform={rotate ? `rotate(-90 ${x} ${y})` : undefined}
    >
      {children}
    </text>
  );
}

function ScatterPlot({ xKey, yKey, selected, colours, t, shownMetrics }) {
  const [ref, width] = useWidth();
  const [hover, setHover] = useState(null);
  const format = useNumberFormat();
  const language = useLanguage();
  const shownFigures = figuresByLanguage[language];
  const metricOf = (key) => shownMetrics.find((metric) => metric.key === key);
  const xMetric = metricOf(xKey);
  const yMetric = metricOf(yKey);

  const narrow = width < 640;
  const height = narrow ? 340 : 460;
  const margin = {
    top: 20,
    right: 24,
    bottom: 52,
    left: 72,
  };
  const plotWidth = Math.max(width - margin.left - margin.right, 0);
  const plotHeight = height - margin.top - margin.bottom;

  const { groups, missing } = useMemo(() => {
    const byPosition = new Map();
    const unplotted = [];

    peers.forEach((peer) => {
      const xFigure = figures[peer.slug][xKey];
      const yFigure = figures[peer.slug][yKey];

      if (!xFigure || !yFigure) {
        unplotted.push(peer.slug);
        return;
      }

      // Aircraft with the same pair of figures share one point.
      const position = `${xFigure.value}|${yFigure.value}`;

      if (!byPosition.has(position)) {
        byPosition.set(position, {
          x: xFigure.value,
          y: yFigure.value,
          slugs: [],
        });
      }

      byPosition.get(position).slugs.push(peer.slug);
    });

    return {
      groups: [...byPosition.values()],
      missing: unplotted,
    };
  }, [xKey, yKey]);

  const scale = (values) => {
    const low = Math.min(...values);
    const high = Math.max(...values);
    const padding = (high - low || high || 1) * 0.08;

    return niceScale(Math.max(low - padding, 0), high + padding);
  };
  const xScale = scale(groups.map((group) => group.x));
  const yScale = scale(groups.map((group) => group.y));
  const px = (value) =>
    margin.left +
    ((value - xScale.min) / (xScale.max - xScale.min)) * plotWidth;
  const py = (value) =>
    margin.top +
    plotHeight -
    ((value - yScale.min) / (yScale.max - yScale.min)) * plotHeight;

  const isSelected = (group) =>
    group.slugs.some((slug) => selected.includes(slug));
  const colourOf = (group) => {
    const slot = selected.findIndex((slug) => group.slugs.includes(slug));

    return slot === -1 ? null : colours[slot];
  };
  const confirmed = (slug) =>
    figures[slug][xKey].confidence === "CONFIRMED" &&
    figures[slug][yKey].confidence === "CONFIRMED";

  // Direct labels for the chosen aircraft, nudged apart when they would overlap.
  const labels = groups
    .filter(isSelected)
    .map((group) => ({
      x: px(group.x),
      y: py(group.y),
      text: group.slugs
        .filter((slug) => selected.includes(slug))
        .map((slug) => designations[slug])
        .join(" · "),
    }))
    .sort((a, b) => a.y - b.y)
    .reduce((placed, label) => {
      const clash = placed.find(
        (other) =>
          Math.abs(other.textY - (label.y + 4)) < 14 &&
          Math.abs(other.x - label.x) < 110,
      );

      return [
        ...placed,
        {
          ...label,
          textY: clash ? clash.textY + 14 : label.y + 4,
        },
      ];
    }, []);

  const handleMove = (event) => {
    const pointer = pointerPosition(event);
    let nearest = null;
    let distance = 24;

    groups.forEach((group) => {
      const gap = Math.hypot(px(group.x) - pointer.x, py(group.y) - pointer.y);

      if (gap < distance) {
        distance = gap;
        nearest = group;
      }
    });

    setHover(
      nearest
        ? {
            group: nearest,
            x: px(nearest.x),
            y: py(nearest.y),
          }
        : null,
    );
  };

  // The chosen aircraft draw last, on top of the others.
  const ordered = [...groups].sort(
    (a, b) => Number(isSelected(a)) - Number(isSelected(b)),
  );

  return (
    <div>
      <div ref={ref} className="relative">
        {width > 0 && (
          <svg
            width={width}
            height={height}
            role="img"
            aria-label={t.scatterSummary(xMetric.label, yMetric.label)}
            className="block touch-none font-mono uppercase"
            onPointerMove={handleMove}
            onPointerLeave={() => setHover(null)}
          >
            {xScale.ticks.map((tick) => (
              <g key={`x${tick}`}>
                <line
                  x1={px(tick)}
                  x2={px(tick)}
                  y1={margin.top}
                  y2={margin.top + plotHeight}
                  stroke={gridLine}
                />
                <text
                  x={px(tick)}
                  y={margin.top + plotHeight + 18}
                  fill={mutedInk}
                  fontSize={11}
                  textAnchor="middle"
                >
                  {narrow && xScale.ticks.indexOf(tick) % 2 ? "" : format(tick)}
                </text>
              </g>
            ))}

            {yScale.ticks.map((tick) => (
              <g key={`y${tick}`}>
                <line
                  x1={margin.left}
                  x2={margin.left + plotWidth}
                  y1={py(tick)}
                  y2={py(tick)}
                  stroke={gridLine}
                />
                <text
                  x={margin.left - 10}
                  y={py(tick) + 4}
                  fill={mutedInk}
                  fontSize={11}
                  textAnchor="end"
                >
                  {format(tick)}
                </text>
              </g>
            ))}

            <AxisLabel x={margin.left + plotWidth / 2} y={height - 10}>
              {`${t.shortLabels[xKey]} · ${xMetric.unit}`}
            </AxisLabel>

            <AxisLabel x={14} y={margin.top + plotHeight / 2} rotate>
              {`${t.shortLabels[yKey]} · ${yMetric.unit}`}
            </AxisLabel>

            {ordered.map((group) => {
              const colour = colourOf(group);
              const hollow = !group.slugs.every(confirmed);
              const mark = colour ?? otherMark;

              return (
                <m.circle
                  key={group.slugs.join()}
                  initial={false}
                  animate={{
                    cx: px(group.x),
                    cy: py(group.y),
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 120,
                    damping: 20,
                  }}
                  r={colour ? 6 : 4}
                  fill={hollow ? surface : mark}
                  stroke={hollow ? mark : surface}
                  strokeWidth={2}
                />
              );
            })}

            {hover && (
              <circle
                cx={hover.x}
                cy={hover.y}
                r={11}
                fill="none"
                stroke="rgba(255,255,255,.6)"
              />
            )}

            {labels.map((label) => {
              const flip = label.x > width - 120;

              return (
                <text
                  key={label.text}
                  x={label.x + (flip ? -12 : 12)}
                  y={label.textY}
                  fill={ink}
                  fontSize={11}
                  letterSpacing=".12em"
                  textAnchor={flip ? "end" : "start"}
                  className="pointer-events-none"
                >
                  {label.text}
                </text>
              );
            })}
          </svg>
        )}

        <Tooltip hover={hover} width={width}>
          {hover?.group.slugs.map((slug) => {
            const slot = selected.indexOf(slug);

            return (
              <div key={slug} className="py-1">
                <TooltipRow
                  colour={slot === -1 ? otherMark : colours[slot]}
                  value={designations[slug]}
                />
                <TooltipRow
                  value={shownFigures[slug][xKey].display}
                  label={
                    <>
                      {t.shortLabels[xKey]}{" "}
                      <ConfidenceMark confidence={figures[slug][xKey].confidence} />
                    </>
                  }
                />
                <TooltipRow
                  value={shownFigures[slug][yKey].display}
                  label={
                    <>
                      {t.shortLabels[yKey]}{" "}
                      <ConfidenceMark confidence={figures[slug][yKey].confidence} />
                    </>
                  }
                />
              </div>
            );
          })}
        </Tooltip>
      </div>

      {missing.length > 0 && (
        <p className="mt-4 font-mono text-xs sm:text-[10px] uppercase tracking-[.2em] text-white/50">
          {t.notPlotted} {missing.map((slug) => designations[slug]).join(", ")}
        </p>
      )}
    </div>
  );
}

function ProfilePlot({ selected, colours, t, shownMetrics }) {
  const [ref, width] = useWidth();
  const [hover, setHover] = useState(null);
  const format = useNumberFormat();
  const language = useLanguage();
  const shownFigures = figuresByLanguage[language];

  const narrow = width < 640;
  const height = narrow ? 340 : 440;
  const margin = {
    top: 20,
    right: narrow ? 20 : 96,
    bottom: narrow ? 64 : 44,
    left: 56,
  };
  const plotWidth = Math.max(width - margin.left - margin.right, 0);
  const plotHeight = height - margin.top - margin.bottom;
  const keys = metrics.map((metric) => metric.key);
  const ticks = [0, 25, 50, 75, 100];

  const px = (index) => margin.left + (index / (keys.length - 1)) * plotWidth;
  const py = (percent) => margin.top + plotHeight - (percent / 100) * plotHeight;
  const percentOf = (slug, key) => {
    const value = figures[slug][key]?.value;

    return value == null ? null : (value / metricMaximum[key]) * 100;
  };

  // A line breaks where a figure is not published.
  const pathOf = (slug) =>
    keys
      .map((key, index) => {
        const percent = percentOf(slug, key);
        const previous = index > 0 ? percentOf(slug, keys[index - 1]) : null;

        if (percent == null) {
          return "";
        }

        return `${previous == null ? "M" : "L"}${px(index)},${py(percent)}`;
      })
      .join("");

  const handleMove = (event) => {
    const pointer = pointerPosition(event);
    const index = Math.round(
      ((pointer.x - margin.left) / plotWidth) * (keys.length - 1),
    );

    setHover(
      index >= 0 && index < keys.length
        ? {
            index,
            x: px(index),
            y: pointer.y,
          }
        : null,
    );
  };

  const others = peers.filter((peer) => !selected.includes(peer.slug));
  const lastPoint = (slug) => {
    const index = keys.findLastIndex((key) => percentOf(slug, key) != null);

    return index === -1
      ? null
      : {
          x: px(index),
          y: py(percentOf(slug, keys[index])),
        };
  };

  const endLabels = narrow
    ? []
    : selected
        .map((slug) => ({
          slug,
          ...lastPoint(slug),
        }))
        .filter((label) => label.x != null)
        .sort((a, b) => a.y - b.y)
        .reduce(
          (placed, label) => [
            ...placed,
            {
              ...label,
              textY: Math.max(
                label.y + 4,
                placed.length ? placed[placed.length - 1].textY + 14 : 0,
              ),
            },
          ],
          [],
        );

  return (
    <div ref={ref} className="relative">
      {width > 0 && (
        <svg
          width={width}
          height={height}
          role="img"
          aria-label={t.profileSummary}
          className="block touch-none font-mono uppercase"
          onPointerMove={handleMove}
          onPointerLeave={() => setHover(null)}
        >
          {ticks.map((tick) => (
            <g key={tick}>
              <line
                x1={margin.left}
                x2={margin.left + plotWidth}
                y1={py(tick)}
                y2={py(tick)}
                stroke={gridLine}
              />
              <text
                x={margin.left - 10}
                y={py(tick) + 4}
                fill={mutedInk}
                fontSize={11}
                textAnchor="end"
              >
                {format(tick)}
              </text>
            </g>
          ))}

          {keys.map((key, index) => (
            <g key={key}>
              <line
                x1={px(index)}
                x2={px(index)}
                y1={margin.top}
                y2={margin.top + plotHeight}
                stroke={hover?.index === index ? "rgba(255,255,255,.4)" : gridLine}
              />
              <text
                x={px(index)}
                // On phones every other label drops a line so they don't collide.
                y={margin.top + plotHeight + 20 + (narrow && index % 2 ? 16 : 0)}
                fill={hover?.index === index ? ink : mutedInk}
                fontSize={11}
                letterSpacing=".12em"
                textAnchor={
                  index === 0 ? "start" : index === keys.length - 1 ? "end" : "middle"
                }
              >
                {t.shortLabels[key]}
              </text>
            </g>
          ))}

          <AxisLabel x={14} y={margin.top + plotHeight / 2} rotate>
            {t.percent}
          </AxisLabel>

          {others.map((peer) => (
            <path
              key={peer.slug}
              d={pathOf(peer.slug)}
              fill="none"
              stroke="rgba(255,255,255,.16)"
              strokeWidth={1}
            />
          ))}

          {selected.map((slug, slot) => (
            <g key={slug}>
              <m.path
                d={pathOf(slug)}
                fill="none"
                stroke={colours[slot]}
                strokeWidth={2}
                strokeLinejoin="round"
                initial={{
                  pathLength: 0,
                }}
                animate={{
                  pathLength: 1,
                }}
                transition={{
                  duration: 0.8,
                  ease: "easeOut",
                }}
              />

              {keys.map((key, index) => {
                const percent = percentOf(slug, key);

                return (
                  percent != null && (
                    <circle
                      key={key}
                      cx={px(index)}
                      cy={py(percent)}
                      r={4}
                      fill={colours[slot]}
                      stroke={surface}
                      strokeWidth={2}
                    />
                  )
                );
              })}
            </g>
          ))}

          {endLabels.map((label) => (
            <text
              key={label.slug}
              x={label.x + 12}
              y={label.textY}
              fill={ink}
              fontSize={11}
              letterSpacing=".12em"
            >
              {designations[label.slug]}
            </text>
          ))}
        </svg>
      )}

      <Tooltip hover={hover} width={width}>
        {hover && (
          <>
            <div className="mb-1 text-white/85">
              {shownMetrics[hover.index].label} · {shownMetrics[hover.index].unit}
            </div>

            {selected.map((slug, slot) => {
              const entry = shownFigures[slug][keys[hover.index]];

              return (
                <TooltipRow
                  key={slug}
                  colour={colours[slot]}
                  value={entry ? entry.display : t.notPublished}
                  label={designations[slug]}
                />
              );
            })}
          </>
        )}
      </Tooltip>
    </div>
  );
}

function ProgrammePlot({ selected, colours, t }) {
  const [ref, width] = useWidth();
  const [hover, setHover] = useState(null);

  const rows = useMemo(
    () =>
      [...peers].sort(
        (a, b) =>
          Number(a.firstFlight) - Number(b.firstFlight) ||
          Number(a.service) - Number(b.service),
      ),
    [],
  );

  const narrow = width < 640;
  const rowHeight = 28;
  const margin = {
    top: 12,
    right: narrow ? 52 : 64,
    bottom: 44,
    left: narrow ? 76 : 110,
  };
  const height = margin.top + rows.length * rowHeight + margin.bottom;
  const plotWidth = Math.max(width - margin.left - margin.right, 0);
  const plotBottom = margin.top + rows.length * rowHeight;
  const years = rows.flatMap((peer) => [
    Number(peer.firstFlight),
    Number(peer.service),
  ]);
  // Whole decades, labelled every other one on phones.
  const decades = {
    min: Math.floor((Math.min(...years) - 1) / 10) * 10,
    max: Math.ceil((Math.max(...years) + 1) / 10) * 10,
  };
  const scale = {
    ...decades,
    ticks: Array.from(
      { length: (decades.max - decades.min) / 10 + 1 },
      (_, index) => decades.min + index * 10,
    ),
  };
  const px = (year) =>
    margin.left + ((year - scale.min) / (scale.max - scale.min)) * plotWidth;
  const rowY = (index) => margin.top + index * rowHeight + rowHeight / 2;

  const handleMove = (event) => {
    const pointer = pointerPosition(event);
    const index = Math.floor((pointer.y - margin.top) / rowHeight);

    setHover(
      index >= 0 && index < rows.length
        ? {
            index,
            x: Math.min(pointer.x, width - 24),
            y: rowY(index),
          }
        : null,
    );
  };

  const hovered = hover && rows[hover.index];

  return (
    <div ref={ref} className="relative">
      {width > 0 && (
        <svg
          width={width}
          height={height}
          role="img"
          aria-label={t.programmeSummary}
          className="block touch-none font-mono uppercase"
          onPointerMove={handleMove}
          onPointerLeave={() => setHover(null)}
        >
          {scale.ticks.map((tick) => (
            <g key={tick}>
              <line
                x1={px(tick)}
                x2={px(tick)}
                y1={margin.top}
                y2={plotBottom}
                stroke={gridLine}
              />
              <text
                x={px(tick)}
                y={plotBottom + 18}
                fill={mutedInk}
                fontSize={11}
                textAnchor="middle"
              >
                {narrow && scale.ticks.indexOf(tick) % 2 ? "" : tick}
              </text>
            </g>
          ))}

          <AxisLabel x={margin.left + plotWidth / 2} y={height - 6}>
            {t.year}
          </AxisLabel>

          {rows.map((peer, index) => {
            const slot = selected.indexOf(peer.slug);
            const colour = slot === -1 ? otherMark : colours[slot];
            const first = Number(peer.firstFlight);
            const service = Number(peer.service);
            const y = rowY(index);

            return (
              <g key={peer.slug}>
                {hover?.index === index && (
                  <rect
                    x={0}
                    y={y - rowHeight / 2}
                    width={width}
                    height={rowHeight}
                    fill="rgba(255,255,255,.04)"
                  />
                )}

                <text
                  x={margin.left - 16}
                  y={y + 4}
                  fill={slot === -1 ? mutedInk : ink}
                  fontSize={11}
                  letterSpacing=".1em"
                  textAnchor="end"
                >
                  {designations[peer.slug]}
                </text>

                <m.line
                  x1={px(first)}
                  y1={y}
                  y2={y}
                  stroke={colour}
                  strokeWidth={2}
                  initial={{
                    x2: px(first),
                  }}
                  animate={{
                    x2: px(service),
                  }}
                  transition={{
                    duration: 0.7,
                    delay: index * 0.03,
                    ease: "easeOut",
                  }}
                />

                <circle
                  cx={px(first)}
                  cy={y}
                  r={4}
                  fill={surface}
                  stroke={colour}
                  strokeWidth={2}
                />

                <circle
                  cx={px(service)}
                  cy={y}
                  r={4}
                  fill={colour}
                  stroke={surface}
                  strokeWidth={2}
                />

                <text
                  x={px(service) + 12}
                  y={y + 4}
                  fill={mutedInk}
                  fontSize={11}
                >
                  {t.years(service - first)}
                </text>
              </g>
            );
          })}
        </svg>
      )}

      <Tooltip hover={hover} width={width}>
        {hovered && (
          <>
            <div className="mb-1 text-white/85">{designations[hovered.slug]}</div>
            <TooltipRow value={hovered.firstFlight} label={t.firstFlight} />
            <TooltipRow value={hovered.service} label={t.service} />
            <TooltipRow
              value={t.years(Number(hovered.service) - Number(hovered.firstFlight))}
            />
          </>
        )}
      </Tooltip>
    </div>
  );
}

// One model per aircraft with a published thrust figure.
const models = Object.fromEntries(
  peers.map((peer) => {
    const entry = figures[peer.slug];

    return [
      peer.slug,
      entry.thrust
        ? buildModel({
            thrust: entry.thrust.value,
            engines: Number(peer.engines),
            mtow: entry.mtow.value,
            wingspan: entry.wingspan.value,
            topSpeed: entry.speed.value,
          })
        : null,
    ];
  }),
);

const alternatives = alternativesByLanguage.en;

// The model of an aircraft with another engine: same drag, more or less thrust.
function withEngine(slug, thrust) {
  return {
    ...models[slug],
    staticThrust:
      (models[slug].staticThrust * thrust) / figures[slug].thrust.value,
  };
}

const curveValue = {
  forces: (point) => point.thrust,
  acceleration: (point) => point.acceleration,
  power: (point) => point.excessPower,
};

function PerformancePlot({
  selected,
  colours,
  t,
  curveType,
  altitude,
  load,
  engines,
}) {
  const [ref, width] = useWidth();
  const [hover, setHover] = useState(null);
  const format = useNumberFormat();
  const language = useLanguage();
  const clipId = useId();
  // Mach to two decimals, with the decimal comma in Spanish.
  const fixed = (value) => {
    const text = value.toFixed(2);

    return language === "es" ? text.replace(".", ",") : text;
  };

  // One series per aircraft, or two when an alternative engine is shown
  // beside the current one (drawn fainter).
  const series = useMemo(
    () =>
      selected
        .filter((slug) => models[slug])
        .flatMap((slug) => {
          const colour = colours[selected.indexOf(slug)];
          const alternative = alternatives[slug];
          const choice = alternative ? engines[slug] ?? "current" : "current";
          const current = {
            key: slug,
            slug,
            colour,
            label: designations[slug],
            points: curve(models[slug], altitude, load),
          };
          const other = alternative && {
            key: `${slug}-${alternative.engine}`,
            slug,
            colour,
            label: `${designations[slug]} ${alternative.engine}`,
            points: curve(
              withEngine(slug, alternative.thrust.value),
              altitude,
              load,
            ),
          };

          if (choice === "alternative") {
            return [other];
          }

          return choice === "both"
            ? [
                current,
                {
                  ...other,
                  faded: true,
                },
              ]
            : [current];
        }),
    [selected, colours, altitude, load, engines],
  );
  const missing = selected.filter((slug) => !models[slug]);

  const narrow = width < 640;
  const height = narrow ? 340 : 460;
  const margin = {
    top: 24,
    right: 24,
    bottom: 52,
    left: 64,
  };
  const plotWidth = Math.max(width - margin.left - margin.right, 0);
  const plotHeight = height - margin.top - margin.bottom;

  const values = series.flatMap((entry) => entry.points.map(curveValue[curveType]));
  const highest = values.length ? Math.max(...values) : 1;
  // Drag and negative acceleration grow without limit at low speed, so the
  // axis stops at a fixed share of the useful range and the lines are clipped.
  const yScale =
    curveType === "forces"
      ? niceScale(0, highest * 1.25)
      : niceScale(-highest * 0.4, highest * 1.15);
  const xScale = niceScale(0, machRange.to);
  const px = (mach) =>
    margin.left + ((mach - xScale.min) / (xScale.max - xScale.min)) * plotWidth;
  const py = (value) =>
    margin.top +
    plotHeight -
    ((value - yScale.min) / (yScale.max - yScale.min)) * plotHeight;

  const pathOf = (points, read) =>
    points
      .map((point, index) => `${index ? "L" : "M"}${px(point.mach)},${py(read(point))}`)
      .join("");

  // StatShark-style callouts: the top speed on the thrust and drag chart, the
  // peak of the other two.
  const callouts = series
    .map((entry) => {
      if (curveType === "forces") {
        const mach = topSpeedOf(entry.points);
        const point = entry.points.reduce((nearest, candidate) =>
          Math.abs(candidate.mach - mach) < Math.abs(nearest.mach - mach)
            ? candidate
            : nearest,
        );

        return mach == null
          ? null
          : {
              key: entry.key,
              x: px(mach),
              y: py(point.thrust),
              text: `${entry.label} · ${t.topSpeed} M ${fixed(mach)}`,
            };
      }

      const read = curveValue[curveType];
      const peak = entry.points.reduce((best, point) =>
        read(point) > read(best) ? point : best,
      );

      return {
        key: entry.key,
        x: px(peak.mach),
        y: py(read(peak)),
        text: `${entry.label} · ${t.peak} ${format(Math.round(read(peak) * 10) / 10)} ${t.curveUnits[curveType]}`,
      };
    })
    .filter(Boolean)
    .sort((a, b) => a.y - b.y)
    .reduce((placed, callout) => {
      const clash = placed.find(
        (other) =>
          Math.abs(other.textY - (callout.y - 12)) < 16 &&
          Math.abs(other.x - callout.x) < 170,
      );

      return [
        ...placed,
        {
          ...callout,
          textY: clash ? clash.textY + 16 : callout.y - 12,
        },
      ];
    }, []);

  const handleMove = (event) => {
    const pointer = pointerPosition(event);
    const mach =
      xScale.min + ((pointer.x - margin.left) / plotWidth) * (xScale.max - xScale.min);
    const index = Math.round((mach - machRange.from) / machRange.step);

    setHover(
      series.length && index >= 0 && index < series[0].points.length
        ? {
            index,
            x: px(series[0].points[index].mach),
            y: pointer.y,
          }
        : null,
    );
  };

  return (
    <div>
      <div ref={ref} className="relative">
        {width > 0 && (
          <svg
            width={width}
            height={height}
            role="img"
            aria-label={t.performanceSummary(t.curves[curveType])}
            className="block touch-none font-mono uppercase"
            onPointerMove={handleMove}
            onPointerLeave={() => setHover(null)}
          >
            <defs>
              <clipPath id={clipId}>
                <rect
                  x={margin.left}
                  y={margin.top}
                  width={plotWidth}
                  height={plotHeight}
                />
              </clipPath>
            </defs>

            {xScale.ticks.map((tick) => (
              <g key={`x${tick}`}>
                <line
                  x1={px(tick)}
                  x2={px(tick)}
                  y1={margin.top}
                  y2={margin.top + plotHeight}
                  stroke={gridLine}
                />
                <text
                  x={px(tick)}
                  y={margin.top + plotHeight + 18}
                  fill={mutedInk}
                  fontSize={11}
                  textAnchor="middle"
                >
                  {format(tick)}
                </text>
              </g>
            ))}

            {yScale.ticks.map((tick) => (
              <g key={`y${tick}`}>
                <line
                  x1={margin.left}
                  x2={margin.left + plotWidth}
                  y1={py(tick)}
                  y2={py(tick)}
                  stroke={tick === 0 ? "rgba(255,255,255,.3)" : gridLine}
                />
                <text
                  x={margin.left - 10}
                  y={py(tick) + 4}
                  fill={mutedInk}
                  fontSize={11}
                  textAnchor="end"
                >
                  {format(tick)}
                </text>
              </g>
            ))}

            <AxisLabel x={margin.left + plotWidth / 2} y={height - 10}>
              {t.mach}
            </AxisLabel>

            <AxisLabel x={14} y={margin.top + plotHeight / 2} rotate>
              {`${t.curves[curveType]} · ${t.curveUnits[curveType]}`}
            </AxisLabel>

            {hover && (
              <line
                x1={hover.x}
                x2={hover.x}
                y1={margin.top}
                y2={margin.top + plotHeight}
                stroke="rgba(255,255,255,.4)"
              />
            )}

            <g clipPath={`url(#${clipId})`}>
              {series.map((entry) => (
                <g
                  key={`${entry.key}-${curveType}-${altitude}-${load}`}
                  opacity={entry.faded ? 0.5 : 1}
                >
                  <m.path
                    d={pathOf(entry.points, curveValue[curveType])}
                    fill="none"
                    stroke={entry.colour}
                    strokeWidth={2}
                    strokeLinejoin="round"
                    initial={{
                      pathLength: 0,
                    }}
                    animate={{
                      pathLength: 1,
                    }}
                    transition={{
                      duration: 0.9,
                      ease: "easeOut",
                    }}
                  />

                  {curveType === "forces" && (
                    <path
                      d={pathOf(entry.points, (point) => point.drag)}
                      fill="none"
                      stroke={entry.colour}
                      strokeWidth={2}
                      strokeDasharray="6 5"
                    />
                  )}
                </g>
              ))}
            </g>

            {callouts.map((callout) => (
              <g key={callout.key} className="pointer-events-none">
                <circle
                  cx={callout.x}
                  cy={callout.y}
                  r={4}
                  fill={ink}
                  stroke={surface}
                  strokeWidth={2}
                />
                {/* A halo in the background colour keeps the text clear of the lines. */}
                <text
                  x={Math.min(
                    Math.max(callout.x + 8, margin.left + 4),
                    width - callout.text.length * 8,
                  )}
                  y={callout.textY}
                  fill={ink}
                  stroke={surface}
                  strokeWidth={4}
                  paintOrder="stroke"
                  fontSize={11}
                  letterSpacing=".1em"
                >
                  {callout.text}
                </text>
              </g>
            ))}
          </svg>
        )}

        <Tooltip hover={hover} width={width}>
          {hover && (
            <>
              <div className="mb-1 text-white/85">
                {t.mach} {fixed(series[0].points[hover.index].mach)}
              </div>

              {series.map((entry) => {
                const point = entry.points[hover.index];

                return curveType === "forces" ? (
                  <div key={entry.key} className="py-0.5">
                    <TooltipRow
                      colour={entry.colour}
                      value={entry.label}
                    />
                    <TooltipRow
                      value={`${format(Math.round(point.thrust))} KN`}
                      label={t.thrustKey}
                    />
                    <TooltipRow
                      value={`${format(Math.round(point.drag))} KN`}
                      label={t.dragKey}
                    />
                  </div>
                ) : (
                  <TooltipRow
                    key={entry.key}
                    colour={entry.colour}
                    value={`${format(Math.round(curveValue[curveType](point) * 10) / 10)} ${t.curveUnits[curveType]}`}
                    label={entry.label}
                  />
                );
              })}
            </>
          )}
        </Tooltip>
      </div>

      {missing.length > 0 && (
        <p className="mt-4 font-mono text-xs sm:text-[10px] uppercase tracking-[.2em] text-white/50">
          {t.noModel} {missing.map((slug) => designations[slug]).join(", ")}
        </p>
      )}

      <p className="mt-5 border-l-2 border-amber-300/70 pl-4 text-sm leading-6 text-white/60">
        {t.modelNotice(format(calibration.altitude), calibration.load * 100)}
      </p>

      {selected
        .filter((slug) => alternatives[slug] && (engines[slug] ?? "current") !== "current")
        .map((slug) => {
          const alternative = alternativesByLanguage[language][slug];

          return (
            <p
              key={slug}
              className="mt-3 border-l-2 border-amber-300/70 pl-4 text-sm leading-6 text-white/60"
            >
              {t.alternativeNotice(
                alternative.engine,
                alternative.thrust.display,
                alternative.current,
              )}
            </p>
          );
        })}
    </div>
  );
}

function Select({ label, value, onChange, options }) {
  return (
    <label className="block">
      <span className="mb-2 block font-mono text-xs sm:text-[10px] uppercase tracking-[.2em] text-white/50">
        {label}
      </span>

      <span className="relative block">
        <select
          value={value}
          onChange={(event) => onChange(event.target.value)}
          className="w-full appearance-none border border-white/15 bg-[#050708] py-2.5 pl-3 pr-9 font-mono text-xs sm:text-[11px] uppercase tracking-[.14em] text-white/85 [color-scheme:dark] transition hover:border-lime-300"
        >
          {options.map((option) => (
            <option key={option.key} value={option.key}>
              {option.label}
            </option>
          ))}
        </select>

        <ChevronDown
          size={14}
          className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-white/50"
        />
      </span>
    </label>
  );
}

function LegendKey({ children, label }) {
  return (
    <span className="flex items-center gap-2">
      <svg width="14" height="14" aria-hidden="true" className="shrink-0">
        {children}
      </svg>
      {label}
    </span>
  );
}

export function Plots({ selected, colours }) {
  const t = useText(text);
  const language = useLanguage();
  const shownMetrics = metricsByLanguage[language];
  const [chart, setChart] = useState("scatter");
  const [xKey, setXKey] = useState("length");
  const [yKey, setYKey] = useState("mtow");
  const [curveType, setCurveType] = useState("forces");
  const [altitude, setAltitude] = useState(String(calibration.altitude));
  const [load, setLoad] = useState(String(calibration.load));
  // The engine shown for aircraft with an alternative one, keyed by slug.
  const [engines, setEngines] = useState({});
  const format = useNumberFormat();

  const props = {
    selected,
    colours,
    t,
    shownMetrics,
  };

  return (
    <div className="grid gap-6 lg:grid-cols-[18rem_1fr]">
      <div className="border border-white/10 bg-[#050708]/80 p-5">
        <h3 className="mb-5 font-mono text-xs sm:text-[10px] uppercase tracking-[.2em] text-white/50">
          {t.settings}
        </h3>

        <div
          className="grid gap-1 sm:grid-cols-2 lg:grid-cols-1"
          role="group"
          aria-label={t.chartGroup}
        >
          {chartTypes.map((type) => (
            <button
              key={type}
              type="button"
              onClick={() => setChart(type)}
              aria-pressed={chart === type}
              className={`border px-3 py-2.5 text-left font-mono text-xs sm:text-[11px] uppercase tracking-[.16em] transition ${
                chart === type
                  ? "border-lime-300 bg-lime-300/10 text-lime-300"
                  : "border-white/15 text-white/60 hover:border-lime-300 hover:text-lime-300"
              }`}
            >
              {t.chartTypes[type]}
            </button>
          ))}
        </div>

        <p className="mt-5 text-sm leading-6 text-white/55">
          {t.descriptions[chart]}
        </p>

        {chart === "performance" && (
          <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
            <Select
              label={t.curve}
              value={curveType}
              onChange={setCurveType}
              options={curveTypes.map((key) => ({
                key,
                label: t.curves[key],
              }))}
            />
            <Select
              label={t.altitude}
              value={altitude}
              onChange={setAltitude}
              options={altitudes.map((value) => ({
                key: String(value),
                label: value === 0 ? t.seaLevel : `${format(value)} m`,
              }))}
            />
            <Select
              label={t.load}
              value={load}
              onChange={setLoad}
              options={loads.map((value) => ({
                key: String(value),
                label: t.loadOption(value * 100),
              }))}
            />

            {selected
              .filter((slug) => alternatives[slug])
              .map((slug) => (
                <Select
                  key={slug}
                  label={t.engineLabel(designations[slug])}
                  value={engines[slug] ?? "current"}
                  onChange={(value) =>
                    setEngines((current) => ({
                      ...current,
                      [slug]: value,
                    }))
                  }
                  options={[
                    {
                      key: "current",
                      label: t.engineOptions.current(alternatives[slug].current),
                    },
                    {
                      key: "alternative",
                      label: t.engineOptions.alternative(alternatives[slug].engine),
                    },
                    {
                      key: "both",
                      label: t.engineOptions.both,
                    },
                  ]}
                />
              ))}
          </div>
        )}

        {chart === "scatter" && (
          <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
            <Select
              label={t.xAxis}
              value={xKey}
              onChange={setXKey}
              options={shownMetrics}
            />
            <Select
              label={t.yAxis}
              value={yKey}
              onChange={setYKey}
              options={shownMetrics}
            />
          </div>
        )}

        <div className="mt-6 grid gap-2 border-t border-white/10 pt-5 font-mono text-xs sm:text-[10px] uppercase tracking-[.16em] text-white/60">
          {selected.map((slug, slot) => (
            <LegendKey key={slug} label={designations[slug]}>
              {chart === "profile" || chart === "performance" ? (
                <line x1="0" x2="14" y1="7" y2="7" stroke={colours[slot]} strokeWidth="2" />
              ) : (
                <circle cx="7" cy="7" r="5" fill={colours[slot]} />
              )}
            </LegendKey>
          ))}

          {chart === "performance" &&
            selected
              .filter((slug) => alternatives[slug] && engines[slug] === "both")
              .map((slug) => (
                <LegendKey
                  key={`${slug}-alternative`}
                  label={`${designations[slug]} ${alternatives[slug].engine}`}
                >
                  <line
                    x1="0"
                    x2="14"
                    y1="7"
                    y2="7"
                    stroke={colours[selected.indexOf(slug)]}
                    strokeOpacity="0.5"
                    strokeWidth="2"
                  />
                </LegendKey>
              ))}

          {chart !== "performance" && (
            <LegendKey label={t.others}>
              {chart === "profile" ? (
                <line x1="0" x2="14" y1="7" y2="7" stroke="rgba(255,255,255,.3)" />
              ) : (
                <circle cx="7" cy="7" r="4" fill={otherMark} />
              )}
            </LegendKey>
          )}

          {chart === "performance" && curveType === "forces" && (
            <>
              <LegendKey label={t.thrustKey}>
                <line x1="0" x2="14" y1="7" y2="7" stroke="rgba(255,255,255,.6)" strokeWidth="2" />
              </LegendKey>
              <LegendKey label={t.dragKey}>
                <line x1="0" x2="14" y1="7" y2="7" stroke="rgba(255,255,255,.6)" strokeWidth="2" strokeDasharray="4 3" />
              </LegendKey>
            </>
          )}

          {chart === "scatter" && (
            <>
              <LegendKey label={t.filled}>
                <circle cx="7" cy="7" r="4" fill="rgba(255,255,255,.6)" />
              </LegendKey>
              <LegendKey label={t.hollow}>
                <circle cx="7" cy="7" r="4" fill="none" stroke="rgba(255,255,255,.6)" strokeWidth="2" />
              </LegendKey>
            </>
          )}

          {chart === "programme" && (
            <>
              <LegendKey label={t.firstFlightKey}>
                <circle cx="7" cy="7" r="4" fill="none" stroke="rgba(255,255,255,.6)" strokeWidth="2" />
              </LegendKey>
              <LegendKey label={t.serviceKey}>
                <circle cx="7" cy="7" r="4" fill="rgba(255,255,255,.6)" />
              </LegendKey>
            </>
          )}
        </div>
      </div>

      <div className="min-w-0 border border-white/10 bg-[#050708]/80 p-4 md:p-6">
        <div className="mb-4 flex items-baseline justify-between gap-4">
          <h3 className="text-lg font-semibold tracking-[-.02em] md:text-xl">
            {t.chartTypes[chart]}
          </h3>
        </div>

        {chart === "scatter" && <ScatterPlot xKey={xKey} yKey={yKey} {...props} />}
        {chart === "profile" && <ProfilePlot {...props} />}
        {chart === "programme" && <ProgrammePlot {...props} />}
        {chart === "performance" && (
          <PerformancePlot
            {...props}
            curveType={curveType}
            altitude={Number(altitude)}
            load={Number(load)}
            engines={engines}
          />
        )}
      </div>
    </div>
  );
}
