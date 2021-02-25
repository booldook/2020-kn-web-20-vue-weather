<template lang="pug">
	div.day-list
		Day(v-for="v, i in value ? value.list : null" :key="i" :value="v")
</template>
<script>
import Day from './Day.vue'

export default {
	name: 'DayList',
	props: ['value'],
	components: { Day }
}
</script>
<style lang="scss" scoped>
	.day-list {
		overflow-y: scroll;
		@include flex($FS, $ST);
		flex-wrap: wrap;
	}
</style>