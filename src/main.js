// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
window.echarts = require('echarts');
import vant from 'vant';
import 'vant/lib/index.css';
import Axios from 'axios';
Vue.use(vant);
Vue.prototype.HOST = 'http://asda.free.idcfengye.com/';
Vue.prototype.$axios  = Axios;
Vue.config.productionTip = false



import qs from 'qs'
//定义全局变量
Vue.prototype.$qs = qs
var axios = require('axios')
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'
//将API方法绑定到全局
Vue.prototype.$axios = axios




// axios.defaults.baseURL = 'https://1691a708.cpolar.io';
// axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
