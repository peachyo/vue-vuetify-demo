import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource'
import VueRouter from 'vue-router'
import Routes from './routes'
import Vuetify from 'vuetify'

Vue.use(VueResource);
Vue.use(VueRouter);
Vue.use(Vuetify, {
  theme: {
    primary: '#3f51b5',
    secondary: '#b0bec5',
    accent: '#8c9eff',
    error: '#b71c1c'
  }
});

const router = new VueRouter({
  routes: Routes,
  linkActiveClass: 'is-active',
  mode: 'history'
});

const app = new Vue({
  el: '#app',
  render: h => h(App),
  router: router
})
