import * as api from '$lib/api';
import { error } from '@sveltejs/kit';

export async function load({ locals }) {
	const questions_fetch = await api.get(`mock_visa_interview_question/`, locals.access);
	const questions_data = await questions_fetch.json();

	return {
		questions: questions_data
	};
}

export const actions = {
	upload: async ({ request, locals }) => {
		const data = await request.formData();

		const res = await api.post(`mock_visa_interview_answer/`, data, locals.access, true);

		if (!res.ok) {
			console.log(res);
			console.log(await res.json());
			throw error(res.status, 'Error uploading audio');
		}

		return { success: true };
	}
};
