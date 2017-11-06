<template>
  <div class="ocpspc-transferCard-box">
    <div class="ocps-transferCard" >
      <div class="ocps-transferCard-bg ocps-blue-border bg-transferCard">
        <div class="ocps-transferCard-lf">
          <!--<p class="ocps-transferCard-name" v-if="this.$route.query.type == 1">主卡 </p>-->
          <!--<p class="ocps-transferCard-name" v-if="this.$route.query.type == 0">附卡 </p>-->
          <p class="ocps-transferCard-name">附卡 </p>

        </div>
        <div class="ocps-transferCard-rt">
          <p class="ocps-transferCard-number">1</p>
          <div class="ocps-transferCard-operation">
            <p class="cops-bankNumber">￥2</p>
            <p class="cops-bank-balance">
              现金账户余额
            </p>
          </div>
        </div>
      </div>
     </div>
    <form @submit.prevent="submitFn">
      <ul class="ocps-inputbox">
      <li>
        <div class="ocps-bind_title"><span class="red">*</span>附卡</div>
        <div class="ocps-bindbox">
          <input type="text" readonly v-model="this.$route.query.FcardNo" @keyup="filterNumber" @afterpaste="filterNumber" maxlength="16" class="ocps-none-input"  placeholder="请输入附卡"/>
        </div>
      </li>
      <li>
        <div class="ocps-bind_title"><span class="red">*</span>金额</div>
        <div class="ocps-bindbox">
          <input type="text" v-model="TransferInfo.money" maxlength="8" @blur="reg_money" class="ocps-none-input" placeholder="请输入金额"/>
        </div>
      </li>
      <li>
        <div class="ocps-bind_title"><span class="red">*</span>支付密码</div>
        <div class="ocps-bindbox">
          <input type="password" v-model="TransferInfo.password" maxlength="6"   @keyup="filterNumber" @afterpaste="filterNumber"  class="ocps-none-input" placeholder="请输入支付密码"/>
        </div>
      </li>
    </ul>
      <div class="button_box">
        <input type="submit" value="确认转账" class=" ocps-blue-button">
      </div>
    </form>
  </div>
</template>
<script>
  import qs from 'qs'
  export default{
    name: 'EntityCard',
    data(){
    return {
      TransferInfo:{
        money:'',
        password:'',
        cardNo:'',
        fCardNo:''
      }
    }
  },
  methods: {
    filterNumber () {
      this.TransferInfo.cardNo=this.TransferInfo.cardNo.replace(/\D/g,'')
      this.TransferInfo.password=this.TransferInfo.password.replace(/\D/g,'')
    },
     reg_money(){
       var reg =/(^((0|[1-9][0-9]{0,7})([.]\d{1,2})?)$)/;
       if(!reg.test(this.TransferInfo.money)){
          this.TransferInfo.money=""
          return false
        }
     },
    submitFn :function(){
      this.TransferInfo.cardNo=this.$route.query.mainCardNo
      this.TransferInfo.fCardNo=this.$route.query.FcardNo
      var url=this.$store.state.localHostUrl + '/accountTrasfer.json';
      console.log(this.TransferInfo)
      var reg =/(^((0|[1-9][0-9]{0,7})([.]\d{1,2})?)$)/;
      if(this.TransferInfo.money === ""){
       this.$confirm('金额不能为空!', '提示', {
            confirmButtonText: '确定',
            cancelButtonText: '取消',
            type: 'info',
            showCancelButton: false
         })
            return false
      }
      if(!reg.test( this.TransferInfo.money)){
          this.$confirm('金额格式不正确!', '提示', {
            confirmButtonText: '确定',
            cancelButtonText: '取消',
            type: 'info',
            showCancelButton: false
         })
            return false
      }
      if(this.TransferInfo.password === ""){
           this.$confirm('密码不能为空!', '提示', {
            confirmButtonText: '确定',
            cancelButtonText: '取消',
            type: 'info',
            showCancelButton: false
         })
            return false
      }
       if(this.TransferInfo.password.length !== 6){
             this.$confirm('密码长度必须为6位!', '提示', {
            confirmButtonText: '确定',
            cancelButtonText: '取消',
            type: 'info',
            showCancelButton: false
         })
              return false
      }
      else{
        var formDate=qs.stringify(this.TransferInfo);
        var that=this
        this.$http.post(url,formDate, {emulateJSON: true}).then(
          function (res){
            if(res.data.ret){
              alert(res.data.tip)
              that.$store.dispatch('getcardBalance')
            }else{
              alert(res.data.tip)
            }
          }
        )
      }
    }
  }
  }

</script>
