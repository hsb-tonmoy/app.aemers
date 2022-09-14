<script>
	import { goto, invalidateAll } from '$app/navigation';
	import { Button } from '$lib/components/Form';
	import { application_status } from '$lib/data/stores';
	import { notificationToast } from '$lib/NotificationToast';
	import { useMutation } from '@sveltestack/svelte-query';

	const start = useMutation(
		() => {
			return fetch('/application/submit', {
				method: 'PATCH',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify({
					application_started: true
				})
			});
		},
		{
			onSuccess: async (data, variables, context) => {
				if (data.ok) {
					await invalidateAll();
					goto('/application/file_opening');
				} else {
					console.log(await data.json());
					notificationToast('Something went wrong. Please contact support@aemers.com');
				}
			}
		}
	);

	async function handleStart() {
		if (!$application_status.application_started) {
			$start.mutate();
		} else {
			goto('/application/file_opening');
		}
	}
</script>

<div
	class="flex flex-col items-center justify-center bg-white rounded-2xl px-10 py-12 md:px-16 md:py-20"
>
	<h6 class="text-secondary text-3xl font-bold mb-2">Welcome to the</h6>
	<h2 class="text-primary font-bold text-6xl mb-4">Application Process</h2>
	<p class="text-lighterText text-sm leading-relaxed mb-6">
		Get one step closer to achieving your dream. To learn more about the application process, watch
		the video!
	</p>
	<Button
		on:click={handleStart}
		loading={$start.isLoading}
		type="button"
		text={$application_status.application_started ? 'Continue...' : 'Start Now'}
		classes="py-3 px-10 mb-8"
	/>
	<img src="/images/video.png" alt="Application Process Video" />
</div>
