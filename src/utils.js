export function capitalise(txt) {
  if (!txt) return 'n/a';
  return txt.replace(/_/g, ' ').replace(/\w\S*/g, function (txt) {
    return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
  });
}

export function round(value) {
  if (!value) return 0;
  return Math.floor(value * 100) / 100;
}

export function calculateAngle({ x, y, offset = false }) {
  let angle;
  if (Math.atan2(y, x) >= 0) angle = Math.atan2(y, x) * (180 / Math.PI);
  else angle = (Math.atan2(y, x) + 2 * Math.PI) * (180 / Math.PI);

  if (!offset) return angle;
  return offsetCalc(angle);
}

function offsetCalc(angle) {
  if (angle - 90 >= 0) return angle - 90;
  else return angle + 271;
}

export function calculateDirection(angle) {
  if (angle >= 22.5 && angle < 67.5) return 'NE';
  if (angle >= 67.5 && angle < 112.5) return 'E';
  if (angle >= 112.5 && angle < 157.5) return 'SE';
  if (angle >= 157.5 && angle < 202.5) return 'S';
  if (angle >= 202.5 && angle < 247.5) return 'SW';
  if (angle >= 247.5 && angle < 292.5) return 'W';
  if (angle >= 292.5 && angle < 337.5) return 'NW';
  return 'N';
}
