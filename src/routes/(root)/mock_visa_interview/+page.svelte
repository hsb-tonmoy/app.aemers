<script>
	import SingleSession from './SingleSession.svelte';
</script>

<main class="flex flex-col gap-y-4">
	<div class="grid grid-cols-1 md:grid-cols-2 gap-6">
		<div
			class="flex flex-col border-2 border-primary rounded-2xl px-6 py-8 md:py-8 xl:pl-12 xl:pr-20 xl:py-10"
		>
			<h6 class="font-bold text-xl md:text-2xl">Free Mock Interview</h6>
			<span class="text-lighterText text-xs md:text-sm"
				>You can take as many tests as you want. You will be able to retrieve your session,
				download, and listen to all your recordings to evaluate your performance.</span
			>
			<button
				class="self-start bg-primary hover:bg-primaryDarker font-bold text-white px-6 py-3 mt-8 rounded-2xl"
				><a href="/mock_visa_interview/free/new">Start Test</a></button
			>
		</div>
		<div
			class="flex flex-col border-2 border-primary bg-primary text-white rounded-2xl px-6 py-8 md:py-8 xl:pl-12 xl:pr-20 xl:py-10"
		>
			<h6 class="font-bold text-xl md:text-2xl">Premium Mock Interview</h6>
			<span class="text-xs md:text-sm"
				>You will meet a native English speaking person in your interview. The interviewer will ask
				simulate a real Visa Interview and give you realtime feedback.</span
			>
			<button
				class="self-start bg-white hover:bg-primary font-bold text-primary hover:text-white border border-primary hover:border-white px-6 py-3 mt-8 rounded-2xl"
				>Book a Test</button
			>
		</div>
	</div>
	<div class="bg-white px-6 py-4 md:px-8 md:py-6 xl:px-12 xl:py-10">
		<h6 class="font-bold text-xl md:text-2xl mb-4">Completed Free Mock Tests</h6>
		<div class="grid grid-cols-1 md:grid-cols-3 2xl:grid-cols-4 gap-4">
			{#each Array(4) as _, i}
				<SingleSession />
			{/each}
		</div>
	</div>
</main>
