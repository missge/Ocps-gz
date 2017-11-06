<template>
  <div>
    <div class="content">
      <p class="ocps-tab-title">选择金额</p>
        <form @submit.prevent="shopCard">
        <div class="ocps-shoppCard">
          <div class="ocps-row">
            <div class="ocps-col-xs-4">
              <div @click="ShopCardFn(0.01)" class="ocps-div_btn" :class="{'ocps-div_btn-on': clicked === 0.01 }">0.01</div>
            </div>
            <div class="ocps-col-xs-4">
              <div @click="ShopCardFn(100)" class="ocps-div_btn" :class="{'ocps-div_btn-on' : clicked === 100}">100</div>
            </div>
            <div class="ocps-col-xs-4">
              <div @click="ShopCardFn(200)" class="ocps-div_btn" :class="{'ocps-div_btn-on' : clicked === 200}">200</div>
            </div>
            <div class="ocps-col-xs-4">
              <div @click="ShopCardFn(500)" class="ocps-div_btn" :class="{'ocps-div_btn-on' : clicked === 500}">500</div>
            </div>
            <div class="ocps-col-xs-4">
              <div @click="ShopCardFn(1000)" class="ocps-div_btn" :class="{'ocps-div_btn-on' : clicked === 1000}">1000</div>
            </div>
            <div class="ocps-col-xs-4">
              <div @click="ShopCardFn(5000)" class="ocps-div_btn" :class="{'ocps-div_btn-on' : clicked === 5000}">5000</div>
            </div>
          </div>
          <div class="ocps-pc-shopcard">
            <input type="submit"  value="确定" class="ocps-blue-button  ">
            <input type="button" @click="cancelFn" value="取消" class="ocps-blue-button  ">
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
  name: 'shopCard',
  data () {
    return {
      money:'',
      loginUser:'',
      clicked:'',
    }
  },
  methods: {
    cancelFn () {
      router.push({path:'/'})
    },
    ShopCardFn (val) {
      this.money = val
      this.clicked = val
    },
    shopCard:function(val){
      this.loginUser  = this.$store.state.loginUserId

//      var count=3;
//          var self=this;
//          setInterval(function () {
//            self.time=count
//            count--
//            if(count<=0){
//              count=0
//            }
//          },1000)
//          if(count==0){
//            alert("xx")
//          }
      if(this.money ===""){
        alert("请选择金额")
        return false
      }else{
       router.push({path: '/paymentOrder',query : { money:this.money,type:"1"}})
      }
    }
  }
}

</script>
<style>
  /*.ocps-shoppCard{*/
    /*margin:1rem .5rem;*/
   /*}*/
  .ocps-shoppCard .ocps-row{
    margin-bottom:1rem ;
  }
  /*.ocps-div_btn{*/
    /*border:1px solid #3A7EED;*/
    /*border-radius: 3px;*/
    /*color: #3A7EED;*/
    /*background: #fff;*/
    /*padding: .5rem;*/
    /*text-align: center;*/
  /*}*/

  .cancel{
    background: #fff;
    border: 1px solid #3A7EED;
    color: #3A7EED ;
    margin-top:.5rem;


  }
  /*.ocps-shoppCard .ocps-row{*/
    /*margin-bottom:.5rem ;*/
    /*overflow: hidden;*/
  /*}*/

  .button_box{
    margin-top: 1rem
  }
</style>
