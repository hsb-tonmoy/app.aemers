import { derived, writable } from 'svelte/store';

export const application_status = writable();
export const application_percentage = derived(application_status, ($application_status) => {
	const items = [
		$application_status.application_started,
		$application_status.file_opening,
		$application_status.pre_application_form,
		$application_status.documents_upload,
		$application_status.applicaton_submission,
		$application_status.i_20_upload,
		$application_status.ds_160_filed,
		$application_status.sevis_payment,
		$application_status.visa_fee_payment,
		$application_status.visa_interview,
		$application_status.pre_departure_session,
		$application_status.welcome_to_usa
	];
	const done = items.filter((item) => item === 2 || item == true).length;

	const percentage = Math.round((((done + 1) / items.length) * 100) / 10) * 10;
	return percentage;
});
export const application_steps = writable();
