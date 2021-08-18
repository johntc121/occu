<template>
  <div class="navbar-c">
    <router-link to='/'><button class="navBtn">Home</button></router-link>
    <router-link to='/search'><button class="navBtn">Search</button></router-link>
  </div>
</template>

<script>
export default {
  name: 'Navbar',
  props: {
    
  }
}
</script>

<style scoped>
  .navBtn {
    margin-bottom: 3em;
    border: 2px solid #e7e7e7;
    background-color: white;
    color: black;
    padding: 14px 28px;
    font-size: 16px;
    cursor: pointer;
    color: black;
    border-radius: 4px;
  }

  .navBtn:hover {
    background: #e7e7e7;
}
</style>