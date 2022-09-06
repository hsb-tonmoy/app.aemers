<script>
	export let application_status;
	import { CheckedCircle, Circle } from '$lib/components/Icons';

	const items = [
		{
			title: 'Create Profile',
			done: true
		},
		{
			title: 'Open a File',
			done: application_status.file_opening
		},
		{
			title: 'Orientation',
			done: application_status.orientation
		},
		{
			title: 'Pre-Application Form',
			done: application_status.pre_application_form
		},
		{
			title: 'Documents Upload',
			done: application_status.documents_upload
		},
		{
			title: 'I-20 Upload',
			done: application_status.i_20_upload
		},
		{
			title: 'DS-160 Filed',
			done: application_status.ds_160_filed
		},
		{
			title: 'SEVIS Payment',
			done: application_status.sevis_payment
		},
		{
			title: 'Visa Fee Payment',
			done: application_status.visa_fee_payment
		},
		{
			title: 'Visa Interview',
			done: application_status.visa_interview
		},
		{
			title: 'Pre-Departure Session',
			done: application_status.pre_departure_session
		},
		{
			title: 'Welcome to USA',
			done: application_status.welcome_to_usa
		}
	];
</script>

<div class="flex flex-col gap-y-2 text-white">
	{#each items as item, index}
		<li
			class="flex items-center gap-x-2"
			class:hidden={index > 3}
			style="opacity: {100 - index * 30}%;"
		>
			<span class="w-4 h-4 md:w-6 md:h-6">
				{#if item.done}
					<CheckedCircle />
				{:else}
					<Circle />
				{/if}
			</span>
			<span class={`text-sm md:text-base ${item.done ? 'line-through' : ''} `}>{item.title}</span>
		</li>
	{/each}
	<button
		type="button"
		class="text-primary bg-white hover:text-white hover:bg-primaryDarker rounded-xl px-1 py-2 md:py-3 font-bold text-sm md:text-base mt-3 transition-all ease-in-out duration-150"
		>Proceed</button
	>
</div>
