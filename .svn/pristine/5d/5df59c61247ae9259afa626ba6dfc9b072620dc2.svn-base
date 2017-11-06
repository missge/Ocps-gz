<template>
  <div>
    <div class="content">
      <form @submit.prevent="submitFn">
        <div class="paymentOrder_box" >
          <div class="paymentOrder_topbox ">
            <div class="paymentOrder_topbox_lf">
              <img src="../../assets/Images/order.png" alt=""/>
            </div>
            <div class="paymentOrder_topbox_rt">
              <h3>￥{{this.$route.query.money}}</h3>
              <h6>购卡</h6>
            </div>
          </div>
          <ul class="paymentOrder_botbox">
            <li>
              <div class="paymentOrder_botbox_lf">
                <img src="../../assets/Images/zf1.png" alt=""/>
              </div>
              <div class="paymentOrder_botbox_ct">
                银行卡支付
              </div>
              <div class="paymentOrder_botbox_rt">
                <input type="radio"  name="paymethod" />
                <span class="ocps-glyphicon ocps-glyphicon-ok-circle"></span>
              </div>
            </li>
            <li>
              <div class="paymentOrder_botbox_lf">
                <img src="../../assets/Images/zf2.png" alt=""/>
              </div>
              <div class="paymentOrder_botbox_ct">
                支付宝支付
              </div>
              <div class="paymentOrder_botbox_rt">
                <input type="radio" name="paymethod" value="zfb" v-model="paymethodInfo.paymethod" />
                <span class="ocps-glyphicon ocps-glyphicon-ok-circle"></span>
              </div>
            </li>
            <li>
              <div class="paymentOrder_botbox_lf">
                <img src="../../assets/Images/zf3.png" alt=""/>
              </div>
              <div class="paymentOrder_botbox_ct">
                微信支付
              </div>
              <div class="paymentOrder_botbox_rt">
                <input type="radio" name="paymethod" value="wx" v-model="paymethodInfo.paymethod"/>
                <span class="ocps-glyphicon ocps-glyphicon-ok-circle"></span>
              </div>
            </li>
          </ul>
          <div class="button_box">
            <input type="submit" value="确定" class=" ocps-blue-button">
          </div>
        </div>
      </form>
    </div>
  </div>
</template>
<script>
  import qs from 'qs'
  import router from '@/router'
  export default{
    name: 'paymentOrder',
    data () {
    return{
      paymethodInfo:{
        cardNo:'',
        accKindId:'1',
        totalfee:'',
        subject:'',
        body:'',
        paymethod:'zfb',
        userName:'',
      },
      type:this.$route.query.type
    }
  },
  methods: {
    submitFn:function () {
      this.paymethodInfo.cardNo=this.$route.query.cardNo
      this.paymethodInfo.totalfee=this.$route.query.money
      this.paymethodInfo.subject='xx'
      this.paymethodInfo.body='xx'


      this.paymethodInfo.userName = this.$store.state.loginUserId
      var formData1={userName:this.paymethodInfo.userName,totalfee:this.paymethodInfo.totalfee,subject:this.paymethodInfo.subject,paymethod:this.paymethodInfo.paymethod,body:this.paymethodInfo.body}

      var that=this
      if(this.type == 1){
        var url=that.$store.state.localHostUrl + '/shopCard.json'
        var formData = qs.stringify(formData1)
      }
      if(this.type == 2){
        var url=this.$store.state.localHostUrl + '/scanCode.json'
        var formData2={cardNo:this.paymethodInfo.cardNo,paymethod:this.paymethodInfo.paymethod, accKindId:this.paymethodInfo.accKindId,totalfee:this.paymethodInfo.totalfee,subject:this.paymethodInfo.subject,body:this.paymethodInfo.body}
        var formData = qs.stringify(formData2)
      }

      this.$http.post(url,formData ,{emulateJSON : true}).then(
        function(res){
          console.log(res.data)
          if(res.data.code === '00'){
            window.location.href=res.data.shorturl
            alert("成功")
          }else{
            alert(res.data.tip)
          }
        }
      )


    }
  }
  }
</script>
