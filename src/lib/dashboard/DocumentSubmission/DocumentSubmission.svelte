<script>
	import { check, crossmark, pending } from '$lib/svg/document_submission';
	import { convertDate } from '$lib/convertDate';
	import UploadModal from './FileUpload/UploadModal.svelte';
	import FilePreview from './FileUpload/FilePreview.svelte';

	export let document_category;
	export let document;
</script>

<section class="flex flex-col">
	<UploadModal {document_category} />

	{#each document_category as category}
		<h3 class="font-medium text-lg text-lightText mb-4">{category.name}</h3>
		<table class="block md:table overflow-x-auto whitespace-nowrap shadow-md rounded-sm ml-1 mb-12">
			<tr class="text-xs text-gray-600 border-b-2 border-gray-200 text-left">
				<th class="w-3/5 p-2">Name</th>
				<th class="w-[15%]">Approved</th>
				<th class="w-[25%]">Dated Added</th>
			</tr>
			{#each document as doc}
				{#if doc.category && doc.category.slug == category.slug}
					<tr class="text-sm">
						<td class="p-2"><FilePreview pdf_title={doc.title} pdf_url={doc.document} /></td>
						<td>
							{#if doc.is_approved}
								{@html check} Approved
							{:else if doc.is_rejected}
								{@html crossmark} Rejected
							{:else}
								{@html pending} Pending
							{/if}
						</td>
						<td>{convertDate(doc.uploaded_at)}</td>
					</tr>
				{/if}
			{/each}
		</table>
	{/each}
</section>
