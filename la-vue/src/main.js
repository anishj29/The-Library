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
    dialog: false,
    loggedIn: null,
    dialogLogIn: false,
    dialogSignUp: false
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
    },
    noSignIn(state, dialog) {
      state.dialog = dialog;
    },
    dialogLogIn(state, dialogLogIn) {
      state.dialogLogIn = dialogLogIn;
    },
    dialogSignUp(state, dialogSignUp) {
      state.dialogSignUp = dialogSignUp;
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
    },
    noSignIn: state => {
      return state.dialog
    },
    getDialogLogIn: state => {
      return state.dialogLogIn
    },
    getDialogSignUp: state => {
      return state.dialogSignUp
    }
  }
})


new Vue({
  router,
  vuetify,
  store: store,
  render: h => h(App)
}).$mount('#app')