<script>
	import { post } from '$lib/utils.js';
	import { onMount } from 'svelte';

	async function logout() {
		await post(`/logout`);
		window.location.href = '/';
	}

	onMount(async () => {
		await logout();
	});
</script>
