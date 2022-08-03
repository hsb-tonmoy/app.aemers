<script>
	export let pdf_show = true;
	export let pdf_url, pdf_title;
</script>

<div class="">
	<span
		class="text-blue-500 hover:underline cursor-pointer"
		on:click={() => {
			pdf_show = !pdf_show;
		}}>{pdf_title}</span
	>
</div>

<div
	class:hidden={pdf_show}
	class="flex overflow-y-auto overflow-x-hidden fixed right-0 left-0 top-4 z-50 justify-center items-center h-modal md:h-full md:inset-0 bg-black/50"
	on:click|self={() => {
		pdf_show = !pdf_show;
	}}
>
	<div class="relative bg-white w-full max-w-5xl h-auto">
		<div class="relative bg-blueGray-100 px-4 rounded-lg shadow dark:bg-gray-700">
			<div class="flex justify-end py-2">
				<button
					on:click={() => {
						pdf_show = !pdf_show;
					}}
					type="button"
					class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white"
				>
					<svg
						class="w-5 h-5"
						fill="currentColor"
						viewBox="0 0 20 20"
						xmlns="http://www.w3.org/2000/svg"
						><path
							fill-rule="evenodd"
							d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
							clip-rule="evenodd"
						/></svg
					>
				</button>
			</div>

			<!-- <iframe src={`${pdf_url}#view=fitH`} title={pdf_title} height="100%" width="100%" /> -->

			<object
				type="application/pdf"
				data={pdf_url}
				aria-label="PDF preview window"
				class="style__pdf-preview___1jSP9"
				width="100%"
				height="900px"><embed src={pdf_url} type="application/pdf" /></object
			>
		</div>
	</div>
</div>
