<template>
  <div>
    <div class="header">
      <div class="left" @click="goback"><</div>
      <div class="title">pageB</div>
    </div>
    <div>
      <router-link to="/">
        Home
      </router-link>
    </div>
    <div id="box">
      <input type="button" class="ocps-button" @click="get()" value="按钮">
    </div>
    <my-component></my-component>
  </div>
</template>

<script>
  import qs from 'qs'

  var Child = {
    template: '<div>A custom component!</div>'
  }

  var url = 'http://www.vrserver.applinzi.com/aixianfeng/apihome.php'
  var pramater = {name: 'abc'}

  export default {
    name: 'pageB',
    // data: {
    //   datalist: ''
    // },//定义一个组件
    components: {
      'my-component': Child
    },
    computed: {
      reversedMessage: function () {
        this.$http.post(url, qs.stringify(pramater), {emulateJSON: true}).then(
          function (res) {
            console.log(JSON.stringify(res.data))
            return JSON.stringify(res.data)
          }, function (res) {})
      }
    },
    methods: {
      goback () {
        this.$router.goBack()
      },
      get () {
        this.$http.post(url, qs.stringify(pramater), {emulateJSON: true}).then(
          function (res) {
            console.log(JSON.stringify(res.data))
            // this.$set('datalist', JSON.stringify(res.data))
          }, function (res) {})
      }
    }
  }
</script>

