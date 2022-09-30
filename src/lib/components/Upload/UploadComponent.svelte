<script>
	import { Upload } from '$lib/components/Icons';
	import Dropzone from 'svelte-file-dropzone';
	import { extractExtension, humanFileSize } from './helper';
	export let files = {
		accepted: []
	};

	function handleFilesSelect(e) {
		const { acceptedFiles, fileRejections } = e.detail;
		files.accepted = [...acceptedFiles];
	}

	function handleRemoveFile(index) {
		files.accepted.splice(index, 1);
		files.accepted = [...files.accepted];
	}

	let drag_entered = false;

	$: dropzone_container_classes = `flex flex-col justify-center items-center rounded-xl py-12 ${
		drag_entered ? 'dropzone-container-entered' : 'dropzone-container'
	}`;
</script>

<Dropzone
	on:drop={handleFilesSelect}
	on:dragenter={() => (drag_entered = true)}
	on:dragleave={() => (drag_entered = false)}
	multiple={false}
	accept={['.pdf', '.doc', '.docx', '.jpg', '.png', '.jpeg']}
	disableDefaultStyles={true}
	containerClasses={dropzone_container_classes}
>
	<span class="block w-10 h-10 text-dividerColor mb-2"><Upload /></span>
	<p class="text-lighterText flex justify-center">
		<span>Drop your document here or</span>&nbsp;<button
			type="button"
			class="text-primary font-bold bg-transparent underline">Browse</button
		>
	</p>
	<input id="hidden-input" type="file" class="hidden" />
</Dropzone>
{#each files.accepted as item, i}
	<div class="flex justify-between items-center mt-6">
		<div class="flex gap-x-2">
			<div
				class="extension flex justify-center items-center h-14 w-12 border border-gray-200 bg-[#F8F9FA]"
			>
				<span class="text-[0.5rem]">{extractExtension(item.name)}</span>
			</div>
			<div class="info flex flex-col justify-center text-sm">
				<span class="">{item.name}</span>
				<span class="text-gray-400">{humanFileSize(item.size)}</span>
			</div>
		</div>
		<span
			on:click={() => {
				handleRemoveFile(i);
			}}
			class="h-5 w-5 cursor-pointer hover:text-accent1">Remove</span
		>
	</div>
{/each}

<style global>
	.dropzone-container {
		background-color: #fafafa;
		background-image: url("data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' rx='20' ry='20' stroke='%23E3D9FFFF' stroke-width='2' stroke-dasharray='9%2c 20%2c 11%2c 21' stroke-dashoffset='0' stroke-linecap='square'/%3e%3c/svg%3e");
	}

	.dropzone-container-entered {
		background-color: #eeeeee;
		background-image: url("data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' rx='20' ry='20' stroke='%23E3D9FFFF' stroke-width='6' stroke-dasharray='9%2c 20%2c 11%2c 21' stroke-dashoffset='0' stroke-linecap='square'/%3e%3c/svg%3e");
	}
</style>
