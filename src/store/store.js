import Vue from 'vue';
import Vuex from 'vuex';

import { localStorageModule } from '@/store/localModule';
import { serverStorageModule } from '@/store/serverModule';

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    user: JSON.parse(localStorage.getItem('user')),
    mode: JSON.parse(localStorage.getItem('mode'))
  },
  modules: {
    localStorage: localStorageModule,
    jsonServer: serverStorageModule
  },
  getters: {
    getUser: state => {
      if (state.user) {
        return state.user;
      }
    },
    getMode: state => {
      if (state.mode) {
        return state.mode;
      }
    }
  },
  mutations: {
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
    }
  },
  actions: {
    SaveUserAction: ({ commit }, payload) => {
      let user = { username: payload.username, password: payload.password };
      commit('saveUser', user);
      commit('saveMode', payload.mode);
    },
    ChangeModeAction: ({ commit }, payload) => {
      commit('saveMode', payload);
    },
    LogOutAction: ({ commit }) => {
      commit('logOut');
    }
  }
});
