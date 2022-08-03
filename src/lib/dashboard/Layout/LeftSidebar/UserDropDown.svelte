<script>
	import { session } from '$app/stores';
	import { post } from '$lib/utils.js';
	import { cog } from '$lib/svg/dashboard';
	let dropdown_hide = true;

	async function logout() {
		await post(`/auth/logout`);

		$session.user = null;
	}
</script>

<div class="flex justify-center">
	<div>
		<div class="relative">
			<div
				on:click={() => {
					dropdown_hide = !dropdown_hide;
				}}
				class="flex justify-center items-center group w-16 h-12 bg-white hover:bg-heavyPurple border border-[#E1E3E6] hover:border-lightPurple rounded-lg cursor-pointer shadow-sm ease-in-out transition-all duration-300"
			>
				<span class="text-[#757D8A] group-hover:text-white">{@html cog}</span>
			</div>
			<ul class:hidden={dropdown_hide} class="userdropdown_list">
				<li>
					<span on:click={logout} class="dropdown-item">Logout</span>
				</li>
			</ul>
		</div>
	</div>
</div>

<style lang="postcss">
	.userdropdown_list {
		@apply min-w-max
          absolute
          bg-white
          text-base
          z-50
          float-left
          py-2
          list-none
          text-left
          rounded-lg
          shadow-lg
          mt-1
          m-0
          bg-clip-padding
          border-none;
	}

	.dropdown-item {
		@apply text-sm
              py-2
              px-4
              font-normal
              block
              w-full
              whitespace-nowrap
              bg-transparent
              text-gray-700
              hover:bg-gray-100
							cursor-pointer;
	}
</style>
