import { API__TOKEN, API_URL } from '$env/static/private';

import { fail } from '@sveltejs/kit';
import { superValidate } from 'sveltekit-superforms/server';
import { valibot } from 'sveltekit-superforms/adapters';
import { contactForm } from './formSchema';

export const load = async () => {
	// Server API:
	const form = await superValidate(valibot(contactForm));

	// Always return { form } in load and form actions.
	return { form };
};

export const actions = {
	default: async ({ request }) => {
		const form = await superValidate(request,valibot( contactForm));

		if (!form.valid) {
			return fail(400, { form });
		}

		const sectionsFetch = await fetch(`${API_URL}/contacts`, {
			headers: { Authorization: `bearer ${API__TOKEN}`, 'Content-Type': 'application/json' },
			method: 'POST',
			body: JSON.stringify({
				data: {
					email: form.data.email,
					subject: form.data.subject,
					message: form.data.message
				}
			})
		});

		if (sectionsFetch.ok) {
			return { form };
		}
		return fail(400, { form });
	}
};
