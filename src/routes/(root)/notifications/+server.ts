import * as api from '$lib/api';
import { error } from '@sveltejs/kit';

export async function PATCH({ url, request, locals }) {
	const values = await request.json();
	const id = url.searchParams.get('id');

	const req = await api.patch(`notifications/${id}`, values, locals.access);

	if (req.ok) {
		return new Response(JSON.stringify({ success: true }));
	}

	throw error(req.status, req.statusText);
}
