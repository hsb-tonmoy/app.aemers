<script>
	import { Circle, CheckedCircle } from '$lib/components/Icons';

	const items = [
		{
			title: 'Create Profile',
			done: true
		},
		{
			title: 'Open a File',
			done: false
		},
		{
			title: 'Orientation',
			done: false
		}
	];
</script>

<div class="flex flex-col gap-y-2 text-white">
	{#each items as item, index}
		<li class="flex items-center gap-x-2" style="opacity: {100 - index * 30}%">
			<span class="w-4 h-4 md:w-6 md:h-6">
				{#if item.done}
					<CheckedCircle />
				{:else}
					<Circle />
				{/if}
			</span>
			<span class={`text-sm md:text-base ${item.done ? 'line-through' : ''} `}>{item.title}</span>
		</li>
	{/each}
	<button
		type="button"
		class="text-primary bg-white hover:text-white hover:bg-primaryDarker rounded-xl px-1 py-2 md:py-3 font-bold text-sm md:text-base mt-3 transition-all ease-in-out duration-150"
		>Proceed</button
	>
</div>
