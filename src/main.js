import Vue from 'vue'
import App from './App.vue'
import router from './router'

import VueAxios from 'vue-axios'
import axios from 'axios'

Vue.config.productionTip = false

Vue.use(VueAxios, axios)

Vue.component('sidebar-component',
require('./components/template/Sidebar.vue').default);
Vue.component('navbar-component',
require('./components/template/Navbar.vue').default);
Vue.component('footer-component',
require('./components/template/Footer.vue').default);

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
