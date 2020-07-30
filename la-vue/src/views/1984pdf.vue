<template>
  <div id="PDF1984">
    <!-- <WebViewer :path="`${publicPath}lib`" url="https://www.planetebook.com/free-ebooks/1984.pdf"/> -->
  </div>
</template>

<script>
import WebViewer from '../components/WebViewer.vue'
export default {
  name: 'PDF1984',
  components: {
    WebViewer
  },
  data () {
    return {
      publicPath: process.env.BASE_URL
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>