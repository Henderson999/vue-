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
      	  	  </div>
      	  </div>
      	  <div class="sales-board-line">
      	  	  <div class="sales-board-line-left">
      	  	  	  产品类型:
      	  	  </div>
      	  	  <div class="sales-board-line-right">
      	  	  <v-chooser :selections="productTypes"></v-chooser>
      	  	  </div>
      	  </div>
      	  <div class="sales-board-line">
      	  	  <div class="sales-board-line-left">
      	  	  	  有效时间:
      	  	  </div>
      	  	  <div class="sales-board-line-right">
      	  	  	  半年
      	  	  </div>
      	  </div>
      	  <div class="sales-board-line">
      	  	  <div class="sales-board-line-left">
      	  	  	  总价:
      	  	  </div>
      	  	  <div class="sales-board-line-right">
      	  	  	  500元
      	  	  </div>
      	  </div>
      	  <div class="sales-board-line">
      	  	  <div class="sales-board-line-left">
      	  	  	  &nbsp;
      	  	  </div>
      	  	  <div class="sales-board-line-right">
      	  	  	<div class="button">
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
  </div>
</template>

<script>
import VChooser from '../../components/base/chooser'
export default {
  components: {
    VChooser
  },
  data () {
    return {
         productTypes:[
         {
            label:'红色版',
            value:0
         },
         {
            label:'紫色版',
            value:1
         },
         {
            label:'蓝色版',
            value:2
         }
       ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
