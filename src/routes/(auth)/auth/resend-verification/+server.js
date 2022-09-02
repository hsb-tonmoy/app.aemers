import * as api from '$lib/api';
import { json } from '@sveltejs/kit';

export async function POST({ request }) {
	const { email } = await request.json();

	const res = await api.post('auth/registration/resend-email/', { email });

	if (res.detail === 'ok') {
		return json(res, { status: 200 });
	}

	return json(res, {
		status: 400
	});
}
