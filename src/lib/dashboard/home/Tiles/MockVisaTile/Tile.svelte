<script>
	import TileTemplate from '../TileTemplate.svelte';

	const heading = 'Free Visa Mock Test';
	const subheading =
		'Practice for your visa interview for free! You can also book an interview with real interviewer!';
</script>

<TileTemplate {heading} {subheading}>
	<div class="flex gap-x-4">
		<a href="/mock_visa_interview">
			<button
				type="button"
				class="self-start text-white bg-primary hover:bg-primaryDarker rounded-xl px-4 py-2 md:py-3 font-bold text-sm md:text-base mt-3 transition-all ease-in-out duration-150"
				>Start a Free Test</button
			>
		</a>
		<button
			type="button"
			class="self-start text-primary bg-white border border-primary hover:text-white hover:bg-primaryDarker hover:border-primaryDarker rounded-xl px-4 py-2 md:py-3 font-bold text-sm md:text-base mt-3 transition-all ease-in-out duration-150"
			>Go Premium</button
		>
	</div>
</TileTemplate>
