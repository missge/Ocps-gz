<template>
<div>
  <div class="header">
    <div class="left" @click="goback"><</div>
    <div class="title">用户协议</div>
  </div>
  <div class="ocps-userAgreement">
        <img src="../../assets/img/userAgreement-img.png" class="ocps-userAgreement-img" alt=""/>
        <img src="../../assets/img/userAgreement-title.png" class="ocps-userAgreement-title" alt=""/>
      <p class="ocps-userAgreement-prompt">
        <b>您还尚未开通一卡通支付码</b>
      </p>
    <div class="button_box">
      <router-link to="Authentication">
        <input type="button" class="ocps-m-top_medium ocps-blue-button" value="立即开通一卡通支付"/>
      </router-link>
    </div>
    <div class="Agree">
       <input type="checkbox" />
       <span>我同意 <router-link to="pageA"> 《一卡通支付用户协议》</router-link></span>
    </div>
  </div>
</div>
</template>


<script>
  export default{
    name: 'Agreement'
  }
</script>

<style>
.ocps-userAgreement{
  text-align: center;
}
.ocps-userAgreement-img{
  max-width:150px;
  max-height:100px ;
  margin:50px auto;
  display: block;
}
.ocps-userAgreement-title{
  max-width:270px;
  max-height:27px;
  display: block;
  margin: 0 auto;
}
  .ocps-userAgreement-prompt{
    margin:50px ;

  }
  .ocps-userAgreement-prompt b{
    color: #353535;
  }
  .Agree{
    margin-top:50px;
  }
.Agree>input{
  vertical-align:middle; margin-top:-2px; margin-bottom:1px;
}
</style>
