<script lang="ts">
	export let type: string = 'text';
	export let name: string;
	export let id: string;
	export let classes: string;
	export let placeholder: string;
	export let error: boolean = false;
</script>

<input
	{type}
	{name}
	{id}
	class={`form-input border border-borderColor focus:border-primary focus:ring focus:ring-primary ${
		error ? 'border-red-600 focus:border-red-600 focus:ring-red-600' : ''
	} text-sm rounded-xl block w-full py-4 px-5 ${classes}`}
	{placeholder}
/>
