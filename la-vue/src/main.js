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
    count: 0
  },
  mutations: {
    increment (state) {
      state.count++
    }
  }
})


new Vue({
  router,
  vuetify,
  store: store,
  render: h => h(App)
}).$mount('#app')