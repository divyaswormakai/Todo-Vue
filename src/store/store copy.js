import Vue from 'vue';
import Vuex from 'vuex';

import * as listServices from '../services/listService';

Vue.use(Vuex);

export const store = new Vuex.Store({
	state: {
		lists: [],
		user: JSON.parse(localStorage.getItem('user')),
		mode: JSON.parse(localStorage.getItem('mode')),
	},
	getters: {
		getTodos: async state => {
			if (state.mode === 'localStorage') {
				//make new promise
				let localTodos = localStorage.getItem('todos');

				if (localTodos) {
					return Object.values(JSON.parse(localTodos)).filter(
						elem => elem.tag === 'todo',
					);
				}
			} else {
				let lists = await listServices.getLists();
				console.log(lists);
				return lists;
			}
		},
		getCompleted: state => {
			if (state.lists)
				return state.lists.filter(elem => elem.tag === 'completed');
		},
		getArchived: state => {
			if (state.lists) {
				return state.lists.filter(elem => elem.tag === 'archived');
			}
		},
		getUser: state => {
			if (state.user) {
				return state.user;
			}
		},
		getMode: state => {
			if (state.mode) {
				return state.mode;
			}
		},
	},
	mutations: {
		addToLists: (state, payload) => {
			console.log('Adding to list', payload);
			if (localStorage.getItem('todos') === null) {
				let newArr = [];
				newArr.push(payload);
				localStorage.setItem('todos', JSON.stringify(newArr));
			} else {
				let localTodos = JSON.parse(localStorage.getItem('todos'));
				localTodos.push(payload);
				localStorage.setItem('todos', JSON.stringify(localTodos));
			}
			state.lists = JSON.parse(localStorage.getItem('todos'));
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
		saveUser: (state, payload) => {
			state.user = payload;
			localStorage.setItem('user', JSON.stringify(state.user));
		},
		saveMode: (state, payload) => {
			state.mode = payload;
			localStorage.setItem('mode', JSON.stringify(state.mode));
		},
		logOut: state => {
			localStorage.removeItem('user');
			localStorage.removeItem('mode');
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
		SaveUserAction: ({commit}, payload) => {
			let user = {username: payload.username, password: payload.password};
			commit('saveUser', user);
			commit('saveMode', payload.mode);
		},
		ChangeModeAction: ({commit}, payload) => {
			commit('saveMode', payload);
		},
		LogOutAction: ({commit}) => {
			commit('logOut');
		},
	},
});
