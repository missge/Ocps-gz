<template>
  <div>
      <div class="header">
        <div class="left" @click="goback"><</div>
        <div class="title">结算查询</div>
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
        <div class="settlementRecord_content">
          <ul>
            <li  v-for="(items,index) in datalist">
              <div class=" settlementRecord_bot">

                <div class="settlementRecord_left">
                     <span class="merchant_numner">{{items.merName}}</span>
                </div>
                <div class="settlementRecord_rt">
                  <span class="sucess_font">完成</span>
                </div>
              </div>
              <div class="settlementRecord_box">
                <div class="settlementRecord_left">
                  消费金额
                </div>
                <div class="settlementRecord_rt">
                  {{items.saleAmts}}
                </div>
              </div>
                <div class="settlementRecord_box">
                    <div class="settlementRecord_left">
                      退货金额
                    </div>
                    <div class="settlementRecord_rt">
                      {{items.retAmts}}
                    </div>
                </div>

                <div class="settlementRecord_box">
                    <div class="settlementRecord_left">
                      结算金额
                    </div>
                    <div class="settlementRecord_rt">
                      {{items.settAmts}}
                    </div>
                </div>
              <div class="settlementRecord_merName">
                <div class="settlementRecord_left">
                  <span class="merchant_numner">{{items.merId}}</span>
                </div>
                <div class="settlementRecord_rt">
                  <span  class="time-font">{{items.settTime}}</span>
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
    name: 'TransactionRecord',
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
          month: this.$store.state.Settlementquery.month,
          year:this.$store.state.Settlementquery.year
        }
      }
    },
    computed:{
//      datalist () {
//        return  this.$store.state.Settlementquery.result
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
        this.datalist = this.$store.state.Settlementquery.result
      },
      nextPage:function(){
        this.Info.page = (parseInt(this.Info.page)+1)+''
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
        var url = this.$store.state.localHostUrl+'/getSettlements.json'
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

</style>
