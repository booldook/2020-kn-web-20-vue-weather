<template lang="pug">
	.wrapper
		i.fa.fa-arrow-down(:style="style")
		span.direction {{direction}}
		span.speed {{value.speed}}
		span ㎧
</template>
<script>

const windGen = (deg) => {
	let value;
	if(deg >= 345 || deg < 15) value = '북'
	else if(deg >= 15 && deg < 75) value = '북동'
	else if(deg >= 75 && deg < 105) value = '동'
	else if(deg >= 105 && deg < 165) value = '남동'
	else if(deg >= 165 && deg < 195) value = '남'
	else if(deg >= 195 && deg < 255) value = '남서'
	else if(deg >= 255 && deg < 285) value = '서'
	else if(deg >= 285 && deg < 345) value = '북서'
	return value
}

export default {
	name: 'Wind',
	props: ['value'],
	computed: {
		style: function() {
			return `transform: rotate(${this.value.deg}deg)`
		},
		direction: function() {
			return windGen(this.value.deg)+'풍';
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