<script>
	import TimelineItem from './TimelineItem.svelte';

	import {
		account_creation,
		file_opening,
		document_submission,
		application_submission,
		reception_of_i20,
		sevis_payment,
		ds160,
		visa_fee,
		visa_interview,
		visa_collection,
		pre_departure,
		welcoming_in_the_usa
	} from '$lib/svg/timeline';

	export let student_progress;

	let timeline_options = [
		{
			title: 'Account Creation',
			icon: account_creation,
			status: student_progress.account_creation,
			route: 'account_creation/'
		},
		{
			title: 'File Opening',
			icon: file_opening,
			status: student_progress.file_opening,
			route: 'file_opening/'
		},
		{
			title: 'Document Submission',
			icon: document_submission,
			status: student_progress.docu_submission,
			route: 'document_submission/'
		},
		{
			title: 'Application Submission',
			icon: application_submission,
			status: student_progress.application_submission,
			route: 'application_submission/'
		},
		{
			title: 'Reception of I-20',
			icon: reception_of_i20,
			status: student_progress.i20_reception,
			route: 'i20_reception/'
		},
		{
			title: 'SEVIS Payment',
			icon: sevis_payment,
			status: student_progress.sevis_payment,
			route: 'sevis_payment/'
		},
		{
			title: 'DS-160 Submission',
			icon: ds160,
			status: student_progress.ds160_submission,
			route: 'ds160_submission/'
		},
		{
			title: 'Visa Fee Payment',
			icon: visa_fee,
			status: student_progress.visa_fee,
			route: 'visa_fee/'
		},
		{
			title: 'Visa Interview Prep',
			icon: visa_interview,
			status: student_progress.visa_interview,
			route: 'visa_interview/'
		},
		{
			title: 'Visa Collection',
			icon: visa_collection,
			status: student_progress.visa_collection,
			route: 'visa_collection/'
		},
		{
			title: 'Pre-departure Session',
			icon: pre_departure,
			status: student_progress.pre_dept_session,
			route: 'pre_departure/'
		},
		{
			title: 'Welcoming in the USA',
			icon: welcoming_in_the_usa,
			status: student_progress.welcoming_in_us,
			route: 'welcome_usa/'
		}
	];
</script>

<section class="flex flex-col relative gap-y-5 2xl:gap-y-8 px-2 2xl:px-4 w-full">
	{#each timeline_options as timeline_item}
		<TimelineItem
			title={timeline_item.title}
			icon={timeline_item.icon}
			status={timeline_item.status}
			route={timeline_item.route}
		/>
	{/each}
</section>

<style>
	:root {
		--subdued-color: rgb(87 83 78);
		--text-color: hsl(200, 100%, 20%);
		--avatar-size: 2.25rem;
		--status-size: 1.25rem;
		--grid-gap: 1.5rem;
		--group-header-spacing: 1rem;
	}
</style>
