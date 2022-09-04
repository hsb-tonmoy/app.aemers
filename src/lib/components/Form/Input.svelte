<script lang="ts">
	export let type: string = 'text';
	export let name: string;
	export let id: string;
	export let classes: string = '';
	export let placeholder: string;
	export let touched: boolean = false;
	export let error: boolean = false;
</script>

<input
	{type}
	{name}
	{id}
	class={`form-input border border-borderColor focus:border-primary focus:ring focus:ring-primary ${
		error ? 'border-red-600 focus:border-red-600 focus:ring-red-600' : ''
	} ${
		touched && !error ? 'border-2 border-greenSignal ring-greenSignal' : ''
	} text-sm rounded-xl block py-4 px-5 ${classes}`}
	{placeholder}
/>
