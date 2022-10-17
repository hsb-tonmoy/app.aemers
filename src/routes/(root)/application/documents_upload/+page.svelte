<script>
	import CategorySection from './CategorySection.svelte';

	export let data;
</script>

<svelte:head>
	<title>app.aemers - Documents Upload</title>
</svelte:head>

<div class="flex flex-col px-14 py-8 xl:px-20 xl:py-12 bg-white rounded-2xl w-full">
	<div class="flex gap-x-20 w-full mb-40">
		<div class="w-2/4">
			<p class="text-secondary leading-relaxed text-base">
				Submit all of your authentic documents here. Our team will review and approve these
				documents. These documents will be used in your admission process. We ensure the privacy of
				your documents.
			</p>
		</div>
		<div class="w-2/4">
			<h6 class="text-primary font-bold text-xl mb-2">Instructions</h6>
			<ol class="list-decimal list-inside flex flex-col gap-y-1 text-secondary text-sm">
				<li>Don’t provide Black and White Document.</li>
				<li>Scan and upload pdf document.</li>
				<li>Provide a clear document.</li>
				<li>Don’t provide an expired document.</li>
			</ol>
		</div>
	</div>
	<CategorySection documents={data.documents} categories={data.categories} user={data.user} />
</div>
