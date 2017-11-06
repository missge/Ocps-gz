<template>
  <div>
    <div class="header">
      <div class="left" @click="goback"><</div>
      <div class="title">支付成功</div>
    </div>
    <div class="content">
      <div class="ocps-successful-box">
        <div class="ocps-success-payment-bg">
          <img src="../../assets/img/payok.png" class="ok_img" alt=""/>
          <p>支付成功</p>
          <div  class="ocps_zf_bot">
            <img src="../../assets/img/home_img/bt_bg.png" alt=""/>
          </div>
        </div>
        <div class="ocps-inputbox">
          <form @submit.prevent="paycodeFn">
            <ul>
              <li>
               <div class="ocps-bind_title">金额</div>
               <div class="ocps-bindbox">
                  <p class=" ocps-none-input">
                   {{this.$route.query.money}}
                  </p>
                </div>
              </li>
            </ul>
            <div class="button_box">
              <input type="submit" class=" ocps-blue-button" @click="homeFn" value="返回"/>
            </div>
          </form>
        </div>

      </div>

    </div>
  </div>
</template>
<script>
  export default{
    name: 'paysysSuccess',
     methods: {
      goback () {
        this.$router.goBack()
      },
      homeFn(){
         this.$router.push("/")
      }
    }
  }
</script>
