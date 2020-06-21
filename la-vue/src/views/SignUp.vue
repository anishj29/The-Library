<template>
  <div>
    <login></login>
    <hello></hello>
    <main class="py-4">
      <router-view></router-view>
    </main>
  </div>
</template>

<script>
import hello from '../components/Hello.vue';
import login from '../components/Login.vue';
export default {
  components: {
    hello,
    login
  }
};
</script>