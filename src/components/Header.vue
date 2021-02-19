<template lang="pug">
	header.header-wrapper
		.logo
			i.fa.fa-sun
		ul.navi-wrapper
			li.navi
				router-link(to='/') HOME
			li.navi
				router-link(to='/daily') DAILY
			li.navi
				router-link(to='/5days') 5DAYS
</template>
<script>
export default {
	name: 'Header',
}
</script>
<style lang="scss" scoped>
	
</style>