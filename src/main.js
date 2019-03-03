import Vue from 'vue'
import App from './App.vue'

// 引入element-ui
import ElementUI from 'element-ui';
// 引入element-ui样式
import 'element-ui/lib/theme-chalk/index.css';

// 引入axios
import axios from 'axios';

// 全局注册组件
Vue.use(ElementUI);
Vue.config.productionTip = false

// 把axios绑定到vue实例的属性$axios
Vue.prototype.$axios = axios;

new Vue({
  render: h => h(App),
}).$mount('#app')
