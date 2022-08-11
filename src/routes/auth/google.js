import * as api from '$lib/api.js';
import { respond } from './_respond';

export async function POST({ url, request }) {
	const code = url.searchParams.get('code');
	const res = await api.post('auth/google/', {
		code
	});

	return respond(res);
}
