<script>
	import CircularProgress from '$lib/components/UI/CircularProgress.svelte';
	import ApplicationProgress from '$lib/dashboard/home/Tiles/ApplicationTile/ApplicationProgress.svelte';

	export let application_status;
</script>

<div class="flex flex-col rounded-2xl py-8 px-10 bg-primary ">
	<div class="2xl:w-2/4">
		<div class="flex gap-x-3 items-center">
			<h2 class="font-bold text-white text-xl md:text-2xl 2xl:text-3xl">My Application</h2>
			<span class="bg-primaryDarker text-white font-bold text-xs px-2 py-1 rounded">Incomplete</span
			>
		</div>
		<h6 class="text-xs md:text-sm text-white mt-1">
			Complete your US Admission Application with the help of Aemers!
		</h6>
	</div>
	<div class="flex items-center gap-x-6 2xl:w-2/4 mt-6">
		<div class="text-white">
			<CircularProgress
				rotate={-90}
				size={150}
				progressWidth="2"
				width="10"
				value={application_status.progress_percentage}
			>
				<div class="flex flex-col justify-center">
					<span class="font-bold text-xl text-center"
						>{application_status.progress_percentage}%</span
					>
					<span class="font-normal text-xs">Completed</span>
				</div>
			</CircularProgress>
		</div>
		<ApplicationProgress {application_status} />
	</div>
</div>
