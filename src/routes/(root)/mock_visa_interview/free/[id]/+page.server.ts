import * as api from '$lib/api';
import { error } from '@sveltejs/kit';
export async function load({ params, locals }) {
	const { id } = params;

	const res = await api.get(`mock_visa_interview_session/${id}/`, locals.access);
	const data = await res.json();

	if (!res.ok) {
		console.log(res, data);
		throw error(res.status, 'Error fetching session data');
	}

	return {
		session: data
	};
}
