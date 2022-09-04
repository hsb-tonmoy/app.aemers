<script lang="ts">
	import { Error, Input } from '$lib/components/Form';
	import { validator } from '@felte/validator-yup';
	import { useMutation } from '@sveltestack/svelte-query';
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

	const submitData = useMutation(
		(formData) => {
			return fetch('evaluation', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify(formData)
			});
		},
		{
			onError: (error, variables, context) => {
				console.log(error);
			},
			onSuccess: async (data, variables, context) => {
				console.log(data);
			}
		}
	);

	const schema = yup.object().shape({
		message: yup.string()
	});
	const { form, data, errors, isValid, touched } = createForm({
		initialValues: {
			message: $evaluationData.profile.message || ''
		},
		extend: validator({ schema }),
		onSubmit: (values, context) => {
			$evaluationData.profile.message = values.message;

			$submitData.mutate($evaluationData);
		}
	});
</script>

<StepTemplate heading="Tell us something about yourself!">
	<form use:form>
		<fieldset class="flex flex-wrap gap-4 xl:w-3/4">
			<textarea
				name="message"
				id="message"
				placeholder="Type something here..."
				rows="10"
				class="form-textarea w-full rounded-xl border-borderColor focus:border-primary focus:ring focus:ring-primary"
			/>
		</fieldset>

		<Buttons loading={$submitData.isLoading} {steps} bind:currentIndex />
	</form>
</StepTemplate>
