<template>
  <van-divider content-position="left">文学小说</van-divider>
</template>
<script>
import Vue from "vue";
import { Divider } from "vant";

Vue.use(Divider);
import "vant/lib/divider/style";
export default {
  data() {
    return {};
  }
};
</script>
<style>
.van-divider.van-divider--hairline{
  font-size: 1.24rem;
  border-width: 2px;
  color: #58bc58;
}
</style>