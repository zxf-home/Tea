import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/home/Home'

Vue.use(Router);

export default new Router({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/mine',
      name: 'mine',
      component: () => import(/* 我的: "mine" */ './views/mine/Mine')
    },
    {
      path: '/login',
      name: 'login',
      component: () => import(/* 登录: "login" */ './views/mine/MineLogin')
    },
    {
      path: '/neighbour',
      name: 'neighbour',
      component: () => import(/* 附近茶馆: "neighbour" */ './views/neighbouring/Neighbouring')
    },
    {
      path: '/modify',
      name: 'modify',
      component: () => import(/* 修改用户信息: "modify" */ './views/mine/Modify')
    },
    {
      path: '/orderform',
      name: 'orderform',
      component: () => import(/* 我的订单: "orderform" */ './views/orderform/Orderform')
    },
    {
      path: '/purse',
      name: 'purse',
      component: () => import(/* 钱包: "purse" */ './views/purse/Purse')
    },
    {
      path: '/preferential',
      name: 'preferential',
      component: () => import(/* 优惠券: "preferential" */ './views/preferential/Preferential')
    },
    {
      path: '/encrypt',
      name: 'encrypt',
      component: () => import(/* 优惠券: "preferential" */ './views/encrypt/Encrypt')
    },
    {
      path: '/integral',
      name: 'integral',
      component: () => import(/* 优惠券: "preferential" */ './views/integral/Integral')
    },
    {
      path: '/more',
      name: 'more',
      component: () => import(/* 优惠券: "preferential" */ './views/integral/MoreIntegral')
    },
    {
      path: '/list',
      name: 'list',
      component: () => import(/* 优惠券: "preferential" */ './views/purse/List')
    },
    {
      path: '/adequate',
      name: 'adequate',
      component: () => import(/* 优惠券: "preferential" */ './views/purse/Adequate')
    },
    {
      path: '/invoice',
      name: 'invoice',
      component: () => import(/* 优惠券: "preferential" */ './views/purse/Invoice')
    },
    {
      path: '/reservtea',
      name: 'reservtea',
      component: () => import(/* 预约茶馆: "reservTea" */ './views/reservTea/ReservTea')
    },
    {
      path: '/detail',
      name: 'detail',
      component: () => import(/* 详情页: "detail" */ './views/reservTea/Detailed')
    },
    {
      path: '/location',
      name: 'location',
      component: () => import(/* 城市定位: "location" */ './views/home/Location')
    },
      {
          path: '/settle',
          name: 'settle',
          component: () => import(/* 订单管理: "Settle" */ './views/reservTea/Settle')
      },
    {
      path: '/pony',
      name: 'pony',
      component: () => import(/* 收银台: "Pony" */ './views/reservTea/Pony')
    },
    {
      path: '/*',
      redirect: {
        name: 'home',
        component: Home
      }
    }

  ]
})
