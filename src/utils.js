export const clamp = (num, a, b) =>
  Math.max(Math.min(num, Math.max(a, b)), Math.min(a, b));

export const range = (start, end) =>
  Array(end - start)
    .fill()
    .map((x, i) => i + start);
