<script>
	import { Robot } from '$lib/components/Icons';
	import { Button } from '$lib/components/Form';
	import SingleSession from './SingleSession.svelte';
	import { goto } from '$app/navigation';

	export let data;
</script>

<main class="flex flex-col gap-y-4">
	<div
		class="flex items-center justify-between gap-x-4 px-6 py-4 md:px-8 md:py-6 xl:px-12 xl:py-10 bg-primary text-white rounded-2xl"
	>
		<div class="flex items-center md:gap-x-4 xl:gap-x-6">
			<span class="flex w-20 h-20 md:w-32 md:h-32 xl:w-40 xl:h-40">
				<Robot />
			</span>
			<div class="flex flex-col">
				<h3 class="font-bold text-xl md:text-2xl xl:text-3xl mb-1">
					Take a Free Mock Visa Interview
				</h3>
				<span class="text-xs xl:text-sm"
					>Take as many tests as you want and evaluate your interviewing skills with downloadable
					recordings</span
				>
			</div>
		</div>
		<button
			on:click={() => {
				goto('/mock_visa_interview/free/new');
			}}
			class="whitespace-nowrap bg-white border border-white hover:bg-primary hover:text-white text-base xl:text-lg font-bold text-primary px-6 py-3 xl:px-10 xl:py-4 rounded-xl"
			>Start Test</button
		>
	</div>
	<div class="bg-white px-6 py-4 md:px-8 md:py-6 xl:px-12 xl:py-10 rounded-2xl">
		<h6 class="font-bold text-xl md:text-2xl mb-4">Completed Free Mock Tests</h6>
		{#if data.sessions.length > 0}
			<div class="grid grid-cols-1 md:grid-cols-3 2xl:grid-cols-4 gap-4">
				{#each data.sessions as session}
					<SingleSession id={session.id} date={session.created_at} />
				{/each}
			</div>
		{:else}
			<div
				class="flex flex-col justify-center items-center border-2 border-dashed border-borderColor rounded-2xl py-8 mx-auto w-full md:w-[60vw] 2xl:w-[30vw]"
			>
				<img src="/images/logoIconGray.png" alt="No Tests" class="object-cover" />
				<span class="text-lightText text-center"
					>You haven't completed any free mock interviews</span
				>
			</div>
		{/if}
	</div>
</main>
