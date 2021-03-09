import Vue from 'vue'
import VueRouter from 'vue-router'
import FriedChicken from '../views/FriedChicken.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/friedChicken',
    name: 'FriedChicken',
    component: FriedChicken
  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
