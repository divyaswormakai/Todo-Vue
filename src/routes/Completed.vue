<template>
	<div class="app-content">
		<h2>This is the completed list page</h2>
		<ul>
			<transition-group
				enter-active-class="animate__animated animate__backInLeft animate__faster"
				leave-active-class="animate__animated animate__backOutRight animate__faster"
				mode="out-in"
			>
				<li
					v-for="item in mode === 'localStorage'
						? localCompleted
						: serverCompleted"
					:key="item.id"
					class="list-item"
					v-list-type.complete
				>
					{{ item.content }}
					<button @click="moveToTodo(item)" id="undo">
						Undo
					</button>
					<button @click="moveToArchive(item)" id="btn-archive">
						Archive
					</button>
				</li>
			</transition-group>
		</ul>
	</div>
</template>

<script>
import {mapGetters, mapActions} from 'vuex';
export default {
	asyncComputed: {
		...mapGetters({
			mode: 'getMode',
			localCompleted: 'local/getCompleted',
			serverCompleted: 'server/getCompleted',
		}),
	},
	methods: {
		...mapActions({
			localMoveToArchive: 'local/MovetoArchiveAction',
			localMoveToTodo: 'local/MovetoTodoAction',
			serverMoveToArchive: 'server/MovetoArchiveAction',
			serverMoveToTodo: 'server/MovetoTodoAction',
		}),
		moveToTodo(item) {
			if (this.mode === 'localStorage') {
				this.localMoveToTodo(item);
			} else {
				this.serverMoveToTodo(item);
				this.$router.go();
			}
		},

		moveToArchive(item) {
			if (this.mode === 'localStorage') {
				this.localMoveToArchive(item);
			} else {
				this.serverMoveToArchive(item);
				this.$router.go();
			}
		},
	},
};
</script>

<style scoped>
.app-content {
	background-color: rgba(110, 236, 110, 0.3);
}
ul {
	width: 70%;
}
</style>
