<script>
	import { invalidateAll } from '$app/navigation';

	import Button from '$lib/components/Form/Button.svelte';
	import { application_status, application_steps } from '$lib/data/stores';

	const handleSubmit = async () => {
		// let step_index;
		// $application_steps.map((step, index) => {
		// 	if (step.path.includes('pre_application_form')) {
		// 		step_index = index;
		// 		return;
		// 	}
		// });
		// $application_steps[step_index].status = 2;
		const res = await fetch('/application/submit', {
			method: 'PATCH',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				pre_application_form: 2
			})
		});
		if (res.ok) invalidateAll();
	};
</script>

<h1>Pre Application Form</h1>

<Button on:click={handleSubmit} text="Submit" classes="px-6 py-3" />
