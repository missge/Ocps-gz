<template>
  <div id="App">
    <div class="box">
      <input id="id" @change="onFileChange" ref="inputer" type="file" />
      <i class="iconfont">:)</i>
      <label for="id"></label>
    </div>

    <div class="box">
      <input id="id" @change="openDate" ref="inputer" type="file" />
      <i class="iconfont">:)</i>
      <label for="id"></label>
    </div>

  </div>
</template>
<script>
// import qrcode from '../assets/lib/js/qrcode.lib.min.js'
import myDatepicker from 'vue-datepicker'
export default {
  methods: {
    init (event) {
      // var url = this.getUrlKey('abc')
      // console.log(url)
        qrcode   
    },
    getUrlKey (name) {
      return decodeURIComponent((new RegExp('[?|&]' + name + '=' + '([^&;]+?)(&|#|;|$)').exec(location.href) || [''])[1].replace(/\+/g, '%20')) || null
    },
    onFileChange (e) {
      var files = e.target.files || e.dataTransfer.files
      if (!files.length) return
      this.createImage(files)
    },
    createImage (file) {
      if (typeof FileReader === 'undefined') {
        alert('您的浏览器不支持图片上传，请升级您的浏览器')
        return false
      }
      var vm = this
      var leng = file.length
      console.log(leng)
      for (var i = 0; i < leng; i++) {
        var reader = new FileReader()
        reader.readAsDataURL(file[i])
        reader.onload = function (e) {
           vm.init()
          console.log(e.target.result)
          qrcode.decode(e.target.result)
          qrcode.callback = function(data) {
            console.log(data)
          };
        }
      }
    }
  },
  mounted () {
    // this.init()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}

.box {
    position: relative;
    width: 50px;
    height: 50px;
    background: blue
}
input {
    position: absolute;
    left: -9999px;
}    
/* 使label充满整个box*/
label {
    position: absolute;
    top: 0;left: 0;right: 0;bottom: 0;
    z-index: 10; /* 这个z-index之后说到*/
}
</style>
