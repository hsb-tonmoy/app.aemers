import * as api from '$lib/api';

import { error, redirect } from '@sveltejs/kit';

export async function load({ parent }) {
	const { user, access } = await parent();

	if (!user) {
		throw redirect(302, '/login');
	}

	const application_status_fetch = await api.get(`application_status/${user.pk}/`, access);

	const application_status_data = await application_status_fetch.json();

	if (!application_status_fetch.ok) {
		throw error(application_status_fetch.status, 'Error fetching application status');
	}

	if (!application_status_data.isEvaluated) {
		throw redirect(302, '/evaluation');
	}

	const application_steps_data = [
		{
			text: 'Open a File',
			path: '/application/file_opening',

			status: application_status_data.file_opening
		},
		{
			text: 'Orientation',
			path: '/application/orientation',

			status: application_status_data.orientation
		},
		{
			text: 'Pre-Application Form',
			path: '/application/pre_application_form',

			status: application_status_data.pre_application_form
		},
		{
			text: 'Documents Upload',
			path: '/application/documents_upload',

			status: application_status_data.documents_upload
		},
		{
			text: 'I-20 Upload',
			path: '/application/i_20_upload',

			status: application_status_data.i_20_upload
		},
		{
			text: 'DS-160 Filed',
			path: '/application/ds_160_filed',

			status: application_status_data.ds_160_filed
		},
		{
			text: 'SEVIS Payment',
			path: '/application/sevis_payment',

			status: application_status_data.sevis_payment
		},
		{
			text: 'Visa Fee Payment',
			path: '/application/visa_fee_payment',

			status: application_status_data.visa_fee_payment
		},
		{
			text: 'Visa Interview',
			path: '/application/visa_interview',

			status: application_status_data.visa_interview
		},
		{
			text: 'Pre-Departure Session',
			path: '/application/pre_departure_session',

			status: application_status_data.pre_departure_session
		},
		{
			text: 'Welcome to USA',
			path: '/application/welcome_to_usa',

			status: application_status_data.welcome_to_usa
		}
	];

	return {
		application_status: application_status_data,
		application_steps: application_steps_data
	};
}
