<template>
  <div>
    <navbar></navbar>
    <login></login>
    <main class="py-4">
      <router-view></router-view>
    </main>
  </div>
</template>

<script>
import navbar from '../components/Navbar.vue';
import login from '../components/Login.vue';
export default {
  components: {
    navbar,
    login
  }
};
</script>