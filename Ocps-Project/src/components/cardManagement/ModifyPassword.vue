<template>
  <div>
    <div class="header">
      <div class="left" @click="goback"><</div>
      <div class="title">修改支付密码</div>
    </div>
    <div class="my_content">
       <div class="ocps-bindMobile">
        <form  @submit.prevent="pwdFn">
          <ul class="ocps-inputbox" >
            <li>
                <wc-keyboard  v-model="pwdInfo.oldPass" inter="6" type="password"  decimal="0" placeholder="请输入原密码" label="原密码"></wc-keyboard>
            </li>
            <li>
                <wc-keyboard  v-model="pwdInfo.newPass0" inter="6" type="password"   decimal="0" placeholder="请输入新密码" label="新密码"></wc-keyboard>
            </li>
            <li>
                <wc-keyboard v-model="pwdInfo.newPass" inter="6" type="password" decimal="0" placeholder="请输入确认密码" label="确认密码"></wc-keyboard>
            </li>
          </ul>
          <div class="button_box">
            <input type="submit" value="确定" class=" ocps-blue-button">
          </div>
          <!--<div class="ForgotPassword">-->
            <!--<router-link to="pageA">-->
              <!--忘记原密码？点击设置初始！！！-->
            <!--</router-link>-->
          <!--</div>-->
        </form>
      </div>
    </div>
  </div>
</template>
<script>
  import qs from 'qs'
  // import Vue from 'vue'
  // import keyboard from '@/keyboard'
  // Vue.use(keyboard)
  export default{
    name: 'ModifyPassword',
    data () {
      return {
        pwdInfo: {
          oldPass : '',
          newPass0 : '',
          newPass :  '',
          cardNo :'',
          loginUser:''
        }
      }
    },
    methods: {
      goback () {
        this.$router.goBack()
      },
      pwdFn () {
        console.log(this.pwdInfo.oldPass+'|'+this.pwdInfo.newPass0+'|'+this.pwdInfo.newPass)
        this.pwdInfo.cardNo = this.$store.state.cardNo
        this.pwdInfo.loginUser = this.$store.state.loginUserId
        var oldpass= this.pwdInfo.oldPass.split(".")[0]
        var newPass0= this.pwdInfo.newPass0.split(".")[0]
        var newPass= this.pwdInfo.newPass.split(".")[0]
        if(oldpass === ""){
          alert("旧密码不能为空")
          return false
        }
        if(newPass0 === ""){
          alert("新密码不能为空")
          return false
        }
        if(newPass === ""){
          alert("确认密码不能为空")
          return false
        }
        if(newPass0 !== newPass){
          alert("两次密码不同")
          return false
        }
        if(oldpass.length !==6 || newPass0.length !== 6 || newPass.length !== 6){
          alert("密码格式不对")
          return false
        }

//        oldpass = this.$rsakey.encrypt(oldpass, 'base64');
//        newPass = this.$rsakey.encrypt(newPass, 'base64');
        console.log('oldpass: ', oldpass);

        var url=this.$store.state.localHostUrl + '/changePass.json'
        var formData = qs.stringify({loginUser: this.pwdInfo.loginUser,cardNo : this.pwdInfo.cardNo,oldPass :oldpass, newPass : newPass})

        console.log(formData)
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
  .my_content{
    margin-top:2.2rem ;
  }
</style>
