<script>
	import TileTemplate from '../TileTemplate.svelte';

	const heading = 'One on One Mentorship';
	const subheading = 'Get one to one mentorship from experts for getting admission!';
</script>

<TileTemplate {heading} {subheading}>
	<div class="flex flex-col w-full md:w-11/12 2xl:w-2/3">
		<div class="self-end"><img src="/images/mentorship.png" alt="Mentorship" /></div>
		<button
			type="button"
			class="-mt-12 self-start text-white bg-primary hover:bg-primaryDarker rounded-xl px-4 py-2 md:py-3 font-bold text-sm md:text-base transition-all ease-in-out duration-150"
			>Book a Demo</button
		>
	</div>
</TileTemplate>
