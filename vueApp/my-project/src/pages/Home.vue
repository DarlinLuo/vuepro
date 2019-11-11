<template>
  <div>
    <Search />
    <Swipe />
    <div class="varbox">
      <img src="http://static.winxuancdn.com/topic/subject/201907/dj/640-90-1.jpg?201910250940" alt />
      <img src="//static.winxuancdn.com/topic/winxuan_m/newm/home/product_1/wxjj_4.jpg?wweed" alt />
    </div>
    <Card />
    <div>
      <img src="//static.winxuancdn.com/topic/subject/201708/10030/0.jpg" alt />
    </div>
    <Grid />
    <div>
      <img src="//static.winxuancdn.com/topic/subject/201806/lsjx/640-90.jpg" alt />
      <img src="//static.winxuancdn.com/topic/subject/201605/m_pl/plhc1.jpg" alt />
      <img src="//static.winxuancdn.com/topic/subject/201605/m_pl/pl-wxxs.jpg" alt />
    </div>
    <Goods />
    <div>
      <img src="//static.winxuancdn.com/topic/subject/201605/m_pl/pl-rwsk.jpg" alt />
    </div>
    <Goods />
    <div>
      <img src="//static.winxuancdn.com/topic/subject/201804/gywx.png" alt />
    </div>
    <footer class="module wa-foot-main">
      <div class="foot-box">
        <div class="foot-active J_loginAreaBottom"></div>
        <div class="copyright">
          <span>&copy;m.winxuan.com</span>
          
        </div>
      </div>
    </footer>
  </div>
</template>
<script>
import Search from "../components/Search.vue";
import Swipe from "../components/Swipe.vue";
import Card from "../components/Card.vue";
import Grid from "../components/Grid.vue";
import Goods from "../components/Goods.vue";

export default {
  components: {
    Search,
    Swipe,
    Card,
    Grid,
    Goods
  }
};
</script>
<style>
.varbox {
  margin-top: 0.333333rem;
}
body {
  margin-bottom: 3.333333rem;
}
.wa-foot-main {
    background-color: #524c60
}

.wa-foot-main .foot-box {
    overflow: hidden;
    padding: .3rem 0
}

.wa-foot-main .foot-box div {
    min-height: 1.22rem;
    margin-bottom: .16rem;
    text-align: center
}

.wa-foot-main .foot-box div a {
    margin: 0 .41rem
}

.wa-foot-main .foot-box div .username {
    font-size: .46rem;
    color: #afafb0
}

.wa-foot-main .foot-box .copyright {
    text-align: center;
    font-size: .4rem;
    color: #afb0b0
}

.wa-foot-main .foot-box .copyright span {
    margin-right: .18rem;
    font-size: .5rem;
    vertical-align: middle;
    color: #817e88
}
.van-search--show-action {
  background: #f41e33 !important;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 99;
}
.van-search__label {
  color: #f41e33;
  font-size: 0.94rem;
}
</style>