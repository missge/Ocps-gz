<template>
  <div>
    <div class="header">
      <div class="left" @click="goback"><</div>
      <div class="title">余额查询</div>
    </div>
    <div class="content">
        <div class="pcps-BalanceInquiry-box ocps-blue-border">
          <div class="ocps-BalanceInquiry-bottom">
            <img src="../../assets/img/ye-icon2.png" alt=""/>
            <h3>￥{{sumMoney}}</h3>
            <h6>总现金资产</h6>
          </div>
          <div class="balance-icon">
            <img src="../../assets/img/ye_icon.png" alt=""/>
          </div>
        </div>
        <div class="ocps-transferCard" v-for="(items, index) in datalist">
          <div class="ocps-blue-border ocps-transferCard-bg">
            <div class="ocps-transferCard-lf">
              <p v-if="type[index]   == 0" class="ocps-transferCard-name" >主卡 <span>{{cardNo[index]}}</span></p>
              <p v-if="type[index] == 1"class="ocps-transferCard-name" >附卡 <span>{{cardNo[index]}}</span></p>
            </div>
            <div class="ocps-transferCard-operation operation-top" v-for="(item, index) in items">
              <p class="cops-bank-balance"><span>{{item.kindName}} </span><span>￥{{item.accBalance}}</span></p>
            </div>
          </div>
        </div>
        <div class="button_box">
          <input type="button" value="立即充值"  @click="rechangeFn"  v-if="userFlag == 0" class=" ocps-blue-button">
          <input type="button" value="提现" class=" ocps-white-button">
        </div>
    </div>
  </div>
</template>
<script>
  import qs from 'qs'
  import router from '@/router'
  export default{
    name: 'BalanceInquiry',
    data () {
      return {
        Info:{
          result: [],
          cardNo: [],
          type: [],
          cardState: [],
          cardFlag:'',
          KindMoney:'',
          mainCardNo:'',
          loginUser:''
        },
        userFlag: '',
      }
     },
    computed: {
      datalist (){
         return this.$store.state.cardBalance.result
      },
      cardNo (){
         return this.$store.state.cardBalance.cardNo
      },
      type (){
         return this.$store.state.cardBalance.type
      },
      type (){
         return this.$store.state.cardBalance.type
      },
      sumMoney (){
         return this.$store.state.cardBalance.sumMoney
      }
    },
    methods: {
      goback ()  {
        router.push({path: '/'})
       },
      rechangeFn(){
        this.$store.dispatch('getRecharge')
      },
      setParameter(){
        this.userFlag =  this.$store.state.flag
      }
    },
    mounted () {
      this.setParameter()
    }
  }
</script>
<style>
  .ocps-transferCard-name{
    font-size: 1rem;
  }
  .pcps-BalanceInquiry-box{
    width: 90%;
    margin:2.8rem auto 15px auto;
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
  .ocps-BalanceInquiry-bottom{
    margin: 1.3rem 0 1.5rem 0;
    text-align: center;
  }
  .ocps-BalanceInquiry-bottom img{
    margin-bottom:0.5rem ;
  }
  .ocps-BalanceInquiry-bottom>h3{
       margin-bottom: 15px;
    font-size: 1.3rem;;
  }
  .ocps-BalanceInquiry-bottom>h6{
    margin-bottom: 1rem;

  }.cops-bank-balance {
       text-align: left;
       font-size: 0.8rem;
       margin-bottom: 5px;
       padding-left: 0.85rem;
   }

  .ocps-transferCard-lf>.ocps-transferCard-name{
    height: 2.2rem;
    line-height: 2.2rem;
  }
  .operation-top{
    margin: 5px 0;
  }
</style>
