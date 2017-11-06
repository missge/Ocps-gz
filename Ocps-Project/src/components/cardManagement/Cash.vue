<template>
  <div>
    <div class="header">
      <div class="left" @click="goback"><</div>
      <div class="title">提现</div>
    </div>
   <div class="content"> 暂无开通提现</div>
  </div>
</template>
<script>
  export default{
    methods: {
      goback () {
        this.$router.goBack()
      }
    }
  }

</script>
<style>

</style>
