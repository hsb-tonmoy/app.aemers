<script>
	import { Notification } from '$lib/components/Icons';
	import { Dropdown } from 'flowbite-svelte';
	import NotificationItem from './NotificationItem.svelte';

	export let notifications;
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
	<ul slot="content" class="px-6 py-8">
		<h6 class="text-xl md:text-2xl text-secondary font-bold mb-6">Notifications</h6>
		<div class="flex flex-col gap-y-4">
			{#each notifications as notification}
				<NotificationItem {notification} />
			{/each}
		</div>
	</ul>
</Dropdown>
