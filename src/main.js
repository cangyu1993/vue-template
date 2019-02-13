// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import 'babel-polyfill'
import router from './router'
import axios from '@/axios'
import jquery from 'jquery'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import VueLazyload from 'vue-lazyload'


Vue.config.productionTip = false
Vue.prototype.$axios = axios;
Vue.prototype.$= jquery;

Vue.use(VueLazyload,{
  preLoad:1.3,
  attempt:1,
  error:require('./assets/404.png'), //错误图片
  loading:require('./assets/loading.jpg'),  //加载图片
});

import store from '@/store';
/* eslint-disable no-new */
Vue.use(ElementUI);
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
