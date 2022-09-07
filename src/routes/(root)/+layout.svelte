<script>
	import { sidebarState } from '$lib/dashboard/home/stores';
	import Sidebar from '$lib/dashboard/layout/Sidebar/Sidebar.svelte';
</script>

<svelte:head><title>app.aemers.com - US Scholarship Mentoring</title></svelte:head>

<div class="flex w-full h-screen bg-bgColor">
	<aside
		class:hidden={$sidebarState}
		class="xl:block fixed left-0 top-0 w-2/4 xl:w-[20%] 2xl:w-[15%] z-[5000]"
	>
		<Sidebar />
	</aside>
	<main class="flex-1 px-6 py-10 md:px-10 md:py-16 xl:ml-[20%] 2xl:ml-[15%]">
		<slot />
	</main>
</div>
