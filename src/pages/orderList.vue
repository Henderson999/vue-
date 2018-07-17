<template>
  <div class="order-wrap">
  	<div class="order-list-choose">
  		<div class="order-list-option">
  			选择产品:
  			 <v-selection :selections="products" @on-change="productChange"></v-selection>
  		</div>

  		<div class="order-list-option">
  			开始日期:
  			<v-date-picker @change="changeStartDate"></v-date-picker>
  		</div>

  		<div class="order-list-option">
  			结束日期:
  			<v-date-picker @change="changeEndDate"></v-date-picker>
  		</div>

  		<div class="order-list-option">
  			关键词:
  			<input type="text" v-model.lazy="query" class="order-query">
  		</div>
  	</div>
  	<div class="order-list-table">
  		<table>
  			<tr>
  				<th v-for="head in tableHeads"  :class="{active:head.active}">{{ head.label }}</th>
  			</tr>
  			<tr v-for="item in tableData">
  				<td v-for="head in tableHeads">{{ item[head.key]}}</td>
  			</tr> 
  		</table>
  	</div>
  </div>
</template>

<script>
import VSelection from '../components/base/selection'
import VDatePicker from '../components/base/datepicker'
export default {
  components:{
  	VSelection,
  	VDatePicker
  },
  methods:{
    productChange (obj) {
     this.productId = obj.value
     //this.getTableData()
    },
    changeStartDate () {
    	this.startDate = date
    	//this.getTableData()
    },
    changeEndDate () {
    	this.endDate = date
    	//this.getTableData()
    },
    getTableData () {
    	let reqParam = {
    		query: this.query,
    		productId: this.productId,
    		startDate: this.startDate,
    		endDate: this.endDate
    	}
    	this.$http.post('/api/getOrderList', reqParam).then((res) => {
    		this.tableData = res.data.list
    	},(err) => {

    	})
    }
  },
  mounted () {
     //this.getTableData()
  },
  data () {
    return {
       orderList: [],
       startDate:'',
       endDate:'',
       orderHead:[
          '订单号','金额'
       ],
       products:[
          {
          	label:'数据统计',
          	value:0
          },
          {
          	label:'数据预测',
          	value:1
          },
          {
          	label:'流量分析',
          	value:2
          },
          {
          	label:'广告发布',
          	value:3
          }
       ],
       tableHeads:[
          {
          	label:'订单号',
          	key:'orderId'
          },
          {
          	label:'购买产品',
          	key:'product'
          },
          {
          	label:'版本类型',
          	key:'version'
          },
          {
          	label:'有效时间',
          	key:'period'
          },
          {
          	label:'购买日期',
          	key:'date'
          },
          {
          	label:'数量',
          	key:'buyNum'
          },
          {
          	label:'总价',
          	key:'amount'
          }
       ],
       tableData:[
      {
        orderId : "ddj123",
        product : "数据统计",
        version : "高级版",
        period  : "1年",
        buyNum  : "2",
        date    : "2016-10-10",
        amount  : "500元"
      },
      {
        orderId : "sda123",
        product : "流量分析",
        version : "基础版",
        period  : "2年",
        buyNum  : "3",
        date    : "2012-1-10",
        amount  : "100元"
      },
      {
        orderId : "dxx123",
        product : "数据预测",
        version : "高级版",
        period  : "2年",
        buyNum  : "1",
        date    : "2011-10-10",
        amount  : "5200元"
      },
      {
        orderId : "ddjsd3",
        product : "广告发布",
        version : "中级版",
        period  : "2年",
        buyNum  : "1",
        date    : "2015-10-10",
        amount : "5500元"
      }
    ],
       query:'',
       productId:0
    }
  },
  watch: {
  	query () {
       //this.getTableData()
  	}
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.order-wrap {
	width: 1200px;
	min-height: 800px;
	margin:0 auto;
	overflow: hidden;
}
.order-query {
	height: 25px;
	line-height: 25px;
	border:1px solid #e3e3e3;
	outline: none;
	text-indent: 10px;
}
.order-list-option {
	display: inline-block;
	padding-left: 15px;
}
.order-list-option:first-child {
    padding-left: 0;
}
.order-list-table {
	margin-top: 20px;
}
.order-list-table table {
	width: 100%;
	background:#fff;
}
.order-list-table td,
.order-list-table th {
	border: 1px solid #e3e3e3;
	text-align: center;
	padding: 10px 0;
}
.order-list-table th {
	background: #4fc08d;
	color:#fff;
	border:1px solid #4fc08d;
	cursor: pointer;
}
.order-list-table th.active {
	background: #35495e;
}
</style>
