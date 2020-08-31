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
					v-for="item in completed"
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
	computed: {
		...mapGetters({
			completed: 'getCompleted',
		}),
	},
	methods: {
		...mapActions({
			moveToArchive: 'MovetoArchiveAction',
			moveToTodo: 'MovetoTodoAction',
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
