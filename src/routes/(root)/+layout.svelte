<script>
	import { page } from '$app/stores';
	import ApplicationSidebar from '$lib/dashboard/application/layout/Sidebar/Sidebar.svelte';
	import { sidebarState } from '$lib/dashboard/home/stores';
	import Footer from '$lib/dashboard/layout/Footer.svelte';
	import Sidebar from '$lib/dashboard/layout/Sidebar/Sidebar.svelte';
	import { application_status } from '$lib/data/stores';

	export let data;

	$: application_status.set(data.application_status);
</script>

<svelte:head><title>app.aemers.com - US Scholarship Mentoring</title></svelte:head>

<div class="flex flex-col">
	<div class="flex w-full h-full bg-bgColor">
		<aside
			class:hidden={$sidebarState}
			class="xl:block fixed xl:sticky left-0 top-0 w-3/4 md:w-2/4 xl:w-[25%] 2xl:w-[15%] h-screen z-[5000] overflow-y-auto"
		>
			{#if $page.url.pathname.startsWith('/application')}
				<ApplicationSidebar />
			{:else}
				<Sidebar />
			{/if}
		</aside>
		<main class="flex-1 px-6 py-10 md:px-10 md:py-16">
			<slot />
		</main>
	</div>
	<Footer />
</div>
