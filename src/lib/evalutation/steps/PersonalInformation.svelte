<script lang="ts">
	import { Error, Input, Label } from '$lib/components/Form';
	import { validator } from '@felte/validator-yup';
	import { createForm } from 'felte';
	import * as yup from 'yup';
	import Buttons from '../Buttons.svelte';
	import StepTemplate from '../StepTemplate.svelte';
	import { evaluationData } from './stores';
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
	const { form, data, errors, isValid, touched } = createForm({
		initialValues: {
			first_name: $evaluationData.first_name || '',
			last_name: $evaluationData.last_name || '',
			phone_number: $evaluationData.phone_number || '',
			country: $evaluationData.country || ''
		},
		extend: validator({ schema }),
		onSubmit: (values, context) => {
			$evaluationData = {
				...$evaluationData,
				...values
			};
			handleNext();
		}
	});
</script>

<StepTemplate heading="Personal Information">
	<form use:form>
		<fieldset class="grid grid-cols-2 gap-x-4 md:gap-x-8 gap-y-6">
			<div class="">
				<Label label_for="first_name" label="First Name" />
				<Input
					id="first_name"
					name="first_name"
					type="text"
					placeholder="Ex. Abdullah"
					touched={$touched.first_name}
					error={$errors.first_name}
					classes="w-full"
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
					touched={$touched.last_name}
					error={$errors.last_name}
					classes="w-full"
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
					touched={$touched.phone_number}
					error={$errors.phone_number}
					classes="w-full"
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
					touched={$touched.country}
					error={$errors.country}
					classes="w-full"
				/>
				{#if $errors.country}
					<Error classes="self-start" message={$errors.country} />
				{/if}
			</div>
		</fieldset>
		<Buttons {steps} bind:currentIndex />
	</form>
</StepTemplate>
