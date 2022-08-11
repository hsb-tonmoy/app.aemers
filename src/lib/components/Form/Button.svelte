<script lang="ts">
	export let text: string = 'Submit';
	export let type: string = 'submit';
	export let classes: string = '';
	export let disabled: boolean = false;
</script>

<button
	on:click
	{disabled}
	{type}
	class={`bg-primary disabled:bg-borderColor text-white font-bold text-base rounded-xl ${classes}`}
	>{text}</button
>
