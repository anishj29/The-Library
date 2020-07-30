<template>
  <div>
      <v-btn text rounded class="white--text" v-if="!authenticated" @click="login">
        <img src="@/assets/images/gloginlogo.png" alt="Logo" style="width:25px;height:25px;">
        LOGIN</v-btn>
      <div v-if="authenticated">
      <v-btn text rounded class="white--text" @click="logout">
        <img src="@/assets/images/gloginlogo.png" alt="Logo" style="width:25px;height:25px;">
        LOGOUT</v-btn>
      </div>
  </div>
</template>

<script>
import Firebase from '../firebase.js';
export default {
    name: 'Hello',
    props: {
    msg: String
    },
    data () {
      return {
        user: {
          loggedIn: false,
          data: {}
        }
      }  
    },
    computed: {
        authenticated(){
          return this.user.loggedIn
        },
        firstName(){
          if (this.user.data.displayName) {
            return this.user.data.displayName.split(' ')[0]
          }
          return null
        }
    },
    methods: {
      login() {
        Firebase.login();
      },
      logout() {
        Firebase.logout()
      }
    },
    mounted: function() {
      Firebase.auth.onAuthStateChanged( user => {
        if (user) {
          this.user.loggedIn = true;
          this.user.data = user;
        }
        else {
          this.user.loggedIn = false;
          this.user.data = {};
        }
      })
    }
}
</script>