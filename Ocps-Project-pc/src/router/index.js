import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import TransactionRecord from '@/components/personal/TransactionRecord'
import BalanceQuery from '@/components/personal/BalanceQuery'
import cardManagement from '@/components/personal/cardManagement'
import ModifyPassword from '@/components/personal/ModifyPassword'
import BankCardManagement from '@/components/personal/BankCardManagement'
import noCard from '@/components/personal/noCard'
import shopCard from '@/components/personal/shopCard'
import EntityCard from '@/components/personal/EntityCard'
import Recharge from '@/components/personal/Recharge'
import paymentOrder from '@/components/personal/paymentOrder'
import Cash from '@/components/personal/Cash'
import BankAdd from '@/components/personal/BankAdd'
import FictitiousCard from '@/components/personal/FictitiousCard'
import TransferCard from '@/components/personal/TransferCard'
import DetailInquiry from '@/components/personal/DetailInquiry'
import test from '@/components/personal/test'
//商户
import CommissionRate from '@/components/Merchant/CommissionRate'
import SettlementRecord from '@/components/Merchant/SettlementRecord'
import DetailInquirySummary from '@/components/Merchant/DetailInquirySummary'



Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'TransactionRecord',
      component: TransactionRecord
    },
   {
      path: '/TransactionRecord',
      name: 'TransactionRecord',
      component: TransactionRecord
    },{
      path: '/BalanceQuery',
      name: 'BalanceQuery',
      component: BalanceQuery
    },{
      path: '/cardManagement',
      name: 'cardManagement',
      component: cardManagement
    },{
      path: '/ModifyPassword',
      name: 'ModifyPassword',
      component: ModifyPassword
    },{
      path: '/BankCardManagement',
      name: 'BankCardManagement',
      component: BankCardManagement
    },{
      path: '/noCard',
      name: 'noCard',
      component: noCard
    },{
      path: '/shopCard',
      name: 'shopCard',
      component: shopCard
    },{
      path: '/EntityCard',
      name: 'EntityCard',
      component: EntityCard
    },{
      path: '/Recharge',
      name: 'Recharge',
      component: Recharge
    },{
      path: '/paymentOrder',
      name: 'paymentOrder',
      component: paymentOrder
    },{
      path: '/Cash',
      name: 'Cash',
      component: Cash
    },{
      path: '/BankAdd',
      name: 'BankAdd',
      component: BankAdd
    },{
      path: '/FictitiousCard',
      name: 'FictitiousCard',
      component: FictitiousCard
    },{
      path: '/TransferCard',
      name: 'TransferCard',
      component: TransferCard
    },{
      path: '/CommissionRate',
      name: 'CommissionRate',
      component: CommissionRate
    },{
      path: '/SettlementRecord',
      name: 'SettlementRecord',
      component: SettlementRecord
    },{
      path: '/DetailInquirySummary',
      name: 'DetailInquirySummary',
      component: DetailInquirySummary
    },{
      path: '/DetailInquiry',
      name: 'DetailInquiry',
      component: DetailInquiry
    },{
      path: '/test',
      name: 'test',
      component: test
    }
  ]
})
