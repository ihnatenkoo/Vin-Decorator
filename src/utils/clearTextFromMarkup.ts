export const clearTextFromMarkup = (text: string): string =>
	text.replace(/(<(\/?[^>]+)>)/g, '');
