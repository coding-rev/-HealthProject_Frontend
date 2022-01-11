import axios from 'axios';

const state = {
  allPatients: []
}

const mutations = {
    UPDATE_PATIENTS_LIST(state, payload) {
      state.allPatients = payload;
    }
  }

const actions = {
  getAllPatients({ commit }) {
    axios.get(`/api/products`).then((response) => {
      commit('UPDATE_PATIENTS_LIST', response.data)
    });
  }
}

const getters = {
    allPatients: state => state.allPatients,
    allPatientsById: (state) => (id) => {
      return state.allPatients.find(patient => patient.id === id)
    }
  }


const patientsModule = {
  state,
  mutations,
  actions,
  getters
}

export default patientsModule;