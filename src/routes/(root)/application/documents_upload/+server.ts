import * as api from '$lib/api';
import { error } from '@sveltejs/kit';

export async function POST({ request, locals }) {
	const values = await request.formData();
	console.log(values);
	// const res = await api.patch(`document/`, values, locals.access);

	// if (!res.ok) {
	// 	throw error(res.status, 'Something went wrong');
	// }
	return new Response(JSON.stringify({ success: true }));
}
