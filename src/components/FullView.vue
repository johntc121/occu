<template>
  <div>
    <div v-bind:key="item.id" v-for="item in this.$store.getters.data">
      <FullViewItem v-bind:item="item"></FullViewItem>
    </div>
  </div>
</template>

<script>
import FullViewItem from './FullViewItem.vue';
export default {
  name: 'FullView',
  components: {
      FullViewItem
  },
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>