import { redirect } from '@sveltejs/kit';

import * as api from '$lib/api';

export async function load({ cookies, locals }) {
	// const res = await api.post('auth/logout/', locals.access);

	cookies.set('user', '', {
		httpOnly: true,
		path: '/',
		maxAge: 0
	});
	cookies.set('access', '', {
		httpOnly: true,
		path: '/',
		maxAge: 0
	});
	cookies.set('refresh', '', {
		httpOnly: true,
		path: '/',
		maxAge: 0
	});
	throw redirect(302, '/login');
}
