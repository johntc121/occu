<template>
  <div>
    <div v-bind:key="item.id" v-for="item in this.$store.getters.data">
      <QuickViewItem v-bind:item="item"></QuickViewItem>
    </div>
  </div>
</template>

<script>
import QuickViewItem from './QuickViewItem.vue';
export default {
  name: 'QuickView',
  components: {
      QuickViewItem
  },
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>