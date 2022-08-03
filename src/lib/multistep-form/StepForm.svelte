<div class="step step-not-active">
	<slot />
</div>

<style>
	:global(.step-is-active) {
		display: block;
	}
	:global(.step-not-active) {
		display: none;
	}
</style>
