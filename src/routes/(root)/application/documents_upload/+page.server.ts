import * as api from '$lib/api';

export const actions = {
	default: async ({ cookies, request, locals }) => {
		const data = await request.formData();

		// const res = await api.post(`document/`, data, locals.access, true);

		const res = await fetch('http://127.0.0.1:8000/api/v1/document/', {
			method: 'POST',
			headers: {
				Authorization: `JWT ${locals.access}`
			},
			body: data
		});

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
