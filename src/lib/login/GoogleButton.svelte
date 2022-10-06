<script>
	const GOOGLE_CLIENT_ID = import.meta.env.VITE_GOOGLE_CLIENT_ID;
	const GOOGLE_REDIRECT_URI = import.meta.env.VITE_GOOGLE_REDIRECT_URI;

	import { Google } from '$lib/components/Icons';

	const openGoogleLoginPage = () => {
		const googleAuthUrl = 'https://accounts.google.com/o/oauth2/v2/auth';
		const redirectUri = 'login/google';

		const scope = [
			'https://www.googleapis.com/auth/userinfo.email',
			'https://www.googleapis.com/auth/userinfo.profile'
		].join(' ');

		const params = {
			response_type: 'code',
			client_id: GOOGLE_CLIENT_ID,
			redirect_uri: `${GOOGLE_REDIRECT_URI}/${redirectUri}`,
			prompt: 'select_account',
			access_type: 'offline',
			scope
		};

		const urlParams = new URLSearchParams(params).toString();

		window.location = `${googleAuthUrl}?${urlParams}`;
	};
</script>

<button
	on:click={openGoogleLoginPage}
	type="button"
	class="flex gap-x-2 items-center text-secondary text-lg font-bold border border-borderColor rounded-xl px-10 py-3"
	><span class="block w-4 h-4"><Google /></span>Google</button
>

<style lang="postcss">
	.google {
		box-shadow: 0px 0px 2.41919px rgba(0, 0, 0, 0.084), 0px 2.41919px 2.41919px rgba(0, 0, 0, 0.168);
		@apply transition-all ease-in-out duration-300;
	}

	.google:hover {
		box-shadow: 0px 0px 14.5152px rgba(66, 133, 244, 0.7);
		border-radius: 4.83838px;
	}
</style>
