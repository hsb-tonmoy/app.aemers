<script>
	export let application_status;
	import { CheckedCircle, Circle } from '$lib/components/Icons';

	const items = [
		{
			title: 'Create Profile',
			status: 2
		},
		{
			title: 'Open a File',
			status: application_status.file_opening
		},
		{
			title: 'Orientation',
			status: application_status.orientation
		},
		{
			title: 'Pre-Application Form',
			status: application_status.pre_application_form
		},
		{
			title: 'Documents Upload',
			status: application_status.documents_upload
		},
		{
			title: 'I-20 Upload',
			status: application_status.i_20_upload
		},
		{
			title: 'DS-160 Filed',
			status: application_status.ds_160_filed
		},
		{
			title: 'SEVIS Payment',
			status: application_status.sevis_payment
		},
		{
			title: 'Visa Fee Payment',
			status: application_status.visa_fee_payment
		},
		{
			title: 'Visa Interview',
			status: application_status.visa_interview
		},
		{
			title: 'Pre-Departure Session',
			status: application_status.pre_departure_session
		},
		{
			title: 'Welcome to USA',
			status: application_status.welcome_to_usa
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
				{#if item.status === 2}
					<CheckedCircle />
				{:else}
					<Circle />
				{/if}
			</span>
			<span class={`text-sm md:text-base ${item.status === 2 ? 'line-through' : ''} `}
				>{item.title}</span
			>
		</li>
	{/each}
	<button
		type="button"
		class="text-primary bg-white hover:text-white hover:bg-primaryDarker rounded-xl px-1 py-2 md:py-3 font-bold text-sm md:text-base mt-3 transition-all ease-in-out duration-150"
		>Proceed</button
	>
</div>
