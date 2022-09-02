<script>
	import Header from '$lib/dashboard/home/Header/Header.svelte';
	import ApplicationTile from '$lib/dashboard/home/Tiles/ApplicationTile/Tile.svelte';
	import KnowledgebaseTile from '$lib/dashboard/home/Tiles/KnowledgebaseTile/Tile.svelte';
	import MockVisaTile from '$lib/dashboard/home/Tiles/MockVisaTile/Tile.svelte';
	import NewsPortalTile from '$lib/dashboard/home/Tiles/NewsPortalTile/Tile.svelte';
	import MentorshipTile from '$lib/dashboard/home/Tiles/MentorshipTile/Tile.svelte';
</script>

<div class="flex flex-col px-6 py-10 md:px-10 md:py-16">
	<Header />
	<div class="grid grid-cols-1 xl:grid-cols-2 gap-x-3 gap-y-6 mt-5">
		<ApplicationTile />
		<KnowledgebaseTile />
		<MockVisaTile />
		<NewsPortalTile />
		<MentorshipTile />
	</div>
</div>
