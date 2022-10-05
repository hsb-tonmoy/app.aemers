import * as api from '$lib/api';

import { error, redirect } from '@sveltejs/kit';

export async function load({ parent }) {
	const { user, access } = await parent();

	if (!user) {
		throw redirect(302, '/login');
	}

	const application_status_fetch = await api.get(`application_status/${user.pk}/`, access);

	const application_status_data = await application_status_fetch.json();

	if (!application_status_fetch.ok) {
		throw error(application_status_fetch.status, 'Error fetching application status');
	}

	if (!application_status_data.isEvaluated) {
		throw redirect(302, '/evaluation');
	}

	return {
		application_status: application_status_data
	};
}
