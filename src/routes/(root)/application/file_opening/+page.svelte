<script>
	import Button from '$lib/components/Form/Button.svelte';
</script>

<div class="flex justify-center px-20 py-12 bg-white rounded-2xl w-full">
	<div class="w-2/4">
		<div class="flex flex-col w-3/4">
			<img src="/images/file.png" alt="File" class="w-52" />
			<h3 class="text-secondary font-bold text-2xl mb-2">Opening a file is really simple!</h3>
			<p class="text-lighterText text-sm mb-4">
				All your data is stored under the file. You have to pay 15000 BDT to open a file. Trust me,
				it’s worth it!
			</p>
			<Button type="button" text="Open a File" classes="self-start px-8 py-3" />
		</div>
	</div>
	<div class="flex flex-col w-2/4">
		<img src="/images/video_file.png" alt="Video" class="w-120" />
	</div>
</div>
