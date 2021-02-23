<template lang="pug">
	.wrapper
		span.name {{value.name}}, 
		span.country {{value.country}}
</template>
<script>
export default {
	name: 'Title',
	props: ['value'],
}
</script>
<style lang="scss" scoped>
	.wrapper {
		.name {
			font-size: 1.5em;
		}
		.country {
			font-size: 1em;
		}
	}
</style>