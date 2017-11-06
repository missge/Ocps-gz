// store.js
import Vue from 'vue'
import Vuex from 'vuex'

// 引入 axios
import axios from 'axios'

import router from '@/router'

import qs from 'qs'

Vue.use(Vuex)
// Vue.prototype.$http = axios
// var loginUserStr=this.$utils.getUrlKey("loginUser")
// var loginUserId='111111'
// var flag='0'
//商户
//var flag='13552615118'
// var localhostStr='http://101.200.188.251:8085/gyapp_api'
  // var localhostStr='http://10.0.0.17:8080/gyapp_api'
  var localhostStr='http://101.200.188.251:8085/gyapp_api'
//交易查询
var month =''
var page='2'
//充值卡
var czflag ='4'
var rechMode = '充值模式'
var sign = '111'
var cardNo=''

const store = new Vuex.Store({
  // 定义状态
  state: {
    loginUserId: '',
    flag:'',
    massage: '',
    localHostUrl: localhostStr,
    posturl:'',
    test01: {
      url: 'http://www.vrserver.applinzi.com/aixianfeng/apihome.php',
      pramater: {name: 'abc'},
      result: ''
    },
    codeData: {
      url: '',
      pramater: '',
      result: ''
    },
    //二维码数据
    qrCode: {
      url: localhostStr + '/getPayQrcode.json',
      pramater: {loginUser: this.loginUserId,flag: this.flag},
      result: [],
    },
    //卡片数量
    cardCount: {
      url: localhostStr + '/getCardCount.json',
      pramater: {loginUser: this.loginUserId},
      result: []
    },
    //余额查询数据
    cardBalance: {
      url: localhostStr + '/getCardBalance.json',
      pramater: {loginUser: this.loginUserId,flag: this.flag},
      result: [],
      cardNo: [],
      type: [],
      sumMoney:''
    },
    //  实体卡绑定
    cardBind:{
      url: localhostStr + '/bindingCard.json',
      pramater:{loginUser : this.loginUserId},
      result: []
    },
    //  一卡通管理
    cardManage:{
      url: localhostStr + '/getCardBalance.json',
      pramater: {loginUser : this.loginUserId,flag : this.flag},
      result: [],
      cardNo: [],
      type: [],
      cardState: [],
      cardFlag:'',
      KindMoney:'',
      mainCardNo:''
    },
    //交易查询
    TransactionRecord:{
      url: localhostStr + '/getRecord.json',
      pramater: {loginUser : '',flag : '',date: '' ,month :'',page:'1',tradeType:''},
      result:[],
      income_money:'',
      pay_money:'',
      tradeId:[],
      month:'',
      year:'',
      ret:''
      },

    //卡充值
    Recharge:{
      url: localhostStr + '/getCardNo.json',
      pramater: {loginUser : ''},
      cardNo:''
    },
    BankCard:{
      url:localhostStr + '/getBankCard.json',
      pramater: {loginUser : this.loginUserId},
      result:[]
    },
    //商户手续费率
    CommissionRate: {
      url:localhostStr + '/getMerFee.json',
      pramater: {loginUser : this.loginUserId},
      result:[]
    },
    //结算查询
    Settlementquery: {
      url:localhostStr + '/getSettlements.json',
      pramater: {loginUser : this.loginUserId,month:'',page:'1'},
      result:[],
      month:'',
      year:''
    },
    //汇总查询
    DetailInquirySummary: {
      url:localhostStr + '/getSumRecord.json',
      pramater: {loginUser : this.loginUserId,month:'',page:'1'},
      result:[],
      month:'',
      year:''
    }
  },
  actions: {
    // 封装一个 ajax 方法
    getData (context) {
     context.state.test01.result = context.state.test01.pramater
      axios.post(context.state.test01.url, qs.stringify(context.state.test01.pramater), {emulateJSON: true}).then(
          function (res) {
            context.state.test01.result = res.data
            router.push({path: '/pageA'})
          }, function (res) { context.state.test01.result = '' })
    },
    getCodeDate(context){
    },
    getCode (context) {
     context.state.qrCode.pramater.loginUser = context.state.loginUserId
      context.state.qrCode.pramater.flag = context.state.flag
      axios.post(context.state.qrCode.url, qs.stringify(context.state.qrCode.pramater), {emulateJSON: true}).then(
        function (res) {
            if(res.data.ret){
              context.state.qrCode.result[1] = res.data.url
                router.push({path: '/QrCode'})
            }else{
              alert(res.data.ret)
            }
        })

    },
    //获取卡片数量
    getcardCount (context) {
      context.state.cardCount.pramater.loginUser = context.state.loginUserId
      axios.post(context.state.cardCount.url, qs.stringify(context.state.cardCount.pramater), {emulateJSON: true}).then(
          function (res) {
              console.log(res.data)
            if(res.data.ret){
                context.state.cardCount.result[1] = res.data.bankCard
                context.state.cardCount.result[0] = res.data.yktCard

            }else{
                context.state.cardCount.result[1] = 0
                context.state.cardCount.result[0] = 0
            }
            router.push({path: '/PagecardManagement'})
          })
    },
    //查询余额
    getcardBalance (context) {
      context.state.cardBalance.pramater.loginUser = context.state.loginUserId
      context.state.cardBalance.pramater.flag = context.state.flag
      axios.post(context.state.cardBalance.url, qs.stringify(context.state.cardBalance.pramater), {emulateJSON: true}).then(
          function (res) {
            if(res.data.ret){
              var sumMoney = 0
              var arr_accs = []
              var arr_cardNo = []
              var arr_type = []
              for(var i=0;i<res.data.maps.length;i++){
                arr_cardNo.push(res.data.maps[i].cardNo)
                arr_type.push(res.data.maps[i].type)
                arr_accs.push(res.data.maps[i].accs)
               // for(var j=0;j<res.data.maps[i].accs.length;j++){
                var sumMoney = sumMoney + res.data.maps[i].accs[0].accBalance
                //}
              }
              context.state.cardBalance.sumMoney = sumMoney.toFixed(2)
              context.state.cardBalance.result = arr_accs
              context.state.cardBalance.cardNo = arr_cardNo
              context.state.cardBalance.type = arr_type

            }else{
              alert(res.data.tip);
            }
            router.push({path: '/BalanceQuery'})
          })
    },
    //查询一卡通
    getcardManage (context) {
      context.state.cardManage.pramater.loginUser = context.state.loginUserId
      context.state.cardManage.pramater.flag = context.state.flag
      axios.post(context.state.cardManage.url, qs.stringify(context.state.cardManage.pramater), {emulateJSON: true}).then(
        function (res) {
          if(res.data.ret){
            var KindMoney = 0
            var arr_accs = []
            var arr_cardNo = []
            var arr_type = []
            var arr_cardState = []
            var arr_bindState = []
            for(var i=0;i<res.data.maps.length;i++){
              arr_cardNo.push(res.data.maps[i].cardNo)
              arr_type.push(res.data.maps[i].type)
              arr_accs.push(res.data.maps[i].accs)
              arr_cardState.push(res.data.maps[i].status)
              for(var j=0;j<res.data.maps[i].accs.length;j++){
                //现金账户
                var KindMoney =  res.data.maps[0].accs[0].accBalance
              }
            }
            context.state.cardManage.KindMoney = KindMoney
            context.state.cardManage.result = arr_accs
            context.state.cardManage.cardNo = arr_cardNo
            context.state.cardManage.type = arr_type
            context.state.cardManage.cardState = arr_cardState
            context.state.cardManage.cardFlag = res.data.cardFlag
            context.state.cardManage.mainCardNo=res.data.mainCardNo

          }else{
            alert(res.data.tip);
          }
          router.push({path: '/cardManagement'})
        })
    },
    //交易查询
    getTransactionRecord (context) {
      context.state.TransactionRecord.pramater.loginUser = context.state.loginUserId
      context.state.TransactionRecord.pramater.flag = context.state.flag
      axios.post(context.state.TransactionRecord.url, qs.stringify(context.state.TransactionRecord.pramater), {emulateJSON: true}).then(
        function (res) {
          console.log(res.data)
          if(res.data.ret){
             context.state.TransactionRecord.result = res.data.map
            var income_money = 0;
            var pay_money = 0;
            var tradeId = [];
            var type;
            for(var i=0;i<res.data.map.length;i++){
              type=res.data.map[i].tradeType
              if(type === 6 || type === 16 || type === 14){
                income_money +=res.data.map[i].tradeAmount
              }
              if(type === 2 || type === 15){
                pay_money +=res.data.map[i].tradeAmount
              }
            }
            context.state.TransactionRecord.income_money = income_money
            context.state.TransactionRecord.pay_money = pay_money
            //获取年月
            var date = new Date()
            context.state.TransactionRecord.month=date.getMonth()+1
            context.state.TransactionRecord.year=date.getFullYear()
            context.state.TransactionRecord.ret= res.data.ret
          }else{
            alert(res.data.ret)
            context.state.TransactionRecord.ret= res.date.ret
          }
          router.push({path: '/TransactionRecord'})
        })
    },
    getBankCard (context){
      context.state.BankCard.pramater.loginUser = context.state.loginUserId
      axios.post(context.state.BankCard.url, qs.stringify(context.state.BankCard.pramater), {emulateJson: true}).then(
        function (res) {
          if(res.data.ret){
           var items = res.data.items
            var result = []
            for(var i = 0;i<items.length;i++){
               result.push(items[i])
            }
            context.state.BankCard.result =  result
            console.log(result)
            router.push({path: '/BankCardManagement'})
          }else{
            alert(res.data.tip)
          }
        }
      )
    },
    //充值支付
    getRecharge (context) {
      // console.log(context.state.loginUserId)
      context.state.Recharge.pramater.loginUser = context.state.loginUserId
      axios.post(context.state.Recharge.url, qs.stringify(context.state.Recharge.pramater), {emulateJSON: true}).then(
        function (res) {
          if(res.data.ret){
            context.state.Recharge.cardNo=res.data.cardNo
          }else{
            alert("此卡不能充值")
            return false
          }
          router.push({path: '/Recharge'})
        })

    },
    //手续费率
    getCommissionRate (context){
      context.state.CommissionRate.pramater.loginUser = context.state.loginUserId
       axios.post(context.state.CommissionRate.url, qs.stringify(context.state.CommissionRate.pramater), {emulateJSON: true}).then(
          function(res){
            if(res.data.ret){
              console.log(res.data)
              context.state.CommissionRate.result[0]=res.data
              console.log( context.state.CommissionRate.result[0])
            }else{
              alert(res.data.tip)
            }
            router.push({path: '/CommissionRate'})
          })
      },
    //结算查询
    getSettlementquery (context){
      context.state.Settlementquery.pramater.loginUser = context.state.loginUserId
      axios.post(context.state.Settlementquery.url, qs.stringify(context.state.Settlementquery.pramater), {emulateJSON: true}).then(
        function(res){
          if(res.data.ret){
            var maps=res.data.map
            var result=[]
            for(var i=0;i<maps.length;i++){
              result.push(maps[i])
            }
             context.state.Settlementquery.result=  result

            //获取年月
            var date = new Date()
            context.state.Settlementquery.month=date.getMonth()+1
            context.state.Settlementquery.year=date.getFullYear()

            router.push({path: '/SettlementRecord'})
          }else{
            alert(res.data.tip)
          }
        })
    },
    //汇总查询
    getDetailInquirySummary (context){
      context.state.DetailInquirySummary.pramater.loginUser = context.state.loginUserId
      axios.post(context.state.DetailInquirySummary.url, qs.stringify(context.state.DetailInquirySummary.pramater), {emulateJSON: true}).then(
        function(res){
          console.log(res.data)
          if(res.data.ret){
            var maps=res.data.map
            var result=[]
            for(var i=0;i<maps.length;i++){
              result.push(maps[i])
            }
            context.state.DetailInquirySummary.result=  result

            //获取年月
            var date = new Date()
            context.state.DetailInquirySummary.month=date.getMonth()+1
            context.state.DetailInquirySummary.year=date.getFullYear()

            router.push({path: '/DetailInquirySummary'})
          }else{
            alert(res.data.tip)
          }
        })
    }
  }
})

export default store
