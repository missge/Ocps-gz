<template>
  <div class="ocpspc-cardManagement">
      <div class="ocpspc-cardManagement-top">
        <img src="../../assets/Images/card.png" alt=""/>
      </div>
      <p>暂无会员卡</p>
      <div class="ocpspc-cardManagement-bot">
        <span class="ocpspc-border-blue"  @click=" shopCardFn" >立即购买</span>
        <span class="ocpspc-border-blue" @click="EntityCardFn">实体卡绑定</span>
      </div>
  </div>
</template>
<script>
  export default{
    name: 'Nocard',
    methods:{
    EntityCardFn:function(){
      this.$router.push({path: '/EntityCard'})
    },
    shopCardFn:function(){
      this.$router.push({path: '/shopCard'})
    }
  }
  }
</script>
