<template>
  <v-app id="body">
    <v-app-bar app color="blue-grey darken-4">
      <v-toolbar-title class="mx-10">
        <img
          src="@/assets/images/Logo.png"
          alt="Logo"
          style="width: 60px; height: 60px"
        />
      </v-toolbar-title>
      <v-btn text dark rounded to="/">Home</v-btn>
      <v-btn text dark rounded to="/library">Library</v-btn>
      <v-btn text dark rounded @click="dialogSignUp">Sign Up</v-btn>
      <v-btn text dark rounded @click="dialogLogIn">Login</v-btn>
      <v-btn text dark rounded to="/contact">Contact</v-btn>
    </v-app-bar>

    <v-content>
      <router-view></router-view>
      <login></login>
      <signup></signup>
    </v-content>
  </v-app>
</template>

<script>
import signup from '@/components/Signup.vue';
import login from '@/components/Login.vue';

export default {
  components: {
    signup,
    login
  },
  data() {
    return {
      
    }
  },
  methods: {
    dialogSignUp() {
      this.$store.commit('dialogSignUp', true);
    },
    dialogLogIn() {
      this.$store.commit('dialogLogIn', true);
    }
  },
}
</script>
