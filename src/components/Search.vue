<template lang="pug">
	.search-wrapper
		b-form-select(v-model="selected" :options="city" size="lg")
</template>
<script>
import axios from 'axios'

export default {
	name: 'Search',
	props: ['action', 'selCity'],
	async created() {
		const r = await axios.get('/json/city.json')
		this.city = r.data.map((v) => {
			v.text = v.name
			v.value = v.id
			return v
		});
		this.city.unshift({value: null, text: '현재위치'})
		this.selected = this.selCity || null
	},
	watch: {
		selected: function(nv) {
			this.$store.dispatch(this.action, nv)
		}
	},
	data() {
		return {
			selected: '',
			city: [],
		}
	}
}
</script>
<style lang="scss">

</style>