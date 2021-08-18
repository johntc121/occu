<template>
  <div class="item">
      <span class="itemDetails">{{this.item.name}}</span>
      <span class="itemDetails">{{this.item.details}}</span>
      <span class="itemDetails">{{this.item.completedBy}}</span>
      <span :style="[this.item.status == 'Fail' ? {'color': 'red'} : this.item.status == 'Warn' ? {'color': 'yellow'} : {'color': 'green'}]" class="itemDetails">{{this.item.status}}</span>
      <span>
        <button v-b-modal:[`edit-modal-${index}`]>Edit</button>
        <button v-on:click="deleteItem">Delete</button>
        <button v-on:click="copyItem">Copy</button>
      </span>

      <div>
        <b-modal :id="`edit-modal-${index}`" title="BootstrapVue">
          <form @submit="editItem">
              <input v-model="name">
              <input v-model="details">
              <input v-model="completedBy">
              <select v-model="status">
                  <option value='Fail'>Fail</option>
                  <option value='Warn'>Warn</option>
                  <option value='Pass'>Pass</option>
              </select><br>
              <input type="submit" value="Submit" @click="$bvModal.hide('modal-1')">
          </form>
        </b-modal>
      </div>
  </div>
</template>

<script>
export default {
  name: 'FullViewItem',
  props: ['item', 'index'],
  data() {
      return {
          name: this.item.name,
          details: this.item.details,
          completedBy: this.item.completedBy,
          status: this.item.status,
          data: [],
      }
  },

  methods: {
    editItem(e) {
      console.log(this.status);
      e.preventDefault();
        
      const newData = {
        id: this.item.id,
        name: this.name,
        details: this.details,
        completedBy: this.completedBy,
        status: this.status
      };

      this.$store.commit('editData', newData);
    },
    deleteItem() {
      this.$store.commit('deleteItem', this.item);
    },

    copyItem() {
      const newID = this.$uuid.v4();
      const data = {
        id: newID,
        name: this.name,
        details: this.details,
        completedBy: this.completedBy,
        status: this.status
      }
      console.log(data);
      //this.$store.commit('addItem', data);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .item {
    display: flex;
    flex-direction: row;
    align-content: center;
    align-items: center;
    justify-content: space-around;

    
  }

  .itemDetails {
    margin: 0 1em;
  }

  button {
    margin: 0 4px;
    border: 2px solid #e7e7e7;
    background-color: white;
    color: black;
    padding: 8px 12px;
    font-size: 16px;
    cursor: pointer;
    color: black;
    border-radius: 4px;
  }

  button:hover {
    background: #e7e7e7;
  }

  option[value=fail]{
    color: red;
  }
</style>