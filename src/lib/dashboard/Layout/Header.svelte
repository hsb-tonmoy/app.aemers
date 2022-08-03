<script>
	import { page } from '$app/stores';
	import { goto } from '$app/navigation';
	import { arrow_left, question, notes, timeline, spinner } from '$lib/svg/dashboard';
	import { lifebuoy } from '$lib/svg/buoy.js';

	import { submit_identifier, current_page_title, notes_count, form_submitting } from '../stores';

	export let notes_show;
	export let timeline_show;

	$: header_width = notes_show ? 'w-full lg:w-[55%]' : 'w-full lg:w-[80%]';

	function handleSubmit() {
		let form = document.getElementById($submit_identifier);
		if (form.requestSubmit) {
			form.requestSubmit();
		} else {
			form.submit();
		}
	}
</script>

<header
	class={`flex fixed items-center justify-between px-2 md:px-6 h-24 bg-white border-b border-gray-200 z-50 transition-all ease-in-out duration-500 ${header_width}`}
>
	<div class="flex items-center gap-x-2 md:gap-x-4">
		{#if $page.url.pathname !== '/dashboard'}
			<div
				on:click={() => goto('/dashboard')}
				class="flex justify-center items-center w-12 h-8 md:w-14 md:h-10 bg-[#F8F8F8] hover:bg-gray-300 rounded-xl md:rounded-2xl cursor-pointer shadow-sm"
			>
				<span class="text-[#757D8A] font-bold w-5 h-5">{@html arrow_left}</span>
			</div>
		{/if}
		<h1 class="hidden md:block text-lg md:text-2xl text-[#404D61] font-bold">
			{$current_page_title}
		</h1>
	</div>
	<div class="flex gap-x-4">
		<div
			on:click={() => (timeline_show = !timeline_show)}
			class={`flex lg:hidden group hover:bg-accent1 justify-center items-center w-12 h-10 md:w-14 md:h-12 border ${
				timeline_show ? 'bg-accent1 border-accent1' : 'border-gray-200 hover:border-accent1'
			} rounded-lg md:rounded-xl cursor-pointer shadow-sm icons transition-all ease-in-out duration-200`}
		>
			<span
				class={`w-5 h-5 ${timeline_show ? 'text-white' : 'text-accent1 group-hover:text-white'}`}
				>{@html timeline}</span
			>
		</div>
		<button
			type="button"
			on:click={() => {
				goto('/dashboard/resource-center');
			}}
			class={`flex group justify-center items-center bg-green-600 text-white font-medium px-4 rounded-lg cursor-pointer shadow-xl hover:shadow icons transition-all ease-in-out duration-200 ${
				$page.url.pathname.includes('resource-center') ? 'shadow' : ''
			} `}
		>
			Resource Center
		</button>
		<div
			on:click={() => (notes_show = !notes_show)}
			class={`flex relative group hover:bg-[#FF5959] justify-center items-center w-12 h-10 md:w-14 md:h-12 border border-gray-200 hover:border-[#FF5959] rounded-lg md:rounded-xl cursor-pointer shadow-sm icons transition-all ease-in-out duration-200 ${
				notes_show ? 'bg-[#FF5959] border-[#FF5959]' : 'border-gray-200 hover:border-[#FF5959]'
			}`}
		>
			<span class={`group-hover:text-white w-6 h-6 ${notes_show ? 'text-white' : 'text-[#FF5959]'}`}
				>{@html notes}</span
			>

			<span
				class={`absolute -top-2 -right-2 inline-flex rounded-full w-6 h-6 md:h-7 md:w-7 ${
					notes_show ? 'bg-white border border-red-500 text-red-500' : 'bg-red-500 text-white'
				} justify-center items-center`}
				><span
					class="absolute inline-flex rounded-full w-5 h-5 md:h-6 md:w-6 bg-red-500 justify-center items-center animate-ping"
				/><span
					class="inline-flex rounded-full w-5 h-5 md:h-6 md:w-6 text-xs font-medium justify-center items-center"
					>{$notes_count}</span
				></span
			>
		</div>
		{#if $submit_identifier}
			<button
				type="button"
				on:click={handleSubmit}
				disabled={$form_submitting}
				class="gap-x-2 px-8 py-2 md:rounded-lg md:shadow shadow-accent1 hover:shadow-none bg-gradient-to-b from-accent2 to-accent1 disabled:from-accent2/60 disabled:to-accent1/60 font-medium text-sm text-white"
				>Save {#if $form_submitting} {@html spinner} {/if}
			</button>
		{/if}
	</div>
</header>
