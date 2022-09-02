<script>
	import { Account, AccountCircular, Logout } from '$lib/components/Icons';
	import { Dropdown, DropdownDivider, DropdownItem } from 'flowbite-svelte';
</script>

<Dropdown class="w-full max-w-sm">
	<div slot="trigger" class="inline-flex items-center ">
		<span class="text-primary w-6 h-6 md:w-10 md:h-10">
			<AccountCircular />
		</span>
	</div>
	<ul slot="content" class="rounded-3xl text-lighterText">
		<DropdownItem class="flex gap-x-4">
			<span class="w-4 h-4">
				<Account />
			</span> Edit Profile
		</DropdownItem>
		<DropdownDivider />
		<DropdownItem class="flex gap-x-4 text-lighterText">
			<Logout /> Logout
		</DropdownItem>
	</ul>
</Dropdown>
