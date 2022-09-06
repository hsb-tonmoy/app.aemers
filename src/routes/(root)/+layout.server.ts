import { redirect } from '@sveltejs/kit';

export async function load({ locals }) {
	if (!locals.user) {
		throw redirect(302, '/login');
	}

	if (locals.user && !locals.user.isEvaluated) {
		throw redirect(302, '/evaluation');
	}

	return {};
}
