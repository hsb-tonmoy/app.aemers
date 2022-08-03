<script context="module">
	export async function load({ params, session, fetch }) {
		if (session.user) {
			return {
				status: 302,
				redirect: '/dashboard'
			};
		}

		const key = params.key;

		const res = await fetch('/auth/verify-email', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				key
			})
		});

		if (res.ok) {
			return {
				props: {
					message: 'success'
				}
			};
		}

		return {
			props: {
				message: 'invalid'
			}
		};
	}
</script>

<script>
	import { onMount } from 'svelte/internal';
	import { login_message } from '$lib/layout/stores';
	import { goto } from '$app/navigation';
	import { createForm } from 'felte';
	import { validator } from '@felte/validator-yup';
	import * as yup from 'yup';

	export let message;

	let resend_email;

	onMount(() => {
		if (message === 'success') {
			$login_message.type = 'success';
			$login_message.message = 'Your account has been verified. You can login now.';
			goto('/login');
		}
	});

	const schema = yup.object({
		email: yup
			.string()
			.email('Please enter a valid email address')
			.required('Email Address is required')
	});

	const { form, errors } = createForm({
		extend: validator({ schema }),
		onSubmit(values, context) {
			handleSubmit(JSON.stringify(values));
		}
	});

	async function handleSubmit(values) {
		const res = await fetch('/auth/resend-verification', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: values
		});

		if (res.ok) {
			resend_email =
				'Verification email sent! If you do not receive the email, please check your spam folder.';
		} else {
			resend_email = 'Error sending verification email.';
			console.log(res);
		}
	}
</script>

<div class="flex flex-col justify-center items-center w-full h-screen">
	{#if message === 'invalid'}
		<h2
			class="animate__animated animate__slideInLeft text-lg md:text-xl lg:text-3xl text-lightText text-center font-semibold drop-shadow"
			style="--animate-duration: 800ms"
		>
			Looks like your verification email has expired!
		</h2>

		<span class="text-sm md:text-base lg:text-lg text-center font-medium"
			>Enter your email address here to receive another verification email</span
		>
		<form class="mt-6 flex justify-center w-full" use:form>
			<div class="relative flex items-stretch w-3/4 md:w-2/4 lg:w-1/5 mb-3">
				<input
					id="email"
					name="email"
					type="email"
					placeholder="Email Address"
					class="form-input p-3 h-10 placeholder:text-accent1 relative bg-white text-base border-0 border-b border-accent1 focus:border-0 focus:border-b-2 focus:outline-none w-full pr-10"
				/>
				<button
					class="z-10 h-full leading-snug font-normal absolute text-center text-blueGray-300 rounded text-accent1 text-base items-center justify-center  right-0 pr-3 py-3"
				>
					<svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" viewBox="0 0 24 24">
						<path fill="currentcolor" d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
					</svg>
				</button>
			</div>
		</form>
		{#if resend_email}
			<span class="text-green-600 text-center text-sm">{resend_email}</span>
		{/if}
	{/if}
</div>
<svelte:head>
	<title>app.mrashid.net - Verification</title>
</svelte:head>
