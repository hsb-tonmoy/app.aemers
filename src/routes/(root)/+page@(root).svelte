<script>
	import Header from '$lib/dashboard/home/Header/Header.svelte';
	import ApplicationTile from '$lib/dashboard/home/Tiles/ApplicationTile/Tile.svelte';
	import KnowledgebaseTile from '$lib/dashboard/home/Tiles/KnowledgebaseTile/Tile.svelte';
	import MentorshipTile from '$lib/dashboard/home/Tiles/MentorshipTile/Tile.svelte';
	import MockVisaTile from '$lib/dashboard/home/Tiles/MockVisaTile/Tile.svelte';
	import NewsPortalTile from '$lib/dashboard/home/Tiles/NewsPortalTile/Tile.svelte';

	export let data;
</script>

<div class="flex flex-col px-6 py-10 md:px-10 md:py-16">
	<Header user={data.user} />
	<div class="grid grid-cols-1 xl:grid-cols-2 gap-x-3 gap-y-6 mt-5">
		<ApplicationTile application_status={data.application_status} />
		<KnowledgebaseTile />
		<MockVisaTile />
		<NewsPortalTile />
		<MentorshipTile />
	</div>
</div>
