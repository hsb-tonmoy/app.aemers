<script context="module">
	/** @type {import('@sveltejs/kit').ErrorLoad} */ export function load({ error, status }) {
		return {
			status: 302,
			redirect: '/'
		};
	}
</script>
