import { loadTranslations } from '$lib/i18n/translations';

export const load = async ({ url, data }) => {
	const { pathname } = url;

	const initLocale = data.lang ?? 'fr'; // get from cookie, user session, ...

	await loadTranslations(initLocale, pathname); // keep this just before the `return`
	return data;
};
