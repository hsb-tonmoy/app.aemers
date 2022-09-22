<script>
	import Form from './Form.svelte';
	export let data;
</script>

<Form profile_data={data.profile_data} pre_application_form={data.pre_application_form} />
