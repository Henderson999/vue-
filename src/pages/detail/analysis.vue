<template>
  <div class="sales-board">
      <div class="sales-board-intro">
      	 <h2>流量分析</h2>
      	 <p>是指在获得网站访问量几根数据的情况下是指在获得网站访问量几根数据的情况下是指在获得网站访问量几根数据的情况下是指在获得网站访问量几根数据的情况下是指在获得网站访问量几根数据的情况下是指在获得网站访问量几根数据的情况下是指在获得网站访问量几根数据的情况下</p>
      </div>
      <div class="sales-board-form">
      	  <div class="sales-board-line">
      	  	  <div class="sales-board-line-left">
      	  	  	  购买数量:
      	  	  </div>
      	  	  <div class="sales-board-line-right">
                <v-counter @on-change="onParamChange('buyNum',$event)"></v-counter>
      	  	  </div>
      	  </div>
      	  <div class="sales-board-line">
      	  	  <div class="sales-board-line-left">
      	  	  	  产品类型:
      	  	  </div>
      	  	  <div class="sales-board-line-right">
      	  	    <v-selection :selections="productTypes" @on-change="onParamChange('buyType',$event)"></v-selection>
      	  	  </div>
      	  </div>
      	  <div class="sales-board-line">
      	  	  <div class="sales-board-line-left">
      	  	  	  有效时间:
      	  	  </div>
      	  	  <div class="sales-board-line-right">
      	  	  	  <v-chooser :selections="periodList" @on-change="onParamChange('period',$event)"></v-chooser>
      	  	  </div>
      	  </div>
          <div class="sales-board-line">
              <div class="sales-board-line-left">
                  产品版本:
              </div>
              <div class="sales-board-line-right">
                  <v-mulchooser :selections="versionsList" @on-change="onParamChange('versions',$event)"></v-mulchooser>
              </div>
          </div>
      	  <div class="sales-board-line">
      	  	  <div class="sales-board-line-left">
      	  	  	  总价:
      	  	  </div>
      	  	  <div class="sales-board-line-right">
      	  	  	  {{price}}元
      	  	  </div>
      	  </div>
      	  <div class="sales-board-line">
      	  	  <div class="sales-board-line-left">
      	  	  	  &nbsp;
      	  	  </div>
      	  	  <div class="sales-board-line-right">
      	  	  	<div class="button" @click="showPayDialog()">
      	  	  		立即购买
      	  	  	</div>
      	  	  </div>
      	  </div>
      </div>
      <div class="sales-board-des">
      	  <h2>产品说明</h2>
      	  <p>网站访问统计报告的技术出具网胡三点水网站访问统计报告的技术出具网胡三点水网站访问统计报告的技术出具网胡三点水网站访问统计报告的技术出具网胡三点水</p>

      	  <h3>用户行为指标</h3>
      	  <ul>
      	  	<li>用户行为指标主要梵音用户入是打 说的说的</li>
      	  	<li>用户行为指标主要梵音用户入是打 说的说的</li>
      	  	<li>用户行为指标主要梵音用户入是打 说的说的</li>
      	  	<li>用户行为指标主要梵音用户入是打 说的说的</li>
      	  </ul>
      	  <h3>浏览网站方式</h3>
      	  <ul>
      	  	<li>sadasdasdasdasd</li>
      	  	<li>sadasdasdasdasd</li>
      	  	<li>sadasdasdasdasd</li>
      	  	<li>sadasdasdasdasd</li>
      	  	<li>sadasdasdasdasd</li>
      	  </ul>
      </div>
      <my-dialog :is-show="isShowPayDialog" @on-close="hideShowPayDialog">
        <table class="buy-dialog-table">
          <tr>
            <th>购买数量</th>
            <th>产品类型</th>
            <th>有效时间</th>
            <th>产品版本</th>
            <th>总价</th>
          </tr>
          <tr>
            <td>{{ buyNum }}</td>
            <td>{{ buyType.label }}</td>
            <td>{{ period.label }}</td>
            <td>
              <span v-for="item in versions">{{ item.label }}</span>
            </td>
            <td>{{ price }}</td>
          </tr>
        </table>
        <h3 class="buy-dialog-title">请选择银行</h3>
        <bank-chooser @on-change="onChangeBanks"></bank-chooser>
        <div class="button buy-dialog-btn" @click="confirmBuy()">
          确认购买
        </div>
      </my-dialog>
  </div>
