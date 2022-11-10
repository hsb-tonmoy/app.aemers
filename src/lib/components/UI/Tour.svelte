<script>
	import 'shepherd.js/dist/css/shepherd.css';
	import { onMount } from 'svelte';

	export let tour;

	export let toggleKey = '';

	export let title = '';

	onMount(async () => {
		const obj = await import('shepherd.js');
		const Shepherd = obj.default;

		const shepherdContainer = document.getElementById('svelte');
		tour = new Shepherd.Tour({
			modalContainer: shepherdContainer,
			stepsContainer: shepherdContainer,
			useModalOverlay: true,
			defaultStepOptions: {
				title: title,
				scrollTo: true,
				popperOptions: {
					modifiers: [{ name: 'offset', options: { offset: [0, 20] } }]
				},
				modalOverlayOpeningRadius: 16,
				when: {
					show: function () {
						const currentStepElement = tour.currentStep.el;
						const header = currentStepElement.querySelector('.shepherd-footer');
						//create progress holder
						const progress = document.createElement('div');
						//create the progress bar
						const innerBar = document.createElement('span');
						//calculate the progress in percentages
						const progressPercentage =
							((tour.steps.indexOf(tour.currentStep) + 1) / tour.steps.length) * 100 + '%';

						//add class to the progress holder
						progress.className = 'shepherd-progress-bar';
						//add the width dynamically
						innerBar.style.width = progressPercentage;
						//if it is only one button, expand progress holder
						if (document.getElementsByClassName('shepherd-button').length == 1) {
							progress.style.minWidth = '260px';
						}
						progress.appendChild(innerBar);
						header.insertBefore(progress, currentStepElement.querySelector('.shepherd-button'));
					}
				}
			}
		});

		function dismissTour() {
			if (!localStorage.getItem(toggleKey)) {
				localStorage.setItem(toggleKey, 'yes');
			}
		}

		tour.on('cancel', dismissTour);
		tour.on('complete', dismissTour);

		if (!localStorage.getItem(toggleKey)) {
			tour.start();
		}
	});
</script>

<style lang="postcss" global>
	.shepherd-modal-overlay-container {
		opacity: 0.8 !important;
	}
	.shepherd-element {
		@apply rounded-2xl px-6 pt-6 pb-4 !important;
	}
	.shepherd-header {
		@apply bg-white p-0 !important;
	}
	.shepherd-footer {
		@apply p-0 justify-start items-center !important;
	}
	.shepherd-title {
		@apply text-primary text-lg font-bold !important;
	}
	.shepherd-text {
		@apply text-lighterText p-0 text-base mt-1 mb-4 !important;
	}
	.shepherd-button {
		@apply bg-primary hover:bg-primaryDarker text-white font-bold py-2 px-6 rounded-xl !important;
	}
	.shepherd-button-secondary {
		@apply bg-transparent text-lighterText hover:text-lightText hover:bg-transparent font-bold px-2 py-0 !important;
	}

	[data-popper-arrow]::after {
		@apply invisible;
	}
	.shepherd-arrow::before {
		@apply bg-white !important;
	}

	.shepherd-progress-bar {
		margin-right: auto;
		font-size: 14px;
		border-radius: 9px;
		height: 20px;
		width: 100%;
		max-width: 180px;
		padding: 3px;
		background: #d9d9d9;
	}
	.shepherd-progress-bar span {
		display: block;
		background: #7443ff;
		width: 50%;
		height: 100%;
		border-radius: 9px;
	}
</style>
