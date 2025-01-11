import { API_TOKEN, API_URL } from '$env/static/private';

type sectionBackend = {
	id: number;
	text: string;
	name: string;
	createdAt: string;
	updatedAt: string;
	publishedAt: string;
	locale: string;
};
type section = {
	title: string;
	text: string;
};

export async function load({ fetch, parent }) {
	const data = await parent();
	const sectionsFetch = await fetch(`${API_URL}/sections?sort=order&locale=${data.lang}`, {
		headers: { Authorization: `bearer ${API_TOKEN}` }
	});
	const sectionsJson: { data: sectionBackend[] } = await sectionsFetch.json();
	const sections: section[] = [];

	sectionsJson.data.forEach((section) => {
		sections.push({
			title: section.name,
			text: section.text.replaceAll('.', '.\n')
		});
	});

	return {
		sections
	};
}
