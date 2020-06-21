<template>
<div class="hello">
    <button v-if="!authenticated" @click="login">Login</button>
    <div v-if="authenticated">
        <button @click="logout">Logout</button>
        <h1>Hi {{ firstName }}!</h1>
        <h1>{{ msg }}</h1>
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