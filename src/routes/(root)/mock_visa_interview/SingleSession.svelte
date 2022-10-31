<script>
	export let date = '02 July, 2022';
	export let id = '1';
</script>

<div class="flex flex-col border border-borderColor rounded-xl px-6 py-4">
	<span class="font-bold text-lg">{date}</span>
	<span class="text-lighterText text-sm mt-1">Free Mock Test</span>
	<button
		class="self-start border border-primary text-primary hover:bg-primary hover:text-white text-sm font-bold px-3 py-1 rounded-2xl mt-4"
		><a href="/mock_visa_interview/free/{id}/">View Recordings</a></button
	>
</div>
