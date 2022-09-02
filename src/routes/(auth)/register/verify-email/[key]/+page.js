import { redirect } from '@sveltejs/kit';


export async function load({ params, session, fetch }) {
	if (session.user) {
		throw redirect(302, '/');
	}

	const key = params.key;

	const res = await fetch('/auth/verify-email', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify({
			key
		})
	});

	if (res.ok) {
		return {
			message: 'success'
		};
	}

	return {
		message: 'invalid'
	};
}
