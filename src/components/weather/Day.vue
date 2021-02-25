<template lang="pug">
	.day
		.icon
			Icon.Icon(:value="icon")
		.cont
			Temp.Temp(:value="temp")
			Summary.Summary(:value="summary")
			Wind.Wind(:value="wind")
			Time.Time(:value="time")
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
				? `https://openweathermap.org/img/wn/${this.value.weather[0].icon}@2x.png`
				: 'https://via.placeholder.com/25x25&text=no%20icon'
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
		padding: 2%;
		margin: 1%;
		border: 1px solid $colorLighter;
		@include flex($FS, $FS);
		width: 31.3333%;
		font-size: 0.875em;
		.Temp {
			font-size: 1em;
		}
		.Summary {
			font-size: 1.25em;
		}
		.Wind {
			font-size: 0.875em;
		}
		@include desktop {
			width: 48%;
		}
		@include tablet {
			width: 98%;
		}

		.icon {
			margin-right: 1em;
			@include mobile {
				margin-right: 1.5em;
			}
		}
	}
</style>