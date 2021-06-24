import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {path: '/', name: 'Home', component: Home },
  {path: '/list_cargos', name:'list_cargos', component: () => import('../views/Cargos.vue')},
  {path: '/cargos', name:'cargos', component: () => import('../views/ListCargos.vue')},
  {path: '/cargos/new', name:'NewCargo', component: () => import('../views/NewCargo.vue')},
  {path: '/cargos/:cargoId/edit', name:'EditCargo', component: () => import('../views/EditCargo.vue')},
  {path: '/autoridades', name:'autoridades', component: () => import('../components/Autoridades.vue')},    
  
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
