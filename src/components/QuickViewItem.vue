<template>
  <div class="item">
      <span class="itemDetails">{{this.item.studentName}}</span>
      <span :style="[this.item.status == 'Fail' ? {'color': 'red'} : this.item.status == 'Warn' ? {'color': 'yellow'} : {'color': 'green'}]" class="itemDetails">{{this.item.status}}</span>
      
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
  .item {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
  }

  .itemDetails {
    margin: 0 1em;
  }

</style>