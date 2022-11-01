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
