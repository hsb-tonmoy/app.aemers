import { writable } from 'svelte/store';

export const login_message = writable({
	type: '',
	message: ''
});
