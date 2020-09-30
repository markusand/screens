export const pad = (num, amt = 2) => `${num}`.padStart(amt, '0');

export const decimals = (num, digits = 2) => num.toFixed(digits);

export const constrain = (num, min, max) => Math.min(Math.max(num, min), max);

export const round = (num, digits = 2) => {
	const pow = 10 ** digits;
	return Math.round(num * pow) / pow;
};
