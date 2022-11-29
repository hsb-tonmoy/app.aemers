<script>
	import Logo from './Logo.svelte';
	import Menu from './Menu.svelte';
	import { Cross } from '$lib/components/Icons';
	import { sidebarState } from '$lib/dashboard/home/stores';
</script>

<div class="bg-white h-full shadow-lg xl:shadow-none">
	<div class="flex flex-col gap-y-20 px-4 md:px-10 pt-8 pb-52">
		<div class="flex items-center justify-between sidebarpadding py-3">
			<Logo />
			<button on:click={() => sidebarState.set(true)} class="block md:hidden w-7 h-7 text-primary"
				><Cross /></button
			>
		</div>
		<Menu />
	</div>

	<!-- <CTA /> -->
</div>
