<template>
  <div id="app">
    <div class="opsc-pc-header">
      <div class="opsc-pc-banner-bd">
        <a class="opsc-pc-logo" href="http://www.gztht.com/Portal/Home/Index.aspx">
          <img alt="个人中心" src="./assets/Images/logo.png">
        </a>
        <a href="http://www.gztht.com/PersonCenter/Home/Index.aspx" class="opsc-pc-home-title"></a>
        <div class="opsc-pc-other-info">
          客服中心 | 国内：<span>400-9009995</span>
        </div>
        <div class="opsc-pc-top-opts">
          <a href="http://www.gztht.com/Portal/Home/Index.aspx">[门户首页]</a>
          <a href="http://www.gztht.com/TripMall/Home/Index.aspx">[电子商城]</a>
          <a href="http://www.gztht.com/Enter/Logout.aspx">[退出]</a>
        </div>
      </div>
    </div>
    <div class="opcs-pc-content">
      <div class="opcs-top">
        <div id="masterTopMemInfo" class="opcs-mem-info-bd">
          <div class="opcs-photo">
            <a class="opcs-img-bg" href="http://www.gztht.com/PersonCenter/Home/MI/Person.aspx">
              <span>用户名</span>
            </a>
          </div>
          <div class="opcs-info">
            <div class="opcs-row1">
              <span class="opcs-hello">
              中午好！
              </span>
            </div>
            <div class="opcs-row2">
              手机：<a href="http://www.gztht.com/PersonCenter/Home/MI/Validate/BindPhone.aspx" style="color: #0b8ee9; font-size: 12px;">绑定</a>
            </div>
            <div class="opcs-row2">
              邮箱：9****7@qq.com
            </div>
            <div class="opcs-row3">
              上一次登录：2017-08-09 11:19:43
            </div>
          </div>
          <div class="opcs-info2">
            <ul>
              <li>
                <div class="ocps-top-rt">
                  <div>我的余额

                    <span v-if="userFlag == 0">
                      <router-link  class="opcs-btna"  @click.native="Go_fun('充值','getRecharge')" to="/Recharge"> [充值]</router-link>
                      <router-link  class="opcs-btna"  @click.native="Go_fun('提现','')" to="/Cash">[提现]</router-link>
                    </span>
                  </div>
                  <div>￥<span>{{items.totalMoney}}</span></div>

                  <router-link  class="ocps-color_one1" @click.native="Go_fun('余额','getcardBalance')" to="/BalanceQuery">
                    <i class="ocps-top-rt-icon1 "> </i>
                  </router-link>
                </div>
              </li>
              <li>
                <div class="ocps-top-rt2" v-if="userFlag == 0">
                  <div>我的一卡通</div>
                  <div><span data-name="integral">{{items.cardNum}} </span>张</div>
                  <router-link  class="ocps-color_one2"  @click.native="Go_fun('一卡通管理','getcardCount')" to="">  <i class="ocps-top-rt-icon2 "></i></router-link>
                </div>
                <div class="ocps-top-rt2" v-if="userFlag == 1">
                  <div>我的结算笔数</div>
                  <div><span data-name="integral">{{items.settNum}} </span>笔</div>
                  <router-link  class="ocps-color_one2"  @click.native="Go_fun('一卡通管理','getcardCount')" to="">  <i class="ocps-top-rt-icon2 "></i></router-link>
                </div>
              </li>
              <li>
                <div class="ocps-top-rt3">
                  <div>我的交易</div>
                  <div>{{items.tradeNum}} 笔</div>
                  <router-link  class="ocps-color_one3"  @click.native="Go_fun('我的交易','getTransactionRecord')" to="">  <i class="ocps-top-rt-icon3 "></i></router-link>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="opsc-main">
        <div class="opsc-main-header">
          <div class="opsc-main-header-left">个人主页</div>
          <div class="opsc-main-header-right">{{title}}</div>
        </div >
        <div class="opsc-main-content" v-if="userFlag == 0">
          <div class="opsc-main-left" >
            <ul>
              <li>
                <h3>
                  <router-link @click.native="Go_fun('我的一卡通','getTransactionRecord')" to="/TransactionRecord">我的一卡通</router-link>
                </h3>
              </li>
              <li>
                <div class="ocps-items-box ">
                  <router-link  class="ocps-items"  @click.native="Go_fun('交易记录','getTransactionRecord')" to="/TransactionRecord" :class="{'Color-on':isOn === '交易记录'}">
                    <i class="ocps-items-icon items" :class="{'items-on':isOn === '交易记录'}"></i>交易记录
                  </router-link>
                </div>
              </li>
              <li>
                <div class="ocps-items-box">
                  <router-link  class="ocps-items"  @click.native="Go_fun('余额','getcardBalance')" to="/BalanceQuery"  :class="{'Color-on':isOn === '余额'}">
                    <i class="ocps-items-icon items1" :class="{'items-on1':isOn === '余额'}"></i>余额
                  </router-link>
                </div>
              </li>
              <li>
                <div class="ocps-items-box">
                  <router-link  class="ocps-items"  @click.native="Go_fun('一卡通管理','getcardCount')" to=""  :class="{'Color-on':isOn === '一卡通管理'}">
                    <i class="ocps-items-icon items2" :class="{'items2-on':isOn === '一卡通管理'}"></i>一卡通管理
                  </router-link>
                </div>
              </li>
              <li>
                <div class="ocps-items-box">
                  <router-link  class="ocps-items "  @click.native="Go_fun('支付密码管理','')" to="/ModifyPassword" :class="{'Color-on':isOn === '支付密码管理'}">
                    <i class="ocps-items-icon items3" :class="{'items3-on'  :isOn === '支付密码管理'}"></i>支付密码管理
                  </router-link>
                </div>
              </li>
              <li>
                <div class="ocps-items-box">
                  <router-link  class="ocps-items"  @click.native="Go_fun('银行卡管理','getBankCard')" to="/BankCardManagement" :class="{'Color-on':isOn === '银行卡管理'}">
                    <i class="ocps-items-icon items4" :class="{'items4-on'  :isOn === '银行卡管理'}"></i>银行卡管理
                  </router-link>
                </div>
              </li>
              <li>
                <div class="ocps-items-box">
                  <router-link  class="ocps-items"  @click.native="Go_fun('充值','getRecharge')" to="/Recharge"  :class="{'Color-on':isOn === '充值'}">
                    <i class="ocps-items-icon items5" :class="{'items5-on'  :isOn === '充值'}"></i>充值
                  </router-link>
                </div>
              </li>
              <li>
                <div class="ocps-items-box">
                  <router-link  class="ocps-items"  @click.native="Go_fun('提现','')" to="/Cash" :class="{'Color-on':isOn === '提现'}">
                    <i class="ocps-items-icon items6" :class="{'items6-on'  :isOn === '提现'}"></i>提现
                  </router-link>
                </div>
              </li>
              <li>
                <div class="ocps-items-box">
                  <router-link  class="ocps-items"  @click.native="Go_fun('购卡','')" to="/shopCard" :class="{'Color-on':isOn === '购卡'}">
                    <i class="ocps-items-icon items7"  :class="{'items7-on'  :isOn === '购卡'}"></i>购卡
                  </router-link>
                </div>
              </li>
              <li>
                <div class="ocps-items-box">
                  <router-link  class="ocps-items"  @click.native="Go_fun('绑卡','')" to="/EntityCard" :class="{'Color-on':isOn === '绑卡'}">
                    <i class="ocps-items-icon items9"  :class="{'items9-on'  :isOn === '绑卡'}"></i>绑卡
                  </router-link>
                </div>
              </li>
            </ul>
          </div>
          <div class="opsc-main-right ">
            <router-view></router-view>
          </div>
        </div>
        <div class="opsc-main-content" v-if="userFlag == 1">
          <div class="opsc-main-left">
            <ul>
              <li>
                <h3>
                  <router-link @click.native="Go_fun('商户','getTransactionRecord')" to="/TransactionRecord">商户</router-link>
                </h3>
              </li>
              <li>
                <div class="ocps-items-box">
                  <router-link  class="ocps-items"  @click.native="Go_fun('提现','')" to="/Cash" :class="{'Color-on':isOn === '提现'}">
                    <i class="ocps-items-icon items6" :class="{'items6-on'  :isOn === '提现'}"></i>提现
                  </router-link>
                </div>
              </li>
              <li>
                <div class="ocps-items-box ">
                  <router-link  class="ocps-items"  @click.native="Go_fun('交易记录','getTransactionRecord')" to="/TransactionRecord" :class="{'Color-on':isOn === '交易记录'}">
                    <i class="ocps-items-icon items" :class="{'items-on':isOn === '交易记录'}"></i>交易记录
                  </router-link>
                </div>
              </li>
              <li>
                <div class="ocps-items-box">
                  <router-link  class="ocps-items"  @click.native="Go_fun('手续费率','getCommissionRate')" to="/CommissionRate" :class="{'Color-on':isOn === '手续费率'}">
                    <i class="ocps-items-icon items10" :class="{'items10-on':isOn === '手续费率'}"></i>手续费率
                  </router-link>
                </div>
              </li>
              <li>
                <div class="ocps-items-box">
                  <router-link  class="ocps-items"  @click.native="Go_fun('账户查询','getcardBalance')" to="/cardBalance"  :class="{'Color-on':isOn === '账户查询'}">
                    <i class="ocps-items-icon items11" :class="{'items11-on':isOn === '账户查询'}"></i>账户查询
                  </router-link>
                </div>
              </li>
              <li>
                <div class="ocps-items-box">
                  <router-link  class="ocps-items"  @click.native="Go_fun('结算查询','getSettlementquery')" to="/SettlementRecord" :class="{'Color-on':isOn === '结算查询'}">
                    <i class="ocps-items-icon items1" :class="{'items-on1':isOn === '结算查询'}"></i>结算查询</router-link>
                </div>
              </li>
              <li>
                <div class="ocps-items-box">
                  <router-link  class="ocps-items"  @click.native="Go_fun('卡交易汇总','getDetailInquirySummary')" to="/DetailInquirySummary" :class="{'Color-on':isOn === '卡交易汇总'}">
                    <i class="ocps-items-icon items12" :class="{'items-on12':isOn === '卡交易汇总'}"></i>卡交易汇总
                  </router-link>
                </div>
              </li>
            </ul>
          </div>
          <div class="opsc-main-right ">
            <router-view></router-view>
          </div>
        </div>
        <div class="clear"></div>
      </div>
    </div>
    <div class="ocps-pc-footer">
      <img src="./assets/Images/bt_bg.png"  style="width: 100%" alt="">
    </div>
  </div>

