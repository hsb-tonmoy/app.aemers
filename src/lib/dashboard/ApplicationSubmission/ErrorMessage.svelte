<script>
	export let errors;
	import { error } from '$lib/svg/account_creation';
</script>

{#if errors}
	{#each errors as err}
		<span class="flex items-center gap-x-1 text-sm font-medium text-red-500"
			>{@html error}{err}</span
		>
	{/each}
{/if}
