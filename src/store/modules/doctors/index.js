import axios from 'axios';

const base_url = 'http://127.0.0.1:8000'

const state = {
  allDoctorsArray: [
    {
      "id":1,
      "name":"Doctor One"
    },
    {
      "id":2,
      "name":"Doctor Two"
    }
  ]
}

const mutations = {
    update_allDoctors_list: (state, allDoctorsArray) => state.allDoctorsArray = tasks
  }

const actions = {
  // Fetching all doctors
  async fetchAllDoctors({ commit }){
      const response = await axios.get(base_url+'/all-doctors');
      console.log(response.data)
      commit('update_allDoctors_list', response.data['data'])
  },
}

const getters = {
    allDoctors: state =>  state.allDoctorsArray
  }

export default{
  state,
  mutations,
  actions,
  getters
};