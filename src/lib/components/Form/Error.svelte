<script lang="ts">
	export let message: string;
	export let classes: string;
</script>

<span class={`text-red-600 text-sm text-center font-medium mt-2 ${classes}`}>
	{message}
</span>

<!-- <style>
	span::first-letter {
		text-transform: capitalize;
	}
</style> -->
