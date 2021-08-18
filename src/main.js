import Vue from 'vue'
import VueRouter from 'vue-router';
import App from './App.vue'
import Home from './components/Home.vue';
import Search from './components/Search.vue';
import { store } from './store/store';
import uuid from "vue-uuid";
import BootstrapVue from "bootstrap-vue"
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap-vue/dist/bootstrap-vue.css"

 


Vue.config.productionTip = false

Vue.use(BootstrapVue)
Vue.use(VueRouter);
Vue.use(uuid);

const routes = [
    {
      path: '/', component: Home
    },
    {
      path: '/search', component: Search
    },
]

const router = new VueRouter({
  routes
})

new Vue({
  render: h => h(App),
  store,
  router,
}).$mount('#app')
