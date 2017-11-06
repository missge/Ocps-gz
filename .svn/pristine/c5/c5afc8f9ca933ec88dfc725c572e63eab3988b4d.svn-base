<template>
  <div>
    <div class="header">
      <div class="left" @click="goback"><</div>
      <div class="title">订单支付</div>
    </div>
    <div class="content">
      <div class="ocps-successful-box">
        <div class="ocps-success-payment-bg">
          <img src="../../assets/img/payok.png" class="ok_img" alt=""/>
          <p>订单支付</p>
          <div  class="ocps_zf_bot">
            <img src="../../assets/img/home_img/bt_bg.png" alt=""/>
          </div>
        </div>
        <div class="ocps-inputbox">
          <form @submit.prevent="paycodeFn">
            <ul>
              <li>
                <div class="ocps-bind_title" v-if="codeInfo.flag == 0">商户名称</div>
                <div class="ocps-bind_title" v-if="codeInfo.flag == 1">姓名</div>
                <div class="ocps-bindbox">
                  <p class=" ocps-none-input">
                     {{this.$route.query.name}}

                  </p>
                </div>
              </li>
              <li>
                <wc-keyboard inter="16"   type="money"  v-model="codeInfo.amount"  decimal="0" placeholder="金额" label="金额"></wc-keyboard>
              </li>
              <li v-show="codeInfo.flag == 0">
                <wc-keyboard   v-model="codeInfo.password" inter="6" type="password"  decimal="2" placeholder="请输入密码" label="密码"></wc-keyboard>
              </li>
              <li v-show="codeInfo.payflag == 1">
              </li>
            </ul>
            <div class="button_box">
              <input type="submit" class=" ocps-blue-button" value="确认"/>
            </div>
          </form>
        </div>

      </div>

    </div>
  </div>
</template>
<script>
  import keyboard from '@/keyboard'
  import router from '@/router'
  import qs from 'qs'
  export default{
    name: 'paysys',
    data(){
    return {
      payflag:this.$route.query.payflag,
      name:this.$route.query.name,
      codeInfo:{
        userName : this.$store.state.loginUserId,
        payCode:'',//          会员支付码密文
        merId:'',//          商户号+时间密文
        flag:this.$store.state.flag,
        subject:'扫码支付',
        password:'',
        amount:'',
        body:''
      }
    }
  },
  methods: {
    goback () {
      this.$router.goBack()
    },
    paycodeFn(){
      if(this.codeInfo.amount === ""){
        alert("金额不能为空")
        return false
      }
      if(this.codeInfo.payflag === 0){
        if(this.codeInfo.password === ""){
          alert("密码不能为空")
          return false
        }
      }
  
      if(this.codeInfo.flag==0){
        this.codeInfo.merId=this.$route.query.merId
        this.codeInfo.body="会员扫码付款"
      }
      if(this.codeInfo.flag==1){
        this.codeInfo.payCode=this.$route.query.payCode
        this.codeInfo.body="商户扫码收款"
      }

      var url = this.$store.state.localHostUrl+'/indentVIP.json'
      var formdata=qs.stringify(this.codeInfo)
      var that=this
      that.$http.post(url,formdata,{emulateJSON: true}).then(
        function(res){
          console.log(res.data);
          if(res.data.ret===1){
            router.push({path: '/paysysSuccess',query : { 'money':that.codeInfo.amount.split(".")[0]}})
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
  .ocps-success-payment-bg{
    margin: 0 auto;
    text-align: center;
    position: relative;
  }
  .ok_img{
    margin:1.6rem 0
  }
  .ocps-success-payment-bg p{
    color: #5B99FF;
    font-size:1rem ;
    padding-bottom: 20px;
  }
  .ocps_zf_bot{
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;;
  }
  .ocps_zf_bot>img{
    width: 100%;
    max-height:3.5rem ;
  }
  .ok_img{
    max-width: 63px;
    max-height:66px ;

  }

</style>
