<script>
	import { createEventDispatcher } from 'svelte';

	const dispatch = createEventDispatcher();

	export let hidden = true;
</script>

<div
	id="defaultModal"
	tabindex="-1"
	aria-hidden="true"
	class="flex justify-center overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 w-full md:inset-0 h-modal md:h-full bg-black/30"
>
	<div class="relative px-4 w-full max-w-2xl h-full md:h-auto">
		<div
			id="alert-additional-content-2"
			class="animate__animated animate__slideInDown p-4 mb-4 bg-red-100 rounded-b-lg dark:bg-red-200"
			role="alert"
		>
			<div class="flex items-center">
				<svg
					class="mr-2 w-5 h-5 text-red-700 dark:text-red-800"
					fill="currentColor"
					viewBox="0 0 20 20"
					xmlns="http://www.w3.org/2000/svg"
					><path
						fill-rule="evenodd"
						d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
						clip-rule="evenodd"
					/></svg
				>
				<h3 class="text-lg font-medium text-red-700 dark:text-red-800">
					You haven't saved your changes yet!
				</h3>
			</div>

			<div class="flex mt-4">
				<button
					type="button"
					on:click={() => {
						hidden = !hidden;
					}}
					class="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-xs px-3 py-1.5 mr-2 text-center inline-flex items-center"
				>
					Continue
				</button>
				<button
					on:click={() => {
						hidden = !hidden;
						dispatch('leave');
					}}
					type="button"
					class="text-red-700 bg-transparent border border-red-700 hover:bg-red-800 hover:text-white focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-xs px-3 py-1.5 text-center dark:border-red-800 dark:text-red-800 dark:hover:text-white"
					data-dismiss-target="#alert-additional-content-2"
					aria-label="Close"
				>
					Dismiss
				</button>
			</div>
		</div>
	</div>
</div>
