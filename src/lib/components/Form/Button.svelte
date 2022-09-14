<script lang="ts">
	import { Spinner } from 'flowbite-svelte';
	export let text: string = '';
	export let type: string = 'submit';
	export let classes: string = '';
	export let disabled: boolean = false;
	export let loading: boolean = false;
</script>

<button
	on:click
	disabled={loading || disabled}
	{type}
	class={`inline-flex items-center justify-center bg-primary disabled:bg-borderColor text-white font-bold text-base rounded-xl ${classes}`}
	>{text}
	<slot />
	{#if loading}
		<Spinner class="ml-2" color="white" size="4" />
	{/if}
</button>
