<script>
	import { article } from '$lib/svg/knowledgebase';
</script>

<div class="flex flex-wrap gap-y-12 w-full">
	<div class="flex flex-col w-1/3">
		<h6 class="text-2xl text-lightText font-medium mb-6">CommonApp Application</h6>
		<div class="articles ml-4">
			<ul class="flex flex-col gap-y-4">
				<li class="">
					<a href="knowledgebase/fill-up-activities/"
						><span class="block w-4 h-4">{@html article}</span> How to fill-up the Activities section?</a
					>
				</li>
				<li class="">
					<span class="block w-4 h-4">{@html article}</span> Which essay prompt to choose?
				</li>
			</ul>
		</div>
	</div>
	<div class="flex flex-col w-1/3">
		<h6 class="text-2xl text-lightText font-medium mb-6">Visa Interview</h6>
		<div class="articles ml-4">
			<ul class="flex flex-col gap-y-4">
				<li class="">
					<span class="block w-4 h-4">{@html article}</span> How to fill-up the Activities section?
				</li>
				<li class="">
					<span class="block w-4 h-4">{@html article}</span> Which essay prompt to choose?
				</li>
			</ul>
		</div>
	</div>
	<div class="flex flex-col w-1/3">
		<h6 class="text-2xl text-lightText font-medium mb-6">I-20 Reception</h6>
		<div class="articles ml-4">
			<ul class="flex flex-col gap-y-4">
				<li class="">
					<span class="block w-4 h-4">{@html article}</span> How to fill-up the Activities section?
				</li>
				<li class="">
					<span class="block w-4 h-4">{@html article}</span> Which essay prompt to choose?
				</li>
			</ul>
		</div>
	</div>
	<div class="flex flex-col w-1/3">
		<h6 class="text-2xl text-lightText font-medium mb-6">College Shortlisting</h6>
		<div class="articles ml-4">
			<ul class="flex flex-col gap-y-4">
				<li class="">
					<span class="block w-4 h-4">{@html article}</span> How to fill-up the Activities section?
				</li>
				<li class="">
					<span class="block w-4 h-4">{@html article}</span> Which essay prompt to choose?
				</li>
			</ul>
		</div>
	</div>
</div>

<style lang="postcss">
	.articles li,
	a {
		@apply flex gap-x-1 items-center font-medium text-base text-[#404D61];
	}
</style>
