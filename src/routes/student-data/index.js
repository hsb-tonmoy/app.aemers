import * as api from '$lib/api';

export async function post({ request }) {
	const body = await request.json();
	const res = await api.post('student_data/', body);

	if (res.status === 400) {
		return {
			status: 400,
			ok: false,
			body: res
		};
	}

	return {
		status: 201,
		ok: true,
		body: res
	};
}
