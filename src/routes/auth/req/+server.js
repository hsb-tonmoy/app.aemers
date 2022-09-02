import * as api from '$lib/api.js';

export async function GET({ locals }) {
	const res = await api.get('student_data/', locals.user && locals.access);

	if (res.status === 401) {
		return {
			status: 401,
			body: json
		};
	}

	return {
		status: 200,
		body: res
	};
}
