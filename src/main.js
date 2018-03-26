import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Routes from './routes'
import VueSweetalert2 from 'vue-sweetalert2';

Vue.use(VueSweetalert2);
Vue.use(VueRouter);

const router = new VueRouter({
    mode: 'history',
    routes: Routes
});
new Vue({
  el: '#app',
  render: h => h(App),
    router: router
})
