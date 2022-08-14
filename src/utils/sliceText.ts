export const sliceText = (string: string): string => {
	const index = string.indexOf('.');
	return string.slice(0, index);
};
