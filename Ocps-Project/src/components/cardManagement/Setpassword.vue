<template>
  <div>
    <div class="header">
      <div class="left" @click="goback"><</div>
      <div class="title">设置支付密码</div>
    </div>
    <div class="content">
      <div class="ocps-bindMobile">
      <div class="ocps-inputbox" >
        <form @submit.prevent="setPassword">
            <ul>
            <li>
              <div class="ocps-bind_title">支付密码</div>
              <div class="ocps-bindbox">
                <input type="text" v-model="formInfo.cardNo"  class="ocps-none-input" placeholder="请输入卡号"/>

              </div>
            </li>
            <li>
              <wc-keyboard   inter="6" v-model="formInfo.newPass" decimal="0" placeholder="请输入密码" label="密码"></wc-keyboard>

            </li>
          </ul>
            <div class="button_box">
              <input type="submit" value="确定" class="ocps-m-top_medium ocps-blue-button">
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
  import keyboard from '@/keyboard'
  Vue.use(keyboard)
  export default{
    name: 'Setpassword',
    data () {
    return {
      formInfo:{
        cardNo : '',
        loginUser : '',
        newPass : ''
      }
    }
  },
  methods: {
    goback () {
      this.$router.goBack()
    },
    setPassword () {
        this.formInfo.cardNo = this.$store.state.cardNo
        this.formInfo.loginUser = this.$store.state.loginUserId
       var newPass= this.formInfo.newPass.split(".")[0]
      var url=this.$store.state.localHostUrl + '/setPass.json'
      var formData = qs.stringify({loginUser: this.formInfo.loginUser,cardNo : this.formInfo.cardNo, newPass : newPass})
      this.$http.post(url,formData ,{emulateJSON : true}).then(
        function(res){
          console.log(res.data)
          if(res.data.ret){
            alert("修改成功")
          }else{
            alert(res.data.tip)
          }
        }
      )
    }
  }
  }
</script>
<style>

</style>
