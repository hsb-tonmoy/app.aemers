<script>
	import { Equalizer, Hourglass, QuestionMark } from '$lib/components/Icons';

	const rules = [
		{ text: 'Answer 10 questions.', icon: QuestionMark },
		{ text: 'Keep an eye on the timer.', icon: Hourglass },
		{ text: 'You will get the recording of the interview..', icon: Equalizer }
	];

	export let started = false;
</script>

<div class="p-10">
	<h6 class="text-3xl xl:text-4xl text-primary font-bold">Start your free mock test</h6>
	<span class="text-lighterText text-sm"
		>You are ready to go. Start the test and answer the questions by clicking on the microphone
		button.</span
	>
	<div class="flex flex-col gap-y-4 my-6">
		{#each rules as rule}
			<li class="flex items-center gap-x-3 font-medium text-base md:text-lg">
				<div class="inline-flex items-center bg-borderColor w-6 h-6 rounded-full p-1">
					<span class="w-full block text-primary"><svelte:component this={rule.icon} /></span>
				</div>
				{rule.text}
			</li>
		{/each}
	</div>
	<button
		on:click={() => {
			started = true;
		}}
		class="bg-primary hover:bg-primaryDarker text-white font-bold px-6 py-4 text-base md:text-lg rounded-2xl self-start"
		>Start Test</button
	>
</div>
