<template>
  <div class="form">
    <h2>Data</h2>

    <div class="dataForm">
        <form @submit="addData">
            <input v-model="name" placeholder="Name...">
            <p>Name: {{ name }}</p>

            <input v-model="details" placeholder="Details...">
            <p>Details: {{ details }}</p>

            <input v-model="completedBy" placeholder="Completed By...">
            <p>Completed By: {{ completedBy }}</p>

            <select v-model="status">
                <option disabled value="">Please select a status</option>
                <option>Fail</option>
                <option>Warn</option>
                <option>Pass</option>
            </select><br>
            <span>Status: {{ status }}</span>

            <input type="submit" value="Submit">
        </form>
    </div>

    <div class="dataList">
      
    </div>
  </div>
</template>

<script>
import { uuid } from 'vue-uuid'; 

export default {
  name: 'Form',
  props: {
    
  },
  data() {
      return {
          name: '',
          details: '',
          completedBy: '',
          status: '',
          data: [],
          uuid: uuid.v1(),
          id: null
      }
  },

  methods: {
      addData(e) {
        e.preventDefault();
        
        const newID = this.$uuid.v4();
        const newData = {
          id: newID,
          name: this.name,
          details: this.details,
          completedBy: this.completedBy,
          status: this.status
        };
        this.data.push(newData);

        this.$store.commit('addData', newData);
        
        this.name = '';
        this.details = '';
        this.completedBy = '';
        this.status = '';

        //e.target.reset();
        console.log(this.$store.getters.data);
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
