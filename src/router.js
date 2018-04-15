import VueRouter from 'vue-router';
import Vue from 'vue'
import AuthSuccess from './components/AuthSuccess.vue';
import InitPage from './components/InitPage.vue';
import Congrates from './components/congrates.vue';

const router = new VueRouter({
  mode: 'history',
  routes: [
    { path: '/', component: InitPage},
    { path: '/success', component: AuthSuccess },
    { path: '/congrates', component: Congrates}
  ]
});


export default router;