<template>
  <div>
    <h2>Search</h2>
    <Form />
    <FullView/>
    
  </div>
</template>

<script>
import Form from './Form.vue';
import FullView from './FullView.vue'
export default {
  name: 'Search',
  components: {
    Form,
    FullView
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>