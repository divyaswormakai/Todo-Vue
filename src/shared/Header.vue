<template>
	<div class="app-header" v-if="user">
		<div class="top">
			<h1>my TO-DO list</h1>
			<div>
				Welcome,
				<b>{{ user.username }}</b>
				<button @click="logOutUser" class="btn btn-danger">Log out</button>
			</div>
		</div>
		<div class="row option-row">
			<app-mode-switch v-model="currentMode" :changeMode="changeMode"></app-mode-switch>
		</div>
		<div class="navbar">
			<ul class="navbar">
				<router-link to="/" tag="li" active-class="active" class="nav-item" exact>
					<a>
						<button class="nav-item-btn">
							<ion-icon name="list-outline"></ion-icon>
							<br />To-do's
						</button>
					</a>
				</router-link>
				<router-link to="/completed" tag="li" active-class="active" class="nav-item" exact>
					<a>
						<button class="nav-item-btn" id="complete">
							<ion-icon name="checkbox-outline"></ion-icon>
							<br />Completed
						</button>
					</a>
				</router-link>
				<router-link
					:to="'/'+user.username+'/profile'"
					tag="li"
					active-class="active"
					class="nav-item"
					exact
				>
					<a>
						<button class="nav-item-btn">
							<ion-icon name="person-outline"></ion-icon>
							<br />Profile
						</button>
					</a>
				</router-link>
				<router-link to="/sidebar" tag="li" active-class="active" class="nav-item" exact>
					<a>
						<button class="nav-item-btn">
							<ion-icon name="options-outline"></ion-icon>
							<br />Others...
						</button>
					</a>
				</router-link>
			</ul>
		</div>
	</div>
</template>

<script>
import {mapGetters, mapActions} from 'vuex';
import ModeSwitchVue from '../components/ModeSwitch.vue';
export default {
	created() {
		this.currentMode = this.mode;
	},
	data() {
		return {
			currentMode: '',
		};
	},
	methods: {
		...mapActions({
			logOut: 'LogOutAction',
			changeMode: 'ChangeModeAction',
		}),
		logOutUser() {
			this.logOut();
			this.$router.go();
		},
		toggleMode(mode) {
			console.log(mode);
			console.log(this.mode);
			this.mode = mode;
			console.log(this.mode);
		},
	},
	computed: {
		...mapGetters({
			user: 'getUser',
			mode: 'getMode',
		}),
	},
	components: {
		appModeSwitch: ModeSwitchVue,
	},
};
</script>

<style scoped>
.app-header {
	display: flex;
	flex-direction: column;
	text-align: center;
	width: 100%;
	height: 35vh;
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
	transition: all 0.15s ease-in-out;
}
.nav-item:hover {
	transform: scale(1.05, 1.05);
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
ion-icon {
	font-size: 30px;
}
</style>
