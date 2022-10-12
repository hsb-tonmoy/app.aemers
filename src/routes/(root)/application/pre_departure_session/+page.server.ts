import * as api from '$lib/api';

export async function load({ locals }) {
	const pre_departure_sessions = await api.get(`pre_departure_sessions/`, locals.access);
	const pre_departure_sessions_data = await pre_departure_sessions.json();

	const participation = await api.get(
		`pre_departure_sessions_participants/${locals.user.pk}/`,
		locals.access
	);
	const participation_data = await participation.json();

	if (!pre_departure_sessions.ok && pre_departure_sessions.status === 404) {
		return {
			pre_departure_sessions: null,
			participation: null
		};
	}

	return {
		pre_departure_sessions: pre_departure_sessions_data,
		participation: participation_data
	};
}
