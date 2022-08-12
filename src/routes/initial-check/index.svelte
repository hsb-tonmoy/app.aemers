<script lang="ts">
	import Steps from '$lib/components/UI/Steps.svelte';
	import { Account, Application, Eye, Home, Video } from '$lib/components/Icons';

	let steps = [
		{ icon: Account },
		{ icon: Application },
		{ icon: Eye },
		{ icon: Home },
		{ icon: Video }
	];

	let currentIndex: number = 0;
</script>

<Steps {steps} bind:current={currentIndex} size="4rem" primary={'#7443FF'} secondary={'#949494'} />
