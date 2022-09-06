<script lang="ts">
	import { AccountFilled, GraduationCap, Language, OpenBook, Pound } from '$lib/components/Icons';
	import Steps from '$lib/components/UI/Steps.svelte';
	import MultiStepForm from '$lib/evalutation/MultiStepForm.svelte';

	let steps = [
		{ icon: AccountFilled },
		{ icon: GraduationCap },
		{ icon: OpenBook },
		{ icon: Language },
		{ icon: Pound }
	];

	let currentIndex: number = 0;
</script>

<svelte:head>
	<title>app.aemers - Evaluation</title>
</svelte:head>

<div class="flex flex-col h-screen">
	<header class="hidden md:block bg-[#F8F8F8] py-8">
		<Steps
			{steps}
			bind:current={currentIndex}
			size="4rem"
			primary={'#7443FF'}
			secondary={'#BEBEBE'}
			lineColor={'#d9d9d9'}
			iconSize={'2.0rem'}
			keepIcon={true}
		/>
	</header>

	<MultiStepForm {steps} bind:currentIndex />
</div>
