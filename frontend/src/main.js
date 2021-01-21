import Vue from 'vue'
import App from './App.vue'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import router from './router'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faWindows } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import axios from 'axios'


library.add(faWindows)

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.prototype.$http = axios

Vue.config.productionTip = false

Vue.use(BootstrapVue)

//const servidor = 'https://ipfinder21.herokuapp.com'
const servidor = 'http://localhost:3000/'

axios.defaults.baseURL = servidor

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
