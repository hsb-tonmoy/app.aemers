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

<header class="bg-[#F8F8F8] py-8 mx-auto">
	<Steps
		{steps}
		bind:current={currentIndex}
		size="4rem"
		primary={'#7443FF'}
		secondary={'#BEBEBE'}
		iconSize={'2.5rem'}
		keepIcon={true}
	/>
</header>
