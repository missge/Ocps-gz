<template>
  <div>
      <div class="header">
        <div class="left" @click="goback"><</div>
        <div class="title">转账附卡</div>
      </div>
      <div class="content">
      <div class="ocps-transferCard" >
          <div class="ocps-transferCard-bg ocps-blue-border bg-transferCard">
          <div class="ocps-transferCard-lf">
            <p class="ocps-transferCard-name" v-if="this.$route.query.type == 1">主卡 </p>
            <p class="ocps-transferCard-name" v-if="this.$route.query.type == 0">附卡 </p>
          </div>
          <div class="ocps-transferCard-rt">
            <p class="ocps-transferCard-number">{{this.$route.query.mainCardNo}}</p>
            <div class="ocps-transferCard-operation">
              <p class="cops-bankNumber">￥{{this.$route.query.KindMoney}}</p>
              <p class="cops-bank-balance1">
               现金账户余额
              </p>
            </div>
          </div>
        </div>
        <form @submit.prevent="submitFn">
          <div class="ocps-bindMobile" >
            <ul class="ocps-inputbox" >
              <li>
                <div class="ocps-bind_title">附卡</div>
                <div class="ocps-bindbox">
                  <input type="text"  v-model="this.$route.query.FcardNo" class="ocps-none-input" readonly/>
                </div>
              </li>
              <li>
                <!-- <div class="ocps-bind_title">金&nbsp;&nbsp;&nbsp;&nbsp;额：</div>
                <div class="ocps-bindbox">
                  <input type="text" class="ocps-none-input" v-model="TransferInfo.money"  placeholder="请输入确认金额"  />
                </div> -->
                <wc-keyboard v-model="TransferInfo.money" inter="8" type="money" decimal="2" placeholder="请输入金额" label="金额"></wc-keyboard>

              </li>
              <li>
               <!--  <div class="ocps-bind_title">支付密码：</div>
                <div class="ocps-bindbox">
                  <input type="password" class="ocps-none-input"  v-model="TransferInfo.password"  placeholder="请输入支付密码"/>
                </div> -->
                <wc-keyboard v-model="TransferInfo.password" inter="6" type="password" decimal="2" placeholder="请输入支付密码" label="支付密码"></wc-keyboard>
              </li>
          </ul>
            <div class="button_box">
              <input type="submit" value="确认转账" class=" ocps-blue-button">
            </div>
        </div>
        </form>
      </div>
    </div>
   </div>
</template>
<script>
  import qs from 'qs'
  export default{
    name: 'EntityCard',
    data(){
      return {
        TransferInfo:{
          money:'',
          password:'',
          cardNo:'',
          fCardNo:''
        }
      }
    },
    methods: {
      goback :function(){
        this.$router.goBack()
      },
      submitFn :function(){
        if(this.TransferInfo.money === ""){
          alert("金额不能为空")
          return false
        }
        if(this.TransferInfo.password === ""){
          alert("密码不能为空")
          return false
        }
          this.TransferInfo.cardNo=this.$route.query.mainCardNo
          this.TransferInfo.fCardNo=this.$route.query.FcardNo
          var url=this.$store.state.localHostUrl + '/accountTrasfer.json';
          console.log(this.TransferInfo)
          var formDate=qs.stringify(this.TransferInfo);
          var that=this
          this.$http.post(url,formDate, {emulateJSON: true}).then(
            function (res){
              if(res.data.ret){
                alert(res.data.tip)
                that.$store.dispatch('getcardBalance')
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
.cops-bankNumber{
  text-align: right;
}
.ocps-transferCard-number{
  text-align: right;
}
.ocps-inputbox {
  margin: 0.625rem 0 0.625rem 0;
}
 .ocps-transferCard-operation .cops-bankNumber{
    color: #188FFE;
    font-size: 1rem;
    margin-top: 0rem;
  }
  .cops-bank-balance{
    text-align: right;
    font-size: .8rem;
    margin-bottom: 5px;
    padding-left: .85rem;
  }
  .ocps-bindMobile{
    width: 100%;;
  }
.ocps-bindMobile {
   margin: 0rem auto;
}

  .ocpsCard-number-select{
    width: 80%;
  margin-left:10% ;
    border: none;
    height: 1.5rem;
  }
  .bg-transferCard{
    height:6.5rem
  }

</style>
