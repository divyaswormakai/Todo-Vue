<template>
	<div id="app">
		<app-header></app-header>
		<router-view></router-view>
		<app-footer></app-footer>
	</div>
</template>

<script>
import Header from './shared/Header.vue';
import Footer from './shared/Footer.vue';

export default {
	components: {
		appHeader: Header,
		appFooter: Footer,
	},
};
</script>

<style>
.app {
	display: flex;
	display: 10;
	box-sizing: content-box;
	margin: 0px 20px;
}
</style>
