<script>
	export let date = '';
	export let id = '';

	function convertDate(str) {
		// Convert date string to long date format
		let date = new Date(str);
		let options = { year: 'numeric', month: 'long', day: 'numeric' };
		return date.toLocaleDateString('en-US', options);
	}

	function convertTime(str) {
		// Convert time string to 12 hour format
		let time = new Date(str);
		let options = { hour: 'numeric', minute: 'numeric', hour12: true };
		return time.toLocaleTimeString('en-US', options);
	}
</script>

<div class="flex flex-col border border-borderColor rounded-xl px-6 py-4">
	<span class="font-bold text-lg">{convertDate(date)}</span>
	<span class="text-lighterText text-base mt-1">{convertTime(date)}</span>
	<button
		class="self-start border border-primary text-primary hover:bg-primary hover:text-white text-sm font-bold px-3 py-1 rounded-2xl mt-4"
		><a href="/mock_visa_interview/free/{id}/">View Recordings</a></button
	>
</div>
