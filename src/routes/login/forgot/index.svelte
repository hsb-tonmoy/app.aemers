<script>
	import { goto } from '$app/navigation';
	import { createForm } from 'felte';
	import { validator } from '@felte/validator-yup';
	import * as yup from 'yup';

	import { header_bg } from '$lib/login/stores';

	import { Cross } from '$lib/components/Icons';

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

	$header_bg = '#F9F6FF';
</script>

<svelte:head>
	<title>app.aemers.com - Forgot Password</title>
</svelte:head>

<section class="flex flex-1 justify-center items-center bg-bgColor">
	<div class="relative flex flex-col p-12 md:px-40 md:py-32 lg:px-60 lg:py-52 bg-white rounded-3xl">
		<div
			on:click={() => goto('/login')}
			class="absolute right-8 top-10 flex justify-center items-center bg-borderColor rounded-full cursor-pointer"
		>
			<span class="block p-1 w-8 h-8 md:w-12 md:h-12"><Cross /></span>
		</div>
		<h2 class="text-3xl font-bold">Forgot password?</h2>
		<p class="mt-2 text-sm text-lightText leading-normal">
			Don’t worry! It’s really simple to reset your password in a few steps!
		</p>

		{#if success}
			<div class="mt-12">
				<span class="text-green-600 text-sm text-center font-medium"
					>A password reset link has been sent to the email address.</span
				>
			</div>
		{/if}
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

				<button
					class="w-full bg-primary text-white font-bold text-base py-4 rounded-xl"
					disabled={!$isValid}>Submit</button
				>
			</fieldset>
		</form>
	</div>
</section>
