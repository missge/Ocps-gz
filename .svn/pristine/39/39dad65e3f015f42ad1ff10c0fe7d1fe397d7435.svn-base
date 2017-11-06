<template>
  <div class="ocpspc-BankCardManagement">
    <div class="ocps-container">
      <div class="ocps-row">
        <div class="ocps-col-xs-4"  v-for="(items,index) in datelist">
          <div class="ocps-transferCard-bg  ocps-blue-border">
              <div class="ocps-transferCard--action" @click="unbindFn(index)">解绑</div>
              <div class="ocps-transferCard-lf ocps-grid ocps-grid_vertical-align-end">
                  <span class="cops-cardname">{{items.bankName}}</span>
                  <span class="cops-sub-cardname ocps-m-left--xx-small">{{items.cardType}}</span>
              </div>
              <div class="ocps-transferCard-rt1">
                  <div class="ocps-transferCard-operation">
                    <div class="cops-bankNumber">{{items.cardNo}}</div>
                  </div>
                </div>
           </div>
        </div>

        <div class="ocps-col-xs-4">
          <div class="ocps-add-card" @click="addCardFn"><p class="add">+</p> <p>添加银行卡</p></div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import qs from 'qs'
  export default{
    name: 'BankCardManagement',
    data(){
    return{
      unbind: {
        loginUser:'',
        cardNo:''
      }
    }
  },
  computed: {
    datelist () {
      return this.$store.state.BankCard.result
    }
  },
  methods: {
    unbindFn :function(index) {
      this.$confirm('确定解绑吗?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.unbind.loginUser = this.$store.state.loginUserId
      this.unbind.cardNo = this.$store.state.BankCard.result[index].cardNo
      var url = this.$store.state.localHostUrl + '/removeBankCard.json'
      var formDate = qs.stringify(this.unbind)
      var that=this
      this.$http.post(url,formDate, {emulateJSON: true}).then(
        function (res){
          if(res.data.ret){
            that.datelist.splice(index,1)
          }
          else{
            alert(res.data.tip)
          }
        }
      )
    }).catch(() => {
      return
    });
  },
  addCardFn(){
    this.$router.push({path: '/BankAdd'})
  }
  }
  }
</script>
