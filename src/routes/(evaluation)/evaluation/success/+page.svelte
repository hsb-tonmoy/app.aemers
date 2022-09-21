<script>
	import { Button } from '$lib/components/Form';
	import Success from '$lib/components/UI/Success.svelte';

	async function handleSubmit() {
		window.location.href = '/';
	}
</script>

<svelte:head>
	<title>app.aemers - Evaluation Complete</title>
</svelte:head>

<main class="flex flex-col justify-center items-center h-screen">
	<Success width="800px" />
	<h6 class="font-bold text-center text-secondary text-5xl">Profile Completed!</h6>
	<p class="text-lighterText text-lg font-normal text-center mt-4 mb-8">
		Congrats! You have completed your profile. Let’s explore the universe of Aemers.
	</p>
	<Button
		on:click={handleSubmit}
		classes="text-lg py-4 px-12"
		type="button"
		text="Go to my Dashboard"
	/>
</main>
