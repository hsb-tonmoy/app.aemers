<script>
	import Header from '$lib/dashboard/home/Header/Header.svelte';
	import ApplicationTile from '$lib/dashboard/home/Tiles/ApplicationTile/Tile.svelte';
	import KnowledgebaseTile from '$lib/dashboard/home/Tiles/KnowledgebaseTile/Tile.svelte';
	import MentorshipTile from '$lib/dashboard/home/Tiles/MentorshipTile/Tile.svelte';
	import MockVisaTile from '$lib/dashboard/home/Tiles/MockVisaTile/Tile.svelte';
	import NewsPortalTile from '$lib/dashboard/home/Tiles/NewsPortalTile/Tile.svelte';
	import { onMount } from 'svelte';

	export let data;

	let dashboardTour;

	onMount(() => {
		dashboardTour = localStorage.getItem('dashboardTour');
	});
</script>

<svelte:head><title>Dashboard | app.aemers</title></svelte:head>

<div class="flex flex-col">
	<Header notifications={data.notifications} user={data.user} />
	<div class="grid grid-cols-1 xl:grid-cols-2 gap-6 mt-5">
		{#if dashboardTour === 'true'}
			<div
				on:click={() => {
					localStorage.setItem('dashboardTour', 'false');
					dashboardTour = 'false';
				}}
				on:keypress={() => {
					localStorage.setItem('dashboardTour', 'false');
					dashboardTour = 'false';
				}}
				class="overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 h-modal md:h-full z-[6000] md:inset-0 bg-black/60"
			/>
		{/if}
		<div
			on:click={() => {
				localStorage.setItem('dashboardTour', 'false');
				dashboardTour = 'false';
			}}
			on:keypress={() => {
				localStorage.setItem('dashboardTour', 'false');
				dashboardTour = 'false';
			}}
			class="z-[6001]"
		>
			<ApplicationTile />
		</div>
		<KnowledgebaseTile />
		<MockVisaTile />
		<!-- <NewsPortalTile /> -->
		<MentorshipTile />
	</div>
</div>
