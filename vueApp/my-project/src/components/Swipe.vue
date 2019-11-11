<template>
  <van-swipe :autoplay="3000" indicator-color="white">
    <van-swipe-item>
      <img
        src="http://static.winxuancdn.com/topic/subject/201910/nbe/640-304-1.jpg?201910250939"
        alt
      />
    </van-swipe-item>
    <van-swipe-item>
      <img
        src="http://static.winxuancdn.com/topic/subject/201910/101/640-304-1.jpg?201910250939"
        alt
      />
    </van-swipe-item>
    <van-swipe-item>
      <img
        src="http://static.winxuancdn.com/topic/subject/201910/101/600-304.jpg?201910250939"
        alt
      />
    </van-swipe-item>
    <van-swipe-item>
      <img
        src="http://static.winxuancdn.com/topic/subject/201908/md/640-304-2.jpg?201910250939"
        alt
      />
    </van-swipe-item>
    <van-swipe-item>
      <img
        src="http://static.winxuancdn.com/topic/subject/201906/71/640-304-2.jpg?201910250939"
        alt
      />
    </van-swipe-item>
  </van-swipe>
  
</template>
<script>
import Vue from "vue";
import { Swipe, SwipeItem } from "vant";
import "vant/lib/swipe/style";
import "vant/lib/swipe-item/style";
Vue.use(Swipe).use(SwipeItem);
export default {
  data() {
    return {};
  }
};
</script>
<style>
img {
  width: 100%;
  max-height: 8rem;
  display: block;
}
.van-swipe{
  margin-top: .45rem;
}
</style>