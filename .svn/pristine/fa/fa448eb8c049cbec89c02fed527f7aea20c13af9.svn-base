<template>
  <div>
    <div class="header">
      <div class="title">主页</div>
    </div>
    <div class="content">
      <div class="ocps-nav ocps-grid ocps-grid_align-space ocps-grid_vertical-align-center">
            <div class="ocps-is-relative ocps-text-align_center">
              <div class="ocps-box ">
                <input id="id" @change="onFileChange" ref="inputer" type="file"  accept="image/*"  capture="camera" />
                <img src="../assets/img/home_img/tab1.png" alt=""/>
                <label for="id"></label>
              </div>
              <p>扫一扫</p>
            </div>
             <i class="ocps-icon"></i>
            <div class="ocps-is-relative ocps-text-align_center">
              <div @click="click_fun('getCode')">
                <img src="../assets/img/home_img/tab2.png" alt=""/>
              </div>
              <p v-if="userFlag == 0">付款</p>
              <p v-if="userFlag == 1">收款</p>
            </div>
            <i class="ocps-icon"></i>
            <div class="ocps-is-relative  ocps-text-align_center">
              <div @click="click_fun('getcardCount')" v-if="userFlag == 0">
                <img src="../assets/img/home_img/tab3.png"  alt=""/>
                <p>卡包</p>
              </div>
              <div @click="click_fun('getcardBalance')"v-if="userFlag == 1">
                <img src="../assets/img/home_img/tab3.png"  alt=""/>
                <p>账户查询</p>
              </div>

            </div>
      </div>
      <div class="personal_index" v-if="userFlag == 0">
        <p class="ocps-title">一卡通管理</p>
        <div class="ocps-cardmanage">
          <div class="ocps-container">
            <div class="ocps-row">
              <div class="ocps-col-xs-4">
                <div class="ocps-cardmanage_box">
                  <router-link to="shopCard">
                    <img src="../assets/img/home_img/manage1.png" alt="">
                    <p>购卡</p>
                  </router-link>
                </div>
              </div>
              <div class="ocps-col-xs-4">
                <div class="ocps-cardmanage_box">
                  <router-link to="EntityCard">
                    <img src="../assets/img/home_img/manage2.png" alt="">
                    <p>实体卡绑定</p>
                  </router-link>
                </div>
              </div>
              <div class="ocps-col-xs-4">
                <div class="ocps-cardmanage_box">
                  <div @click="click_fun('getcardBalance')">
                    <img src="../assets/img/home_img/manage3.png" alt="">
                  </div>
                  <p>余额查询</p>
                </div>
              </div>
              <div class="ocps-col-xs-4">
                  <div class="ocps-cardmanage_box">
                    <div @click="click_fun1()">
                      <img src="../assets/img/home_img/manage4.png" alt="">
                    </div>
                    <p>一卡通管理</p>
                  </div>
              </div>
              <div class="ocps-col-xs-4">
                <div class="ocps-cardmanage_box">
                  <div @click="click_fun('getBankCard')">
                    <img src="../assets/img/home_img/manage5.png" alt="">
                    <p>银行卡管理</p>
                  </div>
                </div>
              </div>
              <div class="ocps-col-xs-4">
                  <div class="ocps-cardmanage_box">
                    <div @click="click_fun('getRecharge')">
                      <img src="../assets/img/home_img/manage6.png" alt="">
                      <p>充值支付</p>
                    </div>
                 </div>
              </div>

              <div class="ocps-col-xs-4">
                <div class="ocps-cardmanage_box">
                  <div @click="click_fun('getTransactionRecord')">
                    <img src="../assets/img/home_img/manage7.png" alt="">
                    <p>交易记录</p>
                  </div>
                </div>
              </div>
              <div class="ocps-col-xs-4">
                <div class="ocps-cardmanage_box">
                  <router-link to="Cash">
                    <img src="../assets/img/home_img/manage8.png" alt="">
                    <p>提现</p>
                  </router-link>
                </div>
              </div>
              <div class="ocps-col-xs-4">
                <div class="ocps-cardmanage_box">
                  <router-link to="ModifyPassword">
                    <img src="../assets/img/home_img/manage9.png" alt="">
                    <p>修改密码</p>
                  </router-link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="Merchant_index" v-if="userFlag == 1">
      <p class="ocps-title">商户管理</p>
      <div class="ocps-cardmanage">
        <div class="ocps-container">
          <div class="ocps-row">
            <div class="ocps-col-xs-4">
              <div class="ocps-cardmanage_box">
                  <router-link to="Cash">
                  <img src="../assets/img/home_img/manage1.png" alt="">
                  <p>提现</p>
                </router-link>
              </div>
            </div>
            <div class="ocps-col-xs-4">
              <div class="ocps-cardmanage_box">
                <div  @click="click_fun('getTransactionRecord')">
                  <img src="../assets/img/home_img/manage2.png" alt="">
                  <p>交易记录</p>
                </div>
              </div>
            </div>
            <div class="ocps-col-xs-4">
              <div class="ocps-cardmanage_box">
                <div @click="click_fun('getCommissionRate')">
                   <img src="../assets/img/home_img/manage3.png" alt="">
                </div>
                <p>手续费率</p>
              </div>
            </div>
            <div class="ocps-col-xs-4">
                <div class="ocps-cardmanage_box">
                  <div @click="click_fun('getcardBalance')">
                    <img src="../assets/img/home_img/manage4.png" alt="">
                    <p>账户查询</p>
                  </div>
                </div>
            </div>
            <div class="ocps-col-xs-4">
              <div class="ocps-cardmanage_box">
                  <div @click="click_fun('getSettlementquery')">
                  <img src="../assets/img/home_img/manage5.png" alt="">
                  <p>结算查询</p>
                </div>
              </div>
            </div>
            <div class="ocps-col-xs-4">
                <div class="ocps-cardmanage_box">
                  <div @click="click_fun('getDetailInquirySummary')">
                    <img src="../assets/img/home_img/manage6.png" alt="">
                    <p>卡交易汇总</p>
                  </div>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  </div>
