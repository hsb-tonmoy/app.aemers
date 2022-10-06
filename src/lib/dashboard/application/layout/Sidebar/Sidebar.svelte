<script>
	import { page } from '$app/stores';
	import { Cross } from '$lib/components/Icons';
	import Steps from '$lib/components/UI/ApplicationSteps.svelte';
	import CircularProgress from '$lib/components/UI/CircularProgress.svelte';
	import { sidebarState } from '$lib/dashboard/home/stores';
	import Logo from '$lib/dashboard/layout/Sidebar/Logo.svelte';
	import { application_percentage, application_steps } from '$lib/data/stores';

	export let currentIndex = 1;

	$: $application_steps.map((step, index) => {
		if ($page.url.pathname === step.path) {
			currentIndex = index;
			return;
		}
	});
</script>

<div class="bg-white flex flex-col">
	<div class="flex items-center justify-between sidebarpadding py-3">
		<Logo />
		<button on:click={() => sidebarState.set(true)} class="block xl:hidden w-7 h-7 text-primary"
			><Cross /></button
		>
	</div>
	<div class="bg-primary flex flex-col text-white sidebarpadding py-10">
		<div class="self-center">
			<CircularProgress
				rotate={-90}
				size={150}
				progressWidth="2"
				width="10"
				value={$application_percentage}
			>
				<div class="flex flex-col justify-center">
					<span class="font-bold text-xl text-center">{$application_percentage}%</span>
					<span class="font-normal text-xs">Completed</span>
				</div>
			</CircularProgress>
		</div>
		<h6 class="font-bold text-xl mt-4">File Completion</h6>
		<p class="text-xs">Follow the steps to complete your File for US Admission.</p>
	</div>
	<div class="steps sidebarpadding">
		<Steps
			steps={$application_steps}
			clickable={true}
			vertical={true}
			bind:current={currentIndex}
			size="1.5rem"
			minStepSize="4rem"
			primary={'#7443FF'}
			secondary={'#BEBEBE'}
			lineColor={'#E3E3E3'}
			iconSize="1.5rem"
			iconBorder={false}
		/>
	</div>
</div>

<style lang="postcss">
	.sidebarpadding {
		@apply px-4 md:px-6;
	}
</style>
