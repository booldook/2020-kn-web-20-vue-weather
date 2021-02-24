<template lang="pug">
	.wrapper
		i.fa.fa-arrow-down(:style="style")
		span.direction {{value.direction}}
		span.speed {{value.speed}}
		span ㎧
</template>
<script>
export default {
	name: 'Wind',
	props: ['value'],
	computed: {
		style: function() {
			return `transform: rotate(${this.value.deg}deg)`
		}
	}
}
</script>
<style lang="scss" scoped>
	.wrapper {
		i {
			margin-right: 0.5em;
		}
		.direction {
			font-size: 1.25em;
			margin-right: 0.5em;
		}
		.speed {
			font-size: 1.125em;
		}
	}
</style>