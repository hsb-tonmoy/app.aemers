import * as api from '$lib/api';

import { error, json } from '@sveltejs/kit';

export async function POST({ request, locals }) {
	const data = await request.json();

	const res = await api.post(`mock_visa_interview_session/`, data, locals.access, false);

	const session = await res.json();

	if (!res.ok) {
		console.log(res);
		console.log(session);
		throw error(res.status, 'Error creating session');
	}

	return json(session);
}

export async function DELETE({ locals, url }) {
	const id = url.searchParams.get('id');

	const res = await api.del(`mock_visa_interview_session/${id}/`, locals.access);

	if (!res.ok) {
		console.log(res);
		console.log(await res.json());
		throw error(res.status, 'Error deleting session');
	}

	return json({ success: true });
}
