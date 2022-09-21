<script>
	import { Button, Error, Input, Label } from '$lib/components/Form';
	import { validator } from '@felte/validator-yup';
	import { createForm } from 'felte';
	import * as yup from 'yup';

	export let pre_application_form;

	let education_data = {
		level_of_study: '',
		name_of_board: '',
		name_of_institution: '',
		country_of_study: '',
		state_of_study: '',
		city_of_study: '',
		degree_achieved: '',
		grading_system: '',
		score: '',
		primary_language_of_institution: '',
		start_date: '',
		end_date: ''
	};

	let work_experience = [
		{
			company_name: '',
			company_address: '',
			position: '',
			job_profile: '',
			mode_of_salary: '',
			currently_working: null,
			start_date: '',
			end_date: ''
		}
	];

	function addWorkExperience() {
		$data.work_experience = $data.work_experience.concat(work_experience);
	}

	function deleteWorkExperience() {
		$data.work_experience = $data.work_experience.slice(0, -1);
	}

	const schema = yup.object({
		email: yup.string().email().required()
	});

	const { form, data, errors } = createForm({
		initialValues: {
			first_name: pre_application_form.first_name || '',
			middle_initials: pre_application_form.middle_initials || '',
			last_name: pre_application_form.last_name || '',
			email: pre_application_form.email || '',
			phone: pre_application_form.phone || '',
			date_of_birth: pre_application_form.date_of_birth || '',
			gender: pre_application_form.gender || '',
			marital_status: pre_application_form.marital_status || '',
			address_line_1: pre_application_form.address_line_1 || '',
			address_line_2: pre_application_form.address_line_2 || '',
			city: pre_application_form.city || '',
			state: pre_application_form.state || '',
			zip_code: pre_application_form.zip_code || '',
			country: pre_application_form.country || '',
			perma_address_line_1: pre_application_form.perma_address_line_1,
			perma_address_line_2: pre_application_form.perma_address_line_2,
			perma_city: pre_application_form.perma_city,
			perma_state: pre_application_form.perma_state,
			perma_zip_code: pre_application_form.perma_zip_code,
			perma_country: pre_application_form.perma_country,
			passport_number: pre_application_form.passport_number,
			passport_issue_date: pre_application_form.passport_issue_date,
			passport_expiry_date: pre_application_form.passport_expiry_date,
			passport_issue_country: pre_application_form.passport_issue_country,
			city_of_birth: pre_application_form.city_of_birth,
			country_of_birth: pre_application_form.country_of_birth,
			nationality: pre_application_form.nationality,
			country_of_citizenship: pre_application_form.country_of_citizenship,
			are_you_citizen_of_more_than_one_country: String(
				pre_application_form.are_you_citizen_of_more_than_one_country
			),
			names_of_countries_of_citizenship: pre_application_form.names_of_countries_of_citizenship,
			are_you_living_in_other_country: String(pre_application_form.are_you_living_in_other_country),
			names_of_countries_living_in: pre_application_form.names_of_countries_living_in,
			has_applied_for_immigration: String(pre_application_form.has_applied_for_immigration),
			has_been_refused_Visa: String(pre_application_form.has_been_refused_Visa),
			has_been_convicted: String(pre_application_form.has_been_convicted),
			emergency_contact_name: pre_application_form.emergency_contact_name,
			emergency_contact_phone: pre_application_form.emergency_contact_phone,
			emergency_contact_email: pre_application_form.emergency_contact_email,
			emergency_contact_relationship: pre_application_form.emergency_contact_relationship,
			highest_education_level: pre_application_form.highest_education_level,
			country_of_education: pre_application_form.country_of_education,
			grade_10th_or_equivalent: pre_application_form.grade_10th_or_equivalent || education_data,
			grade_12th_or_equivalent: pre_application_form.grade_12th_or_equivalent || education_data,
			undergraduate_degree_or_equivalent:
				pre_application_form.undergraduate_degree_or_equivalent || education_data,
			graduate_degree_or_equivalent:
				pre_application_form.graduate_degree_or_equivalent || education_data,
			english_proficiency: pre_application_form.english_proficiency || '',
			ielts_waivers: pre_application_form.ielts_waivers,
			ielts_date_of_examination: pre_application_form.ielts_date_of_examination,
			ielts_score: pre_application_form.ielts_score,
			ielts_listening: pre_application_form.ielts_listening,
			ielts_reading: pre_application_form.ielts_reading,
			ielts_writing: pre_application_form.ielts_writing,
			ielts_speaking: pre_application_form.ielts_speaking,
			ielts_trf_no: pre_application_form.ielts_trf_no,
			toefl_score: pre_application_form.toefl_score,
			toefl_date_of_examination: pre_application_form.toefl_date_of_examination,
			toefl_listening: pre_application_form.toefl_listening,
			toefl_reading: pre_application_form.toefl_reading,
			toefl_writing: pre_application_form.toefl_writing,
			toefl_speaking: pre_application_form.toefl_speaking,
			toefl_trf_no: pre_application_form.toefl_trf_no,
			duolingo_score: pre_application_form.duolingo_score,
			duolingo_date_of_examination: pre_application_form.duolingo_date_of_examination,
			sat_score: pre_application_form.sat_score,
			sat_date_of_examination: pre_application_form.sat_date_of_examination,
			sat_ebrw: pre_application_form.sat_ebrw,
			sat_math: pre_application_form.sat_math,
			sat_reading: pre_application_form.sat_reading || '',
			sat_writing: pre_application_form.sat_writing || '',
			act_score: pre_application_form.act_score,
			act_date_of_examination: pre_application_form.act_date_of_examination,
			act_english: pre_application_form.act_english,
			act_math: pre_application_form.act_math,
			act_reading: pre_application_form.act_reading,
			act_science: pre_application_form.act_science,
			act_writing: pre_application_form.act_writing,
			has_gap: String(pre_application_form.has_gap),
			gap_explanation: pre_application_form.gap_explanation,
			work_experience: pre_application_form.work_experience || work_experience
		},

		extend: validator({ schema }),
		onSubmit(values, context) {
			console.log(JSON.stringify(values));
		}
	});
</script>

<h4 class="text-2xl text-lightText font-medium">Pre-Application Form</h4>

<form use:form class="w-full mt-8">
	<div class="flex items-center gap-x-4">
		<div class="">
			<Label label_for="first_name" label="First Name" />
			<Input
				id="first_name"
				name="first_name"
				type="text"
				placeholder="Ex. Abdullah"
				error={$errors.first_name}
				classes="w-full"
			/>

			<Error classes="self-start" message={$errors.first_name} />
		</div>
		<div class="">
			<Label label_for="middle_name" label="Middle Name" />
			<Input
				id="middle_name"
				name="middle_name"
				type="text"
				placeholder="Ex. Abdullah"
				error={$errors.middle_initials}
				classes="w-full"
			/>

			<Error classes="self-start" message={$errors.middle_initials} />
		</div>
		<div class="">
			<Label label_for="last_name" label="Last Name" />
			<Input
				id="last_name"
				name="last_name"
				type="text"
				placeholder="Ex. Abdullah"
				error={$errors.last_name}
				classes="w-full"
			/>

			<Error classes="self-start" message={$errors.last_name} />
		</div>
	</div>
</form>

<div class="form-section">
	<h2>Personal Information</h2>
</div>

<style lang="postcss">
	.form-section {
		@apply flex flex-col mx-auto px-10 py-6 xl:px-20 xl:py-12 bg-white rounded-2xl;
	}

	h2 {
		@apply text-secondary font-bold text-2xl mb-8;
	}
</style>
