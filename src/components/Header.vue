<template lang="pug">
	header.header-wrapper
		.logo
			i.fa.fa-sun
			router-link(to='/') HOME
		ul.navi-wrapper
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
.header-wrapper {
	color: $colorLighter;
	background-color: $colorDarker;
	@include flex($SB, $CT);
	.logo {
		@include flex($FS, $CT);
		padding: 1em;
		i {
			margin-right: 1em;
		}
	}
	.navi-wrapper {
		@include flex($FS, $CT);
		.navi {
			padding: 1em;
		}
	}
}
</style>