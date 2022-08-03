<script>
	export let route, title, icon, status;

	import { current_page } from '$lib/dashboard/stores';

	let status_color_classes = 'border-[#C4C6CC] bg-[#F5F7FB]';

	$: {
		if (status === 1) {
			status_color_classes = 'border-[#C4C6CC] bg-[#F5F7FB]';
		} else if (status === 2) {
			status_color_classes = 'bg-amber-500 border-amber-500';
		} else if (status === 3) {
			status_color_classes = 'bg-emerald-500 border-green-600';
		}
	}
</script>

<a
	href={'/dashboard/' + route}
	class={`flex group justify-between items-center ${
		route.includes($current_page) ? 'bg-white' : 'bg-transparent'
	} hover:bg-white py-2 px-3 rounded-md transition-all duration-800 ease-in-out`}
>
	<div
		class={`timeline-title relative font-light text-base md:text-sm 2xl:text-base ${
			route.includes($current_page) ? 'text-black' : 'text-gray-500'
		} group-hover:text-black transition-all duration-300 ease-in-out`}
	>
		<div class="inline-flex gap-x-3 items-center drop-shadow-sm ">
			<span class="w-5 h-5">{@html icon}</span>
			{title}
		</div>
	</div>
	<div
		class={`timeline-status relative w-5 h-5 md:w-3 md:h-3 2xl:w-5 2xl:h-5 border ${status_color_classes} rounded-full `}
	>
		<span class="status" />
	</div>
</a>

<style>
	:root {
		--subdued-color: rgb(87 83 78);
		--text-color: hsl(200, 100%, 20%);
		--avatar-size: 2.25rem;
		--status-size: 1.25rem;
		--grid-gap: 1.5rem;
		--group-header-spacing: 1rem;
	}

	.timeline-status::after {
		content: '';
		position: absolute;
		background-color: #e3e5e9;
		width: 1px;
		left: 0;
		right: 0;
		margin: 0 auto;
		top: var(--status-size);
		bottom: calc(var(--grid-gap) * -4);
	}

	.timeline-status::after:nth-last-child(1) {
		bottom: calc(var(--grid-gap) * 0);
	}
</style>
