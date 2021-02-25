<template lang="pug">
	.home-wrapper
		.title-wrapper
			h2 Vue를 활용한 날씨정보
				small.ml-3 v1.0
		Search.Search(:action="`ACT_DAILY`")
		transition(name="slide-fade" mode="out-in")
			Daily(:key="tKey" v-if="GET_DAILY")
</template>
<script>
import { mapGetters } from 'vuex'
import Search from '../components/Search.vue'
import Daily from '../components/weather/Daily.vue'

export default {
	name: 'Home',
	components: { Search, Daily },
	created() {
		this.$store.dispatch('ACT_DAILY', null)
	},
	data() {
		return {
			tKey: '',
		}
	},
	computed: {
		...mapGetters(['GET_DAILY'])
	},
	watch: {
		GET_DAILY: function(nv){
			if(nv) this.tKey = nv.name
		}
	}
}
</script>
<style lang="scss" scoped>
.home-wrapper {
	padding: 1em 2em;
	text-align: center;
	@include flex($CT, $CT);
	flex-direction: column;
	.Search {
		min-width: 200px;
		margin: 2em 0;
	}
}
</style>