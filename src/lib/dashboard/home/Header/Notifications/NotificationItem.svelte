<script>
	import { AemersCircular, CheckedCircle, RedCircularCross } from '$lib/components/Icons';
	import { DropdownItem } from 'flowbite-svelte';

	export let notification;
</script>

<DropdownItem
	class={`flex flex-col px-5 py-5 rounded-xl 
${notification.level === 'success' ? 'bg-[#E9FFF7]' : ''} ${
		notification.level === 'info' ? 'bg-[#F7F4FF]' : ''
	} ${notification.level === 'error' ? 'bg-[#FFEEEE]' : ''}`}
>
	<div class="flex items-center gap-x-4">
		{#if notification.level === 'success'}
			<span class="block w-8 h-8 md:w-10 md:h-10 text-greenSignal">
				<CheckedCircle />
			</span>
		{/if}
		{#if notification.level === 'info'}
			<span class="block w-8 h-8 md:w-10 md:h-10">
				<AemersCircular />
			</span>
		{/if}
		{#if notification.level === 'error'}
			<span class="block w-8 h-8 md:w-10 md:h-10">
				<RedCircularCross />
			</span>
		{/if}
		<div class="flex flex-col gap-y-1">
			<span
				class="text-base md:text-lg text-secondary {notification.unread
					? 'font-bold'
					: 'font-normal'}">{notification.description}</span
			>
			<time class="text-xs text-lighterText">{notification.timestamp}</time>
		</div>
	</div>
</DropdownItem>
