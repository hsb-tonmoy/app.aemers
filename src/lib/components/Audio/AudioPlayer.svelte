<script>
	import { Pause, Play } from '$lib/components/Icons';
	import AudioWaveform from './AudioWaveform.svelte';

	export let audioBlob = false;
	export let audioSrc = '';
	export let many = false;

	let wavesurfer;

	let isPlaying = false;

	$: if (wavesurfer) {
		wavesurfer.on('play', function () {
			isPlaying = true;
		});

		wavesurfer.on('pause', function () {
			isPlaying = false;
		});
	}

	function handlePlayPause() {
		wavesurfer.playPause();
	}
</script>

<div class="flex items-center gap-x-2">
	<button
		on:click={handlePlayPause}
		class="shrink-0 inline-flex items-center bg-primary hover:bg-primaryDarker w-6 h-6 md:w-12 md:h-12 xl:w-14 xl:h-14 rounded-full p-1 md:p-3 xl:p-4"
	>
		<span class="block w-full text-white">
			{#if isPlaying}
				<Pause />
			{:else}
				<Play />
			{/if}
		</span>
	</button>
	<AudioWaveform {many} {audioBlob} bind:wavesurfer {audioSrc} />
</div>
