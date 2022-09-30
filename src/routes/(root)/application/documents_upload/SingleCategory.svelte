<script>
	import { Button } from '$lib/components/Form';
	import { QuestionMarkCircular } from '$lib/components/Icons';
	import UploadComponent from '$lib/components/Upload/UploadComponent.svelte';
	import { notificationToast } from '$lib/NotificationToast';
	import { validator } from '@felte/validator-yup';
	import { useMutation } from '@sveltestack/svelte-query';
	import { createForm } from 'felte';
	import { Tooltip } from 'flowbite-svelte';
	import * as yup from 'yup';

	let files = {
		accepted: []
	};
	export let category;
	export let user;

	const submitData = useMutation(
		(values) => {
			let formData = new FormData();
			formData.append('document', values.document);
			formData.append('category', values.category);
			formData.append('description', values.description);
			formData.append('title', values.title);
			formData.append('user', user.pk);

			return fetch('/application/documents_upload', {
				method: 'POST',
				body: formData
			});
		},
		{
			onSettled: async (data, error, variables, context) => {
				if (!data.ok || error) {
					notificationToast('Something went wrong, please try again later');
					console.log(await data.json(), error);
				} else {
					// formSaved.set(true);
					console.log('success');
				}
			}
		}
	);

	const schema = yup.object({
		title: yup.string().required()
	});

	const { form, data, errors } = createForm({
		initialValues: {
			title: '',
			description: '',
			category: 1,
			document: null
		},
		onSubmit: async (values) => {
			$submitData.mutate(values);
		},
		extend: validator({ schema })
	});

	$: $data.document = files.accepted && files.accepted[0];
	$: $data.title = files.accepted[0] && files.accepted[0].name;
</script>

<form use:form>
	<div class="flex items-center gap-x-2 mb-4">
		<h2 class="font-bold text-secondary text-2xl">Passport</h2>
		<span id="description" class="block w-5 h-5 text-lighterText cursor-pointer"
			><QuestionMarkCircular /></span
		>
		<Tooltip style="custom" color="bg-primary text-white px-3 py-2" triggeredBy="#description"
			>Scan your passport and upload it here...</Tooltip
		>
	</div>
	<UploadComponent bind:files />
	<Button text="Submit" classes="px-6 py-3" />
</form>
