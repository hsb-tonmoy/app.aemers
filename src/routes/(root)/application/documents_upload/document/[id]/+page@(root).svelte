<script>
	import { goto } from '$app/navigation';
	import { Cross, Download, Trash } from '$lib/components/Icons';
	import { convertDate } from '$lib/convertDate';
	import { notificationToast } from '$lib/NotificationToast';
	import { useMutation } from '@sveltestack/svelte-query';

	export let data;

	let statusClass = '';
	let statusText = '';

	$: {
		if (data.document.status === 0) {
			statusText = 'Pending';
			statusClass = 'text-amber-600';
		} else if (data.document.status === 1) {
			statusText = 'Accepted';
			statusClass = 'text-greenSignal';
		} else if (data.document.status === 2) {
			statusText = 'Rejected';
			statusClass = 'text-redSignal';
		} else {
			statusText = 'Ready to Upload';
			statusClass = 'text-greenSignal';
		}
	}

	const handleFileDelete = useMutation(
		(id) => {
			let formData = new FormData();
			formData.append('id', data.document.id);
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
					goto('/application/documents_upload');
				}
			}
		}
	);
</script>

<div class="relative bg-white rounded-2xl px-10 py-12 md:px-16 md:py-20">
	<button
		on:click={() => goto('/application/documents_upload')}
		class="absolute right-8 top-10 flex justify-center items-center bg-borderColor rounded-full cursor-pointer"
	>
		<span class="block p-1 w-8 h-8 md:w-12 md:h-12"><Cross /></span>
	</button>
	<h6 class="text-2xl font-bold mb-4">{data.document.category.name}</h6>
	<div class="props grid gap-y-3 gap-x-6">
		<span class="text-lighterText">File Name</span>
		<span class="">:</span>
		<span class="text-secondary">{data.document.title}</span>
		<span class="text-lighterText">Status</span>
		<span class="">:</span>
		<span class={`font-bold ${statusClass}`}>{statusText}</span>
		<span class="text-lighterText">Upload Date</span>
		<span class="">:</span>
		<span class="text-secondary">{convertDate(data.document.uploaded_at)}</span>
	</div>
	<div class="my-6 h-px bg-borderColor w-full" />
	<section class="document flex flex-col gap-y-8">
		<div class="flex items-center gap-x-2">
			<a
				download={data.document.document}
				href={data.document.document}
				class="inline-flex items-center bg-primary border border-primary text-white font-bold gap-x-2 rounded-2xl px-8 py-3"
				><span class="w-4 h-4"><Download /></span>Download</a
			>
			<button
				on:click={$handleFileDelete.mutate}
				class="inline-flex items-center bg-white hover:bg-redSignal hover:text-white border border-redSignal text-redSignal font-bold gap-x-2 rounded-2xl px-8 py-3"
				><span class="w-4 h-4"><Trash /></span>Delete</button
			>
		</div>
		<object
			type="application/pdf"
			data={data.document.document}
			aria-label="PDF preview window"
			width="100%"
			height="900px"><embed src={data.document.document} /></object
		>
	</section>
</div>

<style>
	.props {
		grid-template-columns: max-content min-content 1fr;
	}
</style>
