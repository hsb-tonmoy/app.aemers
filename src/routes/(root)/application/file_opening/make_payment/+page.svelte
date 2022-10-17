<script>
	import { goto } from '$app/navigation';
	import { Button } from '$lib/components/Form/';
	import { fly } from 'svelte/transition';
	import Cash from './Cash.svelte';

	let cash = true;
</script>

<div class="flex flex-col mx-auto px-10 py-6 xl:px-20 xl:py-12 bg-white rounded-2xl">
	<h3 class="text-secondary font-bold text-2xl mb-8">Choose a Payment Method</h3>
	<section class="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 gap-8 w-full">
		<button on:click={() => (cash = false)} class="pay-option flex justify-center items-center">
			<img src="/images/bkash.png" alt="bKash" />
		</button>
		<button
			on:click={() => (cash = false)}
			class="pay-option grid grid-cols-2 items-center gap-x-8 gap-y-4"
		>
			<img class="justify-self-end w-20" src="/images/cards/visa.png" alt="Visa" />
			<img class="justify-self-start w-20" src="/images/cards/amex.png" alt="AMEX" />
			<img class="justify-self-end w-20" src="/images/cards/discover.png" alt="Discover" />
			<img class="justify-self-start w-20" src="/images/cards/mastercard.png" alt="Mastercard" />
		</button>
		<button
			on:click={() => (cash = !cash)}
			class="border-2 hover:bg-bgColor rounded-2xl w-full h-full px-8 py-5 md:px-16 md:py-10 flex flex-col justify-center items-center {cash
				? 'bg-bgColor border-primary'
				: 'border-borderColor'}"
		>
			<h6 class="text-xl font-bold mb-2">Cash</h6>
			<span class="text-sm font-medium">If you want to pay cash please visit our office.</span>
		</button>
	</section>
	{#if cash}
		<div class="my-10 bg-borderColor h-px w-full" />
		<section in:fly={{ y: -100, duration: 800 }} out:fly={{ y: -200, duration: 800 }} class="flex">
			<Cash />
		</section>
	{:else}
		<div class="my-10 bg-borderColor h-px w-full" />
		<h6
			in:fly={{ y: -100, duration: 1000 }}
			out:fly={{ y: -200, duration: 200 }}
			class="text-3xl text-center font-bold"
		>
			Coming Soon....
		</h6>
	{/if}
	<Button
		on:click={() => goto('/application/file_opening/confirm_info')}
		type="button"
		text="Go Back"
		classes="px-4 py-3 md:px-12 md:py-4 text-sm md:text-base font-bold mt-8 self-start bg-lightText text-white"
	/>
</div>

<style lang="postcss">
	.pay-option {
		@apply border-2 border-borderColor hover:bg-bgColor rounded-2xl w-full h-full px-8 py-5 md:px-16 md:py-10;
	}
</style>
