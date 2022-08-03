<script>
	import { onMount } from 'svelte';
	import { currentStep } from './stores.js';
	import { uuidv4, formHasError, updateStepStatus } from './helpers.js';

	/*
  Lifecycle Hooks
  */
	onMount(async () => {
		let steps = document.querySelectorAll('.step');

		steps.forEach((step, index) => {
			step.setAttribute('id', uuidv4());
			step.dataset.stepNumber = index;
			if ($currentStep === index) {
				step.classList.remove('step-not-active');
				step.classList.add('step-is-active');
			}
		});
	});

	/*
  App-navigation
  */
	export function nextStep() {
		const steps = document.querySelectorAll('.step');
		if (formHasError()) {
			return;
		}
		if ($currentStep + 1 <= steps.length - 1) {
			updateStepStatus(currentStep.increment);
		}
	}

	export const previousStep = () => {
		if ($currentStep - 1 > -1) {
			updateStepStatus(currentStep.decrement);
		}
	};
</script>

<div class="multistep-master-form">
	<div id="multistep-error-messages" />
	<form class="multistep-form">
		<div class="flex flex-col w-full lg:w-auto">
			<slot />
		</div>
	</form>
</div>

<style lang="postcss">
	.multistep-form {
		display: flex;
	}

	#multistep-error-messages {
		position: absolute;
		right: 0;
		height: auto;
		width: auto;
		border-left: 10px solid red;
		text-align: left;
		padding-left: 10px;
		background: #fff;
		visibility: hidden;
		opacity: 0;
		transition: visibility 0s, opacity 0.2s linear;
	}
</style>
