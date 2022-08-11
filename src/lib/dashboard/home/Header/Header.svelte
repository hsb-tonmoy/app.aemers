<script>
	import { session } from '$app/stores';
	import AccountDropdown from './AccountDropdown.svelte';
	import { Menu, Notification, AccountCircular } from '$lib/components/Icons';
	import { sidebarState } from '../stores';
</script>

<header class="flex justify-between items-center overflow-hidden">
	<div class="flex flex-col gap-y-2">
		<h2 class="text-3xl md:text-4xl 2xl:text-5xl font-bold">Hello {$session.user.first_name}</h2>
		<h6 class="text-lighterText text-base md:text-lg 2xl:text-xl">Explore Aemers from here...</h6>
	</div>
	<div class="flex items-center gap-x-6">
		<span
			on:click={() => ($sidebarState = !$sidebarState)}
			class="lg:hidden w-6 h-6 md:w-10 md:h-10 text-secondary hover:text-primary cursor-pointer"
			><Menu /></span
		>
		<span class="text-secondary w-6 h-6 md:w-10 md:h-10">
			<Notification />
		</span>
		<AccountDropdown />
	</div>
</header>
