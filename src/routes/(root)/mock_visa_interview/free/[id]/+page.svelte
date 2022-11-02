<script>
	import { goto } from '$app/navigation';
	import { page } from '$app/stores';
	import { Button } from '$lib/components/Form';
	import { Cross, Medal, Play } from '$lib/components/Icons';
	import Divider from '$lib/components/UI/Divider.svelte';
	import Success from '$lib/components/UI/Success.svelte';

	let finished = $page.url.searchParams.get('finished') === 'true';

	import SingleQuestion from './SingleQuestion.svelte';

	export let data;

	let sessionDate, sessionTime;

	let date = new Date(data.session.created_at);
	const dateOptions = {
		year: 'numeric',
		month: 'long',
		day: 'numeric'
	};
	const timeOptions = {
		hour: 'numeric',
		minute: 'numeric',
		hour12: true
	};

	sessionDate = date.toLocaleDateString('en-US', dateOptions);
	sessionTime = date.toLocaleTimeString('en-US', timeOptions);
</script>

<svelte:head>
	<title>{sessionDate} - Free Mock Visa Interview | app.aemers</title>
</svelte:head>

<main class="w-full bg-white rounded-2xl">
	<div class="relative flex flex-col items-center justify-center px-10 py-12 md:px-16 md:py-20">
		<button
			on:click={() => goto('/mock_visa_interview')}
			class="absolute right-5 top-5 flex justify-center items-center bg-borderColor rounded-full"
		>
			<span class="block text-primary p-1 w-6 h-6 md:w-10 md:h-10"><Cross /></span>
		</button>
		{#if finished}
			<Success />
			<h2 class="text-primary font-bold text-2xl md:text-3xl 2xl:text-4xl mt-2">
				Congratulations!
			</h2>
			<span class="text-lighterText text-center text-sm md:text-base"
				>You have successfully completed your mock interview.</span
			>
			<div class="flex items-center gap-x-4 mt-4 mb-6">
				<button
					class="shrink-0 inline-flex gap-x-2 items-center font-bold text-white bg-primary hover:bg-primaryDarker border border-primary py-2 px-4 md:py-3 md:px-6 rounded-2xl"
					><span class="shrink-0 w-4 h-4 block"><Medal /></span> Go Premium</button
				>
				<Button
					on:click={() => goto('/mock_visa_interview')}
					text="Dashboard"
					defaultClass="bg-white border border-primary text-primary py-2 px-4 md:py-3 md:px-6 font-bold rounded-2xl"
				/>
			</div>
		{:else}
			<h6 class="text-primary font-bold text-sm md:text-base 2xl:text-lg">
				Free Mock Visa Interview
			</h6>
			<h2 class="text-secondary font-bold text-2xl md:text-3xl 2xl:text-4xl mt-2">{sessionDate}</h2>
			<span class="text-lighterText font-bold text-sm md:text-base 2xl:text-lg">{sessionTime}</span>
		{/if}
		<div
			class="flex flex-col items-center justify-center bg-primary text-white rounded-2xl px-6 md:px-10 py-6 my-10 md:min-w-[50vw] 2xl:min-w-[40vw]"
		>
			<span class="text-base font-bold md:text-lg">Full recording here...</span>
			<span class="text-xs text-center md:text-sm mt-1"
				>Listen to and download your complete interview to evaluate your performance</span
			>
			<div class="flex items-center gap-x-4 my-6">
				<button
					class="group shrink-0 inline-flex items-center bg-white hover:bg-primaryDarker w-6 h-6 md:w-12 md:h-12 xl:w-14 xl:h-14 rounded-full p-1 md:p-3 xl:p-4"
				>
					<span class="block w-full text-primary group-hover:text-white"><Play /></span>
				</button>
				<img src="/images/waveform.png" alt="Waveform" class="object-cover w-full" />
			</div>
			<Button
				text="Download"
				classes="border border-white bg-transparent hover:border-primary hover:bg-white hover:text-primary px-6 py-2 rounded-xl text-sm md:text=base text-white"
			/>
		</div>
		<div class="w-full md:w-3/4 2xl:w-2/4">
			<Divider
				><span class="font-bold text-sm md:text-base xl:text-lg">Questionwise Recording</span
				></Divider
			>
		</div>

		<section class="flex flex-col gap-y-4 md:min-w-[50vw] 2xl:min-w-[40vw] my-10">
			{#each data.session.mock_visa_interview_answers as answer, index}
				<SingleQuestion
					question={answer.question.question}
					audioSrc={answer.answer}
					questionID={index + 1}
				/>
			{/each}
		</section>
	</div>
</main>