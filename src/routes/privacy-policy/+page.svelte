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

<div name="termly-embed" data-id="49dd405f-92d5-4f7e-8cd7-445eaf356b72" data-type="iframe" />
