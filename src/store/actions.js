import { getWeather } from '../api/weather-api'

export default {
	async ACT_DAILY({ commit }, value) {
		if(value) commit('MUT_LOADING', true);
		commit('MUT_CITY', value);
		commit('MUT_DAILY', await getWeather(value, 'daily'))
		commit('MUT_LOADING', false);
	},
	async ACT_DAYS({ commit }, value) {
		if(value) commit('MUT_LOADING', true);
		commit('MUT_DAYS', await getWeather(value, 'days'))
		commit('MUT_LOADING', false);
	},
}