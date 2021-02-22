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
	},
	data() {
		return {
			selected: null,
			city: [],
		}
	}
}
</script>
<style lang="scss">

</style>