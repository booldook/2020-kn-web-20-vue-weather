<template lang="pug">
	#app.container 
		Header
		transition(name="fade" mode="out-in")
			router-view.wrapper-view 
		Footer 
</template>
<script>
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'

export default {
	name: 'App',
	components: {
		Header,
		Footer
	}
}

</script>
<style lang="scss">
#app {
	@include flex($SB, $ST);
	flex-direction: column;
	padding: 0;
	height: 100vh;

	.wrapper-view {
		border-left: 1px solid $colorLight;
		border-right: 1px solid $colorLight;
		flex-grow: 1;
		overflow-y: auto;
		@include mobile {
			border-left: none;
			border-right: none;
		}
	}

	.fade-enter {
		opacity: 0;
	}
	.fade-enter-active {
		transition: opacity 0.35s ease;
	}
	.fade-leave {

	}
	.fade-leave-active {
		transition: opacity 0.15s ease;
		opacity: 0;
	}
}

</style>