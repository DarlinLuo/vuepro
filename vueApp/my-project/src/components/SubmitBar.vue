<template>
  <van-submit-bar :price="3380" button-text="结算(1)" @submit="onSubmit" />
</template>

<script>
import Vue from 'vue';
import { SubmitBar } from 'vant';

Vue.use(SubmitBar);
import "vant/lib/submit-bar/style";
export default {
  data() {
    return {
      onSubmit: "",
    }
  }
};
</script>

<style>
.van-submit-bar{
    bottom: 3.3rem
}
</style>

