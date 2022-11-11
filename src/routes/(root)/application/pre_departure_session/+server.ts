import * as api from '$lib/api';
import { error } from '@sveltejs/kit';

export async function POST({ request, locals }) {
	const data = await request.json();
	const res = await api.post('pre_departure_sessions_participants/', data, locals.access, false);
	if (res.status === 201) {
		return {
			ok: true,
			status: 200
		};
	}
	throw error(res.status, res.statusText);
}
