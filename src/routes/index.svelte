<script>
	import Header from '$lib/dashboard/home/Header.svelte';
	import ApplicationTile from '$lib/dashboard/home/ApplicationTile/Tile.svelte';
</script>

<div class="flex flex-col px-10 py-16">
	<Header />
	<div class="grid grid-cols-2 gap-3 mt-5">
		<ApplicationTile />
	</div>
</div>
