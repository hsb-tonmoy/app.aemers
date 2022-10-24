<script>
	import { goto } from '$app/navigation';
	import Button from '$lib/components/Form/Button.svelte';
	const items = ['Click ‘Open a File', 'Confirm Personal Info', 'Make Payment', 'Done!'];
</script>

<div
	class="flex flex-wrap justify-center gap-y-8 px-14 py-8 xl:px-20 xl:py-12 bg-white rounded-2xl w-full"
>
	<div class="w-full md:w-2/4">
		<div class="flex flex-col w-3/4">
			<img src="/images/file.png" alt="File" class="w-32 md:w-52" />
			<h3 class="text-secondary font-bold text-2xl mb-2">Opening a file is really simple!</h3>
			<p class="text-lighterText text-sm mb-4">
				All your data is stored under the file. You have to pay 15000 BDT to open a file. Trust me,
				it’s worth it!
			</p>
			<Button
				on:click={() => goto('/application/file_opening/open_a_file')}
				type="button"
				text="Open a File"
				classes="self-start px-8 py-3 hover:bg-primaryDarker"
			/>
		</div>
	</div>
	<div class="flex flex-col w-full md:w-2/4">
		<img src="/images/video_file.png" alt="Video" class="w-80 md:w-120" />

		<ol class="relative border-l-[3px] border-dashed border-primary mt-6 ml-2">
			{#each items as item, index}
				<li class="{index === items.length - 1 ? 'mb-4' : 'mb-10'} ml-5">
					<div
						class="absolute inline-flex justify-center items-center w-6 h-6 bg-primary rounded-full -left-3.5 border border-primary"
					>
						<span class="text-white text-xs font-bold">{index + 1}</span>
					</div>
					<h3 class="text-base font-bold text-gray-900">{item}</h3>
				</li>
			{/each}
		</ol>
	</div>
</div>
