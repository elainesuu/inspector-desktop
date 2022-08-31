import Vue from 'vue'
import VueRouter from 'vue-router'
import LoginView from '../views/LoginView.vue'
import CaseList from '../views/CaseList.vue'
import PlateNumber from '../views/PlateNumber.vue'
import ImageUpload from '../views/ImageUpload.vue'
import CaseResult from '../views/CaseResult.vue'
import SettingsView from '../views/SettingsView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'login',
    component: LoginView
  },
  {
    path:'/caselist',
    name: 'caselist',
    component: CaseList
  },
  {
    path:'/platenumber',
    name: 'platenumber',
    component: PlateNumber
  },
  {
    path:'/imageupload',
    name:'imageupload',
    component: ImageUpload
  },
  {
    path:'/caseresult',
    name:'caseresult',
    component: CaseResult
  },
  {
    path:'/settings',
    name:'settings',
    component: SettingsView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
