import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/doctors',
    name: 'DoctorsPage',
    component: () => import('../views/DoctorsPage.vue')
  },
  {
    path: '/patients',
    name: 'PatientsPage',
    component: () => import('../views/PatientsPage.vue')
  },
  {
    path: '/appointments',
    name: 'AppointmentsPage',
    component: () => import('../views/AppointmentsPage.vue')
  },
  {
    path: '/doctor-schedule',
    name: 'DoctorSchedule',
    component: () => import('../views/DoctorSchedule.vue')
  },
  {
    path: '/settings',
    name: 'Settings',
    component: () => import('../views/Settings.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
