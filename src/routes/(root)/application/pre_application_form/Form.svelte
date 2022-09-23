<script>
	import { Button, Error, IconInput, Input, Label, Select } from '$lib/components/Form';
	import { CalendarDays } from '$lib/components/Icons';
	import { countries } from '$lib/data/countries';
	import { validator } from '@felte/validator-yup';
	import { createForm } from 'felte';
	import * as yup from 'yup';
	export let profile_data;
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
		first_name: yup.string().required('First name is required'),
		middle_name: yup.string(),
		last_name: yup.string().required('Last name is required'),
		email: yup.string().email().required()
	});

	const { form, data, errors } = createForm({
		initialValues: {
			first_name: pre_application_form.first_name || profile_data.first_name,
			middle_initials: pre_application_form.middle_initials || '',
			last_name: pre_application_form.last_name || profile_data.last_name,
			email: pre_application_form.email || profile_data.email,
			phone: pre_application_form.phone || profile_data.profile.phone,
			date_of_birth: pre_application_form.date_of_birth || '',
			gender: pre_application_form.gender || '',
			marital_status: pre_application_form.marital_status || '',
			address_line_1: pre_application_form.address_line_1 || '',
			address_line_2: pre_application_form.address_line_2 || '',
			city: pre_application_form.city || '',
			state: pre_application_form.state || '',
			zip_code: pre_application_form.zip_code || '',
			country: pre_application_form.country || profile_data.profile.country,
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

<form use:form class="w-full mt-8">
	<section class="form-section">
		<h2>Personal Information</h2>
		<div class="grid grid-cols-1 md:grid-cols-3 gap-6">
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

				<Error message={$errors.first_name} />
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

				<Error message={$errors.middle_initials} />
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

				<Error message={$errors.last_name} />
			</div>
			<div class="">
				<Label label_for="date_of_birth" label="Date of Birth" />
				<IconInput
					iconClass="block w-7 h-7 text-primary mr-3"
					type="date"
					id="date_of_birth"
					name="date_of_birth"
					placeholder="Date of Birth"
					error={$errors.date_of_birth}
					classes="w-full"
					><CalendarDays />
				</IconInput>

				<Error message={$errors.date_of_birth} />
			</div>
			<div class="">
				<Label label_for="gender" label="Gender" />
				<Select
					id="gender"
					name="gender"
					placeholder="Gender"
					error={$errors.gender}
					classes="w-full"
				>
					<option value="male">Male</option>
					<option value="female">Female</option>
					<option value="other">Other</option>
					<option value="prefer_not">Prefer Not to Say</option>
				</Select>
				<Error message={$errors.gender} />
			</div>
			<div class="">
				<Label label_for="marital_status" label="Marital Status" />
				<Select
					id="marital_status"
					name="marital_status"
					placeholder="Marital Status"
					error={$errors.marital_status}
					classes="w-full"
				>
					<option value="single">Single</option>
					<option value="married">Married</option>
					<option value="divorced">Divorced</option>
					<option value="other">Other</option>
					<option value="prefer_not">Prefer Not to Say</option>
				</Select>
				<Error message={$errors.marital_status} />
			</div>
		</div>
	</section>
	<section class="form-section">
		<h2>Contact Information</h2>
		<div class="grid grid-cols-1 md:grid-cols-3 gap-6">
			<div class="">
				<Label label_for="phone" label="Phone Number" />
				<Input
					id="phone"
					name="phone"
					type="text"
					placeholder="+8801XXXXXXXXX"
					error={$errors.phone}
					classes="w-full"
				/>

				<Error message={$errors.phone} />
			</div>
			<div class="">
				<Label label_for="email" label="Email" />
				<Input
					id="email"
					name="email"
					type="text"
					placeholder="example@example.com"
					error={$errors.email}
					classes="w-full"
				/>

				<Error message={$errors.email} />
			</div>
		</div>
	</section>
	<section class="form-section">
		<h2>Emergency Contact Information</h2>
		<div class="grid grid-cols-1 md:grid-cols-3 gap-6">
			<div class="">
				<Label label_for="emergency_contact_name" label="Name" />
				<Input
					id="emergency_contact_name"
					name="emergency_contact_name"
					type="text"
					placeholder="Ex. Abdullah"
					error={$errors.emergency_contact_name}
					classes="w-full"
				/>

				<Error message={$errors.emergency_contact_name} />
			</div>
			<div class="">
				<Label label_for="emergency_contact_relationship" label="Relation" />
				<Input
					id="emergency_contact_relationship"
					name="emergency_contact_relationship"
					type="text"
					placeholder="Ex. Father"
					error={$errors.emergency_contact_relationship}
					classes="w-full"
				/>

				<Error message={$errors.emergency_contact_relationship} />
			</div>

			<div class="">
				<Label label_for="emergency_contact_phone" label="Phone Number" />
				<Input
					id="emergency_contact_phone"
					name="emergency_contact_phone"
					type="text"
					placeholder="+8801XXXXXXXXX"
					error={$errors.emergency_contact_phone}
					classes="w-full"
				/>

				<Error message={$errors.emergency_contact_phone} />
			</div>
			<div class="">
				<Label label_for="emergency_contact_email" label="Email" />
				<Input
					id="emergency_contact_email"
					name="emergency_contact_email"
					type="text"
					placeholder="example@example.com"
					error={$errors.emergency_contact_email}
					classes="w-full"
				/>

				<Error message={$errors.emergency_contact_email} />
			</div>
		</div>
	</section>
	<section class="form-section">
		<h2>Present Address</h2>
		<div class="grid grid-cols-1 md:grid-cols-4 gap-6">
			<div class="md:col-span-4">
				<Label label_for="address_line_1" label="Address Line 1" />
				<Input
					id="address_line_1"
					name="address_line_1"
					type="text"
					error={$errors.address_line_1}
					classes="w-full"
				/>

				<Error message={$errors.address_line_1} />
			</div>
			<div class="md:col-span-4">
				<Label label_for="address_line_2" label="Address Line 2" />
				<Input
					id="address_line_2"
					name="address_line_2"
					type="text"
					error={$errors.address_line_2}
					classes="w-full"
				/>

				<Error message={$errors.address_line_2} />
			</div>
			<div class="">
				<Label label_for="city" label="City" />
				<Input id="city" name="city" type="text" error={$errors.city} classes="w-full" />

				<Error message={$errors.city} />
			</div>

			<div class="">
				<Label label_for="state" label="State" />
				<Input id="state" name="state" type="text" error={$errors.state} classes="w-full" />

				<Error message={$errors.state} />
			</div>
			<div class="">
				<Label label_for="country" label="Country" />
				<Select id="country" name="country" error={$errors.country} classes="w-full">
					{#each countries as country}
						<option value={country.name}>{country.name}</option>
					{/each}
				</Select>

				<Error message={$errors.country} />
			</div>
			<div class="">
				<Label label_for="zip_code" label="Zip Code" />
				<Input
					id="zip_code"
					name="zip_code"
					type="text"
					error={$errors.zip_code}
					classes="w-full"
				/>

				<Error message={$errors.zip_code} />
			</div>
		</div>
	</section>
</form>

<style lang="postcss">
	.form-section {
		@apply flex flex-col mx-auto px-10 py-6 xl:px-20 xl:py-12 bg-white rounded-2xl mb-6;
	}

	h2 {
		@apply text-secondary font-bold text-2xl mb-8;
	}
</style>
