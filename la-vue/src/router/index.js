import Vue from 'vue'
import Router  from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../components/Login.vue';
import SignUp from '../components/Signup.vue';
import ForgotPassword from '../components/ForgotPassword.vue'
import tester from '../components/tester.vue';


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
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/signup',
    name: 'Signup',
    component: SignUp
  },
  {
    path: '/forgot-password',
    name: 'ForgotPassword',
    component: ForgotPassword
  },
  {
    path: '/tester',
    name: 'tester',
    component: tester
  },
  {
    path: '/1984pdf',
    name: '1984pdf',
    component: () => import('../views/1984pdf.vue') 
  }
]
});
export default router;
