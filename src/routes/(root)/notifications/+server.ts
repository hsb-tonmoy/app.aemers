import * as api from '$lib/api';
import { error } from '@sveltejs/kit';

export async function GET({ url, request, locals }) {
	const res = await api.get('notifications/' + url.search, locals.access);

	if (res.ok) {
		return new Response(JSON.stringify({ success: true }));
	} else {
		throw error(500, 'Something went wrong');
	}
}

export async function PATCH({ url, request, locals }) {
	const values = await request.json();
	const id = url.searchParams.get('id');

	const req = await api.patch(`notifications/${id}`, values, locals.access);

	if (req.ok) {
		return new Response(JSON.stringify({ success: true }));
	}

	throw error(req.status, req.statusText);
}
