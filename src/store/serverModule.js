import Vue from 'vue';
import Vuex from 'vuex';

import * as listServices from '../services/listService';

export const serverStorageModule = {
	namespaced: true,
	state: async () => ({
		lists: await listServices.getLists(),
	}),
	getters: {
		getTodos: async state => {
			state.lists = await listServices.getLists();
			if (state.lists) {
				return state.lists.filter(elem => elem.tag === 'todo');
			}
		},
		getCompleted: async state => {
			state.lists = await listServices.getLists();
			if (state.lists) {
				let temp = state.lists.filter(elem => elem.tag === 'completed');
				console.log(temp);
				return temp;
			}
		},
		getArchived: async state => {
			state.lists = await listServices.getLists();
			if (state.lists) {
				return state.lists.filter(elem => elem.tag === 'archived');
			}
		},
	},
	mutations: {
		addToLists: async (state, payload) => {
			let addedVal = await listServices.addtoList(payload);
			state.lists = await listServices.getLists();
			console.log(state.lists[state.lists.length - 1]);
		},
		moveToCompleted: async (state, payload) => {
			payload.tag = 'completed';
			let updatedVal = await listServices.updateList(payload);
		},
		moveToArchive: async (state, payload) => {
			console.log('Archigin');
			payload.tag = 'archived';
			let updatedVal = await listServices.updateList(payload);
		},
		moveToTodo: async (state, payload) => {
			payload.tag = 'todo';
			let updatedVal = await listServices.updateList(payload);
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
};
