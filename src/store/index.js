// import { createStore } from 'vuex'
// import doctor from'./modules/doctors';
// import patient from './modules/patients';

// export default createStore({
//   modules: {
//     doctor,
//     patient
//   }
// })

import Vue from 'vue'
import Vuex from 'vuex'
import doctor from './modules/doctors'

Vue.use(Vuex);

export default new Vuex.Store({
  modules:{
    doctor
  }
})