</template>
<script>
  import qrcode from '../assets/lib/js/qrcode.lib.min.js'
  import qs from 'qs'
  export default {
    name: 'index',
    data (){
      return{
        userFlag: '',
        flag:this.$store.state.flag
      }
    },
    methods: {
      init () {
        qrcode
      },
      setParameter (){
        this.$store.state.loginUserId = this.getUrlKey('userid')
        this.$store.state.flag = this.getUrlKey('flag')
        this.userFlag =  this.$store.state.flag
      },
      getUrlKey (name) {
        return decodeURIComponent((new RegExp('[?|&]' + name + '=' + '([^&;]+?)(&|#|;|$)').exec(location.href) || [''])[1].replace(/\+/g, '%20')) || null
      },
      click_fun: function (fun_name) {
          this.$store.dispatch(fun_name)
      },
      click_fun1:function(){
        var that=this
       var loginUser = this.$store.state.loginUserId
        this.$http.post(this.$store.state.cardCount.url, qs.stringify({'loginUser':loginUser}), {emulateJSON: true}).then(
          function (res) {
            console.log(res.data)
            if(res.data.ret){
             var num = res.data.yktCard
              if(num===0){
                that.$router.push({path: '/NoCard'})
              }if(num!=0){
                 that.$store.dispatch('getcardManage')
              }

            }else{
                alert(res.tip)
            }
          })

      },
      onFileChange (e) {
        var files = e.target.files || e.dataTransfer.files
        if (!files.length) return
        this.createImage(files)
      },
      utfToChar (str) {
        var iCode, iCode1, iCode2;
        iCode = parseInt("0x" + str.substr(1, 2));
        iCode1 = parseInt("0x" + str.substr(4, 2));
        iCode2 = parseInt("0x" + str.substr(7, 2));

        var str1 = String.fromCharCode(((iCode & 0x0F) << 12) | ((iCode1 & 0x3F) << 6) | (iCode2 & 0x3F));
        return str1
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

              var code=data.split("&")
              var payflag=code[0].split("=")[1]
              var payCode=code[1].split("=")[1]
              var name=code[2].split("=")[1]

              name=vm.getCharFromUtf8(name)

                // flag:this.$store.state.flag
             var flag=vm.$store.state.flag
              if(flag == 0){
                console.log(payCode)
                vm.$router.push({path: '/paysys',query : {payflag:payflag, merId : payCode , name:name }})
              }
              if(flag == 1){
                 console.log(payCode)
                vm.$router.push({path: '/paysys',query : {payflag : payflag,payCode : payCode , name:name }})
              }
              // window.location.href=data
            }
          }
        }
      },
      getCharFromUtf8(str) {
          var cstr = "";
          var nOffset = 0;
          if (str == "")
              return "";
          str = str.toLowerCase();
          nOffset = str.indexOf("%e");
          if (nOffset == -1)
              return str;
          while (nOffset != -1) {
              cstr += str.substr(0, nOffset);
              str = str.substr(nOffset, str.length - nOffset);
              if (str == "" || str.length < 9)
                  return cstr;
              cstr += this.utfToChar(str.substr(0, 9));
              str = str.substr(9, str.length - 9);
              nOffset = str.indexOf("%e");
          }
          return cstr + str;
      }
    },
    mounted () {
      this.setParameter()
    }

  }
</script>
<style>
  .ocps-nav{
    position: relative;
    height: 8rem;
    background: url(../assets/img/home_img/bg.png) no-repeat center center;
    background-size: 100%;
    padding: 0 1rem;
  }

  .ocps-nav a{
    display: inline-block;
  }

  .ocps-nav p{
    color: #fff;
    margin-top: .5rem;
  }

  .ocps-nav img{
    width: 2rem;
    height: 2rem;
  }

  .ocps-nav .ocps-icon{
    background: #A3C0E6;
    height: 1.5rem;
    width: 2px;
    margin-top: -1.5rem;
  }

  .ocps-title{
    background: #F4F8FF;
    height: 1.5rem;
    margin: 0;
    color: #2C5187;
    line-height: 1.5rem;
    padding-left: 1rem;
    border-left: 2px solid #AACDFF;
  }

  .ocps-cardmanage{
    padding:.5rem;
  }

  .ocps-cardmanage_box{
    text-align: center;
    padding: .5rem;
  }

  .ocps-cardmanage .ocps-col-xs-4{
    padding: 0;
  }

  .ocps-cardmanage .ocps-col-xs-4{
    border-right: 1px dashed #bbdaff;
    border-bottom: 1px dashed #bbdaff;
  }

  .ocps-cardmanage .ocps-col-xs-4:nth-child(3n){
    border-right: none;
  }

  .ocps-cardmanage_box img{
    width: 3rem;
    height: 3rem;
  }
  .ocps-cardmanage_box p{
    text-align: center;
    color: #767678;
    margin-top: .5rem;
    font-size: .65rem
  }

  .personal_index,.Merchant_index{
    overflow:hidden;
  }

  .ocps-box {
      position: relative;
  }
  .ocps-box input {
   /*   position: absolute;
      left: -9999px;*/
  }

  .ocps-box label {
      position: absolute;
      top: 0;left: 0;right: 0;bottom: 0;
      z-index: 10;
  }
</style>
