import * as api from '$lib/api.js';

export async function POST({ request }) {
	const json = await request.json();
	const body = await api.post('auth/registration/', {
		email: json.email,
		first_name: json.first_name,
		last_name: json.last_name,
		password1: json.password,
		password2: json.passwordConfirmation
	});

	if (body.errors) {
		return {
			status: 400,
			body
		};
	}

	return {
		status: 201,
		body
	};
}
