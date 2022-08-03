import * as api from '$lib/api.js';

export async function post({ request }) {
	const json = await request.json();

	const res = await api.post('auth/password/reset/', json);

	if (res.errors) {
		return {
			status: 400,
			res
		};
	}

	return {
		status: 200,
		res
	};
}
