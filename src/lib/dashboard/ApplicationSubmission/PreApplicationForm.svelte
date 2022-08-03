<script>
	export let summary;
	export let pre_application_form;
	import { fly } from 'svelte/transition';
	import { toast } from '@zerodevx/svelte-toast';
	import { submit_identifier } from '$lib/dashboard/stores';
	import { callingCountries } from 'country-data-list';
	import { createForm } from 'felte';
	import { validator } from '@felte/validator-yup';
	import * as yup from 'yup';
	import ErrorMessage from './ErrorMessage.svelte';

	import { form_submitting } from '$lib/dashboard/stores';

	import { EP_CHOICES, phoneRegex } from '../AccountCreation/constants';

	let form_id = 'pre_application_form';
	$submit_identifier = form_id;

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
		email: yup.string().email().required(),
		phone: yup
			.string()
			.matches(phoneRegex, 'Not a valid phone number')
			.required('Phone number is required')
			.trim()
	});

	const { form, data, errors } = createForm({
		initialValues: {
			first_name: pre_application_form.first_name || summary.first_name,
			middle_initials: pre_application_form.middle_initials || summary.middle_initials,
			last_name: pre_application_form.last_name || summary.last_name,
			email: pre_application_form.email || summary.email,
			phone: pre_application_form.phone || summary.phone,
			date_of_birth: pre_application_form.date_of_birth || summary.date_of_birth,
			gender: pre_application_form.gender || summary.gender,
			marital_status: pre_application_form.marital_status || summary.marital_status,
			address_line_1: pre_application_form.address_line_1 || summary.address_line_1,
			address_line_2: pre_application_form.address_line_2 || summary.address_line_2,
			city: pre_application_form.city || summary.city,
			state: pre_application_form.state || summary.state,
			zip_code: pre_application_form.zip_code || summary.zip_code,
			country: pre_application_form.country || summary.country,
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
			english_proficiency: pre_application_form.english_proficiency || summary.english_proficiency,
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
			handlePreApplicationSubmit(JSON.stringify(values));
		}
	});

	async function handlePreApplicationSubmit(body) {
		$form_submitting = true;
		const response = await fetch(`/dashboard/application_submission/update/`, {
			method: 'PATCH',
			headers: {
				'Content-Type': 'application/json'
			},
			body
		});

		const data = await response.json();

		pre_application_form = data;

		if (response.ok) {
			toast.push(`Successfully updated`, {
				duration: 3000,

				theme: {
					'--toastBackground': '#48BB78',
					'--toastBarBackground': '#2F855A'
				}
			});
		} else {
			console.log(response);
			toast.push('Something went wrong! Please re-check the data', {
				duration: 5000,

				theme: {
					'--toastBackground': '#F56565',
					'--toastBarBackground': '#C53030'
				}
			});
		}
		$form_submitting = false;
	}
</script>

<h4 class="text-2xl text-lightText font-medium">Pre-Application Form</h4>

