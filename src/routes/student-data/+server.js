import * as api from '$lib/api';
import { json } from '@sveltejs/kit';

export async function POST({ request }) {
	const body = await request.json();
	const res = await api.post('student_data/', body);

	if (res.status === 400) {
		return json(res, {
			status: 400
		});
	}

	return json(res, {
		status: 201
	});
}
