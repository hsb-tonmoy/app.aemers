<script>
	import { session } from '$app/stores';
	import { goto } from '$app/navigation';
	import { post } from '$lib/utils.js';

	import { notificationToast } from '$lib/NotificationToast';

	import { createForm } from 'felte';
	import { validator } from '@felte/validator-yup';
	import * as yup from 'yup';

	import { login_message } from '$lib/login/stores';

	import SocialLogin from '$lib/login/SocialLogin.svelte';

	import { visibility } from '$lib/svg/form-icons';

	const schema = yup.object().shape({
		email: yup
			.string()
			.email('Please enter a valid e-mail address')
			.required('Email address is required')
			.trim(),
		password: yup.string().required('Password is required')
	});

	const { form, data, errors, isValid } = createForm({
		initialValues: {
			email: '',
			password: ''
		},
		extend: validator({ schema }),
		onSubmit: (values, context) => {
			handleLogin(values.email, values.password);
		}
	});

	async function handleLogin(email, password) {
		const response = await post(`auth/login`, { email, password });

		if (
			response.non_field_errors &&
			response.non_field_errors[0] == 'Unable to log in with provided credentials.'
		) {
			notificationToast('Your email or password is incorrect. Please try again', true, 10000);
		}

		if (response.user) {
			$session.user = response.user;
			goto('/dashboard');
		}
	}
</script>

<svelte:head>
	<title>app.aemers.com - Login</title>
</svelte:head>

<main class="flex flex-wrap flex-1">
	<aside class="flex justify-center items-center w-full lg:w-3/4">
		<div class="flex flex-col justify-center w-1/3">
			<h2 class="text-3xl font-semibold">Log in to your Account</h2>
			<p class="mt-2 text-sm text-lightText leading-normal">
				Welcome back! Enter your email and password here to log in to your account!
			</p>
			{#if $login_message.message}
				<div class="errors mt-12">
					{#if $login_message.type === 'error'}
						<span class="text-red-600 text-sm text-center font-medium"
							>{$login_message.message}</span
						>
					{/if}
					{#if $login_message.type === 'success'}
						<span class="text-green-600 text-sm text-center font-medium"
							>{$login_message.message}</span
						>
					{/if}
				</div>
			{/if}
			<form use:form>
				<fieldset class="flex flex-col mt-8">
					<div class="flex flex-col gap-y-8">
						<label class="block">
							<span class="label-style">Email Address</span>
							<input type="email" name="email" id="email" class="form-input input-styles" />
						</label>

						<label class="block relative">
							<span class="label-style">Password</span>
							<input
								type="password"
								name="password"
								id="password"
								class="form-input input-styles"
							/>
							<span class="absolute right-0 w-5 h-5">{@html visibility}</span>
						</label>
					</div>
					<a href="/login/forgot" class="self-end text-sm mt-2 mb-8 text-lightText hover:text-black"
						>Forgot password?</a
					>
					<button
						class="px-6 lg:px-12 py-2 lg:py-4 ml-2 lg:ml-0 bg-accent1 hover:bg-accent2 disabled:bg-thinAccent text-white font-light text-sm uppercase"
						disabled={!$isValid}>Login</button
					>
					<span class="self-center text-xs md:text-sm mt-4 text-gray-600"
						>Don't have an account? Go ahead and <a
							href="/register"
							class="font-medium text-lightText hover:underline">Sign-up</a
						></span
					>
					<span class="self-center flex gap-x-4 items-center text-xs md:text-sm mt-4 text-gray-600"
						><a href="/privacy-policy" class="font-medium text-lightText hover:underline"
							>Privacy Policy</a
						><a href="/terms-conditions" class="font-medium text-lightText hover:underline"
							>Terms & Conditions</a
						></span
					>
				</fieldset>
			</form>
		</div>
	</aside>
	<aside class="bg bg-cover bg-center bg-no-repeat w-full lg:w-1/4" />
</main>

<style lang="postcss">
	.bg {
		background-image: url('/images/login-bg.png');
	}

	.input-styles {
		@apply mt-2
							px-6
							py-3
              block
              w-full
              rounded-xl
              border-borderColor
              shadow-sm
              focus:border-primary;
	}

	.label-style {
		@apply text-sm;
	}
</style>
