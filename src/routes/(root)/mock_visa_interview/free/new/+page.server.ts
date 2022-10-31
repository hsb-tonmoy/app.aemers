import * as api from '$lib/api';

export async function load({ locals }) {
	const questions_fetch = await api.get(`mock_visa_interview_question/`, locals.access);
	const questions_data = await questions_fetch.json();

	return {
		questions: questions_data
	};
}
