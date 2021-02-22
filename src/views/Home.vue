<template lang="pug">
	.home-wrapper
		.title-wrapper
			h2 Vue를 활용한 날씨정보 앱
				small.ml-3 v1.0
			h1 {{ GET_DAILY.name }}
		Search
</template>
<script>
import { mapGetters } from 'vuex'
import Search from '../components/Search.vue'

export default {
	name: 'Home',
	components: { Search },
	computed: { ...mapGetters(['GET_DAILY', 'GET_CITY']) },
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
}
</style>