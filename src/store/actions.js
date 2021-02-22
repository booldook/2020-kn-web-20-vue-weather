import { getDaily } from './api'

export default {
	async ACT_CITY({ commit }, value) {
		commit('MUT_CITY', value);
		commit('MUT_DAILY', await getDaily(value))
	}
}