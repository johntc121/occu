<template>
  <div id="app">
    <Navbar />
    <h1>hewllo</h1>
    <router-view></router-view>

  </div>
</template>

<script>
// import Home from './components/Home.vue'
import Navbar from './components/Navbar.vue'
// import Data from './components/Data.vue'

export default {
  name: 'App',
  components: {
    Navbar,
  },

  props: {
    
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
