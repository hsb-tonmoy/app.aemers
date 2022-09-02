<script lang="ts">
	export let currentIndex: number = 0;
	export let steps;
	function handleBack() {
		currentIndex = Math.max(0, currentIndex - 1);
	}
</script>

<div class="flex gap-x-4 mt-20">
	<button
		type="button"
		on:click={handleBack}
		disabled={currentIndex === 0}
		class="border border-borderColor hover:border-secondary bg-white rounded-2xl text-lighterText font-bold text-base md:text-lg px-4 md:px-6 py-3"
		>Go back</button
	>
	<button
		type="submit"
		class="border border-primary bg-primary hover:bg-primaryDarker rounded-2xl text-white font-bold text-base md:text-lg px-14 md:px-24 py-3"
		>{currentIndex === steps.length - 1 ? 'Submit' : 'Next'}</button
	>
</div>
