<template>
  <div>
    <div class="header">
      <div class="left" @click="goback"><</div>
      <div class="title">实体卡绑定</div>
    </div>
    <div class="content">
      <div class="ocps-bindMobile">
        <div class="ocps-inputbox">
          <form @submit.prevent="bankBind">
            <ul>
              <li>
                <wc-keyboard  v-model="cardInfo.cardNo" inter="16" type="text"  decimal="0" placeholder="请输入卡号" label="卡号"></wc-keyboard>
              </li>
              <li>
                  <wc-keyboard  v-model="cardInfo.password" inter="6" type="password"  decimal="0" placeholder="请输入密码" label="密码"></wc-keyboard>
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
import keyboard from '@/keyboard'
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
//      if(this.cardInfo.loginUser === ''){
//        alert('非法账号')
//        return false
//      }
      //验证卡号
      if(this.cardInfo.cardNo === ''){
        alert('卡号不能为空')
        return false
      }
      if(this.cardInfo.cardNo.length !== 16){
        alert('卡号长度不对')
        return false
      }
      //验证密码
      if(this.cardInfo.cardNo.length !== 16){
        alert('卡号长度不对')
        return false
      }
      if(this.cardInfo.password.length !== 6){
        alert('密码长度不对')
        return false
      }
      var that = this

      var formData = qs.stringify(this.cardInfo)
      var formData1 = qs.stringify({cardNo:this.cardInfo.cardNo,loginUser:this.$store.state.loginUserId})

      var url=this.$store.state.localHostUrl + '/verifyPassword.json'
      var url2=this.$store.state.localHostUrl + '/bindingCard.json'

      this.$http.post(url, formData, {emulateJSON: true}).then(
        function (res) {
          console.log(res.data)
          if(res.data.ret){
             that.$http.post(url2, formData1, {emulateJSON: true}).then(
              function(res){
                console.log(res.data)
                if(res.data.ret){
                  that.$store.state.massage = res.data.tip
                  that.$router.push({path: '/'})
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
        }, function (res) { console.log(res) })
    }
  }
}
</script>
<style>
.ocps-bindMobile{
  margin:2.8rem auto;
}
</style>
