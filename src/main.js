import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'

Vue.config.productionTip = false

import '@/assets/css/reset.css'
import '@/assets/js/rem.js'
import '@/mock/mock.js'

//vant完全引入
// import Vant from 'vant';
// import 'vant/lib/index.css';
// Vue.use(Vant);

//vant按需引入
import {Row, Col, Toast, Button,Icon,NavBar,Tabbar,TabbarItem, Swipe, SwipeItem, Lazyload, Tab, Tabs, CellGroup, Field} from 'vant'
Vue.use(Row).use(Col).use(Toast).use(Button).use(Icon).use(NavBar).use(Tabbar).use(TabbarItem).use(Swipe).use(SwipeItem).use(Lazyload).use(Tab).use(Tabs).use(CellGroup).use(Field)

axios.defaults.baseURL='http://localhost:3000/';  //设置一个类似base_url的请求路径
global.axios=axios;  //设置一个全局axios便于调用
axios.defaults.headers.post['Content-Type'] = 'application/json'

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
