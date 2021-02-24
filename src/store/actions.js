import { getWeather } from '../api/weather-api'

export default {
	async ACT_DAILY({ commit }, value) {
		commit('MUT_CITY', value);
		commit('MUT_DAILY', await getWeather(value, 'daily'))
	},
	async ACT_DAYS({ commit }, value) {
		commit('MUT_DAYS', await getWeather(value, 'days'))
	},
}