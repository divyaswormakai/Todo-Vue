<template>
	<div class="app-header">
		<div class="top">
			<h1>my TO-DO list</h1>
		</div>
		<component :is="activeFormComponent"></component>
		<div class="navbar">
			<ul class="navbar">
				<router-link to="/" tag="li" active-class="active" class="nav-item" exact>
					<a>
						<button class="nav-item-btn">To-do's</button>
					</a>
				</router-link>
				<router-link to="/completed" tag="li" active-class="active" class="nav-item" exact>
					<a>
						<button class="nav-item-btn">Completed</button>
					</a>
				</router-link>
				<router-link to="/archive" tag="li" active-class="active" class="nav-item" exact>
					<a>
						<button class="nav-item-btn">Archive</button>
					</a>
				</router-link>
			</ul>
		</div>
	</div>
</template>

<script>
import {mapGetters} from 'vuex';
export default {
	computed: {
		...mapGetters({
			user: 'getUser',
		}),
	},
};
</script>

<style scoped>
.app-header {
	display: flex;
	flex-direction: column;
	text-align: center;
	width: 100%;
	height: 30vh;
}
.top {
	display: flex;
	flex-direction: row;
	justify-content: space-evenly;
	align-items: center;
}
h1 {
	color: #d72631;
	font-weight: 600;
}
.userBtn {
	width: 200px;
	height: 50px;
	background-color: salmon;
	border-radius: 20px;
	color: white;
	font-weight: 600;
	font-size: 16px;
}
.navbar {
	width: 100%;
	display: flex;
	justify-content: space-evenly;
}
.nav-item {
	display: flex;
	align-items: center;
	text-align: center;
	width: 150px;
	height: 100px;
	font-size: 20px;
	border: solid transparent 3px;
	border-radius: 10px;
	background-color: #a2d5c6;
}
.nav-item a {
	width: 100%;
	height: 100%;
	background-color: transparent;
}

.router-link-exact-active {
	font-size: 24px;
	background-color: #5c3c92;
}

.nav-item-btn {
	align-items: center;
	width: 100%;
	height: 100%;
	color: white;
	background-color: transparent;
	border: none;
}
</style>
