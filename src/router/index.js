import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/homePage/HomeView.vue'
import UserFlowManager from '../views/UserFlowManager.vue'
import samplesTags from '../components/samplesTags.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
  {
    path:"/UserFlowManager",
    name:'UserFlowManager',
    component: UserFlowManager
  },
  {
    path: "/samplesTags",
    name: 'samplesTags',
    component: samplesTags
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
