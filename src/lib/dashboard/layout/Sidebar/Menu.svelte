<script>
	import { page } from '$app/stores';
	import { Account, Application, Home, Logout, Video } from '$lib/components/Icons';

	let menuitems = [
		{
			name: 'Home',
			icon: Home,
			link: '/'
		},
		{
			name: 'Application',
			icon: Application,
			link: '/welcome_application'
		},
		{
			name: 'Mock Interview',
			icon: Video,
			link: '/interview'
		},
		{
			name: 'Edit Profile',
			icon: Account,
			link: '/profile/edit'
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
		<a href={item.link} class="menuItem {$page.url.pathname === item.link ? 'menuItem-active' : ''}"
			><span class="w-4 h-4 md:w-7 md:h-7">
				<svelte:component this={item.icon} />
			</span> <span class="">{item.name}</span></a
		>
	{/each}
</section>

<style lang="postcss">
	.menuItem {
		@apply flex items-center gap-x-4 text-lighterText hover:text-primary text-sm md:text-base font-normal;
	}

	.menuItem-active {
		@apply font-bold text-primary;
	}
</style>
