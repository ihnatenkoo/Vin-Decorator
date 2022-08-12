export const clearTextFromMarkup = (text: string): string => {
	return text.replace(/(<(\/?[^>]+)>)/g, '');
};
