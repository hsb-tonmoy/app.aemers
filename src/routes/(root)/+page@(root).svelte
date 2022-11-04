<script>
	import Header from '$lib/dashboard/home/Header/Header.svelte';
	import ApplicationTile from '$lib/dashboard/home/Tiles/ApplicationTile/Tile.svelte';
	import KnowledgebaseTile from '$lib/dashboard/home/Tiles/KnowledgebaseTile/Tile.svelte';
	import MentorshipTile from '$lib/dashboard/home/Tiles/MentorshipTile/Tile.svelte';
	import MockVisaTile from '$lib/dashboard/home/Tiles/MockVisaTile/Tile.svelte';
	import NewsPortalTile from '$lib/dashboard/home/Tiles/NewsPortalTile/Tile.svelte';
	import introJs from 'intro.js';
	import { onMount } from 'svelte';

	export let data;

	onMount(() => {
		introJs().start();
	});
</script>

<svelte:head><title>Dashboard | app.aemers</title></svelte:head>

<div class="flex flex-col">
	<Header notifications={data.notifications} user={data.user} />
	<div class="grid grid-cols-1 xl:grid-cols-2 gap-6 mt-5">
		<div data-title="Welcome to app.aemers!" data-intro="Click Here to Start Your Application!">
			<ApplicationTile />
		</div>

		<KnowledgebaseTile />
		<div
			data-title="Welcome to app.aemers!"
			data-intro="Click Here to Take a Free Mock Visa Interview!"
		>
			<MockVisaTile />
		</div>
		<!-- <NewsPortalTile /> -->
		<MentorshipTile />
	</div>
</div>
