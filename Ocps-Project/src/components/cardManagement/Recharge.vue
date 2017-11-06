<template>
  <div>
    <div class="header">
      <div class="left" @click="goback"><</div>
      <div class="title">卡充值</div>
    </div>
    <div class="content">
       <div class="ocps-bindMobile">
        <form   @submit.prevent="submitFn">
        <ul class="ocps-inputbox">
          <li>
            <div class="ocps-bind_title">卡号</div>
            <div class="ocps-bindbox">
              <input type="text" class="ocps-none-input" v-model="cardNo"  placeholder="请输入卡号" readonly />
            </div>
          </li>
          <li>
           <!--  <div class="ocps-bind_title">充值金额</div>
            <div class="ocps-bindbox">
              <input type="text" v-model="money" class="ocps-none-input" placeholder="请输入充值金额"/>
            </div> -->
            <wc-keyboard v-model="money" inter="8" type="money" decimal="2" placeholder="请输入充值金额" label="充值金额"></wc-keyboard>
          </li>

        </ul>
        <div class="button_box">
          <input type="submit"  value="确定" class="ocps-blue-button">
        </div>
      </form>
      </div>
    </div>
  </div>
</template>
<script>
  import router from '@/router'
  export default{
    name: 'Recharge',
    data () {
      return{
        // cardNo:cardNo,
        money:''
      }
    },
    computed: {
      cardNo (){
        return this.$store.state.Recharge.cardNo
      }
    },
    methods: {
      goback () {
        this.$router.goBack()
      },
      submitFn () {
        if(this.money === ''){
          alert("请输入金额")
          return false
        }else{
          router.push({path: '/paymentOrder',query : { money:this.money,cardNo:this.cardNo,type:'2'}})
        }
      }
    }
  }
</script>
<style>

.ocps-bindMobile{
  width: 90%;
}.ocps-bind_title {
   /*width: 80px;
   flex: 0 0 3.25rem;
   -webkit-box-flex: 0 0 80px;
   -webkit-flex: 0 0 80px;
   -moz-box-flex: 0 0 80px;
   -ms-flex: 0 0 80px;*/
 }

</style>
