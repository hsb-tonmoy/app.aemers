<script>
	import AudioRecordComponent from '$lib/components/Audio/AudioRecordComponent.svelte';
	import { notificationToast } from '$lib/NotificationToast';
	import Timer from '$lib/timer';
	import { useMutation } from '@sveltestack/svelte-query';
	import { onMount } from 'svelte';

	let timer;
	let countdown;

	onMount(() => {
		timer = new Timer();
		timer.start(15000);
		timer.pause();
	});

	let recording, recorded, blob;

	function msToTime(s) {
		function pad(n, z) {
			z = z || 2;
			return ('00' + n).slice(-z);
		}

		let ms = s % 1000;
		s = (s - ms) / 1000;
		let secs = s % 60;
		s = (s - secs) / 60;
		let mins = s % 60;

		return pad(mins) + ':' + pad(secs);
	}

	$: timer &&
		timer.on('tick', (ms) => {
			countdown = msToTime(ms);
		});

	const submitData = useMutation(
		() => {
			let formData = new FormData();
			formData.append('session', '1');
			formData.append('question', '1');
			formData.append('answer', blob);
			formData.append('user', '1');

			return fetch('/mock_visa_interview/free/new?/upload', {
				method: 'POST',
				body: formData
			});
		},
		{
			onSettled: async (data, error, variables, context) => {
				if (!data.ok || error) {
					notificationToast('Something went wrong, please try again later');
					console.log(await data.json(), error);
				}
			}
		}
	);

	function handleRecordingFinished() {
		$submitData.mutate();
	}
</script>

<section class="flex flex-col pb-20">
	<div class="flex justify-between items-center">
		<span class="bg-bgColor text-primary text-base font-bold px-3 py-1 rounded-xl">1/10</span>
		<span class="text-primary text-lg font-bold"
			>{countdown || (timer && msToTime(timer.time))}</span
		>
	</div>
	<div class="flex flex-col items-center text-center xl:w-3/5 mx-auto">
		<h3 class="font-bold text-secondary text-xl md:text-2xl mt-6 mb-10">
			Can you not continue your education in your home country? Why choose the United States of
			America?
		</h3>
		<div class="flex items-center gap-x-4">
			<AudioRecordComponent
				on:finished={handleRecordingFinished}
				bind:blob
				bind:timer
				bind:recording
				bind:recorded
			/>
			{#if !(recording || recorded)}
				<button class="text-lighterText font-bold text-lg">Skip</button>
			{/if}
		</div>
	</div>
</section>
