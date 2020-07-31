<template>
  <div class="tester">
    <router-link to="/login">Sign In</router-link>
    <router-link to="/signup">Sign Up</router-link>
       <h3>Welcome</h3>
           <p>{{user.displayName}}</p>
           <p>{{user.email}}</p>
        
        <v-btn dark
        type="submit" 
        @click="logOut()">
            Log out
        </v-btn>
  </div>
</template>


<script>
import firebase from "firebase";

export default {
  data() {
    return {
      user: null
    };
  },
  created() {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.user = user;
      } else {
        this.user = null;
      }
    });
  },
  methods: {
    logOut() {
      firebase.auth().signOut().then(() => {
        firebase.auth().onAuthStateChanged(() => {
          this.$router.push('/login')
        })
      })
    }
  }
};
</script>