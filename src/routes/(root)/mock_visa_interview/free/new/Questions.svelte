<script>
	import SingleQuestion from './SingleQuestion.svelte';

	import { register } from 'extendable-media-recorder';
	import { connect } from 'extendable-media-recorder-wav-encoder';
	import { onMount } from 'svelte';

	export let session;
	export let questions;
	export let user;

	let currentIndex = 0;

	onMount(async () => {
		await register(await connect());
	});
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
