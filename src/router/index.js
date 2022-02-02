import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {requiresAuth: true}
  },
  {
    path: '/doctors',
    name: 'DoctorsPage',
    meta: {requiresAuth: true},
    component: () => import('../views/DoctorsPage.vue')
  },
  {
    path: '/patients',
    name: 'PatientsPage',
    meta: {requiresAuth: true},
    component: () => import('../views/PatientsPage.vue')
  },
  {
    path: '/appointments',
    name: 'AppointmentsPage',
    meta: {requiresAuth: true},
    component: () => import('../views/AppointmentsPage.vue')
  },
  {
    path: '/doctor-schedule',
    name: 'DoctorSchedule',
    meta: {requiresAuth: true},
    component: () => import('../views/DoctorSchedule.vue')
  },
  {
    path: '/settings',
    name: 'Settings',
    meta: {requiresAuth: true},
    component: () => import('../views/Settings.vue')
  },
  // Auth pages
  {
    path: '/login',
    name: 'Login',
    component: () => import('../auth/Login.vue')
  },
  {
    path: '/register',
    name: 'Register',
    component: () => import('../auth/Register.vue')
  },
  // Sub pages
  {
    path: '/edit-user/:id',
    name: 'EditUser',
    meta: {requiresAuth:true},
    props: true,
    component: () => import('../views/EditUserPage.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

// router middleware
router.beforeEach((to, from, next) => {
  if(to.matched.some((record) => record.meta.requiresAuth)){
    if(localStorage.getItem("isLoggedIn")){
      next()
    }else{
      next('/login')
    }
  }else{
    next()
  }
})

export default router
