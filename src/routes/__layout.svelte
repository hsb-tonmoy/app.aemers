<script context="module">
	export async function load({ session }) {
		if (!session.user) {
			return {
				status: 302,
				redirect: '/login'
			};
		}

		return {};
	}
</script>

<script>
	import '../app.css';
	import Sidebar from '$lib/dashboard/layout/Sidebar/Sidebar.svelte';
	import { sidebarState } from '$lib/dashboard/home/stores';
</script>

<svelte:head><title>app.aemers.com - US Scholarship Mentoring</title></svelte:head>

<div class="flex w-full h-screen bg-bgColor">
	<aside class:hidden={$sidebarState} class="lg:block fixed left-0 top-0 w-2/4 lg:w-[15%]">
		<Sidebar />
	</aside>
	<main class="flex-1 lg:ml-[15%]">
		<slot />
	</main>
</div>
