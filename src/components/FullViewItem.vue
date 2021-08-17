<template>
  <div>
      {{this.item.name}}
      {{this.item.details}}
      {{this.item.completedBy}}
      {{this.item.status}}
      <button v-on:click="editItem">Edit</button>
      <button v-on:click="deleteItem">Delete</button>
  </div>
</template>

<script>
export default {
  name: 'FullViewItem',
  props: ['item'],

  methods: {
    editItem() {
      console.log('edit: ' + this.item.id);
    },
    deleteItem() {
      this.$store.commit('deleteItem', this.item);
      console.log(this.item.id);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>