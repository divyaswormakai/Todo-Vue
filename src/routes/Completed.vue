<template>
	<div>
		<h2>This is the completed list page</h2>
		<ul>
			<li
				v-for="item in completed"
				:key="item.id"
				@click="moveToTodo(item)"
			>
				{{ item.content }}
				<button @click="moveToArchive(item)">Archive This</button>
			</li>
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

<style></style>
