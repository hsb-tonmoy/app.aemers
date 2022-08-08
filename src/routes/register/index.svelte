<script>
	import { goto } from '$app/navigation';

	import { post } from '$lib/utils.js';

	import { createForm } from 'felte';
	import { validator } from '@felte/validator-yup';
	import * as yup from 'yup';

	import { notificationToast } from '$lib/NotificationToast';

	import SocialLogin from '$lib/login/SocialLogin.svelte';

	import { Eye, EyeOff } from '$lib/components/Icons';

	let passwordVisible = false;

	const schema = yup.object().shape({
		email: yup.string().email().required('Email address is required').trim(),
		password: yup.string().required('Password is required'),
		passwordConfirmation: yup.string().oneOf([yup.ref('password'), null], 'Passwords must match')
	});

	const { form, data, errors, isValid } = createForm({
		initialValues: {
			email: '',
			password: '',
			passwordConfirmation: ''
		},
		extend: validator({ schema }),
		onSubmit: (values, context) => {
			handleRegister(values.email, values.password, values.passwordConfirmation);
		}
	});

	async function handleRegister(email, password, passwordConfirmation) {
		const response = await post(`auth/register`, {
			email,
			password,
			passwordConfirmation
		});

		if (response.detail && response.detail === 'Verification e-mail sent.') {
			goto('/register/confirmation');
			return;
		}

		if (
			response.email &&
			response.email[0] === 'A user is already registered with this e-mail address.'
		) {
			notificationToast('You are already registered with this email address.');
		} else {
			notificationToast('Something went wrong, please try again later');
			console.log(response);
		}
	}
</script>

<svelte:head>
	<title>app.aemers.com - Signup</title>
</svelte:head>

<main class="flex flex-wrap flex-1">
	<aside class="hidden md:block bg bg-cover bg-center bg-no-repeat w-full md:w-2/5 xl:w-1/4" />
	<aside class="flex justify-center items-center w-full md:w-3/5 xl:w-3/4">
		<div class="flex flex-col justify-center px-20 xl:px-0 xl:w-1/3">
			<h2 class="text-3xl font-bold">Create an Account</h2>
			<p class="mt-2 text-sm text-lightText leading-normal">
				Creating an account is the easiest task ever. You are about to land in the universe of
				Aemers.
			</p>

			<form use:form>
				<fieldset class="flex flex-col mt-8 border-b border-dividerColor">
					<div class="mb-8">
						<label for="email" class="block mb-2 text-base">Email Address</label>
						<input
							type="email"
							name="email"
							id="email"
							class="border border-borderColor text-sm rounded-xl block w-full py-4 px-5"
							placeholder="example@example.com"
						/>
					</div>
					<label for="password" class="block mb-2 text-base">Choose a Password</label>
					<div class="relative mb-8">
						<input
							type={passwordVisible ? 'text' : 'password'}
							name="password"
							id="password"
							class="border border-borderColor text-sm rounded-xl block w-full py-4 px-5"
							placeholder="***********"
						/>
						<div
							on:click={() => (passwordVisible = !passwordVisible)}
							class="flex absolute inset-y-0 right-0 items-center pr-6 cursor-pointer"
						>
							{#if passwordVisible}
								<Eye size="20" />
							{:else}
								<EyeOff size="20" />
							{/if}
						</div>
					</div>
					<label for="passwordConfirmation" class="block mb-2 text-base">Confirm Password</label>
					<div class="relative">
						<input
							type={passwordVisible ? 'text' : 'password'}
							name="passwordConfirmation"
							id="passwordConfirmation"
							class="border border-borderColor text-sm rounded-xl block w-full py-4 px-5"
							placeholder="***********"
						/>
						<div
							on:click={() => (passwordVisible = !passwordVisible)}
							class="flex absolute inset-y-0 right-0 items-center pr-6 cursor-pointer"
						>
							{#if passwordVisible}
								<Eye size="20" />
							{:else}
								<EyeOff size="20" />
							{/if}
						</div>
					</div>

					<button
						class="mt-8 w-full bg-primary text-white font-bold text-base py-4 rounded-xl"
						disabled={!$isValid}>Login</button
					>
					<div class="flex flex-col items-center self-center mt-8 mb-4">
						<span class="text-xs md:text-base"
							>Already have an account? <a href="/login" class="font-bold text-primary underline"
								>Signup</a
							></span
						>
					</div>
				</fieldset>
			</form>
			<SocialLogin />
		</div>
	</aside>
</main>

<style lang="postcss">
	.bg {
		background-image: url('/images/register-bg.png');
	}
</style>
