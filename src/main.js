// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App';
import Axios from "axios";//网络交互 暂时没用到
import ElementUI from "element-ui";//ui库
import 'element-ui/lib/theme-chalk/index.css';
import "@/style/common.css"
import store from "@/vuex/vuex.js"//vuex

Vue.config.productionTip = false
Vue.prototype.$axios = Axios;
Vue.use(ElementUI);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,//vuex数据
  template: '<App/>',
  components: { App }
})
