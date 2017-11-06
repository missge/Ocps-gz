<template>
  <div>
    <!--<ul class="ocpspc-tabs__nav">-->
    <!--<li  @click="tradeTypeFn('')" class="ocps-tabs-items ocps-tabs-items-on">全部</li>-->
    <!--<li @click="tradeTypeFn('CRD')" class="ocps-tabs-items">消费</li>-->
    <!--<li @click="tradeTypeFn('CCD')" class="ocps-tabs-items">充值</li>-->
    <!--<li @click="tradeTypeFn('PRF')" class="ocps-tabs-items">退货</li>-->
    <!--<li  @click="tradeTypeFn('TFO')" class="ocps-tabs-items">转出</li>-->
    <!--<li  @click="tradeTypeFn('TFI')" class="ocps-tabs-items" >转入</li>-->
    <!--</ul>-->
    <div class="ocps-data-box ocps-line-height">
      <div class="ocps-data">
        <el-date-picker v-model="change_month"  type="month" placeholder="选择月">  </el-date-picker>
        <span  @click="pickerFn(change_month)" >搜索</span>
      </div>
    </div>
    <div class="ocpspc-transaction">
      <table class="ocps-table ocps-table-hover">
        <tr class="ocps-active">
          <th> 商户名称</th>
          <th> 消费金额</th>
          <th> 退货金额</th>
          <th> 结算金额</th>
          <th> 结算时间</th>
          <th> 结算状态</th>
          <th> 商户号</th>
        </tr>
        <tr v-for="(items,index) in datalist"  >
          <td> {{items.merName}}   </td>
          <td> {{items.saleAmts}} </td>
          <td>  {{items.retAmts}}  </td>
          <td>   {{items.settAmts}}</td>
          <td>{{items.settTime}}</td>
          <td>完成  </td>
          <td>{{items.merId}}</td>
        </tr>
      </table>
    </div>
    <div class="ocps-pc-page">
      <span  @click="nextPage(0)" class="nextpage">上一页</span>
      <span  @click="nextPage(1)" class="nextpage">下一页</span>
    </div>
  </div>
</template>
<script>
  import router from '@/router'
  import qs from 'qs'
  import Vue from 'vue'
  export default{
    name: 'TransactionRecord',
    data(){
    return{
      Info:{
        loginUser : this.$store.state.loginUserId,
        month : '',
        page:'1',
      },
      change_month:''
    }
  },
  computed:{
    datalist () {
      return   this.$store.state.Settlementquery.result
    }
  },
  methods: {
    init:function(){
    },
    nextPage:function(num){
//      var date = new Date()
//      let month = date.getMonth()+1
//      let year=date.getFullYear()
//      if(month<=9){
//        month="0"+month
//      }
//      this.Info.month =year+'-'+month
      this.Info.month =  this.$store.state.Settlementquery.pramater.month

      //下一页
      if(num === 1 && this.Info.page>0){
        this.Info.page = (parseInt(this.Info.page)+1)+''
      }
      if(num === 0 && this.Info.page<1){
        this.Info.page = (parseInt(this.Info.page)-1)+''
      }
      var Formdata = qs.stringify(this.Info)
      var url = this.$store.state.localHostUrl+'/getSettlements.json'
      var that=this
      this.$http.post(url, Formdata, {emulateJSON: true}).then(
        function(res){
          if(res.data.ret){
            var maps=res.data.map
            var result=[]
            for(var i=0;i<maps.length;i++){
              //数据加入
              Vue.set(that.datalist,i,res.data.map[i])
//             数据后加内容 that.datalist.push((maps[i]))
            }
            that.result=  result
            console.log(result)
          }else{
            alert(res.data.tip)
          }
        }
      )
    },
    pickerFn:function(val){
      var val=val.toISOString().slice(0,7).split("-")
      var month=parseInt(val[1])+1
      if(month<=9){
        this.Info.month=val[0]+"-0"+month
      }else{
        this.Info.month=val[0]+"-"+month
      }
      this.Info.page = '1'
      var Formdata = qs.stringify(this.Info)
      var url = this.$store.state.localHostUrl+'/getSettlements.json'
      var that=this
      this.$http.post(url, Formdata, {emulateJSON: true}).then(
        function(res){
          if(res.data.ret){
            var maps=res.data.map
            var result=[]
            for(var i=0;i<maps.length;i++){
              Vue.set(that.datalist,i,res.data.map[i])
            }
            that.result=  result
          }else{
            that.$store.state.Settlementquery.result=[]
            alert(res.data.tip)
          }
        }
      )
    }
  },
  mounted(){
    this.init();
  }
  }
</script>
