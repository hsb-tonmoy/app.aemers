<div class="notes flex flex-col gap-y-6 mt-8">
	{#if notes.length > 0}
		{#each notes as note}
			{#if !note.interal}
				{#if !note.complete}
					<div class="note flex p-3 shadow-md shadow-gray-100 rounded-md gap-x-2">
						<span class=" bg-gray-200 w-5 h-5 p-1 text-white rounded-md" /><span
							class="inline-flex justify-between w-full text-lightText text-sm"
							><span class="inline-flex flex-col w-3/4"
								>{note.title}
								<span class="description">
									<p
										class="p-3 mt-3 text-xs italic font-normal text-gray-800 bg-gray-50 rounded-lg border border-gray-200"
									>
										{note.description}
									</p>
								</span></span
							>
							<span class="text-xs text-gray-500 w-1/4"
								>{timeAgo.format(new Date(note.date_modified))}</span
							></span
						>
					</div>
				{:else}
					<div class="note flex items-center p-3 shadow-md shadow-gray-100 rounded-md gap-x-2">
						<span class="bg-green-600 w-5 h-5 p-1 text-white rounded-md">{@html correct}</span><span
							class="inline-flex justify-between w-full text-gray-400 text-sm line-through decoration-red-700 decoration-2"
							><span class="">{note.title}</span>
							<span class="text-xs">{timeAgo.format(new Date(note.date_modified))}</span></span
						>
					</div>
				{/if}
			{/if}
		{/each}
	{:else}
		<div class="flex items-center justify-center">
			<div class="text-center text-gray-600 text-sm">No notes to display</div>
		</div>
	{/if}
</div>
