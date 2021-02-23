<template lang="pug">
	.search-wrapper
		b-form-select(v-model="selected" :options="city" size="lg")
</template>
<script>
import axios from 'axios'

export default {
	name: 'Search',
	async created() {
		const r = await axios.get('/json/city.json')
		this.city = r.data.map((v) => {
			v.text = v.name
			v.value = v.id
			return v;
		});
		this.city.unshift({value: null, text: '도시를 선택하세요.'});
	},
	watch: {
		selected: function(nv) {
			this.$store.dispatch('ACT_CITY', nv)
		}
	},
	data() {
		return {
			selected: null,
			city: [],
			app_id: ''
		}
	}
}
</script>
<style lang="scss">

</style>