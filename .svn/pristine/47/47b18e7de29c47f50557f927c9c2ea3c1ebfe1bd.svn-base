<template>
  <div>
    <div class="header">
      <div class="left" @click="goback"><</div>
      <div class="title">附卡绑定</div>
    </div>
    <div class="content">
      <div class="ocps-bindMobile">
        <div class="ocps-inputbox">
          <form @submit.prevent="bankBind">
            <ul>
              <li>
               <!--  <div class="ocps-bind_title">卡&nbsp;&nbsp;&nbsp;&nbsp;号</div>
                <div class="ocps-bindbox">
                  <input type="text" v-model="cardInfo.cardNo" class="ocps-none-input" placeholder="请输入卡号" />
                </div> -->
                 <wc-keyboard v-model="cardInfo.cardNo" inter="16" type="number" decimal="0" placeholder="请输入卡号" label="卡号："></wc-keyboard>
              </li>
              <li>
                <!-- <div class="ocps-bind_title">密&nbsp;&nbsp;&nbsp;&nbsp;码</div>
                <div class="ocps-bindbox">
                  <input type="password" v-model="cardInfo.password" class="ocps-none-input" placeholder="请输入密码"/>
                </div> -->
                <wc-keyboard v-model="cardInfo.password" inter="6" type="password" decimal="0" placeholder="请输入密码" label="密码："></wc-keyboard>
              </li>
            </ul>
            <div class="button_box">
              <input type="submit" value="立即绑定" class="ocps-m-top_medium ocps-blue-button">
            </div>
          </form>
        </div>
      </div>

    </div>
  </div>
</template>
<script>
  import qs from 'qs'
  import Vue from 'vue'
  // import keyboard from '@/keyboard'
  // Vue.use(keyboard)
export default{
  name: 'EntityCard',
  data () {
    return{
      cardInfo: {
        cardNo: '',
        password: ''
      }
    }
  },
  methods: {
    goback () {
      this.$router.goBack()
    },
    bankBind:function(){
//       if(this.cardInfo.loginUser === ''){
//        alert('非法账号')
//        return false
//      }
      //验证卡号
      if(this.cardInfo.cardNo === ''){
        alert('卡号不能为空')
        return false
      }

      //验证密码
      if(this.cardInfo.password === ''){
        alert('密码不能为空')
        return false
      }

      var that = this

      var formData = qs.stringify(this.cardInfo)
      var formData1 = qs.stringify({cardNo:this.cardInfo.cardNo,loginUser:  this.$store.state.loginUserId})
      var url=this.$store.state.localHostUrl + '/verifyPassword.json'
      var url2=this.$store.state.localHostUrl + '/addFCard.json'
      this.$http.post(url, formData, {emulateJSON: true}).then(
        function (res) {
          if(res.data.ret){
             that.$http.post(url2, formData1, {emulateJSON: true}).then(
              function(res){
                if(res.data.ret){
                  that.$store.state.massage = res.data.tip
                  that.$store.dispatch('getcardManage')
                  alert(res.data.tip)
                }else{
                  alert(res.data.tip)
                  return
                }
              }
            )
          }else{
            alert(res.data.tip)
            return
          }
        })
    }
  }
}
</script>
<style>

  ..ocps-bindMobile{width: 90%}

</style>
