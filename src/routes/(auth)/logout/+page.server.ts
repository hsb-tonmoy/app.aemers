import * as api from '$lib/api';

export async function load({ cookies, locals }) {
	const res = await api.post('auth/logout/', locals.access);
	cookies.delete('access');
	cookies.delete('refresh');
	cookies.delete('user');
	return { success: true };
}

// export const actions = {
// 	default: async ({ cookies, locals }) => {
// 		const res = await api.post('auth/logout/', locals.access);
// 		cookies.delete('access');
// 		cookies.delete('refresh');
// 		cookies.delete('user');
// 		return { success: true };
// 	}
// };
