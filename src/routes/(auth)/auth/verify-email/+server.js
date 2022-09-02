import * as api from '$lib/api';
import { json } from '@sveltejs/kit';

export async function POST({ request }) {
	const { key } = await request.json();

	const res = await api.post('auth/registration/verify-email/', { key });

	if (res.detail === 'ok') {
		return json(res, { status: 200 });
	}

	return json(res, {
		status: 400
	});
}
