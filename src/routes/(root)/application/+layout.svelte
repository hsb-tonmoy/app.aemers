<script>
	import { goto } from '$app/navigation';

	import { page } from '$app/stores';
	import { application_steps } from '$lib/data/stores';

	import { LeftArrow } from '$lib/components/Icons';

	let pageTitle = '';
	let previousURL = null;
	let nextURL = null;

	$: $application_steps.map((step, index) => {
		if ($page.url.pathname === step.path) {
			pageTitle = step.text;
			previousURL = $application_steps[index - 1]?.path;
			nextURL = step.status === 2 && $application_steps[index + 1]?.path;
			return;
		}
	});
</script>

<header class="flex justify-between items-center border-b border-borderColor pb-4 mb-6">
	<div class="flex items-center gap-x-6">
		<button
			on:click={() => goto('/welcome_application')}
			class="border border-borderColor rounded-2xl px-5 py-2 bg-transparent"
		>
			<span class="block w-6 h-6 text-primary"><LeftArrow /></span>
		</button>
		<h1 class="text-secondary font-bold text-3xl">{pageTitle}</h1>
	</div>
	<nav class="flex items-center gap-x-3">
		<button
			disabled={!previousURL}
			on:click={() => goto(previousURL)}
			class="border-2 border-lighterText disabled:border-lighterText/60 text-lighterText disabled:text-lighterText/60 font-bold hover:text-lightText px-4 py-2 rounded-2xl"
			>Previous</button
		>
		<button
			disabled={!nextURL}
			on:click={() => goto(nextURL)}
			class="border-2 border-primary disabled:border-primary/60 text-white bg-primary hover:bg-primaryDarker disabled:bg-primary/60 font-bold px-4 py-2 rounded-2xl"
			>Next Step</button
		>
	</nav>
</header>

<slot />
