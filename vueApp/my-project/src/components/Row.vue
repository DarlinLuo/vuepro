<template>
    <van-row>
  <van-col span="8">0-2岁</van-col>
  <van-col span="8">3-6岁</van-col>
  <van-col span="8">7-10岁</van-col>
  <van-col span="8">11-14岁</van-col>
  <van-col span="8">家庭教育</van-col>
</van-row>
</template>
<script>
import Vue from 'vue';
import { Row, Col } from 'vant';

Vue.use(Row).use(Col);
import "vant/lib/row/style";
import "vant/lib/col/style";
export default{
    
}
</script>
<style>
.van-row{
    margin-left: 2.2rem;
}
.van-col {
    margin-top: .6rem;
    background: #fff;
    text-align: center;
    line-height: 1.8rem;
    width: 6.6rem;
    margin-right: .6rem;
    font-size: .813333rem
}
</style>