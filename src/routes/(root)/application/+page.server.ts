import { redirect } from '@sveltejs/kit';

export async function load({ parent }) {
	const { application_status } = await parent();

	if (application_status.application_started) {
		throw redirect(302, '/application/file_opening');
	} else if (!application_status.application_started) {
		throw redirect(302, '/welcome_application');
	}
}
