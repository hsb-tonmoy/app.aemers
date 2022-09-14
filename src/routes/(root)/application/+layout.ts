import { application_status } from '$lib/data/stores';
import { redirect } from '@sveltejs/kit';
import { get } from 'svelte/store';

export async function load() {
	const application_status_data = get(application_status);

	if (!application_status_data.application_started) {
		throw redirect(302, '/welcome_application');
	} else {
		return;
	}
}
