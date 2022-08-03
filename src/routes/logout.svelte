<script context="module">
	export async function load({ fetch }) {
		const res = await fetch('auth/logout');

		return {
			status: 302,
			redirect: '/login'
		};
	}
</script>
