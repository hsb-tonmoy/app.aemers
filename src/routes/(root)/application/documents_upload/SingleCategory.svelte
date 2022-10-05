<script>
	import { invalidateAll } from '$app/navigation';
	import { Button } from '$lib/components/Form';
	import { QuestionMarkCircular } from '$lib/components/Icons';
	import FileDetailsComponent from '$lib/components/Upload/FileDetailsComponent.svelte';
	import UploadComponent from '$lib/components/Upload/UploadComponent.svelte';
	import { notificationSuccessToast, notificationToast } from '$lib/NotificationToast';
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
			formData.append('title', values.title);
			formData.append('document', values.document);
			formData.append('category', values.category);
			formData.append('user', user.pk);

			return fetch('/application/documents_upload?/upload', {
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
					notificationSuccessToast(`Document successfully uploaded!`);
					invalidateAll();
				}
			}
		}
	);

	const schema = yup.object({
		title: yup.string().required()
	});

	const { form, data, isValid } = createForm({
		initialValues: {
			title: '',
			category: category.id,
			document: null
		},
		onSubmit: async (values, context) => {
			$submitData.mutate(values);
			context.reset();
			files.accepted = [];
		},
		extend: validator({ schema })
	});

	$: $data.document = files.accepted && files.accepted[0];
	$: $data.title = files.accepted[0] && files.accepted[0].name;

	const handleFileDelete = useMutation(
		(id) => {
			let formData = new FormData();
			formData.append('id', id);
			return fetch('/application/documents_upload?/deleteDocument', {
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
					notificationSuccessToast(`Document successfully deleted!`);
					invalidateAll();
				}
			}
		}
	);
</script>

<form use:form>
	<div class="flex items-center gap-x-2 mb-4">
		<h2 class="font-bold text-secondary text-2xl">{category.name}</h2>
		<span id={`description-${category.id}`} class="block w-5 h-5 text-lighterText cursor-pointer"
			><QuestionMarkCircular /></span
		>
		<Tooltip
			style="custom"
			color="bg-primary text-white px-3 py-2"
			triggeredBy={`description-${category.id}`}>{category.description}</Tooltip
		>
	</div>
	<div class="flex flex-col gap-y-4">
		{#if category.documents.length > 0}
			{#each category.documents as document}
				<FileDetailsComponent
					has_uploaded={true}
					loading={$handleFileDelete.isLoading}
					filename={document.title}
					status={document.status}
					date={document.uploaded_at}
					handleDeleteFile={() => $handleFileDelete.mutate(document.id)}
				/>
			{/each}
		{:else}
			<UploadComponent bind:files />
			{#if files.accepted.length > 0}
				<Button
					loading={$submitData.isLoading}
					disabled={!$isValid || $submitData.isLoading}
					text="Upload"
					classes="mt-4 self-end px-6 py-3"
				/>
			{/if}
		{/if}
	</div>
</form>
