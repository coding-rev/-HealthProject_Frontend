import axios from 'axios';

const base_url = "http://127.0.0.1:8000"

const state = {
  allDoctors: []
}

const mutations = {
    UPDATE_DOCTORS_LIST(state, payload) {
      state.allDoctors = payload;
    }
  }

const actions = {
  getAllDoctors({ commit }) {
    axios.get(base_url+'/all-doctors').then((response) => {
      commit('UPDATE_DOCTORS_LIST', response.data["data"])
    });
  }
}

const getters = {
    allDoctors: state => state.allDoctors,
    allDoctorsById: (state) => (id) => {
      return state.allDoctors.find(doctor => doctor.id === id)
    }
  }


const doctorsModule = {
  state,
  mutations,
  actions,
  getters
}

export default doctorsModule;