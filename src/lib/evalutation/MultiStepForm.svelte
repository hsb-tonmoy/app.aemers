<script lang="ts">
	import PersonalInformation from './steps/PersonalInformation.svelte';

	export let currentIndex: number = 0;
	export let steps;
</script>

<main class="w-full flex-1 px-12 md:px-24 2xl:px-40 py-10">
	{#if currentIndex === 0}
		<PersonalInformation {steps} bind:currentIndex />
	{/if}
</main>
