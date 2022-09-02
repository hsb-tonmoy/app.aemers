import { json as json$1 } from '@sveltejs/kit';
import * as api from '$lib/api.js';

export async function GET({ locals }) {
	const res = await api.get('student_data/', locals.user && locals.access);

	if (res.status === 401) {
		throw new Error("@migration task: Migrate this return statement (https://github.com/sveltejs/kit/discussions/5774#discussioncomment-3292701)");
		// Suggestion (check for correctness before using):
		// return json$1(json, {
		// 	status: 401
		// });
		return {
			status: 401,
			body: json
		};
	}

	throw new Error("@migration task: Migrate this return statement (https://github.com/sveltejs/kit/discussions/5774#discussioncomment-3292701)");
	// Suggestion (check for correctness before using):
	// return json$1(res);
	return {
		status: 200,
		body: res
	};
}
