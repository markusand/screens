export const uppercase = txt => txt.toUpperCase();

export const lowercase = txt => txt.toLowerCase();

export const capitalize = txt => txt.charAt(0).toUpperCase() + txt.slice(1);

export const truncate = (txt, max = 100) => (txt.length < max ? txt : `${txt.slice(0, max)}...`);
