import { application_status } from '$lib/data/stores';
import { redirect } from '@sveltejs/kit';
import { get } from 'svelte/store';

export async function load({ parent }) {
	const { user } = await parent();
	if (!user) {
		throw redirect(302, '/login');
	}

	console.log(get(application_status));

	// if (get(application_status).isEvaluated) {
	// 	throw redirect(302, '/');
	// }

	return {};
}
