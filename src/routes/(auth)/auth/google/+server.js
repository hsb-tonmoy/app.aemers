import * as api from '$lib/api';
import { respond } from '../login/_respond';

export async function POST({ url }) {
	const code = url.searchParams.get('code');
	const res = await api.post('auth/google/', {
		code
	});

	return respond(res);
}
