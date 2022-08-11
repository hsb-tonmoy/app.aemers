<script>
	import { session } from '$app/stores';
	import { post } from '$lib/utils.js';
	import { onMount } from 'svelte';

	async function logout() {
		await post(`/auth/logout`);

		$session.user = null;
	}

	onMount(async () => {
		await logout();
	});
</script>
