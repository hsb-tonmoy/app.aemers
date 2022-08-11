<script>
	import Header from '$lib/dashboard/home/Header.svelte';
	import ApplicationTile from '$lib/dashboard/home/Tiles/ApplicationTile/Tile.svelte';
	import KnowledgebaseTile from '$lib/dashboard/home/Tiles/KnowledgebaseTile/Tile.svelte';
</script>

<div class="flex flex-col px-6 py-10 md:px-10 md:py-16">
	<Header />
	<div class="grid grid-cols-1 xl:grid-cols-2 gap-3 mt-5">
		<ApplicationTile />
		<KnowledgebaseTile />
	</div>
</div>
