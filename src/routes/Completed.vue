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
					v-for="item in serverCompleted"
					:key="item.id"
					class="list-item"
					v-list-type.complete
				>
					{{ item.content }}
					<button @click="serverMoveToTodo(item)" id="undo">
						Undo
					</button>
					<button @click="serverMoveToArchive(item)" id="btn-archive">
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
