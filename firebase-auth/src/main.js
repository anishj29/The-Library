import Vue from "vue";
import App from "./App.vue";
import router from "./routes/index";
import * as firebase from "firebase";
import store from "./store";

Vue.config.productionTip = false;

const configOptions = {
  apiKey: "AIzaSyCcNwGm6OIClebIx_K824lIfJkPeDssA54",
  authDomain: "la-project-3fd8e.firebaseapp.com",
  databaseURL: "https://la-project-3fd8e.firebaseio.com",
  projectId: "la-project-3fd8e",
  storageBucket: "la-project-3fd8e.appspot.com",
  messagingSenderId: "816345200412",
  appId: "1:816345200412:web:8d88e9041e10ec95396cd9",
  measurementId: "G-MQR88GMSTV"
}

firebase.initializeApp(configOptions);

firebase.auth().onAuthStateChanged(user => {
  store.dispatch("fetchUser", user);
});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
