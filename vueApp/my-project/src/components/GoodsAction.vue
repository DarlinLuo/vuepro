<template>
  <van-goods-action>
    <van-goods-action-icon icon="chat-o" text="客服" />
    <van-goods-action-icon icon="cart-o" text="购物车" info="1" />
    <van-goods-action-icon icon="shop-o" text="店铺" info="0" />
    <van-goods-action-button type="warning" text="加入购物车" @click="gocar"/>
    <van-goods-action-button type="danger" text="立即购买"  @click="gocar"/>
  </van-goods-action>
</template>

<script>
import Vue from "vue";
import { GoodsAction, GoodsActionIcon, GoodsActionButton } from "vant";

Vue.use(GoodsAction).use(GoodsActionIcon).use(GoodsActionButton);
import "vant/lib/goods-action/style";
import "vant/lib/goods-action-icon/style";
import "vant/lib/goods-action-button/style";
export default {
    methods:{
    gocar:function(){
      this.$router.push({path:'/main/shopcar'});
    }
  }
};
</script>

<style>

</style>