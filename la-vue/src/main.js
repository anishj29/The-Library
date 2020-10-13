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
    summary: ""
  },
  mutations: {
    changePage (state, page) {
      state.page = page
    },
    changeSummary(state, summary) {
      state.summary = summary;
    },
    addPage (state, page) {
      state.page += page;
    }
  },
  getters: {
    getPage: state => {
      return state.page
    },
    getSummary: state => {
      return state.summary
    }
  }
})


new Vue({
  router,
  vuetify,
  store: store,
  render: h => h(App)
}).$mount('#app')