<script>
	import { LeftArrow } from '$lib/components/Icons';
	import Logo from '$lib/dashboard/layout/Sidebar/Logo.svelte';
	import Intro from './Intro.svelte';
	import Questions from './Questions.svelte';

	let started = false;

	export let data;

	let session;
</script>

<svelte:head>
	<title>app.aemers - Mock Visa Interview</title>
</svelte:head>

<main class="flex flex-col h-screen bg-bgColor">
	<header class="flex justify-between items-center px-6 py-3 bg-white">
		<Logo />
		<button
			on:click={() => {
				started = false;
			}}
			class="inline-flex items-center gap-x-2 border border-primary text-primary hover:bg-primary hover:text-white font-bold rounded-xl px-4 py-1"
			><span class="w-4 h-4 block"><LeftArrow /></span> Exit Test</button
		>
	</header>
	<div
		style="margin: auto;"
		class="bg-white p-10 rounded-2xl min-h-[50vh] min-w-[80vw] xl:min-w-[70vw] 2xl:min-w-[50vw]"
	>
		{#if started}
			<Questions {session} questions={data.questions} user={data.user} />
		{:else}
			<Intro bind:session user={data.user} bind:started />
		{/if}
	</div>
</main>
