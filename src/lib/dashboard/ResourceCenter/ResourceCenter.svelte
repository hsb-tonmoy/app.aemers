<script>
	import {
		external,
		graduation,
		trend,
		letter_g,
		scholarship,
		bso
	} from '$lib/svg/resource-center';
</script>

<section class="grid gap-x-5 gap-y-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-9">
	<a class="col-span-5 md" href="/dashboard/resource-center/knowledgebase">
		<div class="card knowledge">
			<div class="card-icon bg-[#49e289]">
				<span class="card-icon-svg text-white">{@html graduation}</span>
			</div>
			<h3 class="card-title">Knowledgebase Central</h3>
			<p class="card-text">Find answers to common questions.</p>
		</div>
	</a>
	<a class="col-span-4" href="/dashboard/resource-center/happening-now">
		<div class="card happening">
			<div class="card-icon bg-[#e2498a]">
				<span class="card-icon-svg text-white">{@html trend}</span>
			</div>
			<h3 class="card-title">Happening Now</h3>
			<p class="card-text">
				Stay up-to-date with everything that's happening in higher study abroad.
			</p>
		</div>
	</a>
	<a class="col-span-3" target="_blank" href="https://grecdatabase.com/">
		<div class="card grecdb">
			<div class="external absolute top-3 right-3">
				<span class="block w-4 h-4">{@html external}</span>
			</div>
			<div class="card-icon bg-[#5849e2]">
				<span class="card-icon-svg text-white">{@html letter_g}</span>
			</div>
			<h3 class="card-title">GrecDatabase</h3>
			<p class="card-text">
				Find universities, faculty and peers at your desired destination for higher study abroad.
			</p>
		</div>
	</a>
	<a class="col-span-3" target="_blank" href="https://grecdatabase.com/">
		<div class="card scholarships">
			<div class="card-icon bg-[#b4e249]">
				<span class="card-icon-svg text-white">{@html scholarship}</span>
			</div>
			<h3 class="card-title">Scholarships & Openings</h3>
			<p class="card-text">
				Find universities, faculty and peers at your desired destination for higher study abroad.
			</p>
		</div>
	</a>
	<a class="col-span-3" target="_blank" href="https://grecdatabase.com/">
		<div class="card bso">
			<div class="card-icon bg-[#49a5e2]">
				<span class="card-icon-svg text-white">{@html bso}</span>
			</div>
			<h3 class="card-title">BSOs & BSAs</h3>
			<p class="card-text">
				Find universities, faculty and peers at your desired destination for higher study abroad.
			</p>
		</div>
	</a>
</section>

<style lang="postcss">
	.card {
		@apply relative flex flex-col justify-end h-64 px-8 py-6 bg-white transition-all ease-in-out duration-500;
		@apply hover:shadow-md;
	}
	.card-icon {
		@apply flex justify-center items-center w-16 h-16 rounded-full;
	}
	.card-icon-svg {
		@apply block h-8 w-8;
	}
	.card-title {
		@apply mt-6 font-circular font-medium text-3xl;
	}
	.card-text {
		@apply mt-2 text-sm text-neutral-500;
	}
	.knowledge {
		box-shadow: 8px 8px 20px 0px rgba(73, 226, 137, 0.2);
		border-width: 0px 0px 1px 0px;
		border-color: #49e289;
	}
	.happening {
		box-shadow: 8px 8px 20px 0px rgba(226, 73, 137, 0.2);
		border-width: 1px 0px 0px 0px;
		border-color: #e2498a;
	}
	.grecdb {
		box-shadow: 8px 8px 20px 0px rgba(88, 73, 226, 0.2);
		border-width: 0px 0px 1px 0px;
		border-color: #5849e2;
	}

	.scholarships {
		box-shadow: 8px 8px 20px 0px rgba(180, 226, 73, 0.2);
		border-width: 1px 0px 0px 0px;
		border-color: #b4e249;
	}

	.bso {
		box-shadow: 8px 8px 20px 0px rgba(73, 165, 226, 0.2);
		border-width: 0px 0px 1px 0px;
		border-color: #49a5e2;
	}
</style>
