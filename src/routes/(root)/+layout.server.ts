import * as api from '$lib/api';
import { error, redirect } from '@sveltejs/kit';

export async function load({ locals }) {
	if (!locals.user) {
		throw redirect(302, '/login');
	}

	if (locals.user && !locals.user.isEvaluated) {
		throw redirect(302, '/evaluation');
	}

	const application_status_fetch = await api.get(
		`application_status/${locals.user.pk}/`,
		locals.access
	);

	const application_status_data = await application_status_fetch.json();

	if (!application_status_fetch.ok) {
		throw error(application_status_fetch.status, 'Error fetching application status');
	}

	return {
		application_status: application_status_data
	};
}
