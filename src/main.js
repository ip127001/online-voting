import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import router from './router'
import { store } from './store/store';

Vue.use(VueRouter)
Vue.use(VueResource);

new Vue({
  router,
  el: '#app',
  store,
  render: h => h(App)
});
