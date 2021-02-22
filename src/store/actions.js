export default {
	ACT_CITY({ commit }, value) {
		commit('MUT_CITY', value);
	},
	ACT_DAILY({ commit }, value) {
		commit('MUT_DAILY', {name: '오늘의 날씨', value});
	},
}