<script>
	import { CheckedCircle } from '$lib/components/Icons';
	import { application_status } from '$lib/data/stores';
	import Card from './Card.svelte';

	export let data;

	let completed = data.visa_interview.submitted;

	async function handleComplete() {
		completed = !completed;

		if (completed === true) {
			$application_status.visa_interview = 2;
		} else {
			$application_status.visa_interview = 0;
		}

		const res = await fetch(`/application/visa_interview`, {
			method: 'PATCH',
			body: JSON.stringify({ submitted: completed })
		});

		if (res.ok) {
			return;
		} else {
			completed = !completed;
			console.log(res);
			console.log(await res.json());
		}
	}
</script>

<div class="flex flex-col gap-8 px-14 py-8 xl:px-20 xl:py-12 bg-white rounded-2xl w-full">
	<div class="flex flex-col w-full md:w-3/4 xl:w-2/4 2xl:w-1/3 mb-6">
		<h2 class="text-secondary font-bold text-2xl mb-2">Prepare for your Visa Interview</h2>
		<span class="text-lighterText text-sm"
			>Take preparation for your upcoming Visa Interview. We have following services related to visa
			interview.</span
		>
	</div>
	<div class="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 gap-6">
		<Card
			img="/images/visa_sim.png"
			img_alt="Visa Simulator"
			heading="Free Mock Visa Interview with Simulator"
			description="Prepare with the interview simulator for free."
			button="Start For Free"
			url=""
		/>
		<Card
			img="/images/visa_sim2.png"
			img_alt="Free Mock visa with Dr. Mamoon Rashid"
			heading="Free Mock visa with Dr. Mamoon Rashid"
			description="Get interviewed by Dr. Mamoon Rashid for free."
			button="Book a Session"
			url=""
		/>
		<Card
			img="/images/visa_sim3.png"
			img_alt="Mock visa with American Native-Speaking officials"
			heading="Mock visa with Native English Speakers"
			description="Get interviewed by Native English Speakers."
			button="Learn More"
			url=""
		/>
	</div>
	<div class="h-px my-10 w-full bg-primary" />
	<div class="flex flex-col w-full md:w-3/4 xl:w-2/4 2xl:w-1/3 mb-2">
		<h2 class="text-secondary font-bold text-2xl mb-2">Already got the Visa?</h2>
		<span class="text-lighterText text-sm"
			>Have you already received your student visa? Congratulations!</span
		>
	</div>
	<button
		on:click={handleComplete}
		class="self-start inline-flex items-center gap-x-2 font-bold text-lg px-8 py-3 rounded-2xl border-2 {completed
			? 'bg-white text-greenSignal border-greenSignal'
			: 'bg-primary text-white border-primary'}"
	>
		{#if completed}
			<span class="w-5 h-5"><CheckedCircle /></span>Completed
		{:else}
			Mark as Completed
		{/if}
	</button>
</div>
