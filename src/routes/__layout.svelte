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
</script>

<svelte:head><title>app.aemers.com - US Scholarship Mentoring</title></svelte:head>

<div class="flex w-full h-screen bg-blue-600">
	<aside class="flex-col fixed left-0 top-0 w-[20%]">
		<Sidebar />
	</aside>
	<main class="flex-1 ml-[20%] w-[80%]">
		<slot />
	</main>
</div>
