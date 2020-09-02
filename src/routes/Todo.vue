<template>
	<div class="app-content">
		<h2>Pending Tasks</h2>
		<div class="input-row">
			<input
				v-model="newInput"
				@keypress.enter="SavetoList"
				placeholder="add a new task here..."
			/>
		</div>
		<ul>
			<transition-group
				enter-active-class="animate__animated animate__backInLeft animate__faster"
				leave-active-class="animate__animated animate__backOutRight animate__faster"
				mode="out-in"
			>
				<li
					v-for="item in mode === 'localStorage'
						? localTodos
						: serverTodos"
					:key="item.id"
					class="list-item"
					v-list-type.todo
				>
					<button @click="CompleteTask(item)" id="completeImg">
						<img
							src="./../assets/empty.png"
							height="50"
							width="50"
						/>
					</button>
					{{ item.content }}
				</li>
			</transition-group>
		</ul>
	</div>
</template>

<script>
import {mapGetters, mapActions, mapState} from 'vuex';
export default {
	data() {
		return {
			newInput: '',
		};
	},
	asyncComputed: {
		...mapGetters({
			mode: 'getMode',
			localTodos: 'localStorage/getTodos',
			serverTodos: 'jsonServer/getTodos',
		}),
	},
	methods: {
		SavetoList() {
			this.$store.dispatch(this.mode + '/AddToAction', {
				content: this.newInput,
			});
			this.ClearInput();
		},
		CompleteTask(item) {
			this.$store.dispatch(this.mode + '/MovetoCompleteAction', item);
			this.ClearInput();
		},
		ClearInput() {
			if (this.mode != 'localStorage') {
				this.$router.go();
			} else {
				this.newInput = '';
			}
		},
	},
};
</script>

<style scoped>
.app-content {
	background-color: rgba(122, 113, 113, 0.3);
}
.input-row {
	width: 75%;
}
.input-row input {
	width: 100%;
	height: 50px;
	font-size: 20px;
	padding: 24px;
}
ul {
	width: 70%;
}

#completeImg {
	background: url('../assets/empty.png') no-repeat top left;
	background-size: 50px 50px;
}
#completeImg :hover {
	background: url('../assets/done.png') no-repeat top left;
	background-size: 50px 50px;
}
</style>