<form id={form_id} use:form class="w-full mt-8">
	<div class="flex flex-wrap lg:flex-nowrap gap-x-4">
		<!-- First Half -->
		<div class="flex flex-col gap-y-4 w-full lg:w-2/4">
			<!-- Names -->
			<span class="field-heading">Full name</span>
			<div class="flex gap-x-2">
				<div class="w-[45%] relative">
					<input
						type="text"
						id="first_name"
						name="first_name"
						placeholder="First name"
						class="peer acc-input-text"
					/>
					<label for="first_name" class="acc-label">First name</label>
				</div>
				<div class="w-[10%] relative">
					<input
						type="text"
						id="middle_initials"
						name="middle_initials"
						placeholder="MI"
						class="peer acc-input-text"
					/>
					<label for="middle_initials" class="acc-label">MI</label>
				</div>
				<div class="w-[45%] relative">
					<input
						type="text"
						id="last_name"
						name="last_name"
						placeholder="Last name"
						class="peer acc-input-text"
					/>
					<label for="last_name" class="acc-label">Last name</label>
				</div>
			</div>
			<span class="field-heading">Contact Information</span>
			<div class="relative">
				<input type="email" id="email" name="email" class="peer acc-input-text" />
				<label for="email" class="acc-label">Email address</label>
			</div>
			<div class="relative">
				<input
					type="text"
					id="phone"
					name="phone"
					placeholder="Phone"
					class="peer acc-input-text"
				/>
				<label for="phone" class="acc-label">Phone</label>
			</div>
			<div class="flex w-full gap-x-2">
				<div class="relative w-1/3">
					<input
						type="date"
						id="date_of_birth"
						name="date_of_birth"
						placeholder="Date of Birth"
						class="peer acc-input-text"
					/>
					<label for="date_of_birth" class="acc-label">Date of Birth</label>
				</div>
				<div class="relative w-1/3">
					<select
						type="date"
						id="gender"
						name="gender"
						placeholder="Gender"
						class="peer acc-input-select"
					>
						<option default value="" />
						<option value="male">Male</option>
						<option value="female">Female</option>
						<option value="other">Other</option>
						<option value="prefer_not">Prefer not to say</option>
					</select>
					<label for="gender" class="acc-label">Gender</label>
				</div>
				<div class="relative w-1/3">
					<select
						type="select"
						id="marital_status"
						name="marital_status"
						placeholder="Marital Status"
						class="peer acc-input-select"
					>
						<option default value="" />
						<option value="single">Single</option>
						<option value="divorced">Divorced</option>
						<option value="married">Married</option>
					</select>
					<label for="marital_status" class="acc-label">Marital Status</label>
				</div>
			</div>
			<ErrorMessage errors={$errors.phone} />
			<span class="field-heading">Present Address</span>
			<div class="relative">
				<input
					type="text"
					id="address_line_1"
					name="address_line_1"
					placeholder="Address Line 1"
					class="peer acc-input-text"
				/>
				<label for="address_line_1" class="acc-label">Address Line 1</label>
			</div>
			<div class="relative">
				<input
					type="text"
					id="address_line_2"
					name="address_line_2"
					placeholder="Address Line 2"
					class="peer acc-input-text"
				/>
				<label for="address_line_2" class="acc-label">Address Line 2</label>
			</div>
			<div class="flex gap-x-2">
				<div class="relative">
					<input type="text" id="city" name="city" placeholder="City" class="peer acc-input-text" />
					<label for="city" class="acc-label">City</label>
				</div>
				<div class="relative">
					<input
						type="text"
						id="state"
						name="state"
						placeholder="State"
						class="peer acc-input-text"
					/>
					<label for="state" class="acc-label">State</label>
				</div>
				<div class="relative">
					<input
						type="text"
						id="zip_code"
						name="zip_code"
						placeholder="Zip Code"
						class="peer acc-input-text"
					/>
					<label for="zip_code" class="acc-label">Zip Code</label>
				</div>
				<div class="relative">
					<select id="country" name="country" placeholder="Country" class="peer acc-input-select">
						{#each callingCountries.all as country}
							<option value={country.name}>{country.name}</option>
						{/each}
					</select>
					<label for="country" class="acc-label">Country</label>
				</div>
			</div>
			<span class="field-heading">Permanent Address</span>
			<div class="relative">
				<input
					type="text"
					id="perma_address_line_1"
					name="perma_address_line_1"
					placeholder="Address Line 1"
					class="peer acc-input-text"
				/>
				<label for="perma_address_line_1" class="acc-label">Address Line 1</label>
			</div>
			<div class="relative">
				<input
					type="text"
					id="perma_address_line_2"
					name="perma_address_line_2"
					placeholder="Address Line 2"
					class="peer acc-input-text"
				/>
				<label for="perma_address_line_2" class="acc-label">Address Line 2</label>
			</div>
			<div class="flex gap-x-2">
				<div class="relative">
					<input
						type="text"
						id="perma_city"
						name="perma_city"
						placeholder="City"
						class="peer acc-input-text"
					/>
					<label for="perma_city" class="acc-label">City</label>
				</div>
				<div class="relative">
					<input
						type="text"
						id="perma_state"
						name="perma_state"
						placeholder="State"
						class="peer acc-input-text"
					/>
					<label for="perma_state" class="acc-label">State</label>
				</div>
				<div class="relative">
					<input
						type="text"
						id="perma_zip_code"
						name="perma_zip_code"
						placeholder="Zip Code"
						class="peer acc-input-text"
					/>
					<label for="perma_zip_code" class="acc-label">Zip Code</label>
				</div>
				<div class="relative">
					<select
						id="perma_country"
						name="perma_country"
						placeholder="Country"
						class="peer acc-input-select"
					>
						{#each callingCountries.all as country}
							<option value={country.name}>{country.name}</option>
						{/each}
					</select>
					<label for="perma_country" class="acc-label">Country</label>
				</div>
			</div>
			<span class="field-heading">Passport</span>
			<div class="relative">
				<input
					type="text"
					id="passport_number"
					name="passport_number"
					placeholder="Passport Number"
					class="peer acc-input-text"
				/>
				<label for="passport_number" class="acc-label">Passport Number</label>
			</div>
			<div class="flex gap-x-2">
				<div class="relative w-1/3">
					<input
						type="date"
						id="passport_issue_date"
						name="passport_issue_date"
						placeholder="Passport Issue Date"
						class="peer acc-input-text"
					/>
					<label for="passport_issue_date" class="acc-label">Passport Issue Date</label>
				</div>
				<div class="relative w-1/3">
					<input
						type="date"
						id="passport_expiry_date"
						name="passport_expiry_date"
						placeholder="Passport Expiry Date"
						class="peer acc-input-text"
					/>
					<label for="passport_expiry_date" class="acc-label">Passport Expiry Date</label>
				</div>
				<div class="relative w-1/3">
					<select
						id="passport_issue_country"
						name="passport_issue_country"
						placeholder="Passport Issue Country"
						class="peer acc-input-select"
					>
						{#each callingCountries.all as country}
							<option value={country.name}>{country.name}</option>
						{/each}
					</select>
					<label for="passport_issue_country" class="acc-label">Passport Issue Country</label>
				</div>
			</div>
			<div class="flex gap-x-2">
				<div class="relative w-2/4">
					<input
						type="text"
						id="city_of_birth"
						name="city_of_birth"
						placeholder="City of Birth"
						class="peer acc-input-text"
					/>
					<label for="city_of_birth" class="acc-label">City of Birth</label>
				</div>
				<div class="relative w-2/4">
					<select
						id="country_of_birth"
						name="country_of_birth"
						placeholder="Country"
						class="peer acc-input-select"
					>
						{#each callingCountries.all as country}
							<option value={country.name}>{country.name}</option>
						{/each}
					</select>
					<label for="country_of_birth" class="acc-label">Country of Birth</label>
				</div>
			</div>
			<span class="field-heading">Background Information</span>
			<div class="flex gap-x-2">
				<div class="relative w-2/4">
					<input
						type="text"
						id="nationality"
						name="nationality"
						placeholder="Nationality"
						class="peer acc-input-text"
					/>
					<label for="nationality" class="acc-label">Nationality</label>
				</div>
				<div class="relative w-2/4">
					<select
						id="country_of_citizenship"
						name="country_of_citizenship"
						placeholder="Country of Citizenship"
						class="peer acc-input-select"
					>
						{#each callingCountries.all as country}
							<option value={country.name}>{country.name}</option>
						{/each}
					</select>
					<label for="country_of_citizenship" class="acc-label">Country of Citizenship</label>
				</div>
			</div>
			<div class="relative">
				<select
					id="are_you_citizen_of_more_than_one_country"
					name="are_you_citizen_of_more_than_one_country"
					placeholder="Are you a citizen of more than one country?"
					class="peer acc-input-select"
				>
					<option value="" />
					<option value={false}>No</option>
					<option value={true}>Yes</option>
				</select>
				<label for="are_you_citizen_of_more_than_one_country" class="acc-label"
					>Are you a citizen of more than one country?</label
				>
			</div>
			{#if $data.are_you_citizen_of_more_than_one_country == 'true'}
				<div in:fly={{ y: -50, duration: 500 }} out:fly={{ y: 50, duration: 300 }} class="relative">
					<input
						type="text"
						id="names_of_countries_of_citizenship"
						name="names_of_countries_of_citizenship"
						placeholder="Names of Countries of Citizenship"
						class="peer acc-input-text"
					/>
					<label for="names_of_countries_of_citizenship" class="acc-label"
						>Names of Countries of Citizenship</label
					>
				</div>
			{/if}
			<div class="relative">
				<select
					id="are_you_living_in_other_country"
					name="are_you_living_in_other_country"
					placeholder="Are you living and studying in any other country?"
					class="peer acc-input-select"
				>
					<option value="" />
					<option value={false}>No</option>
					<option value={true}>Yes</option>
				</select>
				<label for="are_you_living_in_other_country" class="acc-label"
					>Are you living and studying in any other country?</label
				>
			</div>
			{#if $data.are_you_living_in_other_country == 'true'}
				<div in:fly={{ y: -50, duration: 500 }} out:fly={{ y: 50, duration: 300 }} class="relative">
					<input
						type="text"
						id="names_of_countries_living_in"
						name="names_of_countries_living_in"
						placeholder="Names of Countries Living in"
						class="peer acc-input-text"
					/>
					<label for="names_of_countries_living_in" class="acc-label"
						>Names of Countries Living in</label
					>
				</div>
			{/if}
			<div class="relative">
				<select
					id="has_applied_for_immigration"
					name="has_applied_for_immigration"
					placeholder="Have you applied for any type of immigration into any country?"
					class="peer acc-input-select"
				>
					<option value="" />
					<option value={false}>No</option>
					<option value={true}>Yes</option>
				</select>
				<label for="has_applied_for_immigration" class="acc-label"
					>Have you applied for any type of immigration into any country?</label
				>
			</div>
			<div class="relative">
				<select
					id="has_been_refused_Visa"
					name="has_been_refused_Visa"
					placeholder="Have you been refused Visa for any country?"
					class="peer acc-input-select"
				>
					<option value="" />
					<option value={false}>No</option>
					<option value={true}>Yes</option>
				</select>
				<label for="has_been_refused_Visa" class="acc-label"
					>Have you been refused Visa for any country?</label
				>
			</div>
			<div class="relative">
				<select
					id="has_been_convicted"
					name="has_been_convicted"
					placeholder="Have you ever been convicted of a criminal offence?"
					class="peer acc-input-select"
				>
					<option value="" />
					<option value={false}>No</option>
					<option value={true}>Yes</option>
				</select>
				<label for="has_been_convicted" class="acc-label"
					>Have you ever been convicted of a criminal offence?</label
				>
			</div>
			<span class="field-heading">Emergency Contact Information</span>

			<div class="relative">
				<input
					type="text"
					id="emergency_contact_name"
					name="emergency_contact_name"
					placeholder="Emergency Contact Name"
					class="peer acc-input-text"
				/>
				<label for="emergency_contact_name" class="acc-label">Emergency Contact Name</label>
			</div>
			<div class="relative">
				<input
					type="text"
					id="emergency_contact_phone"
					name="emergency_contact_phone"
					placeholder="Emergency Contact Phone"
					class="peer acc-input-text"
				/>
				<label for="emergency_contact_phone" class="acc-label">Emergency Contact Phone</label>
			</div>
			<div class="relative">
				<input
					type="text"
					id="emergency_contact_email"
					name="emergency_contact_email"
					placeholder="Emergency Contact Email"
					class="peer acc-input-text"
				/>
				<label for="emergency_contact_email" class="acc-label">Emergency Contact Email</label>
			</div>
			<div class="relative">
				<input
					type="text"
					id="emergency_contact_relationship"
					name="emergency_contact_relationship"
					placeholder="Emergency Contact Relationship"
					class="peer acc-input-text"
				/>
				<label for="emergency_contact_relationship" class="acc-label"
					>Emergency Contact Relationship</label
				>
			</div>
		</div>
		<!-- Divider -->
		<div class="form-divider " />
		<!-- Second Half -->
		<div class="flex flex-col gap-y-4 w-full mt-12 lg:mt-0 lg:w-2/4">
			<span class="field-heading">Academic Qualifications</span>
			<div class="flex gap-x-2">
				<div class="relative w-2/4">
					<select
						id="highest_education_level"
						name="highest_education_level"
						placeholder="Highest Education Level"
						class="peer acc-input-select"
					>
						<option value="" />
						<option value="pre-high-school">Pre-high School</option>
						<option value="high-school">High School</option>
						<option value="diploma">Diploma</option>
						<option value="associates">Associate's Degree</option>
						<option value="bachelors">Bachelor's Degree</option>
						<option value="masters">Master's Degree</option>
						<option value="phd">PhD</option>
						<option value="doctorate">Doctorate</option>
					</select>
					<label for="highest_education_level" class="acc-label">Highest Education Level</label>
				</div>
				<div class="relative w-2/4">
					<select
						id="country_of_education"
						name="country_of_education"
						placeholder="Country of Education"
						class="peer acc-input-select"
					>
						{#each callingCountries.all as country}
							<option value={country.name}>{country.name}</option>
						{/each}
					</select>
					<label for="country_of_education" class="acc-label">Country of Education</label>
				</div>
			</div>
			<span class="field-heading">Grade 10th or Equivalent</span>
			<div class="relative">
				<input
					type="text"
					id="grade_10th_level_of_study"
					placeholder="Name of the Examination"
					class="peer acc-input-text"
					bind:value={$data.grade_10th_or_equivalent.level_of_study}
				/>
				<label for="grade_10th_level_of_study" class="acc-label">Name of the Examination</label>
			</div>
			<div class="flex gap-x-2">
				<div class="relative w-2/4">
					<input
						type="text"
						id="grade_10th_name_of_board"
						placeholder="Name of Board"
						class="peer acc-input-text"
						bind:value={$data.grade_10th_or_equivalent.name_of_board}
					/>
					<label for="grade_10th_name_of_board" class="acc-label">Name of Board</label>
				</div>
				<div class="relative w-2/4">
					<input
						type="text"
						id="grade_10th_name_of_institution"
						placeholder="Name of Institution"
						class="peer acc-input-text"
						bind:value={$data.grade_10th_or_equivalent.name_of_institution}
					/>
					<label for="grade_10th_name_of_institution" class="acc-label">Name of Institution</label>
				</div>
			</div>
			<div class="flex gap-x-2">
				<div class="relative w-1/3">
					<select
						id="grade_10th_country_of_study"
						name="grade_10th_country_of_study"
						placeholder="Country of Study"
						class="peer acc-input-select"
					>
						{#each callingCountries.all as country}
							<option value={country.name}>{country.name}</option>
						{/each}
					</select>
					<label for="grade_10th_country_of_study" class="acc-label">Country of Study</label>
				</div>
				<div class="relative w-1/3">
					<input
						type="text"
						id="grade_10th_state_of_study"
						placeholder="State of Study"
						class="peer acc-input-text"
						bind:value={$data.grade_10th_or_equivalent.state_of_study}
					/>
					<label for="grade_10th_state_of_study" class="acc-label">State of Study</label>
				</div>
				<div class="relative w-1/3">
					<input
						type="text"
						id="grade_10th_city_of_study"
						placeholder="City of Study"
						class="peer acc-input-text"
						bind:value={$data.grade_10th_or_equivalent.city_of_study}
					/>
					<label for="grade_10th_city_of_study" class="acc-label">City of Study</label>
				</div>
			</div>
			<div class="relative">
				<input
					type="text"
					id="grade_10th_degree_achieved"
					placeholder="Degree Achieved"
					class="peer acc-input-text"
					bind:value={$data.grade_10th_or_equivalent.degree_achieved}
				/>
				<label for="grade_10th_degree_achieved" class="acc-label">Degree Achieved</label>
			</div>
			<div class="flex gap-x-2">
				<div class="relative w-2/4">
					<input
						type="text"
						id="grade_10th_grading_system"
						placeholder="Grading System"
						class="peer acc-input-text"
						bind:value={$data.grade_10th_or_equivalent.grading_system}
					/>
					<label for="grade_10th_grading_system" class="acc-label">Grading System</label>
				</div>
				<div class="relative w-2/4">
					<input
						type="text"
						id="grade_10th_score"
						placeholder="Grading System"
						class="peer acc-input-text"
						bind:value={$data.grade_10th_or_equivalent.score}
					/>
					<label for="grade_10th_score" class="acc-label">Score</label>
				</div>
			</div>
			<div class="relative">
				<input
					type="text"
					id="grade_10th_language_of_instruction"
					placeholder="Primary Language of Instruction"
					class="peer acc-input-text"
					bind:value={$data.grade_10th_or_equivalent.primary_language_of_institution}
				/>
				<label for="grade_10th_language_of_instruction" class="acc-label"
					>Primary Language of Instruction</label
				>
			</div>
			<div class="flex gap-x-2">
				<div class="relative w-2/4">
					<input
						type="date"
						id="grade_10th_start_date"
						placeholder="Start Date"
						class="peer acc-input-text"
						bind:value={$data.grade_10th_or_equivalent.start_date}
					/>
					<label for="grade_10th_start_date" class="acc-label">Start Date</label>
				</div>
				<div class="relative w-2/4">
					<input
						type="date"
						id="grade_10th_end_date"
						placeholder="End Date"
						class="peer acc-input-text"
						bind:value={$data.grade_10th_or_equivalent.end_date}
					/>
					<label for="grade_10th_end_date" class="acc-label">End Date</label>
				</div>
			</div>
			<span class="field-heading">Grade 12th or Equivalent</span>
			<div class="relative">
				<input
					type="text"
					id="grade_12th_level_of_study"
					placeholder="Name of the Examination"
					class="peer acc-input-text"
					bind:value={$data.grade_12th_or_equivalent.level_of_study}
				/>
				<label for="grade_12th_level_of_study" class="acc-label">Name of the Examination</label>
			</div>
			<div class="flex gap-x-2">
				<div class="relative w-2/4">
					<input
						type="text"
						id="grade_12th_name_of_board"
						placeholder="Name of Board"
						class="peer acc-input-text"
						bind:value={$data.grade_12th_or_equivalent.name_of_board}
					/>
					<label for="grade_12th_name_of_board" class="acc-label">Name of Board</label>
				</div>
				<div class="relative w-2/4">
					<input
						type="text"
						id="grade_12th_name_of_institution"
						placeholder="Name of Institution"
						class="peer acc-input-text"
						bind:value={$data.grade_12th_or_equivalent.name_of_institution}
					/>
					<label for="grade_12th_name_of_institution" class="acc-label">Name of Institution</label>
				</div>
			</div>
			<div class="flex gap-x-2">
				<div class="relative w-1/3">
					<select
						id="grade_12th_country_of_study"
						name="grade_12th_country_of_study"
						placeholder="Country of Study"
						class="peer acc-input-select"
					>
						{#each callingCountries.all as country}
							<option value={country.name}>{country.name}</option>
						{/each}
					</select>
					<label for="grade_12th_country_of_study" class="acc-label">Country of Study</label>
				</div>
				<div class="relative w-1/3">
					<input
						type="text"
						id="grade_12th_state_of_study"
						placeholder="State of Study"
						class="peer acc-input-text"
						bind:value={$data.grade_12th_or_equivalent.state_of_study}
					/>
					<label for="grade_12th_state_of_study" class="acc-label">State of Study</label>
				</div>
				<div class="relative w-1/3">
					<input
						type="text"
						id="grade_12th_city_of_study"
						placeholder="City of Study"
						class="peer acc-input-text"
						bind:value={$data.grade_12th_or_equivalent.city_of_study}
					/>
					<label for="grade_12th_city_of_study" class="acc-label">City of Study</label>
				</div>
			</div>
			<div class="relative">
				<input
					type="text"
					id="grade_12th_degree_achieved"
					placeholder="Degree Achieved"
					class="peer acc-input-text"
					bind:value={$data.grade_12th_or_equivalent.degree_achieved}
				/>
				<label for="grade_12th_degree_achieved" class="acc-label">Degree Achieved</label>
			</div>
			<div class="flex gap-x-2">
				<div class="relative w-2/4">
					<input
						type="text"
						id="grade_12th_grading_system"
						placeholder="Grading System"
						class="peer acc-input-text"
						bind:value={$data.grade_12th_or_equivalent.grading_system}
					/>
					<label for="grade_12th_grading_system" class="acc-label">Grading System</label>
				</div>
				<div class="relative w-2/4">
					<input
						type="text"
						id="grade_12th_score"
						placeholder="Grading System"
						class="peer acc-input-text"
						bind:value={$data.grade_12th_or_equivalent.score}
					/>
					<label for="grade_12th_score" class="acc-label">Score</label>
				</div>
			</div>
			<div class="relative">
				<input
					type="text"
					id="grade_12th_language_of_instruction"
					placeholder="Primary Language of Instruction"
					class="peer acc-input-text"
					bind:value={$data.grade_12th_or_equivalent.primary_language_of_institution}
				/>
				<label for="grade_12th_language_of_instruction" class="acc-label"
					>Primary Language of Instruction</label
				>
			</div>
			<div class="flex gap-x-2">
				<div class="relative w-2/4">
					<input
						type="date"
						id="grade_12th_start_date"
						placeholder="Start Date"
						class="peer acc-input-text"
						bind:value={$data.grade_12th_or_equivalent.start_date}
					/>
					<label for="grade_12th_start_date" class="acc-label">Start Date</label>
				</div>
				<div class="relative w-2/4">
					<input
						type="date"
						id="grade_12th_end_date"
						placeholder="End Date"
						class="peer acc-input-text"
						bind:value={$data.grade_12th_or_equivalent.end_date}
					/>
					<label for="grade_12th_end_date" class="acc-label">End Date</label>
				</div>
			</div>
			{#if !($data.highest_education_level === '' || $data.highest_education_level === 'high-school' || $data.highest_education_level === 'pre-high-school')}
				<span
					in:fly={{ y: -50, duration: 500 }}
					out:fly={{ y: 50, duration: 300 }}
					class="field-heading">Undergraduate (Bachelor's) or Equivalent</span
				>
				<div in:fly={{ y: -50, duration: 500 }} out:fly={{ y: 50, duration: 300 }} class="relative">
					<input
						type="text"
						id="undergrad_level_of_study"
						placeholder="Name of the Examination"
						class="peer acc-input-text"
						bind:value={$data.undergraduate_degree_or_equivalent.level_of_study}
					/>
					<label for="undergrad_level_of_study" class="acc-label">Name of the Examination</label>
				</div>
				<div class="flex gap-x-2">
					<div class="relative w-2/4">
						<input
							type="text"
							id="undergrad_name_of_board"
							placeholder="Name of Board"
							class="peer acc-input-text"
							bind:value={$data.undergraduate_degree_or_equivalent.name_of_board}
						/>
						<label for="undergrad_name_of_board" class="acc-label">Name of Board</label>
					</div>
					<div class="relative w-2/4">
						<input
							type="text"
							id="undergrad_name_of_institution"
							placeholder="Name of Institution"
							class="peer acc-input-text"
							bind:value={$data.undergraduate_degree_or_equivalent.name_of_institution}
						/>
						<label for="undergrad_name_of_institution" class="acc-label">Name of Institution</label>
					</div>
				</div>
				<div class="flex gap-x-2">
					<div class="relative w-1/3">
						<select
							id="undergrad_country_of_study"
							name="undergrad_country_of_study"
							placeholder="Country of Study"
							class="peer acc-input-select"
						>
							{#each callingCountries.all as country}
								<option value={country.name}>{country.name}</option>
							{/each}
						</select>
						<label for="undergrad_country_of_study" class="acc-label">Country of Study</label>
					</div>
					<div class="relative w-1/3">
						<input
							type="text"
							id="undergrad_state_of_study"
							placeholder="State of Study"
							class="peer acc-input-text"
							bind:value={$data.undergraduate_degree_or_equivalent.state_of_study}
						/>
						<label for="undergrad_state_of_study" class="acc-label">State of Study</label>
					</div>
					<div class="relative w-1/3">
						<input
							type="text"
							id="undergrad_city_of_study"
							placeholder="City of Study"
							class="peer acc-input-text"
							bind:value={$data.undergraduate_degree_or_equivalent.city_of_study}
						/>
						<label for="undergrad_city_of_study" class="acc-label">City of Study</label>
					</div>
				</div>
				<div class="relative">
					<input
						type="text"
						id="undergrad_degree_achieved"
						placeholder="Degree Achieved"
						class="peer acc-input-text"
						bind:value={$data.undergraduate_degree_or_equivalent.degree_achieved}
					/>
					<label for="undergrad_degree_achieved" class="acc-label">Degree Achieved</label>
				</div>
				<div class="flex gap-x-2">
					<div class="relative w-2/4">
						<input
							type="text"
							id="undergrad_grading_system"
							placeholder="Grading System"
							class="peer acc-input-text"
							bind:value={$data.undergraduate_degree_or_equivalent.grading_system}
						/>
						<label for="undergrad_grading_system" class="acc-label">Grading System</label>
					</div>
					<div class="relative w-2/4">
						<input
							type="text"
							id="undergrad_score"
							placeholder="Grading System"
							class="peer acc-input-text"
							bind:value={$data.undergraduate_degree_or_equivalent.score}
						/>
						<label for="undergrad_score" class="acc-label">Score</label>
					</div>
				</div>
				<div class="relative">
					<input
						type="text"
						id="undergrad_language_of_instruction"
						placeholder="Primary Language of Instruction"
						class="peer acc-input-text"
						bind:value={$data.undergraduate_degree_or_equivalent.primary_language_of_institution}
					/>
					<label for="undergrad_language_of_instruction" class="acc-label"
						>Primary Language of Instruction</label
					>
				</div>
				<div class="flex gap-x-2">
					<div class="relative w-2/4">
						<input
							type="date"
							id="undergrad_start_date"
							placeholder="Start Date"
							class="peer acc-input-text"
							bind:value={$data.undergraduate_degree_or_equivalent.start_date}
						/>
						<label for="undergrad_start_date" class="acc-label">Start Date</label>
					</div>
					<div class="relative w-2/4">
						<input
							type="date"
							id="undergrad_end_date"
							placeholder="End Date"
							class="peer acc-input-text"
							bind:value={$data.undergraduate_degree_or_equivalent.end_date}
						/>
						<label for="undergrad_end_date" class="acc-label">End Date</label>
					</div>
				</div>
				{#if $data.highest_education_level === 'masters' || $data.highest_education_level === 'phd' || $data.highest_education_level === 'doctorate'}
					<span
						in:fly={{ y: -50, duration: 500 }}
						out:fly={{ y: 50, duration: 300 }}
						class="field-heading">Graduate (Master's) or Equivalent</span
					>
					<div
						in:fly={{ y: -50, duration: 500 }}
						out:fly={{ y: 50, duration: 300 }}
						class="relative"
					>
						<input
							type="text"
							id="grad_level_of_study"
							placeholder="Name of the Examination"
							class="peer acc-input-text"
							bind:value={$data.graduate_degree_or_equivalent.level_of_study}
						/>
						<label for="grad_level_of_study" class="acc-label">Name of the Examination</label>
					</div>
					<div class="flex gap-x-2">
						<div class="relative w-2/4">
							<input
								type="text"
								id="grad_name_of_board"
								placeholder="Name of Board"
								class="peer acc-input-text"
								bind:value={$data.graduate_degree_or_equivalent.name_of_board}
							/>
							<label for="grad_name_of_board" class="acc-label">Name of Board</label>
						</div>
						<div class="relative w-2/4">
							<input
								type="text"
								id="grad_name_of_institution"
								placeholder="Name of Institution"
								class="peer acc-input-text"
								bind:value={$data.graduate_degree_or_equivalent.name_of_institution}
							/>
							<label for="grad_name_of_institution" class="acc-label">Name of Institution</label>
						</div>
					</div>
					<div class="flex gap-x-2">
						<div class="relative w-1/3">
							<select
								id="grad_country_of_study"
								name="grad_country_of_study"
								placeholder="Country of Study"
								class="peer acc-input-select"
							>
								{#each callingCountries.all as country}
									<option value={country.name}>{country.name}</option>
								{/each}
							</select>
							<label for="grad_country_of_study" class="acc-label">Country of Study</label>
						</div>
						<div class="relative w-1/3">
							<input
								type="text"
								id="grad_state_of_study"
								placeholder="State of Study"
								class="peer acc-input-text"
								bind:value={$data.graduate_degree_or_equivalent.state_of_study}
							/>
							<label for="grad_state_of_study" class="acc-label">State of Study</label>
						</div>
						<div class="relative w-1/3">
							<input
								type="text"
								id="grad_city_of_study"
								placeholder="City of Study"
								class="peer acc-input-text"
								bind:value={$data.graduate_degree_or_equivalent.city_of_study}
							/>
							<label for="grad_city_of_study" class="acc-label">City of Study</label>
						</div>
					</div>
					<div class="relative">
						<input
							type="text"
							id="grad_degree_achieved"
							placeholder="Degree Achieved"
							class="peer acc-input-text"
							bind:value={$data.graduate_degree_or_equivalent.degree_achieved}
						/>
						<label for="grad_degree_achieved" class="acc-label">Degree Achieved</label>
					</div>
					<div class="flex gap-x-2">
						<div class="relative w-2/4">
							<input
								type="text"
								id="grad_grading_system"
								placeholder="Grading System"
								class="peer acc-input-text"
								bind:value={$data.graduate_degree_or_equivalent.grading_system}
							/>
							<label for="grad_grading_system" class="acc-label">Grading System</label>
						</div>
						<div class="relative w-2/4">
							<input
								type="text"
								id="grad_score"
								placeholder="Grading System"
								class="peer acc-input-text"
								bind:value={$data.graduate_degree_or_equivalent.score}
							/>
							<label for="grad_score" class="acc-label">Score</label>
						</div>
					</div>
					<div class="relative">
						<input
							type="text"
							id="grad_language_of_instruction"
							placeholder="Primary Language of Instruction"
							class="peer acc-input-text"
							bind:value={$data.graduate_degree_or_equivalent.primary_language_of_institution}
						/>
						<label for="grad_language_of_instruction" class="acc-label"
							>Primary Language of Instruction</label
						>
					</div>
					<div class="flex gap-x-2">
						<div class="relative w-2/4">
							<input
								type="date"
								id="grad_start_date"
								placeholder="Start Date"
								class="peer acc-input-text"
								bind:value={$data.graduate_degree_or_equivalent.start_date}
							/>
							<label for="grad_start_date" class="acc-label">Start Date</label>
						</div>
						<div class="relative w-2/4">
							<input
								type="date"
								id="grad_end_date"
								placeholder="End Date"
								class="peer acc-input-text"
								bind:value={$data.graduate_degree_or_equivalent.end_date}
							/>
							<label for="grad_end_date" class="acc-label">End Date</label>
						</div>
					</div>
				{/if}
			{/if}
			<span class="field-heading">English Proficiency</span>
			<div class="relative w-2/4">
				<select
					id="english_proficiency"
					name="english_proficiency"
					placeholder="English Proficiency Test"
					class="peer acc-input-select"
				>
					{#each EP_CHOICES as ep}
						<option value={ep.value}>{ep.label}</option>
					{/each}
				</select>
				<label for="english_proficiency" class="acc-label">English Proficiency Test</label>
			</div>

			{#if $data.english_proficiency === 'ielts'}
				<div
					in:fly={{ y: -50, duration: 500 }}
					out:fly={{ y: -50, duration: 300 }}
					class="relative"
				>
					<select
						id="ielts_waivers"
						name="ielts_waivers"
						placeholder="Do you have IELTS waiver?"
						class="peer acc-input-select"
					>
						<option value="" />
						<option value={false}>No</option>
						<option value={true}>Yes</option>
					</select>
					<label for="ielts_waivers" class="acc-label">Do you have IELTS waiver?</label>
				</div>
				{#if $data.ielts_waivers === 'false'}
					<div
						in:fly={{ y: -50, duration: 500 }}
						out:fly={{ y: 50, duration: 300 }}
						class="relative"
					>
						<input
							type="date"
							id="ielts_date_of_examination"
							name="ielts_date_of_examination"
							placeholder="Date of Examination"
							class="peer acc-input-text"
						/>
						<label for="ielts_date_of_examination" class="acc-label">Date of Examination</label>
					</div>
					<div class="flex gap-x-2">
						<div class="relative w-2/4">
							<input
								type="text"
								id="ielts_score"
								name="ielts_score"
								placeholder="Score"
								class="peer acc-input-text"
							/>
							<label for="ielts_score" class="acc-label">Overall Score</label>
						</div>
						<div class="relative w-2/4">
							<input
								type="text"
								id="ielts_trf_no"
								name="ielts_trf_no"
								placeholder="IELTS TRF No."
								class="peer acc-input-text"
							/>
							<label for="ielts_trf_no" class="acc-label">IELTS TRF No.</label>
						</div>
					</div>
					<div class="flex gap-x-2">
						<div class="relative w-3/12">
							<input
								type="text"
								id="ielts_listening"
								name="ielts_listening"
								placeholder="Listening"
								class="peer acc-input-text"
							/>
							<label for="ielts_listening" class="acc-label">Listening</label>
						</div>
						<div class="relative w-3/12">
							<input
								type="text"
								id="ielts_reading"
								name="ielts_reading"
								placeholder="Reading"
								class="peer acc-input-text"
							/>
							<label for="ielts_reading" class="acc-label">Reading</label>
						</div>
						<div class="relative w-3/12">
							<input
								type="text"
								id="ielts_writing"
								name="ielts_writing"
								placeholder="Writing"
								class="peer acc-input-text"
							/>
							<label for="ielts_writing" class="acc-label">Writing</label>
						</div>
						<div class="relative w-3/12">
							<input
								type="text"
								id="ielts_speaking"
								name="ielts_speaking"
								placeholder="Speaking"
								class="peer acc-input-text"
							/>
							<label for="ielts_speaking" class="acc-label">Speaking</label>
						</div>
					</div>
				{/if}
			{/if}
			{#if $data.english_proficiency === 'toefl'}
				<div in:fly={{ y: -50, duration: 500 }} out:fly={{ y: 50, duration: 300 }} class="relative">
					<input
						type="date"
						id="toefl_date_of_examination"
						name="toefl_date_of_examination"
						placeholder="Date of Examination"
						class="peer acc-input-text"
					/>
					<label for="toefl_date_of_examination" class="acc-label">Date of Examination</label>
				</div>

				<div class="flex gap-x-2">
					<div class="relative w-2/4">
						<input
							type="text"
							id="toefl_score"
							name="toefl_score"
							placeholder="Overall Score"
							class="peer acc-input-text"
						/>
						<label for="toefl_score" class="acc-label">Overall Score</label>
					</div>
					<div class="relative w-2/4">
						<input
							type="text"
							id="toefl_trf_no"
							name="toefl_trf_no"
							placeholder="TOEFL TRF No."
							class="peer acc-input-text"
						/>
						<label for="toefl_trf_no" class="acc-label">TOEFL TRF No.</label>
					</div>
				</div>
				<div class="flex gap-x-2">
					<div class="relative w-3/12">
						<input
							type="text"
							id="toefl_listening"
							name="toefl_listening"
							placeholder="Listening"
							class="peer acc-input-text"
						/>
						<label for="toefl_listening" class="acc-label">Listening</label>
					</div>
					<div class="relative w-3/12">
						<input
							type="text"
							id="toefl_reading"
							name="toefl_reading"
							placeholder="Reading"
							class="peer acc-input-text"
						/>
						<label for="toefl_reading" class="acc-label">Reading</label>
					</div>
					<div class="relative w-3/12">
						<input
							type="text"
							id="toefl_writing"
							name="toefl_writing"
							placeholder="Writing"
							class="peer acc-input-text"
						/>
						<label for="toefl_writing" class="acc-label">Writing</label>
					</div>
					<div class="relative w-3/12">
						<input
							type="text"
							id="toefl_speaking"
							name="toefl_speaking"
							placeholder="Speaking"
							class="peer acc-input-text"
						/>
						<label for="toefl_speaking" class="acc-label">Speaking</label>
					</div>
				</div>
			{/if}
			{#if $data.english_proficiency === 'duolingo'}
				<div
					in:fly={{ y: -50, duration: 500 }}
					out:fly={{ y: 50, duration: 300 }}
					class="flex gap-x-2"
				>
					<div class="relative w-2/4">
						<input
							type="date"
							id="duolingo_date_of_examination"
							placeholder="Date of Examination"
							class="peer acc-input-text"
						/>
						<label for="duolingo_date_of_examination" class="acc-label">Date of Examination</label>
					</div>

					<div class="relative w-2/4">
						<input
							type="text"
							id="duolingo_score"
							name="duolingo_score"
							placeholder="Overall Score"
							class="peer acc-input-text"
						/>
						<label for="duolingo_score" class="acc-label">Overall Score</label>
					</div>
				</div>
			{/if}
			<span class="field-heading">Tests</span>
			<span class="field-heading">SAT</span>
			<div class="flex gap-x-2">
				<div class="relative w-2/4">
					<input
						type="text"
						id="sat_score"
						name="sat_score"
						placeholder="SAT Score"
						class="peer acc-input-text"
					/>
					<label for="sat_score" class="acc-label">SAT Score</label>
				</div>
				<div class="relative w-2/4">
					<input
						type="date"
						id="sat_date_of_examination"
						name="sat_date_of_examination"
						placeholder="Date of Examination"
						class="peer acc-input-text"
					/>
					<label for="sat_date_of_examination" class="acc-label">Date of Examination</label>
				</div>
			</div>

			<div class="relative">
				<input
					type="text"
					id="sat_ebrw"
					name="sat_ebrw"
					placeholder="SAT EBRW"
					class="peer acc-input-text"
				/>
				<label for="sat_ebrw" class="acc-label">SAT EBRW</label>
			</div>

			<div class="relative">
				<input
					type="text"
					id="sat_math"
					name="sat_math"
					placeholder="SAT Math"
					class="peer acc-input-text"
				/>
				<label for="sat_math" class="acc-label">SAT Math</label>
			</div>
			<span class="field-heading">ACT</span>
			<div class="flex gap-x-2">
				<div class="relative w-2/4">
					<input
						type="text"
						id="act_score"
						name="act_score"
						placeholder="ACT Score"
						class="peer acc-input-text"
					/>
					<label for="act_score" class="acc-label">ACT Score</label>
				</div>
				<div class="relative w-2/4">
					<input
						type="date"
						id="act_date_of_examination"
						name="act_date_of_examination"
						placeholder="Date of Examination"
						class="peer acc-input-text"
					/>
					<label for="act_date_of_examination" class="acc-label">Date of Examination</label>
				</div>
			</div>
			<div class="flex gap-x-2">
				<div class="relative w-1/3">
					<input
						type="text"
						id="act_english"
						name="act_english"
						placeholder="English"
						class="peer acc-input-text"
					/>
					<label for="act_english" class="acc-label">English</label>
				</div>
				<div class="relative w-1/3">
					<input
						type="text"
						id="act_math"
						name="act_math"
						placeholder="Math"
						class="peer acc-input-text"
					/>
					<label for="act_math" class="acc-label">Math</label>
				</div>
				<div class="relative w-1/3">
					<input
						type="text"
						id="act_reading"
						name="act_reading"
						placeholder="Reading"
						class="peer acc-input-text"
					/>
					<label for="act_reading" class="acc-label">Reading</label>
				</div>
				<div class="relative w-1/3">
					<input
						type="text"
						id="act_science"
						name="act_science"
						placeholder="Science"
						class="peer acc-input-text"
					/>
					<label for="act_science" class="acc-label">Science</label>
				</div>
			</div>
			<div class="relative">
				<input
					type="text"
					id="act_writing"
					name="act_writing"
					placeholder="Writing"
					class="peer acc-input-text"
				/>
				<label for="act_writing" class="acc-label">Writing</label>
			</div>

			{#each $data.work_experience as _, i}
				<span class="field-heading">Work Experience {i + 1}</span>
				<div class="relative">
					<input
						type="text"
						id={`name_of_company_${i}`}
						placeholder="Company Name"
						class="peer acc-input-text"
						bind:value={$data.work_experience[i].company_name}
					/>
					<label for={`name_of_company_${i}`} class="acc-label">Company Name</label>
				</div>
				<div class="relative">
					<input
						type="text"
						id={`company_address_${i}`}
						placeholder="Company Address"
						class="peer acc-input-text"
						bind:value={$data.work_experience[i].company_address}
					/>
					<label for={`company_address_${i}`} class="acc-label">Company Address</label>
				</div>
				<div class="flex gap-x-2">
					<div class="relative w-2/4">
						<input
							type="text"
							id={`job_profile_${i}`}
							placeholder="Job Profile"
							class="peer acc-input-text"
							bind:value={$data.work_experience[i].job_profile}
						/>
						<label for={`job_profile_${i}`} class="acc-label">Job Profile</label>
					</div>
					<div class="relative w-2/4">
						<input
							type="text"
							id={`mode_of_salary_${i}`}
							placeholder="Mode of Salary (Cash/cheque/deposit)"
							class="peer acc-input-text"
							bind:value={$data.work_experience[i].mode_of_salary}
						/>
						<label for={`mode_of_salary_${i}`} class="acc-label"
							>Mode of Salary (Cash/cheque/deposit)</label
						>
					</div>
				</div>
				<div class="relative">
					<input
						type="checkbox"
						id={`currently_working_${i}`}
						placeholder="Currently Working Here?"
						class="acc-input-checkbox"
						bind:checked={$data.work_experience[i].currently_working}
					/>
					<label class="text-base" for={`currently_working_${i}`}>Currently Working Here?</label>
				</div>
				<div class:mb-6={$data.work_experience.length > 1} class="flex gap-x-2">
					<div class="relative w-2/4">
						<input
							type="date"
							id={`start_date${i}`}
							placeholder="Start Date"
							class="peer acc-input-text"
							bind:value={$data.work_experience[i].start_date}
						/>
						<label for={`start_date${i}`} class="acc-label">Start Date</label>
					</div>
					{#if !$data.work_experience[i].currently_working === true}
						<div
							in:fly={{ x: -50, duration: 500 }}
							out:fly={{ y: 50, duration: 300 }}
							class="relative w-2/4"
						>
							<input
								type="date"
								id={`end_date${i}`}
								placeholder="End Date"
								class="peer acc-input-text"
								bind:value={$data.work_experience[i].end_date}
							/>
							<label for={`end_date${i}`} class="acc-label">End Date</label>
						</div>
					{/if}
				</div>
			{/each}
			<div class="w-full flex gap-x-2 px-2">
				<button
					type="button"
					on:click={addWorkExperience}
					class="px-4 py-2 bg-zinc-600 text-xs font-bold text-gray-100 uppercase">Add</button
				>
				<button
					type="button"
					on:click={deleteWorkExperience}
					class="px-4 py-2 bg-red-400 text-xs font-bold text-gray-100 uppercase">Remove</button
				>
			</div>
			<span class="field-heading">Study Gap</span>
			<div class="relative">
				<select
					id="has_gap"
					name="has_gap"
					placeholder="Do you have study gap?"
					class="peer acc-input-select"
				>
					<option value="" />
					<option value={false}>No</option>
					<option value={true}>Yes</option>
				</select>
				<label for="has_gap" class="acc-label">Do you have study gap?</label>
			</div>
			{#if $data.has_gap === 'true'}
				<div in:fly={{ y: -50, duration: 500 }} out:fly={{ y: 50, duration: 300 }} class="relative">
					<textarea
						id="gap_explanation"
						name="gap_explanation"
						class="acc-input-textarea"
						rows="12"
					/>
					<label for="gap_explanation" class="acc-label"
						>Provide an explanation for the study gap</label
					>
				</div>
			{/if}
		</div>
	</div>
</form>

<style lang="postcss">
	.acc-input-text {
		@apply form-input pt-8 border border-gray-200 rounded-md focus:outline-none focus:border-accent1 focus:ring focus:ring-accent1 focus:ring-opacity-20 focus:shadow-sm w-full p-3 h-16 placeholder-transparent disabled:bg-gray-200;
	}

	.acc-input-textarea {
		@apply form-textarea pt-8 border border-gray-200 focus:outline-none rounded-md focus:border-gray-500 focus:shadow-sm w-full p-3 h-32 placeholder-transparent disabled:bg-gray-200;
	}

	.acc-input-select {
		@apply form-select pt-8 border border-gray-200 focus:outline-none rounded-md focus:border-gray-500 focus:shadow-sm w-full p-3 h-16 placeholder-transparent disabled:bg-gray-200;
	}

	.acc-input-checkbox {
		@apply form-checkbox w-4 h-4 bg-gray-50 checked:bg-accent1 focus:checked:bg-accent1 rounded border border-gray-300 focus:ring-2 focus:ring-indigo-300;
	}

	:global(.acc-label) {
		@apply peer-placeholder-shown:text-sm md:peer-placeholder-shown:text-base peer-placeholder-shown:opacity-40 opacity-100 peer-focus:opacity-100 peer-placeholder-shown:scale-100 scale-75 peer-focus:scale-75 peer-placeholder-shown:translate-y-0 -translate-y-3 peer-focus:-translate-y-3 peer-placeholder-shown:translate-x-0 translate-x-1 peer-focus:translate-x-1 absolute top-0 left-0 px-3 py-5 h-full pointer-events-none transform origin-left transition-all duration-100 ease-in-out;
	}

	.field-heading {
		@apply font-medium text-base text-[#404D61] mt-4 ml-1;
	}

	.form-divider {
		@apply w-1 bg-gray-200;
	}
</style>
