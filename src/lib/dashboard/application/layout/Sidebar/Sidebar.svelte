<script>
	import { page } from '$app/stores';
	import Steps from '$lib/components/UI/ApplicationSteps.svelte';
	import CircularProgress from '$lib/components/UI/CircularProgress.svelte';
	import Logo from '$lib/dashboard/layout/Sidebar/Logo.svelte';
	export let data;

	export let currentIndex = 7;

	$: data.application_steps.map((step, index) => {
		if ($page.url.pathname === step.path) {
			currentIndex = index;
			return;
		}
	});
</script>

<div class="bg-white flex flex-col">
	<div class="sidebarpadding py-3">
		<Logo />
	</div>
	<div class="bg-primary flex flex-col text-white sidebarpadding py-10">
		<div class="self-center">
			<CircularProgress
				rotate={-90}
				size={150}
				progressWidth="2"
				width="10"
				value={data.application_status.progress_percentage}
			>
				<div class="flex flex-col justify-center">
					<span class="font-bold text-xl text-center"
						>{data.application_status.progress_percentage}%</span
					>
					<span class="font-normal text-xs">Completed</span>
				</div>
			</CircularProgress>
		</div>
		<h6 class="font-bold text-xl mt-4">File Completion</h6>
		<p class="text-xs">Follow the steps to complete your File for US Admission.</p>
	</div>
	<div class="steps sidebarpadding">
		<Steps
			steps={data.application_steps}
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
