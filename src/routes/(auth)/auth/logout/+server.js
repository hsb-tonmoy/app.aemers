import * as api from '$lib/api';
import { json } from '@sveltejs/kit';

export async function POST() {
	const res = await api.post('auth/logout/');
	const headers = new Headers();
	headers.append('Set-Cookie', `access=deleted; Path=/; Max-Age=-1; HttpOnly`);
	headers.append('Set-Cookie', `refresh=deleted; Path=/; Max-Age=-1; HttpOnly`);
	headers.append('Set-Cookie', `user=deleted; Path=/; Max-Age=-1; HttpOnly`);
	return new Response(
		JSON.stringify({
			ok: true
		}),
		{
			headers
		}
	);
}
