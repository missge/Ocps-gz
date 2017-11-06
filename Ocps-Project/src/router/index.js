import Vue from 'vue'
import Router from 'vue-router'
import Transition from '@/components/Transition'
import Home from '@/components/Home'
import PageA from '@/components/pageA'
import PageB from '@/components/pageB'
import PagecardManagement from '@/components/cardManagement/PagecardManagement'
import Nocard from '@/components/cardManagement/Nocard'
import SuccessfulPayment from '@/components/cardManagement/SuccessfulPayment'
import shopCard from '@/components/cardManagement/shopCard'
import Authentication from '@/components/PaymentCode/Authentication'
import QrCode from '@/components/PaymentCode/QrCode'
import Setpassword from '@/components/cardManagement/Setpassword'
import EntityCard from '@/components/cardManagement/EntityCard'
import Agreement from '@/components/PaymentCode/Agreement'
import TransferCard from '@/components/cardManagement/TransferCard'
import cardManagement from '@/components/cardManagement/cardManagement'
import BankCardManagement from '@/components/cardManagement/BankCardManagement'
import TransactionRecord from '@/components/cardManagement/TransactionRecord'
import PaymentOrder from '@/components/cardManagement/PaymentOrder'
import ModifyPassword from '@/components/cardManagement/ModifyPassword'
import BalanceInquiry from '@/components/cardManagement/BalanceInquiry'
import BalanceQuery from '@/components/cardManagement/BalanceQuery'
import Cash from '@/components/cardManagement/Cash'
import Recharge from '@/components/cardManagement/Recharge'
import FictitiousCard from '@/components/cardManagement/FictitiousCard'
import BankAdd from '@/components/cardManagement/BankAdd'
import Withdrawals from '@/components/Merchant/Withdrawals'
import CommissionRate from '@/components/Merchant/CommissionRate'
import DetailInquiry from '@/components/Merchant/DetailInquiry'
import WithdrawalsSuccess from '@/components/Merchant/WithdrawalsSuccess'
import AccountQuery from '@/components/Merchant/AccountQuery'
import DetailInquirySummary from '@/components/Merchant/DetailInquirySummary'
import SettlementRecord from '@/components/Merchant/SettlementRecord'
import paysys from '@/components/PaymentCode/paysys'
import paysysSuccess from '@/components/PaymentCode/paysysSuccess'
Router.prototype.goBack = function () {
  this.isBack = true
  window.history.go(-1)
}

Vue.use(Router)
const router = new Router({
  routes: [{
    path: '/',
    name: 'Transition',
    component: Transition,
    children: [{
      path: '/',
      component: Home
    }, {
      path: '/pageA',
      component: PageA
    }, {
      path: '/pageB',
      component: PageB
    }, {
      path: '/PagecardManagement',
      component: PagecardManagement
    }, {
      path: '/Nocard',
      component: Nocard
    }, {
      path: '/SuccessfulPayment',
      component: SuccessfulPayment
    }, {
      path: '/shopCard',
      component: shopCard
    }, {
      path: '/Authentication',
      component: Authentication
    }, {
      path: '/Setpassword',
      component: Setpassword
    }, {
      path: '/EntityCard',
      component: EntityCard
    }, {
      path: '/Agreement',
      component: Agreement
    }, {
      path: '/TransferCard',
      component: TransferCard
    }, {
      path: '/cardManagement',
      component: cardManagement
    }, {
      path: '/BankCardManagement',
      component: BankCardManagement
    }, {
      path: '/TransactionRecord',
      component: TransactionRecord
    }, {
      path: '/PaymentOrder',
      component: PaymentOrder
    }, {
      path: '/ModifyPassword',
      component: ModifyPassword
    }, {
      path: '/BalanceInquiry',
      component: BalanceInquiry
    }, {
      path: '/BalanceQuery',
      component: BalanceQuery
    }, {
      path: '/Recharge',
      component: Recharge
    }, {
      path: '/QrCode',
      component: QrCode
    }, {
      path: '/Withdrawals',
      component: Withdrawals
    }, {
      path: '/CommissionRate',
      component: CommissionRate
    }, {
      path: '/DetailInquiry',
      component: DetailInquiry
    }, {
      path: '/WithdrawalsSuccess',
      component: WithdrawalsSuccess
    }, {
      path: '/AccountQuery',
      component: AccountQuery
    }, {
      path: '/DetailInquirySummary',
      component: DetailInquirySummary
    }, {
      path: '/SettlementRecord',
      component: SettlementRecord
    }, {
      path: '/FictitiousCard',
      component: FictitiousCard
    }, {
      path: '/BankAdd',
      component: BankAdd
    }, {
      path: '/paysys',
      component: paysys
    }, {
      path: '/Cash',
      component: Cash
    }, {
      path: '/paysysSuccess',
      component: paysysSuccess
    }
    ]
  }]
})
export default router
