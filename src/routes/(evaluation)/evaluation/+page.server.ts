import * as api from '$lib/api';

export async function POST({ request, locals }) {
	const values = await request.json();
	const req = await api.patch(`accounts/${locals.user.username}/`, values, locals.access);

	return {};
}
