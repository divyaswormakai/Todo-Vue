<template>
	<div class="app-content">
		<form>
			<h1>Registration/Login Form</h1>
			<div class="row">
				<div class="form-group">
					<label>Username:</label>
					<input type="text" placeholder="username" v-model="username" minlength="5" />
				</div>
			</div>
			<div class="row">
				<div class="form-group">
					<label>Password:</label>
					<input type="password" placeholder="password" v-model="password" minlength="4" />
				</div>
			</div>
			<b>Mode:</b>
			<div class="row">
				<label for="localStorage">
					<input type="radio" id="localStorage" value="localStorage" v-model="mode" required />
					LocalStorage
				</label>
				<label for="jsonServer">
					<input type="radio" id="jsonServer" value="jsonServer" v-model="mode" />
					JsonServer
				</label>
			</div>
			<div class="row">
				<button @click.prevent="Submit" class="btn btn-success" typ>Save</button>
			</div>
		</form>
	</div>
</template>

<script>
import {mapActions} from 'vuex';
export default {
	data() {
		return {
			username: '',
			password: '',
			mode: 'localStorage',
		};
	},
	methods: {
		Submit() {
			this.saveUser({
				username: this.username,
				password: this.password,
				mode: this.mode,
			});
		},
		...mapActions({
			saveUser: 'SaveUserAction',
		}),
	},
};
</script>

<style scoped>
form {
	padding: 50px 0px;
	display: flex;
	width: 100%;
	flex-direction: column;
	align-items: center;
	background-image: linear-gradient(to bottom right, #ffb538, #ffb5e8);
	border-radius: 0px 0px 20px 20px;
}
</style>
