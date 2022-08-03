<script>
	import { session } from '$app/stores';
	import { post } from '$lib/utils.js';

	async function logout() {
		await post(`/auth/logout`);

		$session.user = null;
	}
</script>

<div class="flex flex-col w-full h-full justify-center items-center text-center">
	<h2 class="text-xl xl:text-3xl font-semibold text-lightText mb-3">
		You haven't submitted the form yet! Please do so to access your dashboard
	</h2>
	<p class="text-sm lg:text-base text-gray-700">
		On the contrary, if you've already submitted the form but still seeing this message, please send
		an email to <a href="mailto:team@mrashid.net" class="text-blue-600 hover:underline"
			>team@mrashid.net</a
		>
		and include your full name and email address used in the form.
		<span on:click={logout} class="text-red-700 cursor-pointer hover:underline"
			>Click here to logout</span
		>
	</p>
</div>
