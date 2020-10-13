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
    page: 1
  },
  mutations: {
    changePage (state, page) {
      state.page = page
    },
    addPage (state, page) {
      state.page += page;
    }
  },
  getters: {
    getPage: state => {
      return state.page
    }
  }
})


new Vue({
  router,
  vuetify,
  store: store,
  render: h => h(App)
}).$mount('#app')