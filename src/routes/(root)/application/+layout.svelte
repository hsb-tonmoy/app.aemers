<script>
	import { page } from '$app/stores';
	export let data;

	import { LeftArrow } from '$lib/components/Icons';

	let pageTitle = '';

	$: data.application_steps.map((step, index) => {
		if ($page.url.pathname === step.path) {
			pageTitle = step.text;
			return;
		}
	});
</script>

<header class="flex justify-between items-center border-b border-borderColor pb-4">
	<div class="flex items-center gap-x-6">
		<div class="border border-borderColor rounded-2xl px-5 py-2 bg-transparent">
			<span class="block w-6 h-6 text-primary"><LeftArrow /></span>
		</div>
		<h1 class="text-secondary font-bold text-3xl">{pageTitle}</h1>
	</div>
</header>

<slot />
