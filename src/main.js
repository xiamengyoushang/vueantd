import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// 兼容IE11
// npm install --save-dev webpack-dev-server@2.7.1
// npm install --save @babel/polyfill
import '@babel/polyfill'

// npm install ant-design-vue --save
import Antd from "ant-design-vue"
import "ant-design-vue/dist/antd.css"

// npm install axios --save
import axios from "axios";

import "./utils/request"
import "./utils/permission"

Vue.config.productionTip = false
Vue.use(Antd)
Vue.prototype.$axios = axios; // 配置$axios全局使用

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
