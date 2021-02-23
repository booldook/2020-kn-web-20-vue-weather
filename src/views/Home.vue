<template lang="pug">
	.home-wrapper
		.title-wrapper
			h2 Vue를 활용한 날씨정보 앱
				small.ml-3 v1.0
		Search.Search
		Daily
</template>
<script>
import { mapGetters } from 'vuex'
import Search from '../components/Search.vue'
import Daily from '../components/weather/Daily.vue'

export default {
	name: 'Home',
	components: { Search, Daily },
	created() {
		this.$store.dispatch('ACT_WEATHER', null)
		console.log(process.env);
	},
	data() {
		return {
		
		}
	},
	methods: {
		
	}
}
</script>
<style lang="scss" scoped>
.home-wrapper {
	text-align: center;
	@include flex($CT, $CT);
	flex-direction: column;
	.Search {
		min-width: 200px;
		margin: 2em 0;
	}
}
</style>