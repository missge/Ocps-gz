<template>
  <div>
    <div class="ocps-bindMobile">
      <form @submit.prevent="bankBind">
        <ul class="ocps-inputbox">
          <li>
            <div class="ocps-bind_title"><span class="red">*</span>卡号</div>
            <div class="ocps-bindbox">
              <input type="text"  v-model="cardInfo.cardNo" @keyup="filterNumber" @afterpaste="filterNumber" maxlength="16"  class="ocps-none-input"  placeholder="请输入卡号"/>
            </div>
          </li>
          <li>
            <div class="ocps-bind_title"><span class="red">*</span>密码</div>
            <div class="ocps-bindbox">
              <input type="password" v-model="cardInfo.password" @keyup="filterNumber" @afterpaste="filterNumber" maxlength="6"  class="ocps-none-input" placeholder="请输入密码"/>
            </div>
          </li>
        </ul>
        <div class="button_box">
          <input type="submit"  value="确定" class="ocps-blue-button">
          <input type="submit" value="立即绑定" class="ocps-blue-button">
        </div>
      </form>
    </div>
  </div>
</template>
<script>
import qs from 'qs'
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
    filterNumber () {
      this.cardInfo.cardNo=this.cardInfo.cardNo.replace(/\D/g,'')
      this.cardInfo.password=this.cardInfo.password.replace(/\D/g,'')
    },
    bankBind:function(){
//      if(this.cardInfo.loginUser === ''){
//        alert('非法账号')
//        return false
//      }
      if(this.cardInfo.cardNo === ""){
        this.$confirm('卡号不能为空!', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'info',
          showCancelButton: false
        })
          return false
      }
      if(this.cardInfo.cardNo.length !== 16){
        this.$confirm('卡号长度不正确!', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'info',
          showCancelButton: false
        })
          return false
      }
      if(this.cardInfo.password ===''){
        this.$confirm('密码不能为空!', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'info',
          showCancelButton: false
        })
          return false
      }
        if(this.cardInfo.password.length !== 6){
        this.$confirm('密码长度不正确!', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'info',
          showCancelButton: false
        })
          return false
      }
    else{

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
                  that.$route.push({path: '/'})
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
}
</script>
<style>
.ocps-bindMobile{
  margin:2.8rem auto;
}
</style>
