import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import doctorStore from './store/modules/doctors'

createApp(App).use(router).use(doctorStore).mount('#app')
