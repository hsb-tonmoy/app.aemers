import * as api from '$lib/api.js';
import { json } from '@sveltejs/kit';

export async function POST({ request }) {
	const req = await request.json();

	const res = await api.post('auth/password/reset/confirm/', req);

	if (!res.detail) {
		return json(res, {
			status: 400
		});
	}

	return json(res, { status: 200 });
}
