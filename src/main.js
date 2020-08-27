import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import api from './api';
import 'vant/lib/index.css';
import BaiduMap from 'vue-baidu-map'
import Cube from 'cube-ui';

Vue.use(Cube);
Vue.use(BaiduMap, {
  ak: 'sGoOtkLilKI6bs46rmRNvuDxldwFLTsg'
});

Vue.config.productionTip = false;

Vue.use(api);

new Vue({
  el:'#app',
  router,
  store,
  render: h => h(App)
});
