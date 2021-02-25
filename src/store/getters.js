export default {
	GET_CITY(state) {
		return state.selectedCity
	},
	GET_DAILY(state) {
		return state.daily
	},
	GET_DAYS(state) {
		return state.days
	},
	GET_LOADING(state) {
		return state.isLoading
	}
}