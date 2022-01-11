import { createStore } from 'vuex'
import doctor from'./modules/doctors';
import patient from './modules/patients';

export default createStore({
  modules: {
    doctor,
    patient
  }
})