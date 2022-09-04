export async function load({ locals }) {
	return {
		user: locals.user,
		access: locals.access
	};
}
