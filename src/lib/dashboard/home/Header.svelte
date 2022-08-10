<script>
	import { Menu, Notification, AccountCircular } from '$lib/components/Icons';
	import { sidebarState } from './stores';
</script>

<header class="flex justify-between items-center">
	<div class="flex flex-col gap-y-2">
		<h2 class="text-5xl font-bold">Hello Evan</h2>
		<h6 class="text-lighterText text-xl">Explore Aemers from here...</h6>
	</div>
	<div class="flex items-center gap-x-6">
		<span
			on:click={() => ($sidebarState = !$sidebarState)}
			class="lg:hidden w-10 h-10 text-secondary hover:text-primary cursor-pointer"><Menu /></span
		>
		<span class="text-secondary">
			<Notification size="40" />
		</span>
		<span class="text-primary">
			<AccountCircular size="40" />
		</span>
	</div>
</header>
