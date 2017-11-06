// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// import {MessageBox} from 'element-ui'
import nodeRSA from 'node-rsa'
// import crypto from 'crypto'


// Vue.use(ElementUI)
var pubkey =  '-----BEGIN RSA PRIVATE KEY-----\n'+
              'MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAq+4qv8GRZVopdpiic7in\n' +
              'PC2NgCWiUklgVI4QoUSLm7x0X8CiIsYLrG5t0SCWcTkCEwkR3wuq0HM3omwMGYNz\n' +
              'cGjjyM1E/MeipYBeMdDHzSN3k5M2E/FT4miCy5DUB1isrzt+pxiobAVISC4+Lsxa\n' +
              'xHu//uUF4m4bFIRS3WRdJ1KXmw0a4v2CsvS1uQRnXnmh/WgiNWOKuZCJ3hRQvun3\n' +
              'XXt4xTrOUectkazqwaxvNQcfOVddV69y6CaUkAzzbw97+ZkKYY4m8jRZmkKLYUpi\n' +
              'rAa4Aue/z5H54BLJxgCd2xOkoqDN371AeavbrSw6WVnBuTT70U3ya4ZRrgragXRm\n' +
              'MwIDAQAB\n' +
              '-----END RSA PRIVATE KEY-----';


Vue.prototype.$rsakey = new nodeRSA(pubkey)

// Vue.prototype.$rsakey1 = new nodeRSA(key)

// var data = "cdss";
// // //加密
// var sign = crypto.createSign('RSA-SHA256');
// sign.update(data);
// var sig = sign.sign(key, 'hex');
// console.log(sign);
// //解密
// var verify = crypto.createVerify('RSA-SHA256');
// verify.update(data);
// console.log(verify.verify(pubkey, sig, 'hex'));

Vue.prototype.$msgbox = MessageBox
Vue.prototype.$alert = MessageBox.alert
Vue.prototype.$confirm = MessageBox.confirm
Vue.prototype.$prompt = MessageBox.prompt

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
