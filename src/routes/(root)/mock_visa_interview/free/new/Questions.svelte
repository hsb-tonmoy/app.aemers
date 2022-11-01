<script>
	import SingleQuestion from './SingleQuestion.svelte';

	export let session;
	export let questions;
	export let user;

	let currentIndex = 0;
</script>

{#key currentIndex}
	<SingleQuestion
		{session}
		{user}
		length={questions.length}
		question={questions[currentIndex]}
		bind:currentIndex
	/>
{/key}
