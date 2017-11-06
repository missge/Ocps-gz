<template>
  <div class="ocpspc-BalanceQuery">
    <div class="ocpspc-BalanceQuery-top">
        <div class="ocpspc-BalanceQuery-top-left">
            <div class="ocpspc-BalanceQuery-yuetab">
              <img src="../../assets/Images/tab.png" alt=""/>
            </div>
            <div class="ocpspc-BalanceQuery-money">
              <p>总资产</p>
              <h3>￥{{sumMoney}}</h3>
            </div>
        </div>
        <div class="ocpspc-BalanceQuery-top-rt">
          <span class="ocps-change-on" @click="rechangeFn"   v-if="!flag">立即充值</span>
          <span>提现</span>
        </div>
    </div>
    <!--<div class="ocpspc-BalanceQuery-bot"  v-for="(items, index) in datalist">-->
      <!--<div  v-if="type[index]  == 0"  class="ocpspc-BalanceQuery-bot-title">主卡 </div>-->
      <!--<div  v-if="type[index]  == 1"  class="ocpspc-BalanceQuery-bot-title">附卡 </div>-->

      <!--<div class="ocpspc-BalanceQuery-bot-boxs">-->
          <!--<div class="ocpspc-BalanceQuery-bot-box">-->
            <!--卡号：{{cardNo[index]}}-->
          <!--</div>-->
          <!--<i class="ocps-icon"></i>-->
          <!--<div  class="ocpspc-BalanceQuery-bot-box" v-for="(item, index) in items" >-->
              <!--{{item.kindName}}：￥{{item.accBalance}}-->
          <!--</div>-->
          <!--<i class="ocps-icon"></i>-->
      <!--</div>-->
    <!--</div>-->
    <div class="ocpspc-BalanceQuery-bot" v-for="(items, index) in datalist">
      <div class="ocpspc-BalanceQuery-bot-top">
        <div  v-if="type[index]  == 0"  class="ocpspc-BalanceQuery-bot-title">主卡 </div>
        <div  v-if="type[index]  == 1"  class="ocpspc-BalanceQuery-bot-title">附卡 </div>
      </div>
      <div class="ocpspc-BalanceQuery-bot-boxs">
        <div class="ocps-row">
          <div class="ocps-col-xs-4" >
            <div class="ocpspc-BalanceQuery-bot-box">
              卡号：{{cardNo[index]}}
            </div>
          </div>
          <div class="ocps-col-xs-4 ocpspc-BalanceQuery-bot-box"  v-for="(item, index) in items" >
            {{item.kindName}}：￥{{item.accBalance}}
          </div>
        </div>
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
      show:'',
      flag:this.$store.state.flag
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
    rechangeFn(){
      this.$store.dispatch('getRecharge')
    }
  }
  }
</script>
<style>
  .on{
      border-left:1px solid #ddd;
      border-right:1px solid #ddd;
    text-align: center;
  }
</style>
