<script>
	import { Equalizer, Hourglass, QuestionMark } from '$lib/components/Icons';
	import { notificationToast } from '$lib/NotificationToast';
	import { useMutation } from '@sveltestack/svelte-query';

	import { Button } from '$lib/components/Form';

	const rules = [
		{ text: 'Answer 10 questions.', icon: QuestionMark },
		{ text: 'Keep an eye on the timer.', icon: Hourglass },
		{ text: 'You will get the recording of the interview..', icon: Equalizer }
	];

	export let started = false;

	export let session;

	export let user;

	const submitData = useMutation(
		() => {
			return fetch('/mock_visa_interview/free/new', {
				method: 'POST',
				body: JSON.stringify({
					user: user.pk
				})
			});
		},
		{
			onSettled: async (data, error, variables, context) => {
				if (!data.ok || error) {
					notificationToast('Something went wrong, please try again later');
				} else {
					let response = await data.json();
					session = response;
					started = true;
				}
			}
		}
	);
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
	<Button
		on:click={() => {
			$submitData.mutate();
		}}
		type="button"
		loading={$submitData.isLoading}
		text="Start Test"
		classes="hover:bg-primaryDarker text-white font-bold px-6 py-4 text-base md:text-lg rounded-2xl self-start"
	/>
</div>
