export const localStorageModule = {
  namespaced: true,
  state: () => ({
    lists: JSON.parse(localStorage.getItem('todos'))
  }),
  getters: {
    getTodos: state => {
      if (state.lists) {
        return state.lists.filter(elem => elem.tag === 'todo');
      }
    },
    getCompleted: state => {
      if (state.lists) {
        return state.lists.filter(elem => elem.tag === 'completed');
      }
    },
    getArchived: state => {
      if (state.lists) {
        return state.lists.filter(elem => elem.tag === 'archived');
      }
    },
    getOne: state => param => {
      if (state.lists) {
        console.log(param);
        return state.lists.find(elem => elem.id === param);
      }
    },
    getInfo: state => {
      if (state.lists) {
        let infoObj = {};
        infoObj.todo = state.lists.filter(elem => elem.tag === 'todo');
        infoObj.completed = state.lists.filter(
          elem => elem.tag === 'completed'
        );
        infoObj.archived = state.lists.filter(elem => elem.tag === 'archived');
        return infoObj;
      }
    }
  },
  mutations: {
    addToLists: (state, payload) => {
      console.log('Adding to list', payload);
      if (state.lists) {
        state.lists = state.lists.concat(payload);
      } else {
        //  in case the state is empty
        let tempArr = [];
        tempArr.push(payload);
        state.lists = tempArr;
      }
      localStorage.setItem('todos', JSON.stringify(state.lists));
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
    }
  },
  actions: {
    AddToAction: ({ commit }, payload) => {
      payload.id = Math.floor(Math.random() * 10000000);
      payload.tag = 'todo';
      commit('addToLists', payload);
    },
    MovetoCompleteAction: ({ commit }, payload) => {
      commit('moveToCompleted', payload);
    },
    MovetoArchiveAction: ({ commit }, payload) => {
      commit('moveToArchive', payload);
    },
    MovetoTodoAction: ({ commit }, payload) => {
      commit('moveToTodo', payload);
    }
  }
};
