import * as api from '$lib/api';

export async function POST({ request }) {
	const { key } = await request.json();

	const res = await api.post('auth/registration/verify-email/', { key });

	if (res.detail === 'ok') {
		return {
			status: 200,
			body: res
		};
	}

	return {
		status: 400,
		body: res
	};
}
