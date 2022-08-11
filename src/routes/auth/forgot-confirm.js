import * as api from '$lib/api.js';

export async function POST({ request }) {
	const json = await request.json();

	const res = await api.post('auth/password/reset/confirm/', json);

	if (!res.detail) {
		return {
			status: 400,
			body: res
		};
	}

	return {
		status: 200,
		body: res
	};
}
