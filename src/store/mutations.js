export default {
	MUT_CITY(state, r) {
		state.selectedCity = r;
	},
	MUT_DAILY(state, r) {
		state.daily = r;
	},
	MUT_DAYS(state, r) {
		state.days = r;
	},
	MUT_LOADING(state, r) {
		state.isLoading = r;
	}
}