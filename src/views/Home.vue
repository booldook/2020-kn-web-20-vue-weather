<template lang="pug">
	.home-wrapper
		.title-wrapper
			h1 Vue를 활용한 날씨정보 앱
				small.ml-3 v1.0
		Search
</template>
<script>
import Search from '../components/Search.vue'

export default {
	name: 'Home',
	components: { Search }
}
</script>
<style lang="scss" scoped>
@import '@/assets/scss/_mixins';
.home-wrapper {
	text-align: center;
}
</style>