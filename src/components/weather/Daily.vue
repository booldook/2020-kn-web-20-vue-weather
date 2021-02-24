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
						direction: windGen(this.GET_DAILY.wind.deg) + '풍', 
						speed: this.GET_DAILY.wind.speed,
						deg: this.GET_DAILY.wind.deg
					}
				: { direction: '', speed: '', deg: '' }
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
		.Temp {
			font-size: 1.125em;
			color: #1a2b4d;
		}
	}
</style>