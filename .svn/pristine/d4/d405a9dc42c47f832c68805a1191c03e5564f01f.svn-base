// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
// import Vuex from 'vuex'
import store from './store'
import {MessageBox} from 'element-ui'
import nodeRSA from 'node-rsa'

import keyboard from '@/keyboard'
Vue.use(keyboard)

//Vue.prototype.$rsakey = new nodeRSA({b: 512})

Vue.prototype.$msgbox = MessageBox
Vue.prototype.$alert = MessageBox.alert
Vue.prototype.$confirm = MessageBox.confirm
Vue.prototype.$prompt = MessageBox.prompt

// import utils from './utils'
// Vue.prototype.$utils = utils

Vue.config.productionTip = false
Vue.prototype.$http = axios

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
