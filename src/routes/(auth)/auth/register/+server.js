import * as api from '$lib/api.js';
import { json } from '@sveltejs/kit';

export async function POST({ request }) {
	const req = await request.json();

	const body = await api.post('auth/registration/', {
		email: req.email,
		password1: req.password,
		password2: req.passwordConfirmation
	});

	if (!body.email) {
		return json(body, {
			status: 400
		});
	}

	return json(body, {
		status: 201
	});
}
