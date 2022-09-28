<script>
	import { Button } from '$lib/components/Form';
	import UploadComponent from '$lib/components/Upload/UploadComponent.svelte';
	import { notificationToast } from '$lib/NotificationToast';
	import { validator } from '@felte/validator-yup';
	import { useMutation } from '@sveltestack/svelte-query';
	import { createForm } from 'felte';
	import * as yup from 'yup';

	let files = {
		accepted: []
	};

	// const submitData = useMutation(
	// 	(data) => {
	// 		let formData = new FormData();
	// 		formData.append('document', data.document);
	// 		formData.append('category', data.category);
	// 		formData.append('description', data.description);
	// 		formData.append('name', data.name);
	// 		formData.append('user', '1');

	// 		return fetch('/application/documents_upload', {
	// 			method: 'POST',
	// 			body: formData
	// 		});
	// 	},
	// 	{
	// 		onSettled: async (data, error, variables, context) => {
	// 			if (!data.ok || error) {
	// 				notificationToast('Something went wrong, please try again later');
	// 				console.log(await data.json(), error);
	// 			} else {
	// 				// formSaved.set(true);
	// 				console.log('success');
	// 			}
	// 		}
	// 	}
	// );

	async function handleUpload(values) {
		let formData = new FormData();
		formData.append('title', values.title);
		formData.append('description', values.description);
		formData.append('category', values.category);
		formData.append('student_data', values.student_data);
		formData.append('document', $data.document);

		const res = await fetch('/application/documents_upload', {
			method: 'POST',
			credentials: 'include',

			body: formData
		});

		if (res.ok) {
			console.log('success');
			files.accepted = [];
		} else {
			console.log(res);
		}
	}

	const schema = yup.object({
		title: yup.string().required()
	});

	const { form, data, errors } = createForm({
		initialValues: {
			title: '',
			description: '',
			category: 1,
			document: null,
			user: 1
		},
		onSubmit: async (values) => {
			handleUpload(values);
		},
		extend: validator({ schema })
	});

	$: $data.document = files.accepted && files.accepted[0];
	$: $data.title = files.accepted[0] && files.accepted[0].name;
</script>

<form use:form>
	<UploadComponent bind:files />
	<Button text="Submit" classes="px-6 py-3" />
</form>
