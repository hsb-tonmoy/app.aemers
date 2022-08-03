<script>
	import { page } from '$app/stores';

	const { uid, token } = $page.params;

	import { goto } from '$app/navigation';

	import { notificationToast } from '$lib/NotificationToast';

	import { createForm } from 'felte';
	import { validator } from '@felte/validator-yup';
	import * as yup from 'yup';
	import YupPassword from 'yup-password';
	YupPassword(yup);

	let success = false;

	const schema = yup.object({
		new_password1: yup.string().password().required('New password is required'),
		new_password2: yup
			.string()
			.oneOf([yup.ref('new_password1'), null], 'Passwords must match')
			.required('Confirm Password is required')
	});
	const { form, errors, isValid } = createForm({
		initialValues: {
			uid: uid,
			token: token,
			new_password1: '',
			new_password2: ''
		},
		extend: validator({ schema }),
		onSubmit: (values, context) => {
			handleReset(JSON.stringify(values));
		}
	});

	async function handleReset(body) {
		try {
			const response = await fetch('/auth/forgot-confirm', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body
			});
			const data = await response.json();

			if (response.ok) {
				success = true;
				setTimeout(() => {
					goto('/login');
				}, 3000);
			} else if (data.token) {
				notificationToast(
					'Your password reset link has expired. Please request a new one.',
					false,
					5000
				);
			} else if (data.new_password2) {
				notificationToast(
					'Your password does not meet the minimum requirements. Please try again.',
					false,
					5000
				);
			}
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
		class="flex flex-col items-center 2xl:items-start justify-center w-full p-6 lg:p-0 xl:p-6 2xl:p-0 xl:w-2/6"
	>
		<h2
			class="text-2xl lg:text-3xl xl:text-xl 2xl:text-3xl text-lightText font-semibold leading-loose"
		>
			Hello, <br /> Lost the key to your door?
		</h2>
		<h3 class="mt-6 text-base font-medium text-gray-800">Set a new password below</h3>
		<div class="text-xs mt-4">
			<p class="text-sm">
				New password must be a minimum of eight (8) characters long and must contain at least two
				(2) of the following character classes:
			</p>
			<div class="flex flex-col gap-y-2 ml-4 mt-4">
				<p>Upper-case alphabetic character (A-Z)</p>
				<p>Lower-case alphabetic character (a-z)</p>
				<p>Numeric digit (0-9)</p>
				<p>Punctuation or symbol character, e.g. ^, $, #.</p>
			</div>
		</div>

		<div id="login" class="flex flex-col w-full md:w-2/4 xl:w-3/4 2xl:w-3/5 mt-6">
			{#if success}
				<div class="mt-12">
					<span class="text-green-600 text-sm text-center font-medium"
						>Your password has been reset successfully! Taking you to the login page now.</span
					>
				</div>
			{/if}
			<form use:form>
				<fieldset class="flex flex-col mt-5">
					<div class="flex flex-col gap-y-8 mb-4">
						<label class="block">
							<span class="text-lightText">New Password</span>
							<input
								type="password"
								name="new_password1"
								id="new_password1"
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
						<label class="block">
							<span class="text-lightText">Confirm New Password</span>
							<input
								type="password"
								name="new_password2"
								id="new_password2"
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
						disabled={!$isValid}
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
