<template lang="pug">
	.days-wrapper
		.title-wrapper
			Title.title(:value="title")
			Search.search(:value="value" :selCity="GET_CITY")
</template>
<script>
import { mapGetters } from 'vuex'
import Search from '../components/Search.vue'
import DayList from '../components/weather/DayList.vue'
import Title from '../components/weather/Title.vue'

export default {
	name: 'Days',
	components: { DayList, Title, Search },
	data() {
		return {
			value: 'ACT_DAYS'
		}
	},
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
		//this.$store.dispatch('ACT_DAYS', this.GET_CITY)
	}
}
</script>
<style lang="scss" scoped>
.days-wrapper {
	.title-wrapper {
		@include flex($FS, $CT);
		.title {
			font-size: 1.25em;
			margin-right: 1em;
		}
		.search {
			min-width: 140px;
		}
	}
}
</style>