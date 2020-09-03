import Vue from 'vue';
import Vuex from 'vuex';

import * as listServices from '../services/listService';

export const serverStorageModule = {
	namespaced: true,
	state: async () => ({
		lists: [],
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
		getInfo: async state => {
			state.lists = await listServices.getLists();

			if (state.lists) {
				let infoObj = {};
				infoObj.todo = state.lists.filter(elem => elem.tag === 'todo');
				infoObj.completed = state.lists.filter(
					elem => elem.tag === 'completed',
				);
				infoObj.archived = state.lists.filter(
					elem => elem.tag === 'archived',
				);
				return infoObj;
			}
		},
	},

	actions: {
		AddToAction: async (context, payload) => {
			payload.id = Math.floor(Math.random() * 10000000);
			payload.tag = 'todo';
			await listServices.addtoList(payload);
		},
		MovetoCompleteAction: async (context, payload) => {
			payload.tag = 'completed';
			await listServices.updateList(payload);
		},
		MovetoArchiveAction: async (context, payload) => {
			payload.tag = 'archived';
			await listServices.updateList(payload);
		},
		MovetoTodoAction: async (context, payload) => {
			payload.tag = 'todo';
			await listServices.updateList(payload);
		},
	},
};
