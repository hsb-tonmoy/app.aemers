import * as api from '$lib/api';

export const actions = {
	default: async ({ cookies, request, locals }) => {
		const data = await request.formData();

		const res = await api.post(`document/`, data, locals.access, true);

		if (!res.ok) {
			console.log(res);
			console.log(await res.json());
			return {
				error: res.status
			};
		}

		return { success: true };
	}
};
