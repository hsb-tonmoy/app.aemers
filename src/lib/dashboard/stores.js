import { writable } from 'svelte/store';

export const current_page = writable('');
export const current_page_title = writable('Dashboard');

export const notes_count = writable(0);

export const submit_identifier = writable(null);

export const form_submitting = writable(false);
