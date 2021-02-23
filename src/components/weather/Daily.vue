<template lang="pug">
	.wrapper-daily
		Title.Title(:value="title")
		Time.Time(:value="time")
		Icon.Icon(:value="icon")
		Temp
		Summary
		Wind
</template>
<script>
import Title from './Title.vue'
import Time from './Time.vue'
import Temp from './Temp.vue'
import Icon from './Icon.vue'
import Summary from './Summary.vue'
import Wind from './Wind.vue'

import { mapGetters } from 'vuex'
import moment from 'moment'

export default {
	name: 'Daily',
	components: { Title, Time, Temp, Icon, Summary, Wind },
	computed: { 
		...mapGetters(['GET_DAILY']),
		title: function() {
			return (
				this.GET_DAILY
				? { name: this.GET_DAILY.name, country: this.GET_DAILY.sys.country }
				: { name: '', country: '' }
			)
		},
		time: function() {
			return (
				this.GET_DAILY
				? moment(this.GET_DAILY.dt * 1000).format('M월 D일 HH시 m분 기준')
				: ''
			)
		},
		icon: function() {
			return (
				this.GET_DAILY
				? `http://openweathermap.org/img/wn/${this.GET_DAILY.weather[0].icon}@2x.png`
				: 'http://via.placeholder.com/25x25&text=no%20icon'
			)
		}
	},
}
</script>
<style lang="scss" scoped>
	.wrapper-daily {
		.Title {
			font-size: 1.25em;
			border-bottom: 2px solid $colorLighter;
		}
		.Time {
			margin-bottom: 1em;
		}
	}
</style>