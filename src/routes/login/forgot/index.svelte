<script>
	import { session } from '$app/stores';
	import { goto } from '$app/navigation';
	import { post } from '$lib/utils.js';

	import { notificationToast } from '$lib/NotificationToast';

	import { createForm } from 'felte';
	import { validator } from '@felte/validator-yup';
	import * as yup from 'yup';

	let success = false;

	const schema = yup.object({
		email: yup.string().email().required()
	});
	const { form, isValid } = createForm({
		initialValues: {
			email: ''
		},
		extend: validator({ schema }),
		onSubmit: (values, context) => {
			handleLogin(JSON.stringify(values));
		}
	});

	async function handleLogin(email) {
		try {
			const response = await fetch('/auth/forgot', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: email
			});
			success = true;
			// notificationToast('A password reset link has been sent to the email address.', true, 10000);
		} catch (e) {
			console.log(e);
		}
	}
</script>

<svelte:head>
	<title>app.mrashid.net - Forgot Password</title>
</svelte:head>

<main class="flex flex-wrap h-screen font-montserrat">
	<aside class="bg bg-cover bg-center bg-no-repeat w-full py-32 lg:py-0 xl:w-3/5" />
	<aside
		class="flex flex-col items-center 2xl:items-start justify-center w-full p-6 lg:p-0 xl:p-6 2xl:p-0 xl:w-2/5"
	>
		<h2
			class="text-2xl lg:text-3xl xl:text-xl 2xl:text-3xl text-lightText font-semibold leading-loose"
		>
			Hello, <br /> Lost the key to your door?
		</h2>
		<span class="mt-6 text-base font-medium text-gray-600"
			>Enter the email address you signed up with below</span
		>

		<div id="login" class="flex flex-col w-full md:w-2/4 xl:w-3/4 2xl:w-3/5 mt-6">
			{#if success}
				<div class="mt-12">
					<span class="text-green-600 text-sm text-center font-medium"
						>A password reset link has been sent to the email address.</span
					>
				</div>
			{/if}

			<form use:form>
				<fieldset class="flex flex-col mt-5">
					<div class="flex flex-col gap-y-8 mb-4">
						<label class="block">
							<span class="text-lightText">Email</span>
							<input
								type="email"
								name="email"
								id="email"
								class="form-input
              mt-1
              block
              w-full
              rounded-md
              border-gray-300
              shadow-sm
              focus:border-accent2 focus:ring focus:ring-accent2 focus:ring-opacity-50
            "
							/>
						</label>
					</div>

					<button
						disabled={!isValid}
						class="px-6 lg:px-12 py-2 lg:py-4 ml-2 lg:ml-0 bg-accent1 hover:bg-accent2 disabled:bg-thinAccent text-white font-light text-sm uppercase"
						>Submit</button
					>
				</fieldset>
			</form>
		</div>
	</aside>
</main>

<style>
	.bg {
		background-image: url('/images/login-bg.svg');
	}
</style>
