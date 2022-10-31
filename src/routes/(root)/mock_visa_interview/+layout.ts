import { browser } from '$app/environment';
import { redirect } from '@sveltejs/kit';

export async function load() {
	if (browser) {
		if (!localStorage.getItem('mock_visa_welcome')) {
			throw redirect(307, '/mock_visa_interview/welcome');
		}
	}
}
