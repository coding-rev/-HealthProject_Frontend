import { createStore } from 'vuex'
import axios from 'axios';
// const base_url = 'http://127.0.0.1:8000'
const base_url = 'https://healthprojectapi.herokuapp.com'

export default createStore({
  state: {
    // Doctors States
    allDoctors:[],

    // Patients States
    allPatients:[]
  },
  mutations: {
    // Doctors mutations
    update_allDoctors_list: (state, newData) => state.allDoctors = newData,
    
    // Patients mutations
    update_allPatients_list: (state, newData) => state.allPatients = newData
  },
  actions: {
    // Doctors Actions
    async fetchAllDoctors({ commit }){
      const response = await axios.get(base_url+'/all-doctors');
      commit('update_allDoctors_list', response.data['data'])
    },
    
    // Patients Actions
    async fetchAllPatients({ commit }){
      const response = await axios.get(base_url+'/all-patients');
      commit('update_allPatients_list', response.data['data'])
    },
  },
  modules: {
  }
})
