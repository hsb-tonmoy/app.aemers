<script>
	import { Trash } from '$lib/components/Icons';
	import { convertDate } from '$lib/convertDate';
	import { Spinner } from 'flowbite-svelte';
	export let has_uploaded = false;
	export let filename;
	export let status;
	export let date;
	export let loading = false;
	export let handleRemoveFile;
	export let handleDeleteFile;

	let statusClass = '';
	let statusText = '';

	$: {
		if (status === 0) {
			statusText = 'Pending';
			statusClass = 'text-amber-600';
		} else if (status === 1) {
			statusText = 'Accepted';
			statusClass = 'text-greenSignal';
		} else if (status === 2) {
			statusText = 'Rejected';
			statusClass = 'text-redSignal';
		} else {
			statusText = 'Ready to Upload';
			statusClass = 'text-greenSignal';
		}
	}

	function handleDel() {
		if (has_uploaded) {
			handleDeleteFile();
		} else {
			handleRemoveFile();
		}
	}
</script>

<div class="grid grid-cols-4 justify-items-center rounded-xl py-12 bg-[#fafafa]">
	<div class="prop-container">
		<span class="prop-header">File Name</span>
		<span class="text-primary font-bold text-base underline">{filename}</span>
	</div>
	<div class="prop-container">
		<span class="prop-header">Status</span>
		<span class={`font-bold ${statusClass}`}>{statusText}</span>
	</div>
	<div class="prop-container">
		<span class="prop-header">Upload Date</span>
		<span class="text-secondary">{convertDate(date)}</span>
	</div>
	<div class="prop-container self-end">
		<button
			disabled={loading}
			on:click={handleDel}
			class="inline-flex items-center gap-x-2 font-bold text-redSignal text-base"
		>
			{#if loading}
				<Spinner currentFill="red" size="3" />
			{:else}
				<span class="w-4 h-4">
					<Trash />
				</span>
			{/if}
			{has_uploaded ? 'Delete' : 'Remove'}</button
		>
	</div>
</div>

<style lang="postcss">
	.prop-container {
		@apply flex flex-col gap-y-3;
	}
	.prop-header {
		@apply text-lighterText font-medium text-base;
	}
</style>
