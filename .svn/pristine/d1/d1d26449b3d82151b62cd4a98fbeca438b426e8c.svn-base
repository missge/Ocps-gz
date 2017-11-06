<template>
  <div>
    <div class="header">
      <div class="left" @click="goback"><</div>
      <div class="title">卡交易明细</div>
    </div>
    <div class="content">
      <div class="ocps-CommissionRate">
      <ul>
        <li v-for="(key,value,index) in data" >
          <p class="ocps-CommissionRate_lf lf">{{value}}</p>
          <p class="ocps-CommissionRate_rt rt">{{key}}</p>
        </li>
      </ul>
    </div>
       <div class="button_box"><input type="button" value="返回" class=" ocps-blue-button" @click="goback"></div>
    </div>
  </div>
</template>
<script>
  export default{
name: 'DetailInquiry',
  data(){
      return {
          data:this.$route.query.res
      }
    },
  methods: {
    goback () {
      this.$router.goBack()
    }
  }
}

</script>
<style>
  .ocps-CommissionRate_lf{
    width: 30%;
    text-align: left;
  }
  .ocps-CommissionRate_rt{
    width: 70%;
    text-align: right;
  }
  .ocps-CommissionRate{
    padding-top: 10px;
  }
  .ocps-CommissionRate_lf.lf,.ocps-CommissionRate_rt.rt{
    height: 2rem;
  }
</style>
