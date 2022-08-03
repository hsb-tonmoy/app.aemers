<script>
	import { fly } from 'svelte/transition';
	import { session } from '$app/stores';
	import { post } from '$lib/utils';

	export let summary;

	let success = false;

	async function createPreApplicationForm() {
		const res = await post('/dashboard/application_submission/create', {
			first_name: summary.first_name,
			last_name: summary.last_name,
			email: summary.email,
			phone: summary.phone,
			student: $session.user.student_id
		});

		if (res.first_name && res.last_name) {
			success = true;
			await new Promise((r) => setTimeout(r, 5000));
			location.reload();
		} else {
			console.log(res);
		}
	}
</script>

<div class="w-full h-full flex flex-col gap-y-4 justify-center items-center">
	<button
		on:click={createPreApplicationForm}
		disabled={success}
		class="px-8 py-3 text-lg bg-accent1 disabled:bg-indigo-900 text-white"
		>Click Here to Start Your Pre-Application Form</button
	>
	{#if success}
		<span in:fly={{ y: -50, duration: 500 }} class="text-xl md:text-2xl lg:text-3xl"
			>Please wait, the page will refresh in 5 seconds!</span
		>
	{/if}
</div>
