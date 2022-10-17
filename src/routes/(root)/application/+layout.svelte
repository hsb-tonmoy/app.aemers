<script>
	import { goto } from '$app/navigation';
	import { page } from '$app/stores';
	import { sidebarState } from '$lib/dashboard/home/stores';
	import { application_steps } from '$lib/data/stores';
	import { Tooltip } from 'flowbite-svelte';
	import { formSaved, showNextToolTip } from './stores';

	import { CloudDone, LeftArrow, LeftChevron, Menu, RightChevron } from '$lib/components/Icons';
	import { onMount } from 'svelte';

	let pageTitle = '';
	let previousURL = null;
	let nextURL = null;

	$: $application_steps.map((step, index) => {
		if ($page.url.pathname.includes(step.path)) {
			pageTitle = step.text;
			previousURL = $application_steps[index - 1]?.path;
			nextURL =
				($application_steps[index + 1]?.status >= 1 || $application_steps[index]?.status === 2) &&
				$application_steps[index + 1]?.path;
			return;
		}
	});

	const handlePrevious = () => {
		goto(previousURL);
	};

	const handleNext = () => {
		goto(nextURL);
		$showNextToolTip === true ? showNextToolTip.set(false) : null;
	};

	onMount(() => {
		formSaved.set(false);
	});
</script>

<div class="flex flex-col h-full">
	<header class="flex flex-col border-b border-borderColor pb-4 mb-6">
		<div class="flex justify-between items-center">
			<div class="flex items-center gap-x-6 w-full">
				<button
					on:click={() => ($sidebarState = !$sidebarState)}
					class="lg:hidden w-6 h-6 md:w-10 md:h-10 text-secondary hover:text-primary cursor-pointer"
					><Menu /></button
				>
				<button
					on:click={() => goto('/')}
					class="border border-borderColor rounded-2xl px-4 md:px-5 py-2 bg-transparent"
				>
					<span class="block h-4 w-4 md:w-6 md:h-6 text-primary"><LeftArrow /></span>
				</button>
				<h1 class="hidden md:block text-secondary font-bold text-xl md:text-3xl">{pageTitle}</h1>
				{#if $formSaved}
					<div class="flex items-center gap-x-1">
						<span class="block text-primary w-4 h-4 mt-1"><CloudDone /></span><span
							class="text-sm text-secondary">Saved</span
						>
					</div>
				{/if}
			</div>
			<nav class="flex items-center gap-x-3">
				<button
					id="previousButton"
					disabled={!previousURL}
					on:click={handlePrevious}
					class="border-2 border-lighterText disabled:border-lighterText/20 text-lighterText disabled:text-lighterText/60 text-sm md:text-base font-bold hover:text-lightText px-4 py-2 rounded-2xl"
					>Previous</button
				>
				<button
					id="nextButton"
					disabled={!nextURL}
					on:click={handleNext}
					class="border-2 border-primary disabled:border-primary/20 text-white bg-primary hover:bg-primaryDarker disabled:bg-primary/60 text-sm md:text-base font-bold px-4 py-2 rounded-2xl"
					>Next</button
				>
			</nav>
		</div>
		<h1 class="md:hidden mt-4 text-secondary font-bold text-xl md:text-3xl">{pageTitle}</h1>
	</header>

	<div class="flex-1">
		<slot />
	</div>
</div>
