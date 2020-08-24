import Vue from 'vue'
import App from './App.vue'
import VueFire from 'vuefire';
import router from './router/index'
import vuetify from '@/plugins/vuetify' // path to vuetify export
import Vuelidate from 'vuelidate'

Vue.use(VueFire);
Vue.use(Vuelidate)
Vue.config.productionTip = false
new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')