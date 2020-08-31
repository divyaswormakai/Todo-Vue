import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
	state: {
		lists: [
			{id: 1, content: 'This is content', tag: 'todo'},
			{id: 2, content: 'Second content', tag: 'todo'},
			{id: 3, content: 'Completed content', tag: 'completed'},
			{id: 4, content: 'Archived content', tag: 'archived'},
		],
		user: {},
	},
	getters: {
		getTodos: state => {
			return state.lists.filter(elem => elem.tag === 'todo');
		},
		getCompleted: state => {
			return state.lists.filter(elem => elem.tag === 'completed');
		},
		getArchived: state => {
			return state.lists.filter(elem => elem.tag === 'archived');
		},
		getUser: state => {
			return state.user;
		},
	},
	mutations: {
		addToLists: (state, payload) => {
			state.lists = state.lists.concat(payload);
		},
		moveToCompleted: (state, payload) => {
			state.lists = state.lists.map(elem => {
				if (elem.id === payload.id) {
					elem.tag = 'completed';
				}
				return elem;
			});
		},
		moveToArchive: (state, payload) => {
			state.lists = state.lists.map(elem => {
				if (elem.id === payload.id) {
					elem.tag = 'archived';
				}
				return elem;
			});
		},
		moveToTodo: (state, payload) => {
			state.lists = state.lists.map(elem => {
				if (elem.id === payload.id) {
					elem.tag = 'todo';
				}
				return elem;
			});
		},
		saveUser: (state, payload) => {
			state.user = payload;
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
			console.log(payload);
			commit('moveToArchive', payload);
		},
		MovetoTodoAction: ({commit}, payload) => {
			commit('moveToTodo', payload);
		},

		SaveUserAction: ({commit}, payload) => {
			commit('saveUser', payload);
		},
	},
});
