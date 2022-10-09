<script>
	import { goto } from '$app/navigation';
	import { Cross } from '$lib/components/Icons';
	import { convertDate } from '$lib/convertDate';

	export let data;

	let statusClass = '';
	let statusText = '';

	$: {
		if (data.document.status === 0) {
			statusText = 'Pending';
			statusClass = 'text-amber-600';
		} else if (data.document.status === 1) {
			statusText = 'Accepted';
			statusClass = 'text-greenSignal';
		} else if (data.document.status === 2) {
			statusText = 'Rejected';
			statusClass = 'text-redSignal';
		} else {
			statusText = 'Ready to Upload';
			statusClass = 'text-greenSignal';
		}
	}
</script>

<div class="relative bg-white rounded-2xl px-10 py-12 md:px-16 md:py-20">
	<button
		on:click={() => goto('/')}
		class="absolute right-8 top-10 flex justify-center items-center bg-borderColor rounded-full cursor-pointer"
	>
		<span class="block p-1 w-8 h-8 md:w-12 md:h-12"><Cross /></span>
	</button>
	<h6 class="text-2xl font-bold mb-4">{data.document.category.name}</h6>
	<div class="props grid gap-y-2">
		<span class="">File Name</span>
		<span class="">:</span>
		<span class="text-secondary">{data.document.title}</span>
		<span class="">Status</span>
		<span class="">:</span>
		<span class={`${statusClass}`}>{statusText}</span>
		<span class="">Upload Date</span>
		<span class="">:</span>
		<span class="text-secondary">{convertDate(data.document.uploaded_at)}</span>
	</div>
	<div class="my-6 h-px bg-borderColor w-full" />
</div>

<style>
	.props {
		grid-template-columns: max-content min-content 1fr;
	}
</style>
