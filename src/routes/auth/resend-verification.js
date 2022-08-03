import * as api from '$lib/api';

export async function post({ request }) {
	const { email } = await request.json();

	const res = await api.post('auth/registration/resend-email/', { email });

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
