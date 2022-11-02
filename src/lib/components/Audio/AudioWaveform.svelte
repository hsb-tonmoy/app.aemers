<script>
	import { onMount } from 'svelte';

	let containerID = (Math.random() + 1).toString(36).substring(7);

	let waveSurfer;

	export let audioSrc = '';

	export let wavesurfer;

	export let waveColor = '#BEBEBE';

	export let progressColor = '#7443FF';

	export let cursorColor = '#fff';

	export let barWidth = 3;

	export let barRadius = 3;

	export let barGap = 2;

	const initProgress = async () => {
		try {
			waveSurfer = (await import('wavesurfer.js')).default;
			wavesurfer = waveSurfer.create({
				container: `#waveform-${containerID}`,
				waveColor: waveColor,
				progressColor: progressColor,
				cursorColor: cursorColor,
				barWidth: barWidth,
				barRadius: barRadius,
				barGap: barGap,
				responsive: true
			});
			wavesurfer.load(audioSrc);
		} catch (error) {
			console.error(error);
		}
	};

	onMount(() => {
		initProgress();
	});
</script>

<div id="waveform-{containerID}" class="w-full" />
