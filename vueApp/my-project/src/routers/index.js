import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
import Home from '../pages/Home.vue'
import Recover from '../pages/Recover.vue'
import Shopcar from '../pages/Shopcar.vue'
import My from '../pages/My.vue'
import Main from '../pages/Main.vue'
import Detail from '../pages/Detail.vue'
import Login from '../pages/Login.vue'

const routes = [{
    path: '/main',
    name: 'main',
    component: Main,
    children: [{//首页路由
        path: 'home',
        name: 'home',
        component: Home,
        alias: 'h'
    }, {//分类搜索路由
        path: 'recover',
        name: 'recover',
        component: Recover
    }, {//购物车路由
        path: 'shopcar',
        name: 'shopcar',
        component: Shopcar
    }, {//我的文轩路由
        path: 'my',
        name: 'my',
        component: My
    }],
},{//详情页路由
    path:'/detail/:id',
    name:'detail',
    component:Detail,
},{//登录页路由
    path:'/login',
    name:'login',
    component:Login
},

{//重定向路由
    path: '/',
    redirect: '/main/home'
}]

//实例化路由
const router = new VueRouter({
    // hash
    // mode: 'history',
    routes
})
//路由守卫，判断用户是否登录状态进入不同的页面进行操作，所有进入路由都要判断

export default router