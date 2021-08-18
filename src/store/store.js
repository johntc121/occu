import Vue from 'vue';
import Vuex from 'vuex';
import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        data: [],

        filteredList: []
    },

    plugins: [createPersistedState()],



    mutations: {
        addData(state, newData){
            state.data.push(newData);
            this.commit('saveData');
        }, 

        deleteItem(state, payload) {
          const i = state.data.map(item => item.id).indexOf(payload.id);
          state.data.splice(i, 1);

          state.data.filter(function(elem){
            if(elem.studentName.includes(payload)){
              const j = state.filteredList.map(item => item.id).indexOf(payload.id);
              state.filteredList.splice(j, 1);
            }
          })
        },

        saveData(state){
          localStorage.setItem('data', JSON.stringify(state.data));
        },

        editData(state, payload){
          console.log(payload);
          const i = state.data.map(item => item.id).indexOf(payload.id);
          console.log(i);
          console.log(state.data[i])
          state.data[i].course = payload.course;
          state.data[i].studentID = payload.studentID;
          state.data[i].studentName = payload.studentName;
          state.data[i].status = payload.status;
        },

        searchData(state, payload){
          state.data.filter(function(elem){
            if(elem.studentName.includes(payload)){
              state.filteredList.push(elem);
            }
          })
          // let foundDuplicate = false;

          // for(let i = 0; i < state.data.length; i++){
          //   if(state.data[i].completedBy.includes(payload)){
          //     for (let j = 0; j < state.filteredList.length; j++) {
          //       if(state.data[i].id == state.filteredList[j].id){
                  
          //         foundDuplicate = true;
          //       }
          //     }
          //     if(foundDuplicate == false) {
          //       state.filteredList.push(state.data[i]);
          //     }
          //   }
          // }
        
          
        },

        clearFilteredList(state){
          state.filteredList = [];
        }

    },
    getters: {

        //data: state =>  state.data
        data: state => {
          return state.filteredList.length == 0 ? state.data : state.filteredList;
        }
    }

})