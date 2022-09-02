<script>
	import { onMount } from 'svelte';

	onMount(() => {
		(function (d, s, id) {
			var js,
				tjs = d.getElementsByTagName(s)[0];
			if (d.getElementById(id)) return;
			js = d.createElement(s);
			js.id = id;
			js.src = 'https://app.termly.io/embed-policy.min.js';
			tjs.parentNode.insertBefore(js, tjs);
		})(document, 'script', 'termly-jssdk');
	});
</script>

<div name="termly-embed" data-id="1898f251-29ce-4c21-a60a-c408efa66e10" data-type="iframe" />
