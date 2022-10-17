<script>
	import Form from './Form.svelte';
	export let data;
</script>

<svelte:head>
	<title>app.aemers - Pre-Application Form</title>
</svelte:head>

<Form profile_data={data.profile_data} pre_application_form={data.pre_application_form} />
