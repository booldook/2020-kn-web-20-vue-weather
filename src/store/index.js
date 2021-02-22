import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

/* vuex 객체 */
// state: 변수를 선언하는곳
// getters: 변수를 가져오는곳
// mutations: 변수의 변화를 감지하는곳(값을 바꿔주는 곳)
// actions: 변수를 변화시키는 곳

import state from './state'
import getters from './getters'
import mutations from './mutations'
import actions from './actions'

export default new Vuex.Store({ state, getters, mutations, actions })
