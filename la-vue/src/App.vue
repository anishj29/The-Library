<template>
  <v-app id="body">
      <v-app-bar app color="blue-grey darken-4">
        <v-toolbar-title class="mx-10">
          <img src="@/assets/images/Logo.png" alt="Logo" style="width:60px;height:60px;">
        </v-toolbar-title>
        <v-btn text dark rounded to="/">Home</v-btn>
        <v-btn text dark rounded to ="/library">Library</v-btn>
        <hello></hello>
        <v-btn text dark rounded to="/tester">Tester</v-btn>
        <v-btn text dark rounded to ="/1984pdf">1984</v-btn>
        <v-btn text dark rounded to ="/contact">Contact</v-btn>
      </v-app-bar>
      
      <v-content>
          <router-view></router-view>
      </v-content>
  </v-app>
</template>

<script>
import hello from '@/components/Hello.vue';
export default {
  components: {
    hello
  },
};
</script>
