import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default {
  namespaced: true,
  state: {
    Items:[]
  },
  getters: {
    Items(state){
      return  state.Items
    }
  },
  mutations: {
    LLenarItems(state,data){
      state.Items =  data
    }
  },
  actions: {
    cargarImg: async function ({commit}) {
        try {
            const settings = {
                method:'GET'
            }
            const url = 'https://picsum.photos/v2/list?page=2&limit=20'
            const data = await fetch(url, settings)
            const json = await data.json()
            commit('LLenarItems', json)            
        } catch (error) {
            console.log(error);
        }
    }
  }
}
