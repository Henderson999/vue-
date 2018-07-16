// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Layout from './components/layout'
import IndexPage from './pages/index'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import App from './App'
import axios from 'axios'
import DetailPage from './pages/detail'
import DetailAnaPage from './pages/detail/analysis'
import DetailCouPage from './pages/detail/count'
import DetailForPage from './pages/detail/forecast'
import DetailPubPage from './pages/detail/publish'


Vue.config.productionTip = false
Vue.use(VueRouter)
Vue.use(VueResource)
Vue.prototype.$ajax = axios

//配置路由 
let router = new VueRouter({
	 mode:'history',
	 routes:[
	 {
	 	path:'/',
	 	component: IndexPage
	 },
	 {
	 	path:'/detail',
	 	component: DetailPage,
	 	redirect:'/detail/analysis',
	 	children: [
	 	{
	 		path:'analysis',
	 		component: DetailAnaPage
	 	},
	 	{
	 		path:'count',
	 		component: DetailCouPage
	 	},
	 	{
	 		path:'forecast',
	 		component: DetailForPage
	 	},
	 	{
	 		path:'publish',
	 		component: DetailPubPage
	 	},
	 	]
	 }
	 ]
	})


/* eslint-disable no-new */
new Vue({
  router,
  el: '#app',
  components: { Layout },
  template: '<Layout/>'
})
