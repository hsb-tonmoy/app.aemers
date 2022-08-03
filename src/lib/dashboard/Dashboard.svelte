<script>
	import Summary from './Summary.svelte';
	export let summary;
</script>

<div class="flex">
	<Summary {summary} />
</div>
<div class="flex flex-wrap gap-4 mt-12">
	<a href="_#" target="_blank" class="resource-a">Funding & Hiring Central</a>
	<a href="_#" class="resource-a">Knowledgebase Central</a>
	<a href="https://grecdatabase.com/" target="_blank" class="resource-a">GrecDatabase Central</a>
	<a href="_#" class="resource-a">Happening now</a>
	<a href="https://www.facebook.com/mrashidpage" target="_blank" class="resource-a"
		>mRashid Facebook page</a
	>
	<a href="_#" class="resource-a">Embassy Experience Central</a>
</div>

<style lang="postcss">
	.resource-a {
		@apply flex items-center justify-center px-4 py-2 w-72 h-24 bg-white shadow hover:shadow-sm text-black text-lg rounded-lg transition-all ease-in-out duration-500;
	}
</style>
