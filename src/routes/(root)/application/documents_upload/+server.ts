import * as api from '$lib/api';
import { error } from '@sveltejs/kit';

export async function POST({ request, locals }) {
	const values = await request.formData();
	// const res = await api.post(`document/`, values, locals.access, true);

	const res = await fetch('http://127.0.0.1:8000/api/v1/document/', {
		method: 'POST',
		headers: {
			Authorization: `JWT ${locals.access}`
		},
		body: values
	});

	console.log(res);
	console.log(await res.json());

	if (!res.ok) {
		throw error(res.status, 'Something went wrong');
	}
	return new Response(JSON.stringify({ success: true }));
}
