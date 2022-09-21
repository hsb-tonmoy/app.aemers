<script>
	import { goto } from '$app/navigation';
	import { page } from '$app/stores';
	import { application_steps } from '$lib/data/stores';
	import { Tooltip } from 'flowbite-svelte';
	import { showNextToolTip } from './stores';

	import { LeftArrow } from '$lib/components/Icons';

	let pageTitle = '';
	let previousURL = null;
	let nextURL = null;

	$: $application_steps.map((step, index) => {
		if ($page.url.pathname.includes(step.path)) {
			pageTitle = step.text;
			previousURL = $application_steps[index - 1]?.path;
			nextURL = step.status === 2 && $application_steps[index + 1]?.path;
			return;
		}
	});
</script>

<div class="flex flex-col h-screen">
	<header class="flex justify-between items-center border-b border-borderColor pb-4 mb-6">
		<div class="flex items-center gap-x-6">
			<button
				on:click={() => goto('/welcome_application')}
				class="border border-borderColor rounded-2xl px-4 md:px-5 py-2 bg-transparent"
			>
				<span class="block h-4 w-4 md:w-6 md:h-6 text-primary"><LeftArrow /></span>
			</button>
			<h1 class="text-secondary font-bold text-xl md:text-3xl">{pageTitle}</h1>
		</div>
		<nav class="flex items-center gap-x-3">
			<button
				id="previousButton"
				disabled={!previousURL}
				on:click={() => goto(previousURL)}
				class="border-2 border-lighterText disabled:border-lighterText/60 text-lighterText disabled:text-lighterText/60 text-sm md:text-base font-bold hover:text-lightText px-4 py-2 rounded-2xl"
				>Previous</button
			>
			<button
				id="nextButton"
				disabled={!nextURL}
				on:click={() => goto(nextURL)}
				class="border-2 border-primary disabled:border-primary/60 text-white bg-primary hover:bg-primaryDarker disabled:bg-primary/60 text-sm md:text-base font-bold px-4 py-2 rounded-2xl"
				>Next</button
			>
			<Tooltip
				bind:open={$showNextToolTip}
				style="custom"
				defaultClass=""
				color="nextButtonToolTip bg-white text-primary text-center w-52 border-2 border-primary"
				offset="20"
				placement="bottom"
				triggeredBy="#nextButton"
				trigger="click"><span class="font-bold">Click here to go next!</span></Tooltip
			>
		</nav>
	</header>

	<div class="flex-1">
		<slot />
	</div>
</div>
