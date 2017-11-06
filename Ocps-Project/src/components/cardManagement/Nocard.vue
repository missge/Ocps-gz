<template>
  <div>
    <div class="header">
      <div class="left" @click="goback"><</div>
      <div class="title">无卡注册</div>
    </div>
    <div class="content">
      <div class="noCard">
        <div class="noCard-img">
          <img  src="../../assets/img/nocard.png"/>
        </div>
        <p class="noCard-prompt"><b>暂无会员卡</b></p>
      </div>
      <div class="button_box">
        <input type="button" class="ocps-m-top_medium ocps-white-button" @click="EntityCardFn"  value="实体卡绑定"/>
        <input type="button" class="ocps-m-top_medium ocps-blue-button" @click="shopCardFn" value="立即购买"/>
      </div>
    </div>
  </div>
</template>


<script>
  export default{
    name: 'Nocard',
    methods:{
      goback () {
         this.$router.goBack()
      },
      EntityCardFn:function(){
//        this.$store.dispatch('getData')
        this.$router.push({path: '/EntityCard'})
      },
      shopCardFn:function(){
        this.$router.push({path: '/shopCard'})
      }
    }
  }
</script>
<style>
  .noCard{
    margin-top: 3.5rem;
  }
  .noCard-img{
    width:6.28rem ;
    height: 4.83rem;
    margin: 0.5rem auto;
  }
  .noCard-img img{
    width: 100%;
  }
  .noCard-prompt{
    text-align: center;
  }

</style>
