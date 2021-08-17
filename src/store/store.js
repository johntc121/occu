import Vue from 'vue';
import Vuex from 'vuex';
import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        data: [
            {
              id: 1,
              name: "Work",
              details: "Go to Work",
              completedBy: "John",
              status: "Passed",
            },
            {
              id: 2,
              name: "Clean",
              details: "Clean building",
              completedBy: "John",
              status: "Warn",
            }
          ]
    },

    plugins: [createPersistedState()],

    mutations: {
        addData(state, newData){
            state.data.push(newData);
            this.commit('saveData');
        }, 

        deleteItem(state, payload) {
          const arr = state.data.map(item => item.id).indexOf(payload.id);
          state.data.splice(arr, 1);
        },

        saveData(state){
          localStorage.setItem('data', JSON.stringify(state.data));
        }






        
    },
    getters: {
        data: state => state.data
    }

})