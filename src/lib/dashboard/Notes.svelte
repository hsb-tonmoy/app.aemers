<script>
	import { page } from '$app/stores';

	import TimeAgo from 'javascript-time-ago';
	import en from 'javascript-time-ago/locale/en.json';
	TimeAgo.addLocale(en);
	const timeAgo = new TimeAgo('en-US');

	import { notes_count } from './stores';

	export let notes = [];

	let notes_to_display = [];

	$: notes_to_display = notes.filter((e) => $page.url.pathname.includes(e.category.slug));

	$: $notes_count = notes_to_display.length;

	function priorityColor(priority) {
		switch (priority) {
			case 1:
				return 'bg-gray-200';
			case 2:
				return 'bg-amber-600';
			case 3:
				return 'bg-red-400';
			case 4:
				return 'bg-red-600';
			default:
				return 'bg-gray-200';
		}
	}
</script>

<h3 class="text-2xl text-[#404D61] font-bold">Consultant Notes</h3>
<div class="relative pt-12 flex flex-col min-w-0 break-words w-full mb-6 rounded-lg">
	<div class="px-4">
		{#if notes_to_display.length > 0}
			<ol class="relative border-l border-gray-200 dark:border-gray-700 ">
				{#each notes_to_display as note}
					<li class="mb-10 ml-6">
						<div
							class={`flex absolute -left-3 justify-center items-center w-6 h-6 ${priorityColor(
								note.priority
							)} rounded-full ring-8 ring-white`}
						>
							<span />
						</div>
						<div class={`px-2 bg-white rounded-lg shadow-sm dark:bg-gray-700 `}>
							<div class="justify-between items-center sm:flex">
								<time
									class="mb-1 text-xs font-normal text-gray-400 sm:order-last sm:mb-0"
									class:line-through={note.complete}
									>{timeAgo.format(new Date(note.date_added))}</time
								>
								<div
									class="text-sm font-normal decoration-dotted text-stone-800 lex dark:text-gray-300"
									class:line-through={note.complete}
								>
									{note.title}
								</div>
							</div>
							{#if note.description}
								<div
									class="p-3 mt-3 text-xs italic font-normal text-gray-800 bg-gray-50 rounded-lg border border-gray-200 dark:bg-gray-600 dark:border-gray-500 dark:text-gray-300"
									class:line-through={note.complete}
								>
									{note.description}
								</div>
							{/if}
						</div>
					</li>
				{/each}
			</ol>
		{:else}
			<div class="flex items-center justify-center">
				<div class="text-center text-gray-600 text-sm">No notes to display</div>
			</div>
		{/if}
	</div>
</div>
