<script>
	import { goto } from '$app/navigation';
	import { Button } from '$lib/components/Form';
	import { LeftArrow } from '$lib/components/Icons';
	import Logo from '$lib/dashboard/layout/Sidebar/Logo.svelte';
	import { notificationToast } from '$lib/NotificationToast';
	import { useMutation } from '@sveltestack/svelte-query';
	import { Modal } from 'flowbite-svelte';
	import Intro from './Intro.svelte';
	import Questions from './Questions.svelte';

	let started = false;

	let exit = false;

	export let data;

	let session;

	const deleteSession = useMutation(
		() => {
			return fetch(`/mock_visa_interview/free/new/session?id=${session.id}`, {
				method: 'DELETE'
			});
		},
		{
			onSettled: async (data, error, variables, context) => {
				if (!data.ok || error) {
					notificationToast('Something went wrong, please try again later');
				} else {
					started = false;
					goto('/mock_visa_interview');
				}
			}
		}
	);

	async function handleExit() {
		if (started) $deleteSession.mutate();
		else {
			goto('/mock_visa_interview');
		}
	}

	function handleCancel() {
		exit = true;
	}
</script>

<svelte:head>
	<title>app.aemers - Mock Visa Interview</title>
</svelte:head>

<main class="flex flex-col h-screen bg-bgColor">
	<header class="flex justify-between items-center px-6 py-3 bg-white">
		<Logo />
		<button
			on:click={() => (exit = true)}
			class="inline-flex items-center gap-x-2 border border-primary text-primary hover:bg-primary hover:text-white font-bold rounded-xl px-4 py-1"
			><span class="w-4 h-4 block"><LeftArrow /></span> Exit Test</button
		>
	</header>
	<Modal bind:open={exit} size="xs">
		<div class="flex flex-col items-center text-center">
			<h6 class="text-xl text-secondary font-bold">Are you sure you want to quit?</h6>
			<span class="text-lighterText text-sm">You will lose all your progress.</span>
			<div class="flex items-center gap-x-4 mt-8">
				<button
					on:click={handleCancel}
					class="border border-borderColor font-bold text-lighterText hover:bg-primary hover:border-primary hover:text-white py-2 px-4 rounded-2xl"
					>Cancel</button
				>

				<Button
					type="button"
					loading={$deleteSession.isLoading}
					on:click={handleExit}
					defaultClass="inline-flex items-center justify-center  border border-redSignal bg-redSignal hover:bg-red-600 font-bold text-white py-2 px-16 rounded-2xl"
					text="Exit"
				/>
			</div>
		</div>
	</Modal>
	<div
		style="margin: auto;"
		class="bg-white p-10 rounded-2xl min-h-[50vh] min-w-[80vw] xl:min-w-[70vw] 2xl:min-w-[50vw]"
	>
		{#if started}
			<Questions {session} questions={data.questions} user={data.user} />
		{:else}
			<Intro bind:session user={data.user} bind:started />
		{/if}
	</div>
</main>
