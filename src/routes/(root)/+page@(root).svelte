<script>
	import Header from '$lib/dashboard/home/Header/Header.svelte';
	import ApplicationTile from '$lib/dashboard/home/Tiles/ApplicationTile/Tile.svelte';
	import KnowledgebaseTile from '$lib/dashboard/home/Tiles/KnowledgebaseTile/Tile.svelte';
	import MentorshipTile from '$lib/dashboard/home/Tiles/MentorshipTile/Tile.svelte';
	import MockVisaTile from '$lib/dashboard/home/Tiles/MockVisaTile/Tile.svelte';
	import NewsPortalTile from '$lib/dashboard/home/Tiles/NewsPortalTile/Tile.svelte';
	import 'shepherd.js/dist/css/shepherd.css';
	import { onMount } from 'svelte';

	export let data;

	let tour;

	onMount(async () => {
		const obj = await import('shepherd.js');
		const Shepherd = obj.default;

		const shepherdContainer = document.getElementById('svelte');
		tour = new Shepherd.Tour({
			modalContainer: shepherdContainer,
			stepsContainer: shepherdContainer,
			useModalOverlay: true,
			defaultStepOptions: {
				classes: 'rounded-2xl',
				scrollTo: true
			}
		});

		tour.addSteps([
			{
				id: 'application-step',
				title: 'Your Application',
				text: 'Click here to start your study abroad application!',
				classes: 'p-6',
				attachTo: {
					element: '#application',
					on: 'bottom'
				},
				buttons: [
					{
						text: 'Next',
						action: tour.next,
						classes: 'bg-primary text-white font-bold py-1 px-6 rounded-xl'
					}
				],
				modalOverlayOpeningRadius: 16
			},
			{
				id: 'knowledgebase-step',
				text: 'Click here to visit our amazing knowledgebase!',
				attachTo: {
					element: '#knowledgebase',
					on: 'bottom'
				},
				buttons: [
					{
						text: 'Next',
						action: tour.next
					}
				],
				modalOverlayOpeningRadius: 16
			},
			{
				id: 'interview-step',
				text: 'Click here to take a Free Mock Visa Interview!',
				attachTo: {
					element: '#interview',
					on: 'bottom'
				},
				buttons: [
					{
						text: 'Next',
						action: tour.next
					}
				],
				modalOverlayOpeningRadius: 16
			},
			{
				id: 'mentorship-step',
				text: 'Click here to take a look at mentorship opportunities!',
				attachTo: {
					element: '#mentorship',
					on: 'bottom'
				},
				buttons: [
					{
						text: 'Next',
						action: tour.next
					}
				],
				modalOverlayOpeningRadius: 16
			},
			{
				id: 'notif-step',
				text: 'You will find all the important notifications here!',
				attachTo: {
					element: '#notif-tour',
					on: 'bottom'
				},
				buttons: [
					{
						text: 'Next',
						action: tour.next
					}
				],
				modalOverlayOpeningPadding: 5,
				modalOverlayOpeningRadius: 25
			}
		]);
		tour.start();
	});
</script>

<svelte:head><title>Dashboard | app.aemers</title></svelte:head>

<div class="flex flex-col">
	<Header notifications={data.notifications} user={data.user} />
	<div class="relative grid grid-cols-1 xl:grid-cols-2 gap-6 mt-5">
		<div id="application">
			<ApplicationTile />
		</div>

		<div id="knowledgebase">
			<KnowledgebaseTile />
		</div>
		<div id="interview">
			<MockVisaTile />
		</div>
		<!-- <NewsPortalTile /> -->
		<div id="mentorship">
			<MentorshipTile />
		</div>
	</div>
</div>

<style lang="postcss" global>
	.shepherd-button {
		@apply bg-primary;
	}
</style>
