<template>
  <div>
    <div class="header">
      <div class="left" @click="goback"><</div>
      <div class="title">支付成功</div>
    </div>
    <div class="content">
      <div class="ocps-successful-box">
          <div class="ocps-success-payment-bg">
            <img src="../../assets/img/payok.png" class="ok_img" alt=""/>
            <p>支付成功</p>
            <div  class="ocps_zf_bot">
              <img src="../../assets/img/home_img/bt_bg.png" alt=""/>
            </div>
          </div>
          <div class="ocps-success-payment-content">
              <div class="ocps-success-payment-list">
                <div class="ocps-success-payment-lf">
                  微信支付
                </div>
                <div class="ocps-success-payment-rt">
                 215123123123123
                </div>
              </div>
              <div class="ocps-success-payment-list">
                <div class="ocps-success-payment-lf">
                  充值金额
                </div>
                <div class="ocps-success-payment-rt ">
                  <font>￥100</font>
                </div>
              </div>

          </div>

      </div>
      <div class="button_box">
        <input type="button" class=" ocps-blue-button" value="立即购买"/>
      </div>
    </div>
  </div>
</template>


<script>
  export default{
    name: 'SuccessfulPayment'
  }
</script>
<style>
  /*.ocps-success-payment-bg{*/
    /*margin: 0 auto;*/
    /*text-align: center;*/
    /*position: relative;*/
  /*}*/
  /*.ok_img{*/
    /*margin:1.6rem 0*/
  /*}*/
/*.ocps-success-payment-bg p{*/
/*color: #5B99FF;*/
  /*font-size:1rem ;*/
  /*padding-bottom: 20px;*/
/*}*/
/*.ocps_zf_bot{*/
  /*position: absolute;*/
  /*left: 0;*/
/*bottom: 0;*/
  /*width: 100%;;*/
/*}*/
/*.ocps_zf_bot>img{*/
  /*width: 100%;*/
  /*max-height:3.5rem ;*/
/*}*/
  /*.ok_img{*/
   /*max-width: 63px;*/
    /*max-height:66px ;*/

  /*}*/

</style>
