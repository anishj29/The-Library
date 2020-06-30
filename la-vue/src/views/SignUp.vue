<template>
  <div>
    <v-container>
       <hello></hello>
    </v-container>
     <main class="py-4">
      <router-view></router-view>
    </main>
  </div>
</template>

<script>
import hello from '../components/Hello.vue';
export default {
  components: {
    hello
  }
};
</script>