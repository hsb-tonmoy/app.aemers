<script>
	import { Upload } from '$lib/components/Icons';
	import UploadComponent from '$lib/components/Upload/UploadComponent.svelte';

	let upload_show = false;

	let files = {
		accepted: []
	};
</script>

<div class="flex gap-8 px-14 py-8 xl:px-20 xl:py-12 bg-white rounded-2xl w-full">
	<div class="flex flex-col w-3/5">
		<h2>Upload your I-20 here...</h2>
		<span class="text-lighterText text-sm mb-4"
			>Wait untill you get an I20. After recieving it, upload it here. Watch the video to learn more
			about I-20.</span
		>
		{#if upload_show}
			<UploadComponent bind:files />
		{:else}
			<button
				on:click={() => (upload_show = true)}
				class="self-start inline-flex items-center gap-x-2 text-white bg-primary text-base font-bold px-12 py-4 rounded-xl"
				><span class="w-6 h-6"><Upload /></span>Upload</button
			>
		{/if}
	</div>
	<div class="w-2/5 flex-shrink">
		<img src="/images/i20+upload.png" alt="I-20 Upload" />
	</div>
</div>

<style lang="postcss">
	h2 {
		@apply text-secondary font-bold text-2xl mb-2;
	}
</style>
