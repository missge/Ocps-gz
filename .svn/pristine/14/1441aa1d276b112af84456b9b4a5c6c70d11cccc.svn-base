<template>
     <div class="ocps-bindMobile">
        <form  @submit.prevent="pwdFn">
          <ul class="ocps-inputbox">
            <li>
              <div class="ocps-bind_title"><span class="red">*</span>原密码</div>
              <div class="ocps-bindbox">
                <input type="password" v-model="pwdInfo.oldPass" @keyup="filterNumber" @afterpaste="filterNumber" maxlength="6" class="ocps-none-input"  placeholder="请输入原密码"/>
              </div>
            </li>
            <li>
              <div class="ocps-bind_title"><span class="red">*</span>新密码</div>
              <div class="ocps-bindbox">
                <input type="password" v-model="pwdInfo.newPass0" maxlength="6" @keyup="filterNumber"  @afterpaste="filterNumber" class="ocps-none-input" placeholder="请输入新密码"/>
              </div>
            </li>
            <li>
              <div class="ocps-bind_title"><span class="red">*</span>确认密码</div>
              <div class="ocps-bindbox">
                <input type="password" v-model="pwdInfo.newPass" maxlength="6"  @keyup="filterNumber"  @afterpaste="filterNumber" class="ocps-none-input" placeholder="请输入确认密码"/>
              </div>
            </li>
          </ul>
          <div class="button_box">
            <input type="submit"  value="确定" class="ocps-blue-button">
          </div>
        </form>
    </div>
</template>
<script>
  import qs from 'qs'
  export default{
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
      filterNumber () {
        this.pwdInfo.oldPass=this.pwdInfo.oldPass.replace(/\D/g,'')
        this.pwdInfo.newPass0=this.pwdInfo.newPass0.replace(/\D/g,'')
        this.pwdInfo.newPass=this.pwdInfo.newPass.replace(/\D/g,'')
      },
      pwdFn () {
        console.log(this.pwdInfo.oldPass+'|'+this.pwdInfo.newPass0+'|'+this.pwdInfo.newPass)
        this.pwdInfo.cardNo = this.$store.state.cardNo
        this.pwdInfo.loginUser = this.$store.state.loginUserId
        var oldpass= this.pwdInfo.oldPass.split(".")[0]
        var newPass0= this.pwdInfo.newPass0.split(".")[0]
        var newPass= this.pwdInfo.newPass.split(".")[0]
        if(oldpass === ""){
          this.$confirm('原密码不能为空!', '提示', {
            confirmButtonText: '确定',
            cancelButtonText: '取消',
            type: 'info',
            showCancelButton: false
          })
          return false
        }
      
        if(newPass0 === ""){
          this.$confirm('新密码不能为空!', '提示', {
            confirmButtonText: '确定',
            cancelButtonText: '取消',
            type: 'info',
            showCancelButton: false
          })
            return false
        }
        if(newPass === ""){
          this.$confirm('确认密码不能为空!', '提示', {
            confirmButtonText: '确定',
            cancelButtonText: '取消',
            type: 'info',
            showCancelButton: false
            })
            return false
        }
        if(newPass0 !== newPass){
          this.$confirm('两次密码不同!', '提示', {
            confirmButtonText: '确定',
            cancelButtonText: '取消',
            type: 'info',
            showCancelButton: false
          })
            return false
        }
        if(oldpass.length !== 6 || newPass0.length !== 6 || newPass.length !== 6){
          this.$confirm('密码长度为6位!', '提示', {
            confirmButtonText: '确定',
            cancelButtonText: '取消',
            type: 'info',
            showCancelButton: false
          })
          return false
        }
        // oldpass = this.$rsakey.encrypt(oldpass, 'base64');
        // newPass = this.$rsakey.encrypt(newPass, 'base64');
        // console.log('oldpass: ', oldpass);
        var url=this.$store.state.localHostUrl + '/changePass.json'
        var formData = qs.stringify({loginUser: this.pwdInfo.loginUser,cardNo : this.pwdInfo.cardNo,oldPass :oldpass, newPass : newPass})

        console.log(formData)
        var _this= this
        this.$http.post(url,formData ,{emulateJSON : true}).then(
          function(res){
            console.log(res.data)
            if(res.data.ret){
              _this.$confirm('修改成功!', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'info',
                showCancelButton: false
              }).then(() => {
                // alert('sure');
                return false
              }).catch(() => {
                // alert('cancel');
              });

            }else{
              // alert(res.data.tip)
              _this.$confirm(res.data.tip, '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'info',
                showCancelButton: false
              }).then(() => {
                // alert('sure');
                return false
              }).catch(() => {
                // alert('cancel');
              });
            }
          }
        )
      }
    }
  }
</script>
<style>
</style>
