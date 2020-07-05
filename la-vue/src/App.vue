<template>
  <v-app>
     <v-app-bar class="black darken-1">
        <img src="@/assets/images/Logo.png" alt="Logo" style="width:60px;height:60px;">
        <v-btn rounded to="/">Home</v-btn>
        <v-btn rounded to ="/library">Library</v-btn>
        <hello></hello> 
        <v-btn rounded to ="/1984pdf">1984</v-btn>
        <v-btn rounded to ="/contact">Contact</v-btn>

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
  }
};
</script>
