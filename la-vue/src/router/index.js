import Vue from 'vue'
import Router  from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import(/* webpackChunkName: "about" */ '../components/Hello.vue')
  },
  {
    path: '/contact',
    name: 'Contact',
    component: () => import('../views/Contact.vue') 
  },
  {
    path: '/library',
    name: 'Library',
    component: () => import('../views/Library.vue') 
  },
   {
    path: '/1984pdf',
    name: '1984pdf',
    component: () => import('../views/1984pdf.vue') 
  }
]
});

export default router
