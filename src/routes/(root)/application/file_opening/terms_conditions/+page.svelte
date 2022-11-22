<script>
	import { goto } from '$app/navigation';
	import { Button, Error, Input, Label } from '$lib/components/Form';

	import { onMount } from 'svelte';

	import PdfViewer from 'svelte-pdf';
</script>

<div class="flex flex-col mx-auto px-10 py-6 xl:px-20 xl:py-12 bg-white rounded-2xl">
	<PdfViewer
		url="https://raw.githubusercontent.com/vinodnimbalkar/svelte-pdf/369db2f9edbf5ab8c87184193e1404340729bb3a/public/sample.pdf"
	/>
</div>

<div class="flex justify-between items-center">
	<Button
		on:click={() => goto('/application/file_opening/confirm_info')}
		type="button"
		text="Go Back"
		classes="px-4 py-3 md:px-12 md:py-4 text-sm md:text-base font-bold mt-8 self-start bg-lightText text-white"
	/>
	<Button
		type="button"
		on:click={() => goto('/application/file_opening/make_payment')}
		text="Confirm"
		classes="px-4 py-3 md:px-12 md:py-4 text-sm md:text-base font-bold mt-8 self-start hover:bg-primaryDarker"
	/>
</div>
