<template>
  <van-tabbar v-model="active">
    <van-tabbar-item to="/main/home" icon="home-o">首页</van-tabbar-item>
    <van-tabbar-item to="/main/recover" icon="search">分类搜索</van-tabbar-item>
    <van-tabbar-item to="/main/shopcar" icon="shopping-cart-o" info="1">购物车</van-tabbar-item>
    <van-tabbar-item to="/main/my" icon="user-circle-o" dot>我的文轩</van-tabbar-item>
  </van-tabbar>
</template>
<script>
import Vue from "vue";
import { Tabbar, TabbarItem,Icon } from "vant";
import 'vant/lib/tabbar/style';
import 'vant/lib/tabbar-item/style';

Vue.use(Tabbar).use(TabbarItem).use(Icon);
export default {
  data() {
    return {
      active: 0
    };
  }
};
</script>