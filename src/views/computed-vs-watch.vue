<template lang="pug">
	.home-wrapper
		.title-wrapper
			h1 computed vs watch
				small.ml-3 v1.0
		input(type="text" v-model="query")
		div {{myName}}
</template>
<script>
export default {
	computed: {
		// 다른 요인으로 인해 내 값이 바뀌어야 될때.
		myName: function() {
			return this.query;
		}
	},
	watch: {
		// 내 값이 바뀌어서 뭔가를 실행할때.
		myName: function(nVal, oVal) {
			console.log(nVal, oVal);
		}
	},
	data() {
		return {
			query: ''
		}
	},
}
</script>
<style lang="scss" scoped>
.home-wrapper {
	text-align: center;
}
</style>