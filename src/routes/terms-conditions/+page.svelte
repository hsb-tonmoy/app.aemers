<script type="text/javascript">
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

<div name="termly-embed" data-id="81246c80-af74-409a-8532-8cabc12c1174" data-type="iframe" />
