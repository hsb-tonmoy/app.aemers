<script>
	import AudioPlayer from '$lib/components/Audio/AudioPlayer.svelte';

	export let question;

	export let questionID;

	export let audioSrc;
</script>

<div class="border border-borderColor px-4 md:px-6 2xl:px-10 md:py-6 xl:py-8 rounded-2xl w-full">
	<span class="bg-[#F6F3FF] text-primary text-sm md:text-base font-bold px-4 py-1 rounded-2xl"
		>Question {questionID}</span
	>
	<h3 class="mt-6 font-bold text-secondary text-lg md:text-xl 2xl:text-2xl">
		{question}
	</h3>
	<div class="w-full relative my-6">
		<AudioPlayer many={true} {audioSrc} />
	</div>
</div>
