<template>
  <div class="chooser-component">
   <ul class="chooser-list">
   	 <li
   	 v-for="(item,index) in banks"
   	 @click="chosenSelection(index)"
   	 :title="item.label"
   	 :class="[item.name, {active: index === nowIndex}]"
   	 >	
   	 </li>
   </ul>
  </div>
</template>

<script>
export default {
  data () {
    return {
       nowIndex: 0,
       banks:[
          {
          	id:201,
          	label:'招商银行',
          	name:'zhaoshang'
          },
          {
          	id:301,
          	label:'中国建设银行',
          	name:'jianshe'
          },
          {
          	id:601,
          	label:'浦发银行',
          	name:'pufa'
          },
          {
          	id:1101,
          	label:'交通银行',
          	name:'jiaotong'
          },
          {
          	id:101,
          	label:'中国工商银行',
          	name:'gongshang'
          },
          {
          	id:401,
          	label:'中国农业银行',
          	name:'nongye'
          },
          {
          	id:1201,
          	label:'中国银行',
          	name:'zhongguo'
          },
          {
          	id:501,
          	label:'中信银行',
          	name:'zhongxin'
          }
       ]
     //usernameModel:'',
     //passwordModel:'',
     //errorText:''
    }
  },
  methods: {
     chosenSelection (index) {
     	this.nowIndex = index 
     	this.$emit('on-change',this.banks[index])
     }
  },
  mounted () {
        this.$emit('on-change', this.banks[0])
  },
  computed: {

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.chooser-component {
	position: relative;
	display: inline-block;
}
.chooser-list li.active {
	border:1px solid #4fc08d;
}
.chooser-list li{
	display: inline-block;
	width: 205px;
	height: 78px;
	background-image: url(../assets/banks/banks.png);
	background-repeat: no-repeat;
	margin:5px;
	border:1px solid #e3e3e3;
	cursor: pointer;
}
.zhongguo {
	background-position: -1429px -6px;
}
.zhongxin {
	background-position: -1219px -4px;
}
.pufa {
	background-position: -1001px 1px;
}
.jiaotong {
	background-position: -799px 0;
}
.gongshang {
	background-position: -589px 0;
}
.nongye {
	background-position: -379px 6px;
}
.zhaoshang {
	background-position: -189px 0;
}
.jianshe {
	background-position: 0px -4px;
}
</style>
