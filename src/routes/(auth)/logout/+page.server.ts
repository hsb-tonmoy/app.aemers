export async function load({ cookies }) {
	await cookies.set('user', '', {
		httpOnly: true,
		path: '/',
		maxAge: 0
	});
	await cookies.set('access', '', {
		httpOnly: true,
		path: '/',
		maxAge: 0
	});
	await cookies.set('refresh', '', {
		httpOnly: true,
		path: '/',
		maxAge: 0
	});
	return { ok: true };
}
