import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
	state: {
		lists: JSON.parse(localStorage.getItem('todos')),
	},
	getters: {
		getTodos: state => {
			console.log(state);
			if (state.lists) {
				// localStorage.removeItem('todos');
				console.log(state.lists);
				return state.lists.filter(elem => elem.tag === 'todo');
			}
		},
		getCompleted: state => {
			if (state.lists)
				return state.lists.filter(elem => elem.tag === 'completed');
		},
		getArchived: state => {
			if (state.lists)
				return state.lists.filter(elem => elem.tag === 'archived');
		},
	},
	mutations: {
		addToLists: (state, payload) => {
			if (state.lists) {
				state.lists = state.lists.concat(payload);
				localStorage.setItem('todos', JSON.stringify(state.lists));
			} else {
				console.log('Creating new arra');
				let temp = [];
				temp.push(payload);
				state.lists = temp;
				localStorage.setItem('todos', JSON.stringify(state.lists));
			}
		},
		moveToCompleted: (state, payload) => {
			state.lists = state.lists.map(elem => {
				if (elem.id === payload.id) {
					elem.tag = 'completed';
				}
				return elem;
			});
			localStorage.setItem('todos', JSON.stringify(state.lists));
		},
		moveToArchive: (state, payload) => {
			state.lists = state.lists.map(elem => {
				if (elem.id === payload.id) {
					elem.tag = 'archived';
				}
				return elem;
			});
			localStorage.setItem('todos', JSON.stringify(state.lists));
		},
		moveToTodo: (state, payload) => {
			state.lists = state.lists.map(elem => {
				if (elem.id === payload.id) {
					elem.tag = 'todo';
				}
				return elem;
			});
			localStorage.setItem('todos', JSON.stringify(state.lists));
		},
	},
	actions: {
		AddToAction: ({commit}, payload) => {
			payload.id = Math.floor(Math.random() * 10000000);
			payload.tag = 'todo';
			commit('addToLists', payload);
		},
		MovetoCompleteAction: ({commit}, payload) => {
			commit('moveToCompleted', payload);
		},
		MovetoArchiveAction: ({commit}, payload) => {
			commit('moveToArchive', payload);
		},
		MovetoTodoAction: ({commit}, payload) => {
			commit('moveToTodo', payload);
		},
	},
});
