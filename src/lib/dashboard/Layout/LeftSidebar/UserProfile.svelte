<script>
	import { session } from '$app/stores';

	import UserDropDown from './UserDropDown.svelte';
</script>

<div class="profile relative flex items-center mb-14">
	<div class="profile-image">
		<img
			class="w-16 h-16 object-cover rounded-full border border-white"
			src={$session.user && $session.user.profile_pic}
			alt="profile_pic"
		/>
	</div>
	<div class="flex flex-col justify-center ml-4 mr-10">
		<span class="text-[#757D8A] text-base">Welcome back,</span>
		<span class="text-[#5A6474] font-medium text-xl"
			>{$session.user && $session.user.first_name}</span
		>
	</div>
	<UserDropDown />
</div>
