<script>
	export let summary;
	import { fly } from 'svelte/transition';
	import { beforeNavigate, goto } from '$app/navigation';
	import { toast } from '@zerodevx/svelte-toast';
	import { submit_identifier } from '$lib/dashboard/stores';
	import { callingCountries } from 'country-data-list';
	import { createForm } from 'felte';
	import { validator } from '@felte/validator-yup';
	import * as yup from 'yup';
	import ErrorMessage from './ErrorMessage.svelte';
	import { form_submitting } from '$lib/dashboard/stores';
	import {
		DESTINATION,
		DEGREE,
		MAJORS,
		CURRICULUM,
		LEVEL,
		EP_CHOICES,
		phoneRegex
	} from './constants';

	import BeforeLeaving from '$lib/dashboard/Layout/BeforeLeaving.svelte';

	let confirm_leaving = false;

	let form_id = 'account_creation_form';

	$submit_identifier = form_id;

	const schema = yup.object({
		email: yup.string().email().required(),
		phone: yup
			.string()
			.matches(phoneRegex, 'Not a valid phone number')
			.required('Phone number is required')
			.trim()
	});

	const { form, data, errors, isDirty } = createForm({
		initialValues: {
			email: summary.email,
			first_name: summary.first_name,
			middle_initials: summary.middle_initials,
			last_name: summary.last_name,
			phone: summary.phone,
			social_media: summary.social_media,
			address_line_1: summary.address_line_1,
			address_line_2: summary.address_line_2,
			city: summary.city,
			state: summary.state,
			zip_code: summary.zip_code,
			country: summary.country,
			date_of_birth: summary.date_of_birth,
			gender: summary.gender,
			marital_status: summary.marital_status,
			destination: summary.destination,
			degree: summary.degree,
			major: summary.major,
			english_proficiency: summary.english_proficiency,
			english_proficiency_score: summary.english_proficiency_score,
			education: summary.education,
			message: summary.message
		},
		extend: validator({ schema }),
		onSubmit(values, context) {
			handleAccountCreationSubmit(JSON.stringify(values));
		}
	});

	$: form_modified = $isDirty;

	beforeNavigate(({ from, to, cancel }) => {
		if (form_modified) {
			confirm_leaving = true;
			cancel();
		}
	});

	async function handleAccountCreationSubmit(body) {
		$form_submitting = true;
		const response = await fetch(`/dashboard/account_creation/update/`, {
			method: 'PATCH',
			headers: {
				'Content-Type': 'application/json'
			},
			body
		});

		if (response.ok) {
			form_modified = false;
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

	function addEducationData() {
		$data.education = $data.education.concat([
			{
				curriculum: '',
				level: '',
				gpa: '',
				year: ''
			}
		]);
	}

	function deleteEducationData() {
		$data.education = $data.education.slice(0, -1);
	}
</script>

{#if confirm_leaving}
	<BeforeLeaving
		on:leave={() => {
			form_modified = false;
			confirm_leaving = false;
		}}
		bind:hidden={confirm_leaving}
	/>
{/if}
<h4 class="text-2xl text-lightText font-medium">Account Creation Form</h4>

<form id={form_id} use:form class="w-full mt-8">
	<div class="flex flex-wrap lg:flex-nowrap gap-x-4">
		<!-- First Half -->
		<div class="flex flex-col gap-y-4 w-full lg:w-2/4">
			<div class="relative">
				<input disabled type="email" id="email" name="email" class="peer acc-input-text" />
				<label for="email" class="acc-label">Email address</label>
			</div>
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
				<input
					type="text"
					id="phone"
					name="phone"
					placeholder="Phone"
					class="peer acc-input-text"
				/>
				<label for="phone" class="acc-label">Phone</label>
			</div>
			<ErrorMessage errors={$errors.phone} />
			<div class="relative">
				<input
					type="text"
					id="social_media"
					name="social_media"
					placeholder="Social Media"
					class="peer acc-input-text"
				/>
				<label for="social_media" class="acc-label">Social Media</label>
			</div>

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
			<span class="field-heading">Personal Information</span>
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
		</div>
		<!-- Divider -->
		<div class="form-divider " />
		<!-- Second Half -->
		<div class="flex flex-col gap-y-4 w-full mt-12 lg:mt-0 lg:w-2/4">
			<span class="field-heading lg:hidden">Study Abroad Information</span>
			<div class="flex gap-x-2">
				<div class="w-1/3 relative">
					<select
						id="destination"
						name="destination"
						placeholder="Destination"
						class="peer acc-input-select"
					>
						{#each DESTINATION as destination}
							<option value={destination.label}>{destination.label}</option>
						{/each}
					</select>
					<label for="destination" class="acc-label">Destination</label>
				</div>
				<div class="w-1/3 relative">
					<select id="degree" name="degree" placeholder="Degree" class="peer acc-input-select">
						{#each DEGREE as degree}
							<option value={degree.label}>{degree.label}</option>
						{/each}
					</select>
					<label for="degree" class="acc-label">Degree</label>
				</div>
				<div class="w-1/3 relative">
					<select id="major" name="major" placeholder="Major" class="peer acc-input-select">
						{#each MAJORS as major}
							<option value={major.label}>{major.label}</option>
						{/each}
					</select>
					<label for="major" class="acc-label">Major</label>
				</div>
			</div>
			<div class="relative">
				<select
					id="english_proficiency"
					name="english_proficiency"
					placeholder="English Proficiency"
					class="peer acc-input-select"
				>
					{#each EP_CHOICES as ep}
						<option value={ep.value}>{ep.label}</option>
					{/each}
				</select>
				<label for="english_proficiency" class="acc-label">English Proficiency</label>
			</div>
			{#if $data.english_proficiency === 'ielts' || $data.english_proficiency === 'toefl' || $data.english_proficiency === 'duolingo'}
				<div class="relative">
					<input
						type="text"
						id="english_proficiency_score"
						name="english_proficiency_score"
						placeholder="Score"
						class="peer acc-input-text"
					/>

					<label for="english_proficiency_score" class="acc-label">Score</label>
				</div>
			{/if}
			<span class="field-heading">Education Information</span>
			{#each $data.education as _, i}
				<div class="flex gap-x-2">
					<div class="relative w-full mb-3">
						<select
							id="grid-curriculum"
							class="peer acc-input-select"
							bind:value={$data.education[i].curriculum}
						>
							{#each CURRICULUM as option}
								<option value={option}>{option}</option>
							{/each}
						</select>
						<label class="acc-label" for="grid-curriculum"> Curriculum </label>
					</div>
					<div class="relative w-full mb-3">
						<select
							id="grid-level"
							class="peer acc-input-select"
							bind:value={$data.education[i].level}
						>
							{#each LEVEL as option}
								<option value={option}>{option}</option>
							{/each}
						</select>
						<label class="acc-label" for="grid-level"> Level </label>
					</div>
					<div class="relative w-full mb-3">
						<input
							id="grid-gpa"
							type="text"
							class="peer acc-input-text"
							bind:value={$data.education[i].gpa}
						/>
						<label class="acc-label" for="grid-gpa"> GPA </label>
					</div>
					<div class="relative w-full mb-3">
						<input
							id="grid-year"
							type="text"
							class="peer acc-input-text"
							bind:value={$data.education[i].year}
						/>
						<label class="acc-label" for="grid-year"> Year </label>
					</div>
				</div>
			{/each}
			<div class="w-full flex gap-x-2 px-2">
				<button
					type="button"
					on:click={addEducationData}
					class="px-4 py-2 bg-zinc-600 text-xs font-bold text-gray-100 uppercase">Add</button
				>
				<button
					type="button"
					on:click={deleteEducationData}
					class="px-4 py-2 bg-red-400 text-xs font-bold text-gray-100 uppercase">Remove</button
				>
			</div>
			<span class="field-heading">Other</span>
			<div class="relative">
				<textarea
					disabled
					id="message"
					name="message"
					type="text"
					class="acc-input-textarea"
					rows="8"
				/>
				<label for="message" class="acc-label">Your Initial Query</label>
			</div>
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

	:global(.acc-label) {
		@apply peer-placeholder-shown:opacity-40 opacity-100 peer-focus:opacity-100 peer-placeholder-shown:scale-100 scale-75 peer-focus:scale-75 peer-placeholder-shown:translate-y-0 -translate-y-3 peer-focus:-translate-y-3 peer-placeholder-shown:translate-x-0 translate-x-1 peer-focus:translate-x-1 absolute top-0 left-0 px-3 py-5 h-full pointer-events-none transform origin-left transition-all duration-100 ease-in-out;
	}

	.field-heading {
		@apply font-medium text-base text-[#404D61] mt-4 ml-1;
	}

	.form-divider {
		@apply w-1 bg-gray-200;
	}
</style>
