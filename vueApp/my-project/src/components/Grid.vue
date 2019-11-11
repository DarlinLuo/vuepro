<template>
  <div>
    <van-grid :column-num="3">
      <van-grid-item
        @click="navToDetal()"
        v-for="value in 36"
        :key="value"
        text="文字"
        icon="//img3.winxuancdn.com/7141/1201657141_49.jpg?1558502149878&imageMogr2/thumbnail/200x200"
        
      />
    </van-grid>
  </div>
</template>
<script>
import Vue from "vue";
import { Grid, GridItem } from "vant";

Vue.use(Grid).use(GridItem);
import "vant/lib/grid/style";
import "vant/lib/grid-item/style";
export default {
  // data() {
  //   return {};
  // },
  methods:{
    //跳转详情页
    navToDetal(){
      this.$router.push({
        name:"detail",
        // params:{id:index}
      });
window.console.log()
    }
  }
};
</script>
<style>
.van-icon__image {
  width: 3em;
  height: 3em;
 
}
.van-grid-item{
 border: .013333rem solid #ccc;
 box-sizing: border-box;
}
</style>