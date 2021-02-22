import { getDaily, getPosition } from './api'

export default {
	async ACT_CITY({ commit }, value) {
		commit('MUT_CITY', value);
		commit('MUT_DAILY', await getDaily(value))
	},
	async ACT_POSITION({ commit }) {
		commit('MUT_GEO', await getPosition())
	}
}