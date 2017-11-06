<template>
  <div>
    <p class="ocps-tab-title">商户手续费信息</p>
    <div class="ocps-CommissionRate" >
      <ul>
        <li>
          <p class="ocps-CommissionRate_lf lf">结算方式</p>
          <p class="ocps-CommissionRate_rt rt">{{datalist.type}}</p>
        </li>
        <li>
          <p class="ocps-CommissionRate_lf lf">手续费率：</p>
          <p class="ocps-CommissionRate_rt rt">{{datalist.fee}}</p>
        </li>
        <li>
          <p class="ocps-CommissionRate_lf lf">手续费上线：</p>
          <p class="ocps-CommissionRate_rt rt">{{datalist.feeLimit}}</p>
        </li>
        <li>
          <p class="ocps-CommissionRate_lf lf">结算周期：</p>
          <p class="ocps-CommissionRate_rt rt">{{datalist.settCycle}}天</p>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
  import router from '@/router'
  export default{
    name: 'CommissionRate',
    computed:{
      datalist()
        {
          return this.$store.state.CommissionRate.result
        }
     }

  }

</script>
<style>

</style>
