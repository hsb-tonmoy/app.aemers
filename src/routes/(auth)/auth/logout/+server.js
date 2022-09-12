import * as api from '$lib/api';

export async function POST({ locals }) {
	const res = await api.post('auth/logout/', locals.access);
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
