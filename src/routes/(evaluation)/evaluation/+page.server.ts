import * as api from '$lib/api';
import { error } from '@sveltejs/kit';

export async function POST({ request, locals }) {
	const values = await request.json();
	const req = await api.patch(`accounts/${locals.user.username}/`, values, locals.access);

	if (req.ok) {
		return {
			status: 200,
			ok: true
		};
	}
	return {
		status: 400,
		ok: false
	};
}
