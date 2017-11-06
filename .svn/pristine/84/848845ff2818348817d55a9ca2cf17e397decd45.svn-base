<template>
  <div>
      <div class="content">
          <div class="ocps-bindMobile">
             <form  @submit.prevent="bankBind">
                <ul class="ocps-inputbox">
                  <li>
                    <div class="ocps-bind_title"><span class="red">*</span>卡号</div>
                    <div class="ocps-bindbox">
                      <input type="text" v-model="cardInfo.cardNo"  maxlength="16" class="ocps-none-input" placeholder="请输入卡号" @keyup="filterNumber" @afterpaste='filterNumber'/>
                    </div>
                  </li>
                  <li>
                    <div class="ocps-bind_title"><span class="red">*</span>手机号</div>
                    <div class="ocps-bindbox">
                      <input type="text" v-model="cardInfo.teleNo" maxlength="11"  @keyup="filterNumber" @afterpaste='filterNumber' class="ocps-none-input" placeholder="请输入手机号"/>
                    </div>
                  </li>
                  <li>
                    <div class="ocps-bind_title"><span class="red">*</span>银行名称</div>
                    <div class="ocps-bindbox">
                      <input type="text" v-model="cardInfo.bankName" maxlength="4"  class="ocps-none-input" placeholder="请输入银行名称"/>
                    </div>
                  </li>
                  <li>
                    <div class="ocps-bind_title"><span class="red">*</span>银行卡类型</div>
                    <div class="ocps-bindbox">
                      <select v-model="cardInfo.cardType" class="ocps-none-input">
                        <option disabled value="">请选择</option>
                        <option>储蓄卡</option>
                        <option>信用卡</option>
                      </select>
                    </div>
                  </li>
                </ul>
                <div class="button_box">
                  <input type="submit"  value="立即绑定" class="ocps-blue-button">
                </div>
              </form>
          </div>
     </div>
  </div>
</template>
<script>
  import qs from 'qs'
  export default{
    name: 'EntityCard',
    data () {
    return{
      cardInfo: {
        loginUser:this.$store.state.loginUserId,
        teleNo:'',
        cardNo:'',
        bankName:'',
        cardType:''
      }
    }
  },
  methods: {
    goback () {
      this.$router.goBack()
    },
    bankBind:function(){
 
        if(this.cardInfo.cardNo === ""){
         this.$confirm('卡号不能为空!', '提示', {
              confirmButtonText: '确定',
              cancelButtonText: '取消',
              type: 'info',
              showCancelButton: false
           })
              return false
       }

        if(this.cardInfo.cardNo.length !== 16){
         this.$confirm('卡号长度必须为16位!', '提示', {
              confirmButtonText: '确定',
              cancelButtonText: '取消',
              type: 'info',
              showCancelButton: false
           })
              return false
        }
         if(this.cardInfo.teleNo.length === ''){
         this.$confirm('手机号不能为空!', '提示', {
              confirmButtonText: '确定',
              cancelButtonText: '取消',
              type: 'info',
              showCancelButton: false
           })
              return false
        }

         if(this.cardInfo.teleNo.length !== 11){
         this.$confirm('手机号必须为11位!', '提示', {
              confirmButtonText: '确定',
              cancelButtonText: '取消',
              type: 'info',
              showCancelButton: false
           })
              return false
        }


      //验证密码
 
      if(this.cardInfo.bankName === ''){
         this.$confirm('卡名称不能为空!', '提示', {
              confirmButtonText: '确定',
              cancelButtonText: '取消',
              type: 'info',
              showCancelButton: false
           })
          return false
      }
      if(this.cardInfo.cardType === ''){
         this.$confirm('卡类型不能为空!', '提示', {
              confirmButtonText: '确定',
              cancelButtonText: '取消',
              type: 'info',
              showCancelButton: false
           })
          return false
      }

      var Formdata = qs.stringify(this.cardInfo)
      var url = this.$store.state.localHostUrl+'/addBankCard.json'
      var that=this
      console.log(Formdata)
      this.$http.post(url, Formdata, {emulateJSON: true}).then(
        function(res){
          console.log(res.data)
          if(res.data.ret){
            alert(res.data.tip)
            that.$store.dispatch('getBankCard')
          }else{
            alert(res.data.tip)
          }
        }
      )
    },
    filterNumber:function(){
       this.cardInfo.cardNo =this.cardInfo.cardNo.replace(/\D/g,'')
       this.cardInfo.teleNo=this.cardInfo.teleNo.replace(/\D/g,'')

    }
  }
}
</script>


