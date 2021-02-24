<template lang="pug">
	.days-wrapper
		Title(:value="title")
		DayList
</template>
<script>
import { mapGetters } from 'vuex'
import DayList from '../components/weather/DayList.vue'
import Title from '../components/weather/Title.vue'

export default {
	name: 'Days',
	components: { DayList, Title },
	computed: {
		...mapGetters(['GET_DAYS', 'GET_CITY']),
		title: function() {
			return (
				this.GET_DAYS
				? { name: this.GET_DAYS.city.name, country: this.GET_DAYS.city.country }
				: { name: '', country: '' }
			)
		},
	},
	created() {
		this.$store.dispatch('ACT_DAYS', this.GET_CITY)
	}
}
</script>
<style lang="scss" scoped>
.days-wrapper {
	
}
</style>