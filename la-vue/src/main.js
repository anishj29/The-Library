import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import vuetify from '@/plugins/vuetify'
import { firestorePlugin } from 'vuefire'
import Vuex from 'vuex'

Vue.use(firestorePlugin)
Vue.config.productionTip = false


Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    page: 1,
    summary: "",
    quote: "",
    email: "",
    loggedIn: null,
  },
  mutations: {
    changePage (state, page) {
      state.page = page
    },
    changeSummary(state, summary) {
      state.summary = summary;
    },
    changeQuote(state, quote) {
      state.quote = quote;
    },
    assignUser(state, email) {
      state.email = email;
    },
    loggedIn(state, loggedIn) {
      state.loggedIn = loggedIn;
    }
  },
  getters: {
    getPage: state => {
      return state.page
    },
    getQuote: state => {
      return state.quote
    },
    getSummary: state => {
      return state.summary
    },
    getUser: state => {
      return state.email
    },
    getLoggedIn: state => {
      return state.loggedIn
    }
  }
})


new Vue({
  router,
  vuetify,
  store: store,
  render: h => h(App)
}).$mount('#app')