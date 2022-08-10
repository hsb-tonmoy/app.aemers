<script>
	import CircularProgress from '$lib/components/UI/CircularProgress.svelte';

	let value = 50;
</script>

<div class="flex flex-col rounded-2xl py-8 px-10 bg-primary">
	<div class="w-2/4">
		<div class="flex gap-x-3 items-center">
			<h2 class="font-bold text-white text-3xl">My Application</h2>
			<span class="bg-primaryDarker text-white font-bold text-xs px-2 py-1 rounded">Incomplete</span
			>
		</div>
		<h6 class="text-sm text-white mt-1">
			Complete your US Admission Application with the help of Aemers!
		</h6>
		<CircularProgress max="100" {value}>
			<span>{value}%</span>
		</CircularProgress>
	</div>
</div>

<style>
	* {
		--progress-width: '20px';
		--progress-trackwidth: '19px';
	}
</style>
