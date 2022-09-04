import { writable } from 'svelte/store';

export const evaluationData = writable({
	first_name: '',
	last_name: '',
	phone_number: '',
	country: '',
	degree: '',
	major: '',
	education: '',
	english_proficiency: '',
	english_proficiency_score: '',
	message: ''
});
