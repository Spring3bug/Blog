import Vue from 'vue'
import App from './App.vue'
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';
import router from './router'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

Vue.use(Antd);

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
