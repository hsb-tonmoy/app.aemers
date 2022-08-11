<script>
	import { session } from '$app/stores';
	import { goto } from '$app/navigation';
	import { post } from '$lib/utils.js';

	import { notificationToast } from '$lib/NotificationToast';

	import { createForm } from 'felte';
	import { validator } from '@felte/validator-yup';
	import * as yup from 'yup';
	import YupPassword from 'yup-password';

	YupPassword(yup);

	import { login_message } from '$lib/login/stores';

	import SocialLogin from '$lib/login/SocialLogin.svelte';

	import { Eye, EyeOff } from '$lib/components/Icons';

	import { Label, Input, Button, Error } from '$lib/components/Form';

	let passwordVisible = false;

	const schema = yup.object().shape({
		email: yup
			.string()
			.email('Please enter a valid e-mail address')
			.required('Email address is required')
			.trim(),
		password: yup
			.string()
			.min(8, 'Password must be at least 8 characters long')
			.minLowercase(2, 'Password must have at least 2 lowercase characters')
			.minUppercase(1, 'Password must have at least 1 uppercase character')
			.minNumbers(1, 'Password must have at least 1 numeric character')
			.minSymbols(1, 'Password must have at least 1 symbol')
			.required('Password is required')
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
		try {
			const response = await post(`auth/login`, { email, password });

			if (
				response.non_field_errors &&
				response.non_field_errors[0] == 'Unable to log in with provided credentials.'
			) {
				notificationToast('Your email or password is incorrect. Please try again', true, 10000);
			}

			if (response.user) {
				$session.user = response.user;
				goto('/');
			}
		} catch (e) {
			console.log(e);
			notificationToast('Internal Server Error. Please try again later', true, 10000);
		}
	}
</script>

<svelte:head>
	<title>app.aemers.com - Login</title>
</svelte:head>

<main class="flex flex-wrap flex-1">
	<aside class="flex justify-center items-center w-full md:w-3/5 xl:w-3/4">
		<div class="flex flex-col justify-center px-20 xl:px-0 xl:w-1/3">
			<h2 class="text-3xl font-bold">Log in to your Account</h2>
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
				<fieldset class="flex flex-col mt-8 border-b border-dividerColor">
					<div class="mb-8">
						<Label for="email" label="Email" />
						<Input
							id="email"
							name="email"
							type="email"
							placeholder="example@example.com"
							error={$errors.email}
						/>
						{#if $errors.email}
							<Error message={$errors.email} />
						{/if}
					</div>
					<Label for="password" label="Password" />
					<div class="relative">
						<Input
							id="password"
							name="password"
							type={passwordVisible ? 'text' : 'password'}
							placeholder="***********"
							error={$errors.password}
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
					{#if $errors.password}
						<Error classes="self-start" message={$errors.password} />
					{/if}

					<Button type="submit" text="Login" disabled={!$isValid} classes="mt-4 py-4 w-full" />

					<div class="flex flex-col items-center self-center mt-8 mb-4">
						<span class="text-xs md:text-base"
							>Don't have an account? <a href="/register" class="font-bold text-primary underline"
								>Signup</a
							></span
						>
						<span class="text-xs md:text-base"
							><a href="/login/forgot" class="font-bold text-primary underline">Forgot password?</a
							></span
						>
					</div>
				</fieldset>
			</form>
			<SocialLogin />
		</div>
	</aside>
	<aside class="hidden md:block bg bg-cover bg-center bg-no-repeat w-full md:w-2/5 xl:w-1/4" />
</main>

<style lang="postcss">
	.bg {
		background-image: url('/images/login-bg.png');
	}
</style>
