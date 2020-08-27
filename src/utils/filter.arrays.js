export const isObject = obj => obj instanceof Object
	&& Object.getPrototypeOf(obj) === Object.prototype;

export const join = (arr, sep = ', ', field) => arr.map(i => i[field] || i).join(sep);

export const search = (arr, needle, field) => {
	if (!needle) return arr;
	return arr.filter(item => {
		if (isObject(item)) {
			return field
				? item[field]?.includes(needle)
				: Object.values(item).some(value => value.includes(needle));
		}
		return item.includes(needle);
	});
};

export const shuffle = arr => arr
	.map(item => ({ sort: Math.random(), item }))
	.sort((a, b) => a.sort - b.sort)
	.map(({ item }) => item);
