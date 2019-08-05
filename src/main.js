// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'


import '../static/css/fontawesome.min.css'
import '../static/css/bootstrap.min.css'
import '../static/css/templatemo-style.css'

import VueScroller from "vue-scroller"
Vue.use(VueScroller)

import VeeValidate from 'vee-validate';
Vue.use(VeeValidate);

import axios from 'axios'
// //配置mui的js  与css
// import mui from '../static/mui/js/mui.min.js'
// import '../static/mui/css/mui.min.css'
// 引入layer弹框组建
import layer from '../static/js/layer.js'
import '../static/css/layer.css'

Vue.prototype.$layer = layer
Vue.config.productionTip = false
// // 配置全局layer
// var loadTip = layer.open({
// 	type: 2,
// 	content: '加载中'
// });
// layer.close(loadTip)
var loadTip;
// 配置axios相关属性
axios.interceptors.request.use(config => {
	loadTip = layer.open({
		type: 2,
		content: '加载中'
	});
	// config.method === 'post' ?
	// 	config.data = qs.stringify({ ...config.data
	// 	}) :
	// 	config.params = { ...config.params
	// 	};
	// config.headers['Content-Type'] = 'application/x-www-form-urlencoded';
	return config;
}, error => { //请求错误处理

	Promise.reject(error)
});

axios.interceptors.response.use(
    response => {  //成功请求到数据
        // layer.closeAll()
				layer.close(loadTip)
        // //这里根据后端提供的数据进行对应的处理
        // if (response.data.result === 'TRUE') {
        //     return response.data;
        // } else {
        //     app.$vux.toast.show({  //常规错误处理
        //         type: 'warn',
        //         text: response.data.data.msg
        //     });
        // }
				return response
    },
    error => {  //响应错误处理
				layer.close(loadTip)
        console.log('error 正式环境需要跳转到登录页');
        console.log(error);
        console.log(JSON.stringify(error));
				router.push('/')
        return Promise.reject(error)
    }
)



// axios.defaults.baseURL = 'http://47.93.252.104:8080'
axios.defaults.baseURL = 'https://www.bitcoc.top'
Vue.prototype.$http = axios
// Vue.prototype.$mui = mui
Vue.prototype.$getCookie = function(name) {
	//console.log(name)
	var arr = document.cookie.match(new RegExp("(^| )" + name + "=([^;]*)(;|$)"));
	//console.log(arr)
	if (arr != null) return unescape(arr[2]);
	return null;
}
Vue.prototype.$setCookie = function(name, value) {
	//此 cookie 将被保存 1 小时
	var hour = 1;
	var exp = new Date();
	exp.setTime(exp.getTime() + hour * 60 * 60 * 1000);
	document.cookie = name + "=" + value + ";expires=" + exp.toGMTString();
}
Vue.prototype.$deleteCookie = function(name) {
	//console.log(document.cookie.length)
	var exp = new Date();
	exp.setTime(exp.getTime() - 1);
	var cval = this.$getCookie(name); // 这是cookie的值
	// var adss = this.$getCookie(address);
	if (cval != null) {
		// 这里删除操作其实是将expires过期时间设置为当前时间，使cookie立即过期
		document.cookie = name + "=" + cval + ";expires=" + exp.toGMTString();
		// document.cookie = address + "=" + adss + ";expires=" + exp.toGMTString();
	}
}

Vue.prototype.$errMsg=function(msg){
	layer.open({
		type: 0,
		content: msg,
		time: 2,
		style: 'border:none; background-color:red; color:#fff;',
		shade:true
	})
}

Vue.prototype.$infoMsg=function(msg){
	layer.open({
		type: 0,
		content: msg,
		time: 2,
		style: 'border:none; background-color:green; color:#fff;',
		shade:true
	})
}

Vue.prototype.$warnMsg=function(msg){
	layer.open({
		type: 0,
		content: msg,
		time: 2,
		style: 'border:none; background-color:orange; color:#fff;',
		shade:true
	})
}

var isDev=true
Vue.prototype.$log=function(log){
	if(isDev){
		console.log(log)
	}
}
// 添加全局用户信息
Vue.prototype.$userInfo={}

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
