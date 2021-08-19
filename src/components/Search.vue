<template>
  <div>
    <div class="search">
      <input type="text" v-model='search' v-on:input="searchList" placeholder="Search By Student Name...">
    </div>
    
    <div class="form">
      <div class="dataForm">
          <form @submit="addData">
              <input required type="text" class= "formText" v-model="course" placeholder="Course..."><br>
              <input required type="text" class= "formText" v-model="studentID" placeholder="StudentID..."><br>
              <input required type="text" class= "formText" v-model="studentName" placeholder="Student Name..."><br>
              
              <select required class="select" v-model="status">
                  <option disabled value="">Please select a status</option>
                  <option>Fail</option>
                  <option>Warn</option>
                  <option>Pass</option>
              </select><br>
              <input class="submitBtn" type="submit" value="Submit">
          </form>
      </div>
    </div>

    <div class="dataList">
      <div v-bind:key="item.id" v-for="(item, index) in this.$store.getters.data">
        <FullViewItem v-bind:item="item" v-bind:index="index"></FullViewItem>
      </div>
    </div>
    
    
  </div>
</template>

<script>

import { uuid } from 'vue-uuid'; 
import FullViewItem from './FullViewItem.vue'
export default {
  name: 'Search',
  components: {
    // Form,
    FullViewItem
  },
  data() {
      return {
          search: '',
          updatedAt: '',
          course: '',
          studentID: '',
          studentName: '',
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
          updatedAt: new Date().toLocaleString(),
          course: this.course,
          studentID: this.studentID,
          studentName: this.studentName,
          status: this.status
        };
        

        this.$store.commit('addData', newData);
        
        this.course = '';
        this.studentID = '';
        this.studentName = '';
        this.status = '';

        //e.target.reset();
        console.log(this.$store.getters.data);
      },

      searchList(){
        this.$store.commit('clearFilteredList');
        if(this.search != ''){
          this.$store.commit('searchData', this.search);
        }

        
        
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .search {
    width: 100%;
    margin-bottom: 32px;
  }

  .search input {
    width: 80%;
    
  }

  .formText {
    width: 60%;
    margin-bottom: 8px;
  }

  .dataForm {
    display: flex;
    flex-direction: column;
  }

  input[type=text] {
    background-color: white;
    border: 2px solid #e7e7e7;
    border-radius: 4px;
    padding-left: 40px;
  }

  .select {
    width: 75%;
    background-color: white;
    border: 2px solid #e7e7e7;
    border-radius: 4px;
    padding-left: 40px;
  }

  .submitBtn {
    margin: 2em;
    border: 2px solid #e7e7e7;
    background-color: white;
    color: black;
    padding: 8px 16px;
    font-size: 16px;
    cursor: pointer;
    color: black;
    border-radius: 4px;
  }

  .submitBtn:hover {
    background: #e7e7e7;
}

.dataList {
    display: flex;
    flex-direction: column;
    align-content: space-between;
    align-items: center;
    justify-content: center;
}
  
</style>