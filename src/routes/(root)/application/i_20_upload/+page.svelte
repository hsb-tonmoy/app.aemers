<script>
	import { invalidateAll } from '$app/navigation';
	import { Upload } from '$lib/components/Icons';
	import FileDetailsComponent from '$lib/components/Upload/FileDetailsComponent.svelte';
	import { notificationSuccessToast, notificationToast } from '$lib/NotificationToast';
	import { useMutation } from '@sveltestack/svelte-query';
	import Form from './Form.svelte';

	let upload_show = false;

	export let data;

	const handleFileDelete = useMutation(
		(id) => {
			let formData = new FormData();
			formData.append('id', id);
			return fetch('/application/i_20_upload?/deleteDocument', {
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

<div class="flex gap-8 px-14 py-8 xl:px-20 xl:py-12 bg-white rounded-2xl w-full">
	<div class="flex flex-col w-3/4">
		<h2>Upload your I-20 here...</h2>
		<span class="text-lighterText text-sm mb-4"
			>Wait untill you get an I20. After recieving it, upload it here. Watch the video to learn more
			about I-20.</span
		>
		{#if data.i_20 == null}
			{#if upload_show}
				<Form user={data.user} />
			{:else}
				<button
					on:click={() => (upload_show = true)}
					class="self-start inline-flex items-center gap-x-2 text-white bg-primary text-base font-bold px-12 py-4 rounded-xl"
					><span class="w-6 h-6"><Upload /></span>Upload</button
				>
			{/if}
		{:else}
			<FileDetailsComponent
				has_uploaded={true}
				loading={$handleFileDelete.isLoading}
				filename={data.i_20.title}
				url={data.i_20.document}
				status={data.i_20.status}
				date={data.i_20.uploaded_at}
				handleDeleteFile={() => $handleFileDelete.mutate(data.i_20.id)}
			/>
		{/if}
	</div>
	{#if !data.i_20 == null}
		{#if !upload_show}
			<div class="w-1/4 flex-shrink">
				<img src="/images/i20+upload.png" alt="I-20 Upload" />
			</div>
		{/if}
	{/if}
</div>

<style lang="postcss">
	h2 {
		@apply text-secondary font-bold text-2xl mb-2;
	}
</style>
