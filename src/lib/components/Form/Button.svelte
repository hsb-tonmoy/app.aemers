<script lang="ts">
	export let text: string = '';
	export let type: string = 'submit';
	export let classes: string = '';
	export let disabled: boolean = false;
</script>

<button
	on:click
	{disabled}
	{type}
	class={`inline-flex items-center justify-center bg-primary disabled:bg-borderColor text-white font-bold text-base rounded-xl ${classes}`}
	>{text} <slot />
</button>
