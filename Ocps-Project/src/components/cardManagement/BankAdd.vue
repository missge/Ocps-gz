<template>
  <div>
    <div class="header">
      <div class="left" @click="goback"><</div>
      <div class="title">添加银行卡</div>
    </div>
    <div class="content">
      <div class="ocps-bindMobile">
        <div class="ocps-inputbox">
          <form @submit.prevent="bankBind">
            <ul>
              <li>
                <!-- <div class="ocps-bind_title">卡&nbsp;&nbsp;&nbsp;&nbsp;号</div>
                <div class="ocps-bindbox">
                  <input type="text" v-model="cardInfo.cardNo" class="ocps-none-input" placeholder="请输入卡号"/>
                </div> -->
                 <wc-keyboard v-model="cardInfo.cardNo" inter="19" type="number" decimal="0" placeholder="请输入卡号" label="卡号"></wc-keyboard>
              </li>
              <li>
               <!--  <div class="ocps-bind_title">手机号</div>
                <div class="ocps-bindbox">
                  <input type="password" v-model="cardInfo.teleNo" class="ocps-none-input" placeholder="请输入手机号"/>
                </div> -->
                <wc-keyboard v-model="cardInfo.teleNo" inter="11" type="number" decimal="0" placeholder="请输入手机号" label="手机号"></wc-keyboard>
              </li>
              <li>
                <div class="ocps-bind_title">银行名称</div>
                <div class="ocps-bindbox">
                  <input type="text" v-model="cardInfo.bankName" class="ocps-none-input" placeholder="请输入银行名称" maxlength="20"/>
                </div>
              </li>
              <li>
                <div class="ocps-bind_title">卡类型</div>
                <div class="ocps-bindbox">
                    <select v-model="cardInfo.cardType" class="ocps-none-input">
                      <option disabled value="">请选择</option>
                      <option>储蓄卡</option>
                      <option>信用卡</option>
                    </select>
                </div>
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
export default{
  name: 'EntityCard',
  data () {
    return{
      cardInfo: {
         loginUser:this.$store.state.loginUserId,
         teleNo:'',
        cardNo:'',
         bankName:'',
         cardType:''
      }
    }
  },
  methods: {
    goback () {
      this.$router.goBack()
    },
    bankBind:function(){
      var Formdata = qs.stringify(this.cardInfo)
      var url = this.$store.state.localHostUrl+'/addBankCard.json'
      var that=this
      console.log(Formdata)
      this.$http.post(url, Formdata, {emulateJSON: true}).then(
        function(res){
          console.log(res.data)
          if(res.data.ret){
            that.$router.push({path: '/'})
          }else{
            alert(res.data.tip)
          }
        }
      )



    }
  }
}
</script>

