<template lang="pug">
	.day
		Time.Time(:value="time")
		Icon.Icon(:value="icon")
		Temp.Temp(:value="temp")
		Summary.Summary(:value="summary")
		Wind.Wind(:value="wind")
</template>
<script>
import Time from './Time.vue'
import Temp from './Temp.vue'
import Icon from './Icon.vue'
import Summary from './Summary.vue'
import Wind from './Wind.vue'

import moment from 'moment'

export default {
	name: 'Day',
	props: ['value'],
	components: { Time, Temp, Icon, Summary, Wind },
	computed: {
		time: function() {
			return (
				this.value
				? moment(this.value.dt * 1000).format('M월 D일 HH시 m분 기준')
				: ''
			)
		},
		icon: function() {
			return (
				this.value
				? `http://openweathermap.org/img/wn/${this.value.weather[0].icon}@2x.png`
				: 'http://via.placeholder.com/25x25&text=no%20icon'
			)
		},
		temp: function() {
			return (
				this.value
				? {
						temp: this.value.main.temp, 
						feel: this.value.main.feels_like,
						max: this.value.main.temp_max,
						min: this.value.main.temp_min,
					}
				: { temp: '', feel: '', max: '', min: '' }
			)
		},
		summary: function() {
			return (
				this.value
				? {
					desc: this.value.weather[0].description, 
					main: this.value.weather[0].main
					}
				: {desc: '', main: ''}
			)
		},
		wind: function() {
			return (
				this.value
				? {
						speed: this.value.wind.speed,
						deg: this.value.wind.deg
					}
				: { speed: '', deg: '' }
			)
		}
	}
}
</script>
<style lang="scss" scoped>
	.day {
		width: 33.3333%;
		border: 1px solid red;
		@include laptop {
			width: 50%;
		}
		@include tablet {
			width: 100%;
		}
	}
</style>