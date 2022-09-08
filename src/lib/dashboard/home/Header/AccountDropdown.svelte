<script>
	import { Account, AccountCircular, Logout } from '$lib/components/Icons';
	import { Dropdown, DropdownDivider, DropdownItem } from 'flowbite-svelte';
</script>

<Dropdown label="User Dropdown" class="w-44">
	<div slot="trigger" class="inline-flex items-center">
		<button
			type="button"
			class="text-primary w-6 h-6 md:w-10 md:h-10 focus:ring-0 focus:outline-none"
		>
			<AccountCircular />
		</button>
	</div>
	<ul slot="content" class="rounded-3xl py-2">
		<DropdownItem class="flex items-center gap-x-4 text-lighterText">
			<span class="w-6 h-6">
				<Account />
			</span> Edit Profile
		</DropdownItem>
		<DropdownDivider divClass="my-1 h-px bg-lighterText" />
		<DropdownItem class="flex items-center gap-x-4 text-lighterText">
			<span class="w-6 h-6">
				<Logout />
			</span> <a href="/logout">Logout</a>
		</DropdownItem>
	</ul>
</Dropdown>
