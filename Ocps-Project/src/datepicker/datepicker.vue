<style scoped>
.opcs-datepickbox{

}

.opcs-datepicker{
  z-index:
}

.opcs-date-year{
  height: 3rem;
  line-height:3rem;
  font-size: 1.5rem;
  text-align: center;
}

.opcs-datepicker-overlay{
    position: fixed;
    background: rgba(0, 0, 0, 0.5);
    width: 100%;
    height: 100%;
    z-index: 998;
    top: 0;
    left: 0;
    overflow: hidden;
    -webkit-animation: fadein-data-v-db2c16e6 0.5s;
    animation: fadein-data-v-db2c16e6 0.5s;
}

.opcs-date-body {
  display: inline-block;
  background-color: rgb(204, 204, 204);
  overflow: hidden;
  position: relative;
  font-size: 16px;
  font-family: 'Roboto';
  font-weight: 400;
  position: fixed;
  display: block;
  width: 400px;
  max-width: 100%;
  z-index: 999;
  /*top: 50%;*/
  left: 50%;
  /*-webkit-transform: translate(-50%, -50%);*/
  /*-ms-transform: translate(-50%, -50%);*/
  /*transform: translate(-50%, -50%);*/
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.2);
  -webkit-transform: translate(-50%, 0);
  -ms-transform: translate(-50%,0);
  transform: translate(-50%, 0);
  bottom: 0;

}

.opcs-date-item {
    text-align: center;
    font-size: 20px;
    padding: 10px 0;
    cursor: pointer;
  border: 1px solid #F1F1F1;
}

.opcs-picker-box {
    background: #fff;
    width: 100%;
    display: inline-block;
    padding: 0;
    box-sizing: border-box !important;
    -moz-box-sizing: border-box !important;
    -webkit-box-sizing: border-box !important;
    -ms-box-sizing: border-box !important;
    width: 20rem;
    max-width: 100%;
    max-height: 280px;
    text-align: start!important;
}

.opcs-list{
   overflow: auto;
    vertical-align: top;
    padding: 0;
}

.opcs-month-box ul {
  /*margin: 0 0 8px;*/
  margin: 0;
  padding: 0;
  list-style: none;
}
.opcs-month-box ul li {
  width: 33.33333333%;
  display: inline-block;
  text-align: center;
  color: #36383c;
}

.opcs-month-box ul li span{
   padding: 1rem 0;
   display:inline-block;
   width: 99%;
   background: rgba(0,0,0,.05);
   margin: 1px
}

</style>
<template>
  <div class="cov-vue-date">
    <div class="opcs-datepickbox">
      <div  v-model="date.month"  @click="showCheck">日历</div>
    </div>
    <div class="opcs-datepicker-overlay" v-if="showInfo.check" @click="dismiss($event)">
      <div class="opcs-date-body">
        <div class="opcs-date-year">
            <span @click="showYear"><small>{{checked.year}}</small></span>
        </div>

        <div class="" v-if="!showInfo.year">
          <div class="opcs-picker-box">
            <div class="opcs-month-box">
              <ul>
                <li class="opcs-month "  v-for="month in monthlist" @click="setMonth(month)" ><span>{{month}}</span></li>
              </ul>
            </div>
          </div>
        </div>

        <div class="" v-if="showInfo.year">
          <div class="opcs-picker-box opcs-list" id="yearList">
            <div class="opcs-date-item" v-for="yearItem in library.year" track-by="$index" @click="setYear(yearItem)">{{yearItem}}</div>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>
<script>
import moment from 'moment'
export default {
  props: {
    required: false,
    date: {
      type: Object,
      required: true
    },
    option: {
      type: Object,
      default () {
        return {
        }
      }
    }
  },
  data () {
    return {
      showInfo: {
        month: false,
        year: false,
        check: false
      },
      library: {
        year: []
      },
      checked: {
        oldtime: '',
        currentMoment: null,
        year: '',
        month: '',
        day: '',
        hour: '00',
        min: '00'
      },
      dayList: [],
      selectedDays: [],
      monthlist: ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月'],
    }
  },
  methods: {
    showYear () {
      let year =  moment(this.checked.currentMoment).year()
      this.library.year = []
      let yearTmp = []
      for (let i = year - 100; i < year + 5; ++i) {
        yearTmp.push(i)
      }
      this.library.year = yearTmp
      this.showOne('year')
      this.$nextTick(() => {
        let listDom = document.getElementById('yearList')
        listDom.scrollTop = (listDom.scrollHeight - 100)
        this.addYear()
      })
    },
    showOne (type) {
      switch (type) {
        case 'year':
          this.showInfo.year = true
          this.showInfo.month = false
          break
        case 'month':
          this.showInfo.year = false
          this.showInfo.month = true
          break
        default:
          this.showInfo.year = true
          this.showInfo.month = false

      }
    },
    addYear () {
      let listDom = document.getElementById('yearList')
      listDom.addEventListener('scroll', (e) => {
        if (listDom.scrollTop < listDom.scrollHeight - 100) {
          let len = this.library.year.length
          let lastYear = this.library.year[len - 1]
          this.library.year.push(lastYear + 1)
        }
      }, false)
    },
    setYear (year) {
      this.checked.year = year
      this.showInfo.year = false
    },
    setMonth (month) {
      let mo = (this.monthlist.indexOf(month) + 1)
      if (mo < 10) {
        mo = '0' + '' + mo
      }
      this.showInfo.check=false
      this.date.month= this.checked.year + '-' + mo
      this.$emit('changedate')
    },
    showCheck () {
      this.checked.currentMoment = moment()
      this.checked.year = moment(this.checked.currentMoment).format('YYYY')
      this.showInfo.check = true
    },
    dismiss (evt) {
      if (evt.target.className === 'opcs-datepicker-overlay') {
        if (this.option.dismissible === undefined || this.option.dismissible) {
          this.showInfo.check = false
        }
      }
    }
  }
}
</script>
