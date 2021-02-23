<template lang="pug">
	#app.container
		Header
		router-view.wrapper-view
		Footer
</template>
<script>
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'

export default {
	name: 'App',
	components: { Header, Footer }
}
</script>
<style lang="scss">
#app {
	@include flex($SB, $ST);
	flex-direction: column;
	height: 100vh;
	.wrapper-view {
		border-left: 1px solid $colorLight;
		border-right: 1px solid $colorLight;
		flex-grow: 1;
		overflow-y: auto;
		padding: 2em;
	}
}
</style>