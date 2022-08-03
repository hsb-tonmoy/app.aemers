<script>
	import { fly } from 'svelte/transition';

	export let timeline_show;
	export let progress;
	import UserProfile from './UserProfile.svelte';
	import Timeline from './Timeline/Timeline.svelte';
</script>

<aside
	in:fly={{ x: -200, duration: 500 }}
	out:fly={{ x: -200, duration: 500 }}
	class="left-sidebar hidden lg:flex"
>
	<UserProfile />
	<Timeline student_progress={progress} />
</aside>

{#if timeline_show}
	<aside
		in:fly={{ x: -200, duration: 500 }}
		out:fly={{ x: -200, duration: 500 }}
		class="left-sidebar flex lg:hidden"
	>
		<UserProfile />
		<Timeline student_progress={progress} />
	</aside>
{/if}

<style lang="postcss">
	.left-sidebar {
		background-image: linear-gradient(-20deg, #f1f6f9 0%, #f1f6f9 49%, #f7f3f6 100%);
		background-repeat: no-repeat;
		background-attachment: fixed;
		background-size: cover;
		@apply flex-col fixed left-0 z-50 overflow-y-auto items-center h-full mt-24 lg:mt-0 w-11/12 md:w-3/5 lg:w-[20%] py-9 px-4 2xl:px-10 border-r border-gray-200;
	}
</style>
