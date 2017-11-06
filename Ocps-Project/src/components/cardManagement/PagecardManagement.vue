<template>
  <div>
    <div class="header">
      <div class="left" @click="goback"><</div>
      <div class="title">卡包管理</div>
    </div>
    <div class="content">
       <div class="ocps-card ocps-container" v-for="(item, index) in datalist">
      <div class="ocps-blue-border ocps-page-cardManage-box" @click="click_fun(item,index)">
        <div class="ocps-page-cardManage-lf">
          <div class="ocps-card-img ">
            <img v-if="index == 1" class="pcard " src="../../assets/img/pcardmanagement/pcard2.png" alt=""/>
            <img v-if="index == 0" class="pcard " src="../../assets/img/pcardmanagement/pcard.png" alt=""/>
          </div>
        </div>
        <div v-if="index == 0" class="ocps-page-cardManage-ct">一卡通</div>
        <div v-if="index == 1" class="ocps-page-cardManage-ct">银行卡</div>
        <div class="ocps-page-cardManage-rt">
          <span>{{item}}</span>张
          <img class="ocps-icon-right" src="../../assets/img/pcardmanagement/ocps-icon-right.png" alt=""/>
        </div>
      </div>
    </div>
    </div>
  </div>
</template>
<script>
  export default{
    yktCard: 'PagecardManagement',
    computed: {
      datalist (){
        return this.$store.state.cardCount.result
      }
    },
    methods: {
      goback () {
        this.$router.goBack()
      },
      click_fun: function (num,type) {
       var loginUser = this.$store.state.loginUserId
        var flag = this.$store.state.flag
        if(!type){
          if (num === 0) {
            this.$router.push({path: '/NoCard'})
          }else{
            // 一卡通
            this.$store.dispatch('getcardManage')
          }
        }else{
            // 银行卡
            this.$store.dispatch('getBankCard')
        }
      }
    }
  }
</script>
<style>
.content .ocps-container:first-child{
  padding-top: 0.05rem;
}

</style>

