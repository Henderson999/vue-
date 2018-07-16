<template>
  <div class="chooser-component">
   <ul>
   	<li
   	v-for="(item,index) in selections"
   	@click="chosenSelection(index)"
   	:title="item.label"
   	:class="{active:index === nowIndex}"
   	>{{ item.label }}</li>
   </ul>
  </div>
</template>

<script>
export default {
  props:{
     selections:{
     	type: Array,
     	default:[{
     		label:'test',
     		value:0
     	}]
     }
  },
  data () {
    return {
     nowIndex:0
    }
  },
  methods:{
  	chosenSelection (index) {
  		this.nowIndex = index
  		this.$emit('on-change', this.selections[index])
  	}
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.chooser-component {
	position: relative;
	display: inline-block;
}
.chooser-component li {
	display: inline-block;
	border:1px solid #e3e3e3;
	height: 25px;
	line-height: 25px;
	padding: 0 8px;
	margin: 0 8px 0 1px;
	cursor: pointer;
}
.active {
	background: #4fc08d;
	color: #fff;
}
</style>
