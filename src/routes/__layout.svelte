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
</script>

<svelte:head><title>app.aemers.com - US Scholarship Mentoring</title></svelte:head>

<main class="">
	<slot />
</main>