</template>

<script>
  import qs from 'qs'
  export default {
    name: 'app',
    data (){
      return{
        title: '',
        datalist:[],
        isOn:'',
        topInfo:{
          datalist:''
        },
        flag:this.$store.state.flag,
        userFlag:''

      }
  },
  computed:  {
    items(){
      return this.$store.state.Request.result   
    }
  },
  methods: {
    init () {
      this.title='主页'
      this.datalist = ''
      // this.userFlag =  this.$store.state.flag
    },
    setParameter (){
      this.$store.state.loginUserId = this.getUrlKey('userid')
      this.$store.state.flag = this.getUrlKey('flag')
      this.userFlag =  this.$store.state.flag
      // alert(this.$store.state.loginUserId)
      //   alert(  this.$store.state.flag)
    },
    getUrlKey (name) {
      return decodeURIComponent((new RegExp('[?|&]' + name + '=' + '([^&;]+?)(&|#|;|$)').exec(location.href) || [''])[1].replace(/\+/g, '%20')) || null
    },
    Go_fun (str,fun_name) {

      this.title = str;
      this.click_fun(fun_name);
      this.isOn=str
    },
    click_fun: function (fun_name) {
      this.$store.dispatch(fun_name)
    },
    // request:function(){
    //   var url = this.$store.state.localHostUrl + '/getCardInfo.json'
    //   var flag= this.$store.state.flag
    //   var loginUser= this.$store.state.loginUserId
    //   var formData=qs.stringify({'flag': flag,loginUser : loginUser})
    //   var that=this
    //   that.$http.post(url,formData,{emulateJSON: true}).then(
    //     function(res){
    //      if(res.data){
    //        that.topInfo.datalist=res.data
    //      }else{
    //       alert(res.data.tip)
    //      }
    //     }
    //   )
    // }
  },
  created(){
  },
  mounted () {
    this.init()
    this.setParameter()
    this.$store.dispatch('getRequest')
    this.$store.dispatch('getTransactionRecord')
  }
  }
</script>
<style>
  @import 'assets/css/index.css';
  /*@import 'assets/css/grd.css';*/
  @import 'assets/css/pc-main.css';
  @import 'assets/css/message-box.css';
    @import 'assets/css/date-picker.css';
  #app{
    max-width: 1680px;
    margin: auto;
    position: relative;
  }

</style>
