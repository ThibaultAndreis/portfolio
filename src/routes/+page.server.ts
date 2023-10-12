import { API_TOKEN, API_URL } from '$env/static/private';
type sectionBackend = {
	id: number;
	attributes: {
		text: string;
		name: string;
		createdAt: string;
		updatedAt: string;
		publishedAt: string;
		locale: string;
	};
};
type section = {
	title: string;
	text: string;
	angleA: string;
	angleB: string;
	colors: string;
	width: string;
};

const colors = [
	'bg-purple-300 dark:bg-purple-800',
	'bg-emerald-400 dark:bg-emerald-900',
	'bg-red-400 dark:bg-red-900',
	'bg-blue-400 dark:bg-blue-900',
	'bg-pink-400 dark:bg-pink-900'
];
const widths = ['max-w-3xl', 'max-w-2xl', 'max-w-xl', 'max-w-lg', 'max-w-md'];

export async function load({ fetch, parent }) {
	const data = await parent();
	const sectionsFetch = await fetch(`${API_URL}/sections?sort=order&locale=${data.lang}`, {
		headers: { Authorization: `bearer ${API_TOKEN}` }
	});
	const sectionsJson: { data: sectionBackend[] } = await sectionsFetch.json();

	const sections: section[] = [];

	sectionsJson.data.forEach((section) => {
		sections.push({
			title: section.attributes.name,
			text: section.attributes.text.replaceAll('.', '.\n'),
			angleA: (Math.round(Math.random()) > 0 ? '' : '-') + (Math.random() * (10 - 2) + 2).toFixed(),
			angleB: (Math.round(Math.random()) > 0 ? '' : '-') + (Math.random() * (7 - 1) + 1).toFixed(),
			colors: colors[Math.round(Math.random() * 4)],
			width: widths[Math.round(Math.random() * 4)]
		});
	});

	return {
		sections
	};
}
