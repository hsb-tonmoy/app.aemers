import { application_status, application_steps } from '$lib/data/stores';
import { redirect } from '@sveltejs/kit';
import { get } from 'svelte/store';

export async function load() {
	if (get(application_status).application_started) {
		throw redirect(302, '/application/file_opening');
	} else {
		throw redirect(302, '/welcome_application');
	}
}
