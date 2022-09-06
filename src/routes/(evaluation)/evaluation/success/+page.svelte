<script>
	import { goto } from '$app/navigation';

	import { Button } from '$lib/components/Form';
</script>

<svelte:head>
	<title>ap.aemers - Evaluation Complete</title>
</svelte:head>

<main class="flex flex-col justify-center items-center h-screen">
	<iframe title="success" width="800px" src="https://embed.lottiefiles.com/animation/79952" />
	<h6 class="font-bold text-center text-secondary text-5xl">Profile Completed!</h6>
	<p class="text-lighterText text-lg font-normal text-center mt-4 mb-8">
		Congrats! You have completed your profile. Let’s explore the universe of Aemers.
	</p>
	<Button
		on:click={() => goto('/logout')}
		classes="text-lg py-4 px-12"
		type="button"
		text="Go to my Dashboard"
	/>
</main>
