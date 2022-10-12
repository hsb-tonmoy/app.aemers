<script lang="ts">
	import { CalendarDays, Clock, Map } from '$lib/components/Icons';
	export let img: string;
	export let img_alt: string;
	export let heading: string;
	export let date: string;
	export let time: string;
	export let location: string;
	export let url: string;
	export let external: boolean = false;
	export let isRegistered: boolean = false;
</script>

<div class="border border-borderColor rounded-2xl p-6">
	<div class="flex flex-col w-3/4">
		<img src={img} class="w-20 h-20 rounded-full" alt={img_alt} />
		<h6 class="text-secondary font-bold text-lg md:text-xl my-4">
			{heading}
		</h6>
		<div class="flex flex-wrap gap-y-2 gap-x-6">
			<div class="inline-flex items-center gap-x-1 text-secondary text-base">
				<span class="text-primary block w-4 h-4"><CalendarDays /></span>{date}
			</div>
			<div class="inline-flex items-center gap-x-1 text-secondary text-base">
				<span class="text-primary block w-4 h-4"><Clock /></span>{time}
			</div>
			<div class="inline-flex items-center gap-x-1 text-secondary text-base">
				<span class="text-primary block w-4 h-4"><Map /></span>{location}
			</div>
		</div>
		<a
			href={url}
			target={external ? '_blank' : '_self'}
			class="self-start {isRegistered
				? 'bg-greenSignal'
				: 'bg-primary hover:bg-primaryDarker'} text-white font-bold text-sm md:text-base px-4 py-2 mt-4 rounded-xl"
			>{isRegistered ? 'Registered!' : 'Register'}</a
		>
	</div>
</div>
