<script>
	import { goto } from '$app/navigation';
	import { Cross, Trash } from '$lib/components/Icons';

	export let data;
</script>

<div class="relative bg-white rounded-2xl px-10 py-12 md:px-16 md:py-20">
	<button
		on:click={() => goto('/')}
		class="absolute right-8 top-10 flex justify-center items-center bg-borderColor rounded-full cursor-pointer"
	>
		<span class="block p-1 w-8 h-8 md:w-12 md:h-12"><Cross /></span>
	</button>
	<h6 class="text-3xl font-bold ml-4 mb-6">Personal Info</h6>
	<div class="flex items-center gap-x-10 mb-10">
		<div class="avatar">
			<img
				class="w-48"
				src={`https://ui-avatars.com/api/?name=${data.user.first_name}+${data.user.last_name}
				}&background=FFA26D&format=svg&rounded=true&bold=true`}
				alt={data.user.first_name + ' ' + data.user.last_name}
			/>
		</div>
		<div class="buttons flex flex-col gap-y-4 font-bold">
			<button
				class="bg-primary hover:bg-primaryDarker border border-primary text-white rounded-xl px-4 py-3"
				>Change Photo</button
			>
			<button
				class="inline-flex justify-center items-center bg-white hover:bg-red-600 border border-red-600 text-red-600 hover:text-white rounded-xl px-4 py-3"
				><span class="block w-4 h-4 mr-2"><Trash /></span>Remove</button
			>
		</div>
	</div>
</div>
