<script>
	import { Notification } from '$lib/components/Icons';
	import { useQuery } from '@sveltestack/svelte-query';
	import { Dropdown } from 'flowbite-svelte';
	import NotificationItem from './NotificationItem.svelte';

	export let notifications;

	const notificationQuery = useQuery('notifications', async () => {
		const res = await fetch('/notifications');
		const data = await res.json();
		if (res.ok) {
			return data;
		}
	});

	async function markAllAsRead() {
		const res = await fetch('/notifications/?markAsRead=true');
		if (res.ok) {
			notifications.forEach((notification) => {
				notification.unread = false;
			});
		} else {
			console.log(await res.json());
		}
	}
</script>

<Dropdown label="Notifications" class="w-full rounded-none">
	<div slot="trigger" class="inline-flex items-center">
		<button
			type="button"
			id="notification"
			class="text-secondary w-6 h-6 md:w-10 md:h-10 focus:ring-0 focus:outline-none"
		>
			<Notification />
		</button>
	</div>
	<ul slot="content" class="flex flex-col px-6 py-8">
		<div class="flex justify-between items-center">
			<h6 class="text-xl md:text-2xl text-secondary font-bold">Notifications</h6>
			{#if notifications.length > 0}
				<button
					on:click={markAllAsRead}
					class="text-primary font-bold underline hover:no-underline hover:text-primaryDarker"
					>Mark all as read</button
				>
			{/if}
		</div>
		<div class="h-px w-full bg-gray-200 mb-6 mt-2" />

		<div class="flex flex-col gap-y-4">
			{#if notifications.length > 0}
				{#each notifications as notification}
					<NotificationItem {notification} />
				{/each}
			{:else}
				<div class="text-center text-sm md:text-base text-lighterText">
					No new notifications to show
				</div>
			{/if}
		</div>
		{#if notifications.length > 0}
			<div class="h-px w-full bg-gray-200" />
		{/if}
		<button
			class="mt-6 self-center text-sm bg-primary hover:bg-primaryDarker text-white font-bold px-4 py-2 rounded-3xl"
			>View all notifications</button
		>
	</ul>
</Dropdown>
