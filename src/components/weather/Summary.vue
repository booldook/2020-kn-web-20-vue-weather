<template lang="pug">
	.wrapper
		span {{value.desc}}
		span ({{value.main}})
</template>
<script>
export default {
	name: 'Summary',
	props: ['value']
}
</script>
<style lang="scss" scoped>
	.wrapper {
		font-size: 1.5em;
		margin: 0.5em 0;
		span:nth-child(1) {margin-right: 0.5em}
	}
</style>