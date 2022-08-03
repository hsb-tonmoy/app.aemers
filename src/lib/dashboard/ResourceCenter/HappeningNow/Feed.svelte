<script>
	import NewsItem from './NewsItem.svelte';
</script>

<div class="flex flex-col gap-y-4">
	{#each Array(5) as _}
		<NewsItem />
	{/each}
</div>
