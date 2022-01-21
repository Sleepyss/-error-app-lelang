import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import VueAxios from 'vue-axios'
import axios from 'axios'

axios.defaults.headers.common["Authorization"] = "Bearer " + localStorage.getItem("auth");

Vue.use(VueAxios, axios)

Vue.component('sidebar-component',
require('./components/template/Sidebar.vue').default);
Vue.component('navbar-component',
require('./components/template/Navbar.vue').default);
Vue.component('footer-component',
require('./components/template/Footer.vue').default);

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
