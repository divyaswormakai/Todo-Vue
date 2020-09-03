<template>
	<div id="app">
		<transition appear-active-class="animate__animated animate__fadeInDown" appear>
			<app-header></app-header>
		</transition>
		<transition
			enter-active-class="animate__animated animate__backInLeft animate__faster"
			leave-active-class="animate__animated animate__backOutRight animate__faster"
			mode="out-in"
		>
			<router-view></router-view>
		</transition>
		<transition appear-active-class="animate__animated animate__fadeInDown" appear>
			<app-footer></app-footer>
		</transition>
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
#app {
	display: flex;
	flex: 10;
	box-sizing: content-box;
	margin: 0px 100px;
	flex-direction: column;
	align-items: center;
	min-height: 100vh;
}
.app-content {
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 100%;
	min-height: 65vh;
	border-radius: 50px 50px 0px 0px;
}

h2 {
	color: #d72631;
	font-weight: 600;
}
.list-item {
	width: 100%;
	font-size: 20px;
	list-style: none;
	margin: 25px 5px;
	padding: 10px 15px;
	color: white;
}
#btn-archive {
	background-color: tomato;
	font-size: 15px;
	padding: 5px;
}
#undo {
	background-color: yellowgreen;
	font-size: 15px;
	padding: 5px;
}
</style>
