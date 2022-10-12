export async function load({ parent }) {
	const { ok } = await parent();

	if (ok) {
		window.location.href = '/logout';
	}
}