</template>

<script>
import VSelection from '../../components/base/selection'
import VCounter from '../../components/base/counter'
import VChooser from '../../components/base/chooser'
import VMulchooser from '../../components/base/multiplychooser'
import Dialog from '../../components/base/dialog'
import BankChooser from '../../components/bankChooser'
import _ from 'lodash'
export default {
  components: {
      VSelection,
      VCounter,
      VChooser,
      VMulchooser,
      MyDialog: Dialog,
      BankChooser
  },
  methods: {
   onParamChange (attr, val) {
       this[attr] = val
       this.getPrice()
       console.log(attr,this[attr])
   },
   getPrice () {
    let buyVersionsArray = _.map(this.versions,(item) =>{
      return item.value
    })
    let reqParams = {
      buyNumber: this.buyNum,
      buyType:this.buyType.value,
      period: this.period.value,
      version:buyVersionsArray.join(',')
    }
    this.$http.post('/api/getPrice',reqParams).then((res) =>{
      console.log(res.data)
      let a = res.data.buyNumber+1
      let b =(res.data.buyType+1)*100
      console.log(res.data.period)
      if (res.data.period == 0) {
        var c = 2
      }
      else if(res.data.period == 1) {
        var c = 5
      }
      else if(res.data.period == 2){
        var c = 10
      }
      //console.log(a*b*c) 打印总价
      //let data = JSON.parse(res.data)
      this.price = a*b*c
    })
   },
   showPayDialog () {
    this.isShowPayDialog = true
   },
   hideShowPayDialog () {
    this.isShowPayDialog = false 
   },
   onChangeBanks (bankObj) {
      this.bankId = bankObj.id
      //console.log(this.bankId) 打印银行ID
   },
   confirmBuy () {
    let buyVersionsArray = _.map(this.versions,(item) =>{
      return item.value
    })
    let reqParams = {
      buyNumber: this.buyNum,
      buyType:this.buyType.value,
      period: this.period.value,
      version:buyVersionsArray.join(','),
      bankId: this.bankId
    }
    this.$http.post('/api/createOrder',reqParams).then((res) =>{
      this.orderId = res.data.orderId
      console.log(this.orderId)
    })
   }
 },
  //提示获取VALUE无效
  //mounted () { 
    //this.buyNum = 0
    //this.buyType = this.buyType[0]
    //this.versions = [this.versionsList[0]]
    //this.period = this.periodList[0]
    //this.getPrice()
   //},
  data () {
    return {
       bankId: null,
       isShowPayDialog: false,
       buyNum:0,
       buyType:{},
       versions:[],
       period:{},
       price:200,
       productTypes:[
         {
            label:'入门版',
            value:0
         },
         {
            label:'中级版',
            value:1
         },
         {
            label:'高级版',
            value:2
         }
       ],
       periodList:[
        {
            label:'半年',
            value:0
         },
         {
            label:'一年',
            value:1
         },
         {
            label:'三年',
            value:2
         }
       ],
       versionsList:[
        {
            label:'客户版',
            value:0
         },
         {
            label:'代理商版',
            value:1
         },
         {
            label:'专家版',
            value:2
         }
       ]
     }
 }
}
 
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.buy-dialog-title {
  font-size: 16px;
  font-weight: bold;
}
.buy-dialog-btn {
  margin-top: 20px;
}
.buy-dialog-table {
  width: 100%;
  margin-bottom: 20px;
}
.buy-dialog-table td,
.buy-dialog-table th {
  border: 1px solid #e3e3e3;
  text-align: center;
  padding: 5px 0;
}
.buy-dialog-table th {
  background: #4fc08d;
  color: #fff;
  border:1px solid #4fc08d;
}
</style>
