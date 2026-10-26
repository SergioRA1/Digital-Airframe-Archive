// A deliberately simple performance model for the compare page's speed
// curves. It is not measured data: real thrust and drag curves for these
// aircraft are not published. It combines published figures (thrust per
// engine, engine count, max takeoff weight, wingspan, top speed) with generic
// textbook shapes:
//
// - Thrust falls with air density and rises with speed (ram effect).
// - Zero-lift drag climbs through the transonic drag rise, then eases off.
// - Induced drag depends on weight and wingspan.
//
// Each aircraft's drag is scaled so that, at 11,000 m and 80% of max takeoff
// weight, thrust equals drag exactly at its published top speed.

const gravity = 9.80665;
const seaLevelDensity = 1.225;
const oswaldEfficiency = 0.8;

export const calibration = {
  altitude: 11000,
  load: 0.8,
};

export const altitudes = [0, 5000, 11000];
export const loads = [0.6, 0.8, 1];

// International Standard Atmosphere, up to the lower stratosphere.
export function atmosphere(altitude) {
  const temperature = 288.15 - 0.0065 * Math.min(altitude, 11000);
  const density =
    altitude <= 11000
      ? seaLevelDensity * (temperature / 288.15) ** 4.2559
      : 0.36392 * Math.exp(-(altitude - 11000) / 6341.6);

  return {
    density,
    speedOfSound: Math.sqrt(1.4 * 287.05 * temperature),
  };
}

function thrustLapse(mach, density) {
  return (density / seaLevelDensity) ** 0.7 * (1 + 0.55 * mach);
}

// Zero-lift drag relative to subsonic: rises smoothly from Mach 0.85 to 1.15,
// then eases off towards 1.6 times its subsonic value.
function dragRise(mach) {
  if (mach <= 0.85) {
    return 1;
  }

  if (mach <= 1.15) {
    const progress = (mach - 0.85) / 0.3;

    return 1 + 1.2 * progress * progress * (3 - 2 * progress);
  }

  return 1.6 + 0.6 * Math.exp(-(mach - 1.15) / 0.8);
}

function inducedDrag(weight, pressure, wingspan) {
  return weight ** 2 / (pressure * Math.PI * oswaldEfficiency * wingspan ** 2);
}

// `thrust` is per engine in kN, `mtow` in kg, `wingspan` in m, `topSpeed` in
// Mach. Returns null when the figures can't produce a sensible model.
export function buildModel({ thrust, engines, mtow, wingspan, topSpeed }) {
  const { density, speedOfSound } = atmosphere(calibration.altitude);
  const speed = topSpeed * speedOfSound;
  const pressure = 0.5 * density * speed ** 2;
  const weight = calibration.load * mtow * gravity;
  const staticThrust = engines * thrust * 1000;
  // The drag area that makes thrust and drag meet at the published top speed.
  const dragArea =
    (staticThrust * thrustLapse(topSpeed, density) -
      inducedDrag(weight, pressure, wingspan)) /
    (pressure * dragRise(topSpeed));

  return dragArea > 0
    ? {
        staticThrust,
        dragArea,
        mtow,
        wingspan,
      }
    : null;
}

// Thrust and drag in kN, acceleration in m/s², specific excess power in m/s.
export function evaluate(model, mach, altitude, load) {
  const { density, speedOfSound } = atmosphere(altitude);
  const speed = mach * speedOfSound;
  const pressure = 0.5 * density * speed ** 2;
  const mass = load * model.mtow;
  const weight = mass * gravity;
  const thrust = model.staticThrust * thrustLapse(mach, density);
  const drag =
    pressure * model.dragArea * dragRise(mach) +
    inducedDrag(weight, pressure, model.wingspan);

  return {
    mach,
    thrust: thrust / 1000,
    drag: drag / 1000,
    acceleration: (thrust - drag) / mass,
    excessPower: ((thrust - drag) * speed) / weight,
  };
}

export const machRange = {
  from: 0.2,
  to: 3,
  step: 0.02,
};

export function curve(model, altitude, load) {
  const count = Math.round((machRange.to - machRange.from) / machRange.step);

  return Array.from({ length: count + 1 }, (_, index) =>
    evaluate(
      model,
      Math.round((machRange.from + index * machRange.step) * 100) / 100,
      altitude,
      load,
    ),
  );
}

// The highest speed reached in level flight: where thrust last exceeds drag,
// interpolated between curve points.
export function topSpeedOf(points) {
  const last = points.findLastIndex((point) => point.acceleration >= 0);

  if (last === -1) {
    return null;
  }

  const point = points[last];
  const next = points[last + 1];

  if (!next) {
    return point.mach;
  }

  const share = point.acceleration / (point.acceleration - next.acceleration);

  return point.mach + share * (next.mach - point.mach);
}
