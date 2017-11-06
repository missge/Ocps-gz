<template>
  <div>
    <div class="header">
      <div class="left" @click="goback"><</div>
      <div class="title">收付款</div>
    </div>
    <div class="content">
       <div class="opcs-code--box">
      <div class="opcs-code--container">
        <div class="opcs-code--header ocps-grid ocps-grid--align-spread ocps-grid--vertical-align-center">
          <div class="">[√] 向商家付款</div>
          <div class="">...</div>
        </div>
        <div class="ocps-text-color_weak ocps-text-align--center ocps-p-bottom--small">
          <p>点击可查看付款码数字</p>
        </div>
        <div class="ocps-grid ocps-grid--align-center">
          <canvas class="opcs-barcode-content" id="barcode"></canvas>
        </div>
        <div class="ocps-grid ocps-grid--align-center">
          <canvas class="opcs-qrcode-content" id="qrcode"></canvas>
        </div>
        <div class="ocps-text-align--center ocps-p-bottom--small">
          <p>我的一卡通二维码</p>
        </div>
      </div>
    </div>
    </div>
  </div>
</template>

<script>
  var JsBarcode = require('jsbarcode')
  import Vue from 'vue'
  import QRCode from 'qrcode'
  Vue.use(QRCode)
  export default{
    data(){
      return {
        codes:''
      }
    },
    methods:{
      goback () {
        this.$router.goBack()
      },
      useqrcode(){
        var barcode = document.getElementById('barcode')
        var str = this.$store.state.qrCode.result[0]
        JsBarcode(
          barcode, str, {
          margin: 0,
          displayValue: false
        });

        var qrcode = document.getElementById('qrcode')
        var url = this.encodeURI(this.$store.state.qrCode.result[1])
        console.log(url)
        
        QRCode.toCanvas(
          qrcode, url,
          function (error) {
            if (error) {
              console.error(error)
            }else{
              console.log('success!');
            }
          }
        )
      },
      utf16to8(str) {     
        var out, i, len, c;     
        out = "";     
        len = str.length;     
        for(i = 0; i < len; i++) {     
          c = str.charCodeAt(i);     
          if ((c >= 0x0001) && (c <= 0x007F)) {     
              out += str.charAt(i);     
          } else if (c > 0x07FF) {     
              out += String.fromCharCode(0xE0 | ((c >> 12) & 0x0F));     
              out += String.fromCharCode(0x80 | ((c >>  6) & 0x3F));     
              out += String.fromCharCode(0x80 | ((c >>  0) & 0x3F));     
          } else {     
              out += String.fromCharCode(0xC0 | ((c >>  6) & 0x1F));     
              out += String.fromCharCode(0x80 | ((c >>  0) & 0x3F));     
          }     
        }     
        return out;     
      }    
    },
    mounted(){
      this.useqrcode();
    }
  }
</script>
<style>

  .opcs-code--header{
    color:#3669bc;
    font-size: 1rem;
    height: 2.5rem;
    padding: 0 1rem;
    background-color: #f0f2f5;
    margin-bottom: 1rem
  }

  .opcs-code--box{
    min-height: 60rem;
    background: #3669bc;
    padding: 0 1rem 1rem
  }

  .opcs-code--container{
    background: #ffffff;
  }

  .opcs-barcode-content{
    padding: 0 1rem;
    width: 100% !important
  }

  .opcs-qrcode-content{
    width:60% !important;
    height:60% !important;
  }
</style>
