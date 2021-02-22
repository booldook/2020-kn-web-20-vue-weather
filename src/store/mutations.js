export default {
	MUT_CITY(state, r) {
		state.selectedCity = r;
	},
	MUT_DAILY(state, r) {
		state.daily = r;
	},
	MUT_GEO(state, r) {
		state.geo = r;
	}
}