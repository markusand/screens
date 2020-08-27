export const pad = (num, amt = 2) => `${num}`.padStart(amt, '0');

export const decimal = (num, digits = 2) => num.toFixed(digits);
