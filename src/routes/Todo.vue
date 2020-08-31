<template>
	<div>
		<h2>This is the main home page</h2>
		<input v-model="newInput" @keypress.enter="SavetoList" />
		<ul>
			<li v-for="item in todos" :key="item.id">{{ item.content }}</li>
		</ul>
	</div>
</template>

<script>
import {mapGetters, mapActions} from 'vuex';
export default {
	data() {
		return {
			newInput: '',
		};
	},
	methods: {
		SavetoList() {
			console.log(this.newInput);
			this.AddNewItem({content: this.newInput});
		},
		...mapActions({
			AddNewItem: 'AddToAction',
		}),
	},
	computed: {
		...mapGetters({
			todos: 'getTodos',
		}),
	},
};
</script>

<style></style>
