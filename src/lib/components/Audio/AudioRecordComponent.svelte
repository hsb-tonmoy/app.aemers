<script>
	import { CheckMark, Microphone, Square } from '$lib/components/Icons';
	import { createEventDispatcher, onMount } from 'svelte';

	const dispatch = createEventDispatcher();

	let media = [];
	let mediaRecorder = null;
	export let blob;
	export let recording = false;
	export let recorded = false;
	export let timer;

	onMount(async () => {
		const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
		mediaRecorder = new MediaRecorder(stream);
		mediaRecorder.ondataavailable = (e) => media.push(e.data);
		mediaRecorder.onstop = function () {
			blob = new Blob(media, { type: 'audio/ogg; codecs=opus' });
			media = [];
			dispatch('finished');
		};
	});

	function startRecording() {
		mediaRecorder.start();
		recording = true;
		timer.resume();
	}

	function stopRecording() {
		mediaRecorder.stop();
		recording = false;
		recorded = true;

		if (timer.status === 'running') {
			timer.stop();
		}
	}

	$: timer &&
		timer.on('done', () => {
			stopRecording();
		});

	function handleClick() {
		if (recording) {
			stopRecording();
		} else {
			startRecording();
		}
	}
</script>

<button
	disabled={recorded}
	on:click={handleClick}
	class="{recording
		? 'recording'
		: ''} flex items-center bg-primary p-3 text-white w-12 h-12 md:w-14 md:h-14 rounded-full"
>
	<span class="block w-full">
		{#if recorded}
			<CheckMark />
		{:else if recording}
			<Square />
		{:else}
			<Microphone />
		{/if}
	</span>
</button>

<style global>
	.recording {
		animation: pulse 0.8s infinite;
		animation-timing-function: linear;
	}

	@keyframes pulse {
		0% {
			box-shadow: 0 0 0 0 #7543ff38;
		}
		70% {
			box-shadow: 0 0 0 10px #7543ff85;
		}
		100% {
			box-shadow: 0 0 0 0 #7543ff9c;
		}
	}
</style>
