<template>
  <div>
    <div class="header">
      <div class="left" @click="goback"><</div>
      <div class="title">银行卡管理</div>
    </div>
    <div class="content">
      <div class="ocps-transferCard">
        <div class="ocps-transferCard-bg ocps-blue-border" v-for="(items,index) in datelist">
          <div class="ocps-transferCard--action"  @click="unbindFn(index)">解绑</div>
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
        <div class="ocps-add-card" @click="addCardFn">
          <p class="add">+</p>
          <p>添加银行卡</p>
        </div>
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
      goback () {
        this.$router.goBack()
      },
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
<style>
  .cops-cardname{
    display: inline-block;
    padding: .8rem 0 0 1.8rem;
    font-size: 0.9rem;
    color: #309AFE;
  }
  .cops-sub-cardname{
    display: inline-block;
     font-size: 0.5rem;
     color: #4e4e4e;
  }

  .cops-bankCard-top{
    overflow: hidden;
  }
  .cops-bankCard-top p{
    float: left;
    margin-top: 13px;;
  }
  .cops-bankCard-top input{
    float: right;
    background: #CADCE8;
    padding: 3px 7px;
    border-radius: 3px;
    height: auto;
    color: #309AFE;
    margin: 3px 0;
    border: none;
    width: 40px;
  }

  .cops-bankNumber{
    color: #188FFE;
    font-size: 1rem;
    margin-top:1rem ;
  }

  .ocps-transferCard--action{
    position: absolute;
    top: .25rem;
    right: .25rem;
    background: rgba(139,174,203,.35);
    border-radius: .125rem;
    padding: 0 .25rem;
    height: 1rem;
    line-height: 1rem;
    color: #3f8afe;
    font-size: .75rem;
  }

</style>
