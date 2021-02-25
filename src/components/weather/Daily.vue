<template lang="pug">
	.wrapper-daily
		Title.Title(:value="title")
		Time.Time(:value="time")
		Icon.Icon(:value="icon")
		Temp.Temp(:value="temp")
		Summary.Summary(:value="summary")
		Wind.Wind(:value="wind")
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
				? `https://openweathermap.org/img/wn/${this.GET_DAILY.weather[0].icon}@2x.png`
				: 'https://via.placeholder.com/25x25&text=no%20icon'
			)
		},
		temp: function() {
			return (
				this.GET_DAILY
				? {
						temp: this.GET_DAILY.main.temp, 
						feel: this.GET_DAILY.main.feels_like,
						max: this.GET_DAILY.main.temp_max,
						min: this.GET_DAILY.main.temp_min,
					}
				: { temp: '', feel: '', max: '', min: '' }
			)
		},
		summary: function() {
			return (
				this.GET_DAILY
				? {
					desc: this.GET_DAILY.weather[0].description, 
					main: this.GET_DAILY.weather[0].main
					}
				: {desc: '', main: ''}
			)
		},
		wind: function() {
			return (
				this.GET_DAILY
				? {
						speed: this.GET_DAILY.wind.speed,
						deg: this.GET_DAILY.wind.deg
					}
				: { speed: '', deg: '' }
			)
		}
	},
}
</script>
<style lang="scss" scoped>
	.wrapper-daily {
		.Title {
			display: inline-block;
			font-size: 1.25em;
			padding: 0 0.25em;
			border-bottom: 1px solid $colorLight;
			margin: auto;
		}
		.Time {
			margin-bottom: 1em;
		}
		.Temp {
			font-size: 1.125em;
			color: #1a2b4d;
		}
	}
</style>