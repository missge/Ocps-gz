// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// import fs from './fs'
import nodeRSA from 'node-rsa'

var pubkey =  '-----BEGIN PUBLIC KEY-----\n'+
              'MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAq+4qv8GRZVopdpiic7in\n' +
              'PC2NgCWiUklgVI4QoUSLm7x0X8CiIsYLrG5t0SCWcTkCEwkR3wuq0HM3omwMGYNz\n' +
              'cGjjyM1E/MeipYBeMdDHzSN3k5M2E/FT4miCy5DUB1isrzt+pxiobAVISC4+Lsxa\n' +
              'xHu//uUF4m4bFIRS3WRdJ1KXmw0a4v2CsvS1uQRnXnmh/WgiNWOKuZCJ3hRQvun3\n' +
              'XXt4xTrOUectkazqwaxvNQcfOVddV69y6CaUkAzzbw97+ZkKYY4m8jRZmkKLYUpi\n' +
              'rAa4Aue/z5H54BLJxgCd2xOkoqDN371AeavbrSw6WVnBuTT70U3ya4ZRrgragXRm\n' +
              'MwIDAQAB\n' +
              '-----END PUBLIC KEY-----';



var key =  	'-----BEGIN RSA PRIVATE KEY-----\n'+
           	'MIIEowIBAAKCAQEAq+4qv8GRZVopdpiic7inPC2NgCWiUklgVI4QoUSLm7x0X8Ci\n' +
						'IsYLrG5t0SCWcTkCEwkR3wuq0HM3omwMGYNzcGjjyM1E/MeipYBeMdDHzSN3k5M2\n' +
						'E/FT4miCy5DUB1isrzt+pxiobAVISC4+LsxaxHu//uUF4m4bFIRS3WRdJ1KXmw0a\n' +
						'4v2CsvS1uQRnXnmh/WgiNWOKuZCJ3hRQvun3XXt4xTrOUectkazqwaxvNQcfOVdd\n' +
						'V69y6CaUkAzzbw97+ZkKYY4m8jRZmkKLYUpirAa4Aue/z5H54BLJxgCd2xOkoqDN\n' +
						'371AeavbrSw6WVnBuTT70U3ya4ZRrgragXRmMwIDAQABAoIBAFOjt3Q1rI/LvuQM\n' +
						'+Oqm5+RknLO8myzAuXYo7nolqG0IzuxOABI+mis2RYI5Ajbubs3n2aPSPzTM+EGx\n' +
						'omk/A4ep3zYudeMrEzrEKg697JUlLeTC9snY2uAHy6lQOXWhc9CDdue/HR//qdxD\n' +
						'csi9bWKseQh9TdGLkuz2OoGtc4vO2+SRKwTrSl4K00odzuRQKvwk6XqLiJHMcsCd\n' +
						'8gtRhXdKZHNit/NE8VNRrDkNHAibP0WIXQ+PgKqpq+bHiHPdTViJgQMlhngdgBYd\n' +
						'JoSYdGBluPa8DbJccJ/tPiZGtvB1+MRmXTRA5Rjf5D9C2oVeWPCPQD4Uo04g1xii\n' +
						'g5IH0YECgYEA2X4RYTL2oalWQyyyZOCxrBWtIyv4vkxyTkm2obJSyf+AiKaEsaXs\n' +
						'aqsIaDCz+gcWN1RNxOc+rCqC+1vDOdYa6CFsELbn5f9bBOAOAcdSeww3i2QXdejV\n' +
						'F0gahkuwLqvI0VYKzIS2xWHpnCM8DVKy5jHxJRAZjKdDoKKeJrVFQpMCgYEAyl76\n' +
						'aWxFQj/XYfvHUHEaE7Vm1TkSo/p6rmT4N2G9cKYSOdVkQ3R0pWHK8YN8dK8UOJYD\n' +
						'U93xnhwQhgq/URbD6IrDcAzIcmXZaN5kjKu42TZY+8vyqwIRzGF7XtSbtc3B4OoV\n' +
						'76teaQctf6uKkipHvH6jwRBm1BI+L2ccHZNGceECgYApeeMymBd0iOiMcu+qUTdQ\n' +
						'y+lytaYAFHAQAfq0J1+mafVHGgpgHnZReUBnLjKEUemor4kNLdRD3O+Ro9Q9KVmE\n' +
						'PytunJLox6PB8EB7kllmYdQN3w6iS76na/ay+aglnljzoub4Ta7VQXDdd9Kx771y\n' +
						'LMACA2n76sH41ko2s4b7xQKBgBDVA4j/O2d+PeDlezeCoMOg4/O6MoW3ELsupMKe\n' +
						'e45CEeQDjrpZllYnIyUhZZmi8lCekZpJLI6VEP7FKBKLjTHrUMQiHA3/0Kx7Suu0\n' +
						'YMSYU6Bl30JAAtD4DrXdgzIE8ipN7hMoMssTkMI8t2Le52aTNfWZ8qOS/N8eeWUw\n' +
						'WbyhAoGBAJcLjv57fUlYpsoLgS7UEp9Ji1BC3tEWaIsMUy9JgmXta451Yo//ihhY\n' +
						'X6rR7ZAAwhptZv2YDF7AKHJV0o3kQm6QZs7h86ICTb5j5rgEY6I7kMj/iWrlas28\n' +
						'XYS/0P0rNFQYQaoFsdODlcqGeDfwqe1cYFIv/z4+3VSTO0zvkW4d\n' +
              '-----END RSA PRIVATE KEY-----';



Vue.prototype.$rsakey = new nodeRSA(pubkey)

Vue.prototype.$rsakey1 = new nodeRSA(key)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
