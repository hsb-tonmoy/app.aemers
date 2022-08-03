<script>
	import { degree } from '$lib/home/stores';

	export let summary;
</script>

<div class="flex flex-col w-9/12 mt-4">
	<div class="hello">
		<h3 class="text-[#404D61] font-medium text-3xl mb-4">Howdy, {summary.first_name}</h3>
	</div>
	<div class="description text-lightTextBody text-lg leading-loose">
		<!-- You are <span class="highlight-text">{summary.first_name} </span><span class="highlight-text">
			{summary.last_name}</span
		>
		and you wish to go to <span class="highlight-text">{summary.destination}</span>. You are
		pursuing a
		<span class="highlight-text">{summary.degree}</span>
		degree in
		<span class="highlight-text">{summary.major}</span>. You {summary.english_proficiency_score
			? 'have taken '
			: ''}
		<span class="highlight-text"
			>{summary.english_proficiency === 'ielts' ? 'IELTS' : ''}{summary.english_proficiency ===
			'toefl'
				? 'TOEFL'
				: ''}{summary.english_proficiency === 'duolingo'
				? 'Duolingo'
				: ''}{summary.english_proficiency === 'no-test'
				? 'wish to get enrolled without any test'
				: ''}{summary.english_proficiency === 'moi'
				? 'wish to get enrolled with Medium Of Instruction'
				: ''}{summary.english_proficiency === 'plan-to' ? 'wish to take IELTS' : ''}
		</span>
		{summary.english_proficiency_score ? 'and acquired a score of' : ''}
		<span class="highlight-text"
			>{summary.english_proficiency_score ? summary.english_proficiency_score : ''}</span
		> -->
		{#if summary.degree == 'Other'}
			Our custom-tailored resources are here to help you acheive your desired admission abroad!
		{:else}
			Our custom-tailored resources to help you acheive an admission in <span class="highlight-text"
				>{summary.degree}</span
			>
			in <span class="highlight-text">{summary.major}</span>
			will be populated here.
		{/if}
	</div>
</div>

<style lang="postcss">
	.highlight-text {
		@apply underline decoration-2 text-lightText;
	}
</style>
