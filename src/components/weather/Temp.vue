<template lang="pug">
	.wrapper
		.temp-wrap
			span.temp {{value.temp}} 
			span ℃ ( 
			span.title 체감
			span.temp {{value.feel}} 
			span ℃) 
		.temp-wrap
			span.title 최고
			span.temp {{value.max}}
			span ℃ / 
			span.title 최저
			span.temp {{value.min}}
			span ℃
</template>
<script>
export default {
	name: 'Temp',
	props: ['value']
}
</script>
<style lang="scss" scoped>
	.temp-wrap {
		.title {
			font-size: 1em;
			margin-right: 0.5em;
			color: $colorDark;
		}
		.temp {
			font-size: 1.25em;
			font-weight: bold;
			color: inherit;
		}
	}
</style>