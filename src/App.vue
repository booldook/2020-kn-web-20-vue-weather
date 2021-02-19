<template lang="pug">
	#app.container
		Header
		router-view
		.footer
</template>
<script>
import Header from './components/Header.vue'
export default {
	name: 'App',
	components: {
		Header
	}
}
</script>
<style lang="scss">
	
</style>