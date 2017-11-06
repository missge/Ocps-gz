<template>
  <div>
    <div class="header">
      <div class="left" @click="goback"><</div>
      <div class="title">汇总查询</div>
    </div>
    <div class="content">
      <div class="ocps-Transaction-titile">
        <div class="ocps-Transaction-titile-lf">
          <span class="year">{{timeInfo.year}}年{{timeInfo.month}}月</span>
        </div>
        <div class="ocps-Transaction-titile-rt">
          <date-picker :date="date" v-on:changedate="pickerFn"></date-picker>
        </div>
      </div>
      <div class="settlementRecord_content sumRecord">
        <ul>
          <li  v-for="(items,index) in datalist">
            <div class=" settlementRecord_bot">
              <div class="settlementRecord_left">
                <span class="merchant_numner">{{items.merName}}</span>
              </div>
              <div class="settlementRecord_rt">
                <span class="sucess_font">{{items.month}}</span>
              </div>
            </div>
            <div class="settlementRecord_box">
              <div class="settlementRecord_left">
                消费汇总
              </div>
              <div class="settlementRecord_rt">
                {{items.saleAmts}}
              </div>
            </div>
            <div class="settlementRecord_box">
              <div class="settlementRecord_left">
                退货汇总
              </div>
              <div class="settlementRecord_rt">
                {{items.retAmts}}
              </div>
            </div>
          </li>
        </ul>
      </div>

    </div>

    <div  @click="nextPage"  class="nextpage">下一页</div>
  </div>
  </div>
</template>
<script>
  import myDatepicker from '@/datepicker/datepicker.vue'
  import router from '@/router'
  import qs from 'qs'
  export default{
    name: 'DetailInquirySummary',
    data(){
    return{
      Info:{
        loginUser : this.$store.state.loginUserId,
        month:'',
        page:'1',
      },
      date: {
        month:''
      },
      datalist:'',
      timeInfo:{
        month: this.$store.state.DetailInquirySummary.month,
        year:this.$store.state.DetailInquirySummary.year
      }
    }
  },
  computed:{
//      datalist () {
//        return  this.$store.state.DetailInquirySummary.result
//      }
  },
  components: {
    'date-picker': myDatepicker
  },
  methods: {
    goback () {
      this.$router.goBack()
    },
    init:function(){
      this.datalist = this.$store.state.DetailInquirySummary.result
    },
    nextPage:function(){
      this.Info.page = (parseInt(this.Info.page)+1)+''
      var Formdata = qs.stringify(this.Info)
      var url = this.$store.state.localHostUrl+'/getSumRecord.json'
      var that=this
      this.$http.post(url, Formdata, {emulateJSON: true}).then(
        function(res){
          if(res.data.ret){
            var maps=res.data.map
            var result=[]
            for(var i=0;i<maps.length;i++){
              //数据加入
              that.datalist.push((maps[i]))
            }
            that.result=  result
            console.log(result)

          }else{
            alert(res.data.tip)
          }
        }
      )
    },
    pickerFn:function(){
      this.timeInfo.month = this.date.month.split("-")[1]
      this.timeInfo.year = this.date.month.split("-")[0]
      this.Info.page = '1'
      this.Info.month = this.date.month
      var Formdata = qs.stringify(this.Info)
      var url = this.$store.state.localHostUrl+'/getSumRecord.json'
      var that=this
      console.log(Formdata)
      this.$http.post(url, Formdata, {emulateJSON: true}).then(
        function(res){
          console.log(res.data)
          if(res.data.ret){
            var maps=res.data.map
            var result=[]
            for(var i=0;i<maps.length;i++){
              //数据加入
              result.push(maps[i])
            }
            that.datalist=  result
          }else{
            that.datalist=''
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
<style>
  .sumRecord li{
    padding: 0.2rem 0px 0.2rem 0.8rem;
  }
  .sumRecord .settlementRecord_box{
    padding: 0.3rem 0;
  }

</style>
