<script context="module">
	export async function load({ session }) {
		if (session.user) {
			return {
				status: 302,
				redirect: '/'
			};
		}

		return {};
	}
</script>

<script>
	import Header from '$lib/login/Header.svelte';
</script>

<div class="flex flex-col h-screen">
	<Header />
	<div class="flex flex-col flex-1">
		<slot />
	</div>
</div>
