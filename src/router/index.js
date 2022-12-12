import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/homePage/HomeView.vue'
import UserFlowManager from '../views/UserFlowManager.vue'
import ResultsPage from '../views/userFlow/ResultsPage.vue'
import samplesTags from '../components/samplesTags.vue'
import LabDetail from '../views/userFlow/LabDetail.vue';
import SamplesFrom from '../views/userFlow/SamplesForm.vue';
import Login from '../views/userFlow/Login.vue';
import SubmissionForm from '../views/userFlow/SubmissionForm.vue';
import FinalSteps from '../views/userFlow/FinalSteps.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
  {
    path:"/UserFlowManager",
    component: UserFlowManager,
    children:[
      {
        path: "/:analysisOf",
        name: 'ResultsPage',
        component: ResultsPage,
        props: true
      },
      {
        path:'/labDetail/:labId',
        name: 'labDetail',
        component: LabDetail,
        props:true
      },
      {
        path:'/samplesForm/:labId',
        name: 'samplesForm',
        component: SamplesFrom
      },
      {
        path:'/login',
        name: 'login',
        component: Login,
        props: true
      },
      {
        path:'/submissionForm/:labId/:tableId',
        name: 'submissionForm',
        component: SubmissionForm
      },
      {
        path:'/finalSteps',
        name: 'finalSteps',
        component:FinalSteps
      },
      {
        path: "/samplesTags",
        name: 'samplesTags',
        component: samplesTags
      }
    ]
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
