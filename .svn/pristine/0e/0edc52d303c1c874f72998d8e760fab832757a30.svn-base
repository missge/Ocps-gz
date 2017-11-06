<template>
  <div>
    <div class="header">
      <div class="left" @click="goback"><</div>
      <div class="title">商户手续费信息</div>
    </div>
    <p class="ocps-tab-title">商户手续费信息</p>
    <div class="ocps-CommissionRate">

        <ul v-for="(items,index) in datelist">
          <li>
            <p class="ocps-CommissionRate_lf lf">结算方式</p>
            <p class="ocps-CommissionRate_rt rt">{{items.type}}</p>
          </li>
          <li>
            <p class="ocps-CommissionRate_lf lf">手续费率：</p>
            <p class="ocps-CommissionRate_rt rt">{{items.fee}}</p>
          </li>
          <li>
            <p class="ocps-CommissionRate_lf lf">手续费上线：</p>
            <p class="ocps-CommissionRate_rt rt">{{items.feeLimit}}</p>
          </li>
          <li>
            <p class="ocps-CommissionRate_lf lf">结算周期：</p>
            <p class="ocps-CommissionRate_rt rt">{{items.settCycle}}天</p>
          </li>
        </ul>
    </div>
  </div>
</template>
<script>
  export default{
    name: 'CommissionRate',
    computed: {
      datelist () {
        return this.$store.state.CommissionRate.result
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

</style>
