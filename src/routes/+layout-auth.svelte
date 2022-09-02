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
	import { QueryClient, QueryClientProvider } from '@sveltestack/svelte-query';
	import Header from '$lib/login/Header.svelte';
	const queryClient = new QueryClient();
</script>

<div class="flex flex-col h-screen">
	<Header />
	<div class="flex flex-col flex-1">
		<QueryClientProvider client={queryClient}><slot /></QueryClientProvider>
	</div>
</div>
