<template>
  <div>
    <div class="header">
      <div class="left" @click="goback"><</div>
      <div class="title">一卡通管理</div>
    </div>
    <div class="content">
      <div class="ocps-transferCard">
        <div class="ocps-transferCard-bg  ocps-blue-border" v-for="(items, index) in datalist"
             :class="type[index] ? '' :'ocps-main-cardocps-secondary-card'">
          <div class="ocps-transferCard-lf ocps-grid ocps-grid_vertical-align-center ocps-grid_align-spread">
            <span class="ocps-transferCard-name" v-if="type[index] == 0"> 主卡</span>
            <span class="ocps-transferCard-name" v-if="type[index] == 1"> 附卡</span>
            <span class="ocps-transferCard-number">{{cardNo[index]}}</span>

          </div>
          <div class="ocps-transferCard-rt" :class="type[index] ? 'ocps-secondary-card' : 'ocps-transferCard-rt'">
            <div class="ocps-transferCard-operation" v-if="type[index] == 0">
              <span class="operation-loss" @click="loss(index,cardState[index])" v-if="cardState[index]  == 7">挂失</span>
              <span class="operation-loss" @click="loss(index,cardState[index])" v-if="cardState[index]  == 8">解挂</span>
            </div>
            <div class="ocps-transferCard-operation ocps-secondary-card" v-if="type[index] == 1">
              <span class="operation-accounts" v-show=" !cardFlag " @click="accountsFn(index)">转账</span>
              <span class="operation-unbind" v-show=" !cardFlag " @click="unbind(index)">解绑</span>

              <span class="operation-loss" @click="loss(index,cardState[index])" v-if="cardState[index] == 7">挂失</span>
              <span class="operation-loss" @click="loss(index,cardState[index])" v-if="cardState[index] == 8">解挂</span>
            </div>
          </div>
        </div>

        <div class="ocps-add-card" @click="AddFictitiousdFn" v-show=" !cardFlag ">
          <p class="add">+</p>

          <p>添加附卡</p>
        </div>
      </div>

    </div>
  </div>
</template>
<script>
  import qs from 'qs'
  import Vue from 'vue'
  // import axios from 'axios'
  export default{
    name: 'cardManagement',
    data ()
  {
    return {
      lossInfo: {
        cardNo: '',
        loginUser: ''
      },
      UnbindInfo: {
        cardNo: '',
        loginUser: ''
      },
      TransferInfo: {
        mainCardNo: '',
        type: '',
        KindMoney: '',
        FcardNo: ''
      }
//        cardStateName: ['解挂','挂失']
    }
  }
  ,
  computed:{
    datalist()
    {
      return this.$store.state.cardManage.result
    }
  ,
    cardNo()
    {
      return this.$store.state.cardManage.cardNo
    }
  ,
    type()
    {
      return this.$store.state.cardManage.type
    }
  ,
    cardState()
    {
      return this.$store.state.cardManage.cardState
    }
  ,
    cardFlag()
    {
      return this.$store.state.cardManage.cardFlag
    }
  ,
    KindMoney()
    {
      return this.$store.state.cardManage.KindMoney
    }
  ,
    mainCardNo()
    {
      return this.$store.state.cardManage.mainCardNo
    }
  }
  ,
  methods: {
    init()
    {

    }
  ,
    goback()
    {
      this.$router.goBack()
    }
  ,
    accountsFn:function (index) {
      this.TransferInfo.type = this.$store.state.cardManage.type[index]
      this.TransferInfo.KindMoney = this.$store.state.cardManage.KindMoney
      this.TransferInfo.FcardNo = this.$store.state.cardManage.cardNo[index]
      this.TransferInfo.mainCardNo = this.$store.state.cardManage.mainCardNo;
      this.$router.push({path: '/TransferCard', query: this.TransferInfo})
    }
  ,
    unbind:function (index) {
      this.$confirm('确定解绑吗?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
          this.UnbindInfo.cardNo = this.cardNo[index]
          this.UnbindInfo.loginUser = this.$store.state.loginUserId
          var formData = qs.stringify(this.UnbindInfo)
          var that = this
          var url = this.$store.state.localHostUrl + '/removeFCard.json'

          this.$http.post(url, formData, {emulateJSON: true}).then(
            function (res) {
              console.log(res.data)
              if (res.data.ret) {
                alert(res.data.tip)
                console.log(index)
                that.datalist.splice(index,1)
                that.cardNo.splice(index, 1)
                that.type.splice(index, 1)
              } else {
                alert(res.data.tip)
              }
            })
           }).catch(() => {
        return
      });
    }
  ,
    loss:function (index, bool) {
      let str
      if (this.cardState[index] === 7){
          str = '挂失'
      }else{
          str = '解挂'
      }

      this.$confirm('确定'+str+'吗?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          console.log(bool)
          this.lossInfo.cardNo = this.cardNo[index]
          this.lossInfo.loginUser = this.$store.state.loginUserId

          var formData = qs.stringify(this.lossInfo)
          var url = ''
          if (bool == 7) {
            url = this.$store.state.localHostUrl + '/doReport.json'
          }
          else if (bool == 8) {
            url = this.$store.state.localHostUrl + '/changeReport.json'
          }
          var that = this
          this.$http.post(url, formData, {emulateJSON: true}).then(
            function (res) {
              if (res.data.ret) {
                if (bool == 7) {
                  Vue.set(that.cardState, index, 8)
                }
                if (bool == 8) {
                  Vue.set(that.cardState, index, 7)
                }
                  alert(res.data.tip)
              } else {
                alert(res.data.tip)
                return
              }
            }
          )
        }).catch(() => {
          return
        });


    }
  ,
    AddFictitiousdFn:function () {
      this.$router.push({path: '/FictitiousCard'})
    }
  }
  ,
  mounted()
  {
    this.init();
  }
  }
</script>
<style>
  .ocps-transferCard {
    padding-top: 0.05rem;
  }

</style>
