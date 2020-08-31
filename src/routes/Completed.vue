<template>
	<div class="app-content">
		<h2>This is the completed list page</h2>
		<ul>
			<transition-group
				enter-active-class="animate__animated animate__backInLeft animate__faster"
				leave-active-class="animate__animated animate__backOutRight animate__faster"
				mode="out-in"
			>
				<li v-for="item in completed" :key="item.id" class="list-item">
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

<style>
.app-content {
	background-color: rgba(110, 236, 110, 0.3);
}
ul {
	width: 70%;
}
.list-item {
	width: 100%;
	font-size: 20px;
	list-style: none;
	margin: 25px 5px;
	padding: 10px 10px;
	background-color: rgba(35, 194, 23, 0.658);
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
