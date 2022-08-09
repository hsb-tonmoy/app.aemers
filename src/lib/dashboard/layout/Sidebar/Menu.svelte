<script>
	import { Home, Application, Video, Account, Logout } from '$lib/components/Icons';

	let menuitems = [
		{
			name: 'Home',
			icon: Home,
			link: '/'
		},
		{
			name: 'Application',
			icon: Application,
			link: '/application'
		},
		{
			name: 'Mock Interview',
			icon: Video,
			link: '/interview'
		},
		{
			name: 'Edit Profile',
			icon: Account,
			link: '/account'
		},
		{
			name: 'Logout',
			icon: Logout,
			link: '/logout'
		}
	];
</script>

<section id="menu" class="flex flex-col gap-y-10">
	{#each menuitems as item}
		<a href={item.link} class="menuItem"
			><svelte:component this={item.icon} size="28" /> <span class="">{item.name}</span></a
		>
	{/each}
</section>

<style lang="postcss">
	.menuItem {
		@apply flex items-center gap-x-4 text-lighterText hover:text-primary text-base font-normal;
	}

	.menuItem-active {
		@apply text-primary;
	}
</style>
