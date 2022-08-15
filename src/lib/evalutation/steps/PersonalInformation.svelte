<script lang="ts">
	import StepTemplate from '../StepTemplate.svelte';
	import Buttons from '../Buttons.svelte';
	import { createForm } from 'felte';
	import { validator } from '@felte/validator-yup';
	import * as yup from 'yup';
	import { Label, Input, Error } from '$lib/components/Form';
	export let steps;
	export let currentIndex: number;

	function handleNext() {
		currentIndex = Math.min(steps.length - 1, currentIndex + 1);
	}

	const schema = yup.object().shape({
		first_name: yup.string().required('First Name is required').trim(),
		last_name: yup.string().required('Last Name is required').trim(),
		phone_number: yup.string().required('Phone Number is required').trim(),
		country: yup.string().required('Country is required').trim()
	});
	const { form, data, errors, isValid } = createForm({
		initialValues: {
			first_name: '',
			last_name: '',
			phone_number: '',
			country: ''
		},
		extend: validator({ schema }),
		onSubmit: (values, context) => {
			console.log(values);
			handleNext();
		}
	});
</script>

<StepTemplate {steps} bind:currentIndex heading="Personal Information">
	<form use:form>
		<fieldset class="grid grid-cols-2 gap-x-4 md:gap-x-8 gap-y-6">
			<div class="">
				<Label label_for="first_name" label="First Name" />
				<Input
					id="first_name"
					name="first_name"
					type="text"
					placeholder="Ex. Abdullah"
					error={$errors.first_name}
				/>
				{#if $errors.first_name}
					<Error classes="self-start" message={$errors.first_name} />
				{/if}
			</div>
			<div class="">
				<Label label_for="last_name" label="Last Name" />
				<Input
					id="last_name"
					name="last_name"
					type="text"
					placeholder="Ex. Abdullah"
					error={$errors.last_name}
				/>
				{#if $errors.last_name}
					<Error classes="self-start" message={$errors.last_name} />
				{/if}
			</div>

			<div class="">
				<Label label_for="phone_number" label="Phone Number" />
				<Input
					id="phone_number"
					name="phone_number"
					type="text"
					placeholder="+8801XXXXXXXXX"
					error={$errors.phone_number}
				/>
				{#if $errors.phone_number}
					<Error classes="self-start" message={$errors.phone_number} />
				{/if}
			</div>
			<div class="">
				<Label label_for="country" label="Country" />
				<Input
					id="country"
					name="country"
					type="text"
					placeholder="Bangladesh"
					error={$errors.country}
				/>
				{#if $errors.country}
					<Error classes="self-start" message={$errors.country} />
				{/if}
			</div>
		</fieldset>
		<Buttons {steps} bind:currentIndex />
	</form>
</StepTemplate>
