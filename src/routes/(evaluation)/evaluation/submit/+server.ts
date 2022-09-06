import * as api from '$lib/api';
import { error, json } from '@sveltejs/kit';

export async function POST({ request, locals }) {
	const values = await request.json();
	const req = await api.patch(`accounts/${locals.user.username}/`, values, locals.access);

	if (req.ok) {
		return new Response(JSON.stringify({ success: true }));
	}
	throw error(400, 'Something went wrong');
}
