<script>
	import { goto } from '$app/navigation';
	import AudioPlayer from '$lib/components/Audio/AudioPlayer.svelte';
	import AudioRecordComponent from '$lib/components/Audio/AudioRecordComponent.svelte';
	import { msToTime } from '$lib/components/Audio/utils';
	import { RightChevron } from '$lib/components/Icons';
	import { notificationToast } from '$lib/NotificationToast';
	import Timer from '$lib/timer';
	import { useMutation } from '@sveltestack/svelte-query';
	import { Spinner } from 'flowbite-svelte';
	import { onMount } from 'svelte';

	let timer;
	let countdown;

	export let currentIndex, question, length, session, user;

	onMount(() => {
		timer = new Timer();
		timer.start(15000);
		timer.pause();
	});

	let recording = false,
		recorded = false,
		blob,
		duration;

	$: timer &&
		timer.on('tick', (ms) => {
			countdown = msToTime(ms);
		});

	const submitData = useMutation(
		() => {
			let formData = new FormData();
			formData.append('session', session.id);
			formData.append('question', question.id);
			formData.append('answer', blob);
			formData.append('user', user.pk);

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

	const updateSession = useMutation(
		() => {
			return fetch(`/mock_visa_interview/free/new/session/?id=${session.id}`, {
				method: 'POST',
				body: JSON.stringify({
					final: true
				})
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

	function handleRecordingFinished(e) {
		duration = msToTime(e.detail.duration);
		$submitData.mutate();
	}

	function handleNext() {
		if (currentIndex < length - 1) {
			currentIndex++;
		} else {
			$updateSession.mutate();
			goto(`/mock_visa_interview/free/${session.id}`);
		}
	}
</script>

<section class="flex flex-col h-full">
	<div class="flex gap-x-4 justify-between items-center">
		<span class="bg-bgColor text-primary text-base font-bold px-3 py-1 rounded-xl"
			>{currentIndex + 1}/{length}</span
		>
		{#if !recorded}
			{#if question.question_audio}
				<div class="w-2/4">
					<AudioPlayer autoPlay={true} many={false} audioSrc={question.question_audio} />
				</div>
			{/if}
			<span class="text-primary text-lg font-bold"
				>{countdown || (timer && msToTime(timer.time))}</span
			>
		{/if}
	</div>
	<div class="self-center flex flex-col items-center text-center xl:w-3/5 m-auto">
		<h3 class="font-bold text-secondary text-xl md:text-2xl mt-6 mb-10">
			{question.question}
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
				<button on:click={handleNext} class="text-lighterText font-bold text-lg">Skip</button>
			{:else if recorded && duration}
				<span class="text-lighterText font-bold text-lg">{duration}</span>
			{/if}
		</div>
		{#if recorded}
			<button
				disabled={$submitData.isLoading}
				on:click={handleNext}
				class="flex items-center gap-x-2 bg-primary hover:bg-primaryDarker disabled:bg-borderColor text-white font-bold py-2 px-6 rounded-2xl mt-8"
				>{currentIndex < length - 1 ? 'Next Question' : 'Finish'}
				{#if $submitData.isLoading}
					<Spinner color="white" size="4" />
				{:else}
					<span class="inline-flex items-center bg-white w-6 h-6 rounded-full p-1"
						><span class="text-primary block w-full">
							<RightChevron stroke={3} />
						</span></span
					>
				{/if}
			</button>
		{/if}
	</div>
</section>
