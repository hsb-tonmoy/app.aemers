import * as api from '$lib/api';
import { error } from '@sveltejs/kit';

export async function load({ locals }) {
	const sessions_fetch = await api.get(
		`mock_visa_interview_session/?user=${locals.user.pk}`,
		locals.access
	);
	const sessions_data = await sessions_fetch.json();

	if (!sessions_fetch.ok) {
		throw error(sessions_fetch.status, 'Error getting sessions');
	}

	return {
		sessions: sessions_data
	};
}
