<template>
  <div>
      {{this.item.name}}
      {{this.item.status}}
  </div>
</template>

<script>
export default {
  name: 'QuickViewItem',
  props: ['item'],
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>