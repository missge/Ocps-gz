<template>
  <div>
    <div class="header">
      <div class="left" @click="goback"><</div>
      <div class="title">余额查询</div>
    </div>
    <div class="content">
        <div class="pcps-BalanceInquiry-box ocps-blue-border">
          <p class="ocps-BalanceInquiry-top">88880000000001</p>
          <div class="ocps-BalanceInquiry-bottom">
            <img src="../../assets/img/ye-icon2.png" alt=""/>
            <h3>$2000.00</h3>
            <h6>账户余额</h6>
          </div>
          <div class="balance-icon">
            <img src="../../assets/img/ye_icon.png" alt=""/>
          </div>
        </div>
        <div class="button_box">
          <input type="button" value="立即充值" class=" ocps-blue-button">
          <input type="button" value="提现" class=" ocps-white-button">
        </div>
    </div>
  </div>
</template>
<script>
export default{
  name: 'BalanceInquiry',
  methods: {
    goback () {
      this.$router.goBack()
    }
  }
}
</script>
<style>
.pcps-BalanceInquiry-box{
  width: 95%;
margin: 15px auto 40px auto;
  position: relative;
  height: 100%;;
}
  .balance-icon{
    position: absolute;
    border: 0;
    bottom: 0;
  height: 80px;
    background-size:100% ;
 width: 100%;;
  }.balance-icon img{
  width: 100%;
  height: 100%;;
     }
  .ocps-BalanceInquiry-top{
    width: 98%;
    border-bottom:1px solid  #EFEFEF;
    height: 2.25rem;
    background: url("../../assets/img/ye-icon.png") no-repeat 10px center;
    line-height: 2.25rem;
    padding-left: 55px;
    margin: 5px auto;
    }
  .ocps-BalanceInquiry-bottom{
      margin: 1.5rem 0 2.25rem 0;
    text-align: center;
  }
  .ocps-BalanceInquiry-bottom img{
    margin-bottom:0.5rem ;
  }
  .ocps-BalanceInquiry-bottom>h3{
    margin-bottom: 10px;
    font-size: 20px;
  }
.ocps-BalanceInquiry-bottom>h6{
  margin-bottom: 1rem;

}
</style>
