<template lang="pug">
	.home-wrapper
		.title-wrapper
			h1 Vue를 활용한 날씨정보 앱
				small.ml-3 v1.0
		Search
		div {{myName}}
</template>
<script>
import Search from '../components/Search.vue'

export default {
	name: 'Home',
	props: ['myName'],
	components: { Search },
	computed: {
		myName: function() {
			return 'booldook2';
		}
	},
	data() {
		return {
			myName: 'booldook'
		}
	}
}
</script>
<style lang="scss" scoped>
.home-wrapper {
	text-align: center;
}
</style>