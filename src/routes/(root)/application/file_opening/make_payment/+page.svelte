<script>
	import { goto } from '$app/navigation';
	import { Button } from '$lib/components/Form/';
</script>

<div class="flex flex-col mx-auto px-10 py-6 xl:px-20 xl:py-12 bg-white rounded-2xl">
	<h3 class="text-secondary font-bold text-2xl mb-8">Choose a Payment Method</h3>
	<section class="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
		<button
			class="flex justify-center items-center border-2 border-borderColor hover:bg-bgColor rounded-2xl w-full h-full px-8 py-5 md:px-16 md:py-10"
		>
			<img src="/images/bkash.png" alt="bKash" />
		</button>
		<button
			class="grid grid-cols-2  items-center gap-x-8 gap-y-4 border-2 border-borderColor hover:bg-bgColor rounded-2xl w-full px-8 py-5 md:px-16 md:py-10"
		>
			<img class="justify-self-end w-20" src="/images/cards/visa.png" alt="Visa" />
			<img class="justify-self-start w-20" src="/images/cards/amex.png" alt="AMEX" />
			<img class="justify-self-end w-20" src="/images/cards/discover.png" alt="Discover" />
			<img class="justify-self-start w-20" src="/images/cards/mastercard.png" alt="Mastercard" />
		</button>
	</section>
	<Button
		on:click={() => goto('/application/file_opening/confirm_info')}
		type="button"
		text="Go Back"
		classes="px-4 py-3 md:px-12 md:py-4 text-sm md:text-base font-bold mt-8 self-start bg-lightText text-white"
	/>
</div>
