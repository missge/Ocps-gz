<template>
     <div class="ocps-bindMobile">
        <form  @submit.prevent="submitFn">
          <ul class="ocps-inputbox">
            <li>
              <div class="ocps-bind_title"><span class="red">*</span>卡号</div>
              <div class="ocps-bindbox">
                <input type="text" class="ocps-none-input"  v-model="cardNo"  placeholder="请输入卡号" readonly />
              </div>
            </li>
            <li>
              <div class="ocps-bind_title"><span class="red">*</span>充值金额</div>
              <div class="ocps-bindbox">
                <input type="text" v-model="money" maxlength="9" @blur="reg_money" class="ocps-none-input" placeholder="请输入充值金额"/>
              </div>
            </li>

          </ul>
          <div class="button_box">
            <input type="submit"  value="确定" class="ocps-blue-button">
          </div>
        </form>
    </div>
</template>
<script>
  import router from '@/router'
  export default{
    name: 'Recharge',
    data () {
      return{
        money:''
      }
    },
    computed: {
      cardNo (){
        return this.$store.state.Recharge.cardNo
      }
    },
    methods: {
       reg_money(){
         var reg =/(^((0|[1-9][0-9]{0,7})([.]\d{1,2})?)$)/;
           if(!reg.test(this.money)){
              this.money=""
              return false
            }
        },
      submitFn () {
         var reg =/(^((0|[1-9][0-9]{0,7})([.]\d{1,2})?)$)/;
      
           if(this.money === ''){
             this.$confirm('金额不能为空!', '提示', {
                  confirmButtonText: '确定',
                  cancelButtonText: '取消',
                  type: 'info',
                  showCancelButton: false
             })
            return false
          }
          
           if(!reg.test( this.money)){
             this.$confirm('金额格式不正确!', '提示', {
                  confirmButtonText: '确定',
                  cancelButtonText: '取消',
                  type: 'info',
                  showCancelButton: false
             })
            return false
          }
          else{
            router.push({path: '/paymentOrder',query : { money:this.money,cardNo:this.cardNo,type:'2'}})
          }
      }
     
    }
  }
</script>
<style>
</style>
