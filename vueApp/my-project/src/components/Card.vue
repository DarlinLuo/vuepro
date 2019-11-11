<template>
  <div>
    <van-card
      v-for="(r,index) in arr"
      :key="index"
      num="12"
      :price="r.price"
      desc=""
      :title="r.name"
      :thumb="r.uri"
      origin-price="10.00"
      @click="navToDetail(index)"
    />
  </div>
</template>
<script>
import Vue from "vue";
import { Card } from "vant";

Vue.use(Card);
import "vant/lib/card/style";
export default {
  data() {
    return {
      arr:[]
    };
  },
  created() {
    this.onshows();
  },
  //跳转详情页
  methods: {
    onshows() {
      this.$axios.get("http://localhost:3000/entries").then(({ data }) => {
        this.arr=data
        // window.console.log(data)
        // window.console.log(this.arr)
      });
    },
    navToDetail(index) {
      this.$router.push({
        name: "detail",
        params: { id: index }
      });
      // window.console.log(index)
    }
  }
};
</script>