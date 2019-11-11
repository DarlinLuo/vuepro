<template>
  <div>
    <van-tabs v-model="active">
      <b class="back" @click="backhome">&lt;&lt;</b>
      <van-tab title="基本信息">
        <div class="wa-slider">
          <div class="slider-box">
            <ul class="cf">
              <li style="float: none">
                <img
                  src="//img1.winxuancdn.com/1803/1201911803_49_0_original_800x800.jpg?1568259192279&imageMogr2/thumbnail/350x350"
                  alt="拾掇70年的片段——我和我的祖国"
                />
              </li>
            </ul>
          </div>
        </div>
        <div class="base-info">
          <h2 class="title">拾掇70年的片段——我和我的祖国</h2>
          <h3 class="sub-title">
            1.主题性。展现70年来百姓生活变化，献礼新中国成立七十周年。
            2.非常不错性。“学习强国” 学习平台（中宣部主管）编选。
            3.实用性。本书可用于地方各级机关、企*单位的党委、党支部开展“ ‘我和
          </h3>
          <div class="price">
            <div class="shareLog" data-am-modal="{target: '#myShare'}"></div>
            <span class="price-n">
              ￥
              <b>33.8</b>
            </span>
            <span class="price-o">￥49.0</span>
            <span class="z">6.9折</span>
          </div>
          <div class="author">
            作 者：
            <b>“学习强国”学习平台编著</b>
          </div>
          <div class="pub">
            出版社：
            <a href="/search?keyword=天地出版社">
              <b>天地出版社</b>
            </a>
          </div>
        </div>
        <div class="detail-banner">
          <a target="_blank" href="https://m.winxuan.com/present/center">
            <img
              src="http://static.winxuancdn.com/topic/subject/201910/jf/640-90-2.jpg?201910241652"
              style="display:block;width:100%;"
            />
          </a>
        </div>
        <div class="status shadow shadow-2">
          <div class="prompt">
            <b>文轩现货</b>
            <s>70%城市次日达，电子发票</s>
          </div>
          <div class="sale-list">
            <div class="item" style="padding-left:.66rem">
              <span style="color:#f41e33">
                购书卡&政企书目服务专线：
                <br />028-83157118 （10:00-17:00）
              </span>
            </div>
            <div class="item">
              <b>满减</b>
              <span type="20004">❤图书音像单笔满99减10，满499减100！(特惠图书、电子书除外）</span>
            </div>
            <div class="item">
              <b>限购</b>
              <span type="20012">
                ❤老客户回馈，积分换礼券，购书更实惠
                <br />❤大陆非新疆西藏地区满48元包邮，新疆西藏地区每单运费20元
              </span>
            </div>
          </div>
        </div>
        <div class="buy-select shadow-2">
          <div class="form-num">
            <b>数 量：</b>
            <button class="btn-2 b-1 iconfont" data-widget="filter" data-ctype="minsub" @click="cutnum">-</button>
            <input
              type="number"
              class="i-2 J_minDisc"
              data-type="disc"
              data-filter="minDiscount"
              v-model="value"
            />
            <button class="btn-2 b-2 iconfont" data-widget="filter" data-ctype="minadd" @click="addnum">+</button>
            <span class="limit" style="display:none;">
              <b>884</b>
            </span>
          </div>
        </div>
        <div class="rowline shadow-2">
          <a href="javascript:;">
            <b>商品评价</b>
            <span>
              查看评价
              <i class="iconfont">>></i>
            </span>
          </a>
        </div>
        <div class="rowline shadow-2">
          <a href="javascript:;">
            <b>商品详情</b>
            <span>
              查看详情
              <i class="iconfont">>></i>
            </span>
          </a>
        </div>
        <div class="wxhint">
          <p>价格说明</p>
          <div class="hintContent">
            <b>划线价:</b>
            <p>商品展示的划横线价格为出版社全国统一定价；</p>
          </div>
          <div class="hintContent">
            <b>折扣:</b>
            <p>页面显示的折扣数（如6.0折），是以定价为基础的价格折扣；</p>
          </div>
          <div class="hintContent">
            <b></b>
            <p>受系统缓存影响，商品的最终售价以订单结算页价格为准</p>
          </div>
        </div>
        <!-- 价格定义说明  end-->
        <!--广告说明-->
        <div class="wxhint">
          <p>关于新广告法声明</p>
          <div class="hintContent mt-2">
            <p>
              新广告法规定所有页面不得出现绝对化用词和功能性用词。本店非常支持新广告法，但为了不影响消费者正常购买，页面明显区域本店已在排查修改，对于不明显区域也将会逐步排查并修改，我们在此郑重声明：
              <span
                style="color:#f41e33"
              >本店所有页面上的绝对化用词与功能性用词在此声明全部失效，不作为赔付理由。</span>
              因极限用词引起的任何形式的商品赔付，本店不接受且不妥协。希望消费者理解并欢迎联系客服帮助完善，也请职业打假人士高抬贵手。
            </p>
          </div>
        </div>
      </van-tab>
      <van-tab title="商品详情">
        <div class="copy">
         出版信息
        </div>
         <div class="am-tab-panel am-fade am-in " id="tab-2">
              <!-- 出版社信息 -->
              <div class="pub-info">
                  <dl>
                      <dd>
                          <b>书 名</b>
                          <span>拾掇70年的片段——我和我的祖国</span>
                      </dd>
                      <dd>
                          <b>作 者</b>
                          <span>“学习强国”学习平台编著</span>
                      </dd>
                      <dd>
                          <b>出 版 社</b>
                          <span>
                              <a href="/search?keyword=天地出版社">天地出版社</a>
                          </span>
                      </dd>
                      <dd>
                          <b>出版时间</b>
                          <span>2019-09-30</span>
                      </dd>
                      <dd>
                          <b>开 本</b>
                          <span>16开</span>
                      </dd>
                      <dd>
                          <b>页 数</b>
                          <span>339</span>
                      </dd>
                      <dd>
                          <b>字 数</b>
                          <span>314千字</span>
                      </dd>
                      <dd>
                          <b>装 帧</b>
                          <span>平装</span>
                      </dd>
                      <dd>
                          <b>印刷时间</b>
                          <span>2019-10-01</span>
                      </dd>
                      <dd>
                          <b>语 种</b>
                          <span>中文</span>
                      </dd>
                      <dd>
                          <b>版 次</b>
                          <span>1</span>
                      </dd>
                      <dd>
                          <b>印 次</b>
                          <span>1</span>
                      </dd>
                      <dd>
                          <b>读者对像</b>
                          <span>大众读者</span>
                      </dd>
                  </dl>
              </div>
              <!-- 出版社信息 end -->
            </div>
      </van-tab>
      <van-tab title="用户评价">
        <div class="comment">
          <!-- 无评论 -->
          <div class="empty-comment">
            <h3>暂无评价</h3>
            <h4>购买后快来发表评价吧~</h4>
          </div>
          <!-- 无评论 end -->
        </div>
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
import Vue from "vue";
import { Tab, Tabs } from "vant";

Vue.use(Tab).use(Tabs);
import "vant/lib/tab/style";
import "vant/lib/tabs/style";
export default {
  data() {
    return {
      active: 0,
      value:"1"
    };
  },
  methods:{
    backhome:function(){
      this.$router.push({path:'/main/home'});
    },
    addnum:function(){
      this.value++;
    },
    cutnum:function(){
      if(this.value <=1){
        this.value=1;
      }else{
        this.value--;
      }
    }
  }
};
</script>

<style>
.back{
  position: fixed;
  top: .8rem;
  left: .2rem;
  font-size: 1.1rem;
}
.van-tabs {
  margin-top: -2.8rem;
}
.wa-slider .slider-box {
  position: relative;
  overflow: hidden;
}

.wa-slider .slider-box ul {
  overflow: hidden;
}

.wa-slider .slider-box ul li {
  -webkit-backface-visibility: hidden;
  position: relative;
  float: left;
  white-space: nowrap;
  display: none;
}

.wa-slider .slider-box ul li a {
  display: block;
}

.wa-slider .slider-box ul li img {
  width: 100%;
  max-height: 20rem;
  display: block;
}

.wa-slider .slider-box ul li:first-child {
  display: block;
}

.wa-slider .slider-box ol {
  padding: 0;
  margin: 0;
  width: 100%;
  height: 0.6rem;
  position: absolute;
  text-align: center;
  left: 0;
  bottom: 0;
  z-index: 101;
}

.wa-slider .slider-box ol li {
  text-align: -webkit-match-parent;
  display: inline-block;
  margin: 0 0.1rem;
  vertical-align: top;
}

.wa-slider .slider-box ol li a {
  display: block;
  width: 0.24rem;
  height: 0.24rem;
  border-radius: 100%;
  background-color: rgba(255, 255, 255, 0.8);
  text-indent: -9999rem;
  border: 0.03rem solid rgba(0, 0, 0, 0.5);
}

.wa-slider .slider-box ol li .am-active {
  background-color: rgba(244, 30, 51, 0.8);
}
.base-info {
  background-color: #fff;
  padding: 0.22rem 0.68rem;
}

.base-info .title {
  line-height: 0.64rem;
  font-size: 1.1rem;
  color: #262626;
  margin-bottom: 0.1rem;
}

.base-info .sub-title {
  font-size: 0.76rem;
  line-height: 0.98rem;
  color: #f41e33;
  margin-bottom: 0.4rem;
}

.base-info .price {
  height: 0.72rem;
  line-height: 0.72rem;
  margin-bottom: 0.58rem;
}

.base-info .price * {
  vertical-align: baseline;
}

.base-info .price .price-n {
  margin-right: 0.56rem;
  font-size: 1.2rem;
  color: #f41e33;
}

.base-info .price .price-n b {
  font-size: 1.2rem;
  font-weight: normal;
}

.base-info .price .price-o {
  font-size: 1.2rem;
  text-decoration: line-through;
  color: #999;
  margin-right: 2.52rem;
}

.base-info .price .z {
  display: inline-block;
  height: 1.2rem;
  line-height: 1.2rem;
  font-size: 1.2rem;
  padding: 0 0.1rem;
  color: #fff;
  background-color: #fd5969;
  vertical-align: middle;
  border-radius: 0.08rem;
  margin-top: 0.2rem;
}

.base-info .author,
.base-info .pub {
  line-height: 1.64rem;
  font-size: 0.86rem;
  color: #999;
}

.base-info .author b,
.base-info .pub b {
  font-weight: normal;
}

.base-info .author a,
.base-info .pub a {
  color: #6a77b6;
  margin: 0 0.11rem;
}
.status {
  border-top: 0.036rem solid #eee;
  background-color: #fafafa;
  margin-bottom: 0.19rem;
}

.status .prompt {
  height: 2.04rem;
  line-height: 2.04rem;
  margin: 0 0.66rem;
  overflow: hidden;
}

.status .prompt b {
  font-size: 0.82rem;
  color: #262626;
  margin-right: 0.4rem;
  display: block;
  float: left;
}

.status .prompt b i {
  font-size: 0.84rem;
  color: #f41e33;
  margin-right: 0.22rem;
  line-height: 1.04rem;
}

.status .prompt s {
  font-size: 0.76rem;
  color: #999;
  text-decoration: none;
  display: block;
  float: left;
}

.status .sale-list {
  border-top: 0.036rem solid #eee;
  padding-bottom: 0.1rem;
}

.status .sale-list .item {
  padding: 0.28rem 0.62rem 0 2.24rem;
  position: relative;
  margin-bottom: 1.14rem;
}

.status .sale-list .item b {
  display: block;
  width: 1.28rem;
  height: 1.8rem;
  line-height: 0.86rem;
  text-align: center;
  border: 0.036rem solid #f41e33;
  color: #f41e33;
  letter-spacing: 0.03rem;
  font-size: 0.88rem;
  position: absolute;
  left: 0.66rem;
  top: 0.31rem;
}

.status .sale-list .item span {
  display: block;
  font-size: 0.86rem;
  color: #666;
  line-height: 1.3rem;
}
.buy-select {
  padding: 0.34rem 0;
  background-color: #fff;
  margin-bottom: 0.89rem;
}

.buy-select .form-num {
  margin: 0 0.68rem;
  background-color: #fff;
  height: 1.8rem;
}

.buy-select .form-num b {
  font-size: 0.86rem;
  color: #999;
  font-weight: normal;
}

.buy-select .form-num .limit {
  margin-left: 0.42rem;
  font-size: 0.6rem;
  color: #f41e33;
}

.rowline {
  height: 1.6rem;
  line-height: 1.6rem;
  margin-bottom: 1.19rem;
  background-color: #fff;
  position: relative;
}

.rowline a {
  display: block;
}

.rowline b {
  display: block;
  margin-left: 0.68rem;
  font-size: 0.82rem;
  color: #262626;
}

.rowline span {
  display: block;
  position: absolute;
  top: 0;
  right: 0.3rem;
  font-size: 0.86rem;
  color: #999;
}

.rowline span i {
  font-size: 0.42rem;
  line-height: 1.1rem;
  margin: 0 0.1rem;
  color: #f41e33;
}
.form-num .i-2 {
  width: 4.05rem;
  height: 1.2rem;
  line-height: 1.2rem;
  border: 0 none;
  border-top: 0.018rem solid #eee;
  border-bottom: 0.018rem solid #eee;
  background-color: #fff;
  border-radius: 0;
  text-align: center;
  font-size: 0.9rem;
}
.form-num .btn-2 {
  border: 0 none;
  background-color: #eee;
  width: 1.88rem;
  height: 1.2rem;
  line-height: 1.28rem;
  font-size: 1.2rem;
}

.wxhint {
  padding: 0.2rem 0.66rem;
  background-color: #fff;
  line-height: 0.4rem;
  margin-bottom: 0.19rem;
}

.wxhint > p {
  font-size: 0.82rem;
  font-weight: bold;
}

.wxhint .hintContent {
  position: relative;
}

.wxhint .hintContent b {
  font-size: 0.86rem;
  font-weight: normal;
}

.wxhint .hintContent p {
  font-size: 0.86rem;
  line-height: 0.95rem;
  display: inline-block;
}

.wxhint .mt-2 {
  margin-top: 0.4rem;
}
.comment {
    min-height: 9.2rem;
}
.empty-comment {
    position: fixed;
    left: 50%;
    top: 50%;
    width: 8.4rem;
    margin-left: -4.2rem;
    height: 5.8rem;
    margin-top: -2.9rem;
    z-index: 200;
    text-align: center;
}
.empty-comment h3 {
    font-size: 1.46rem;
    color: #666;
    line-height: 1.78rem;
}
.empty-comment h4 {
    line-height: 1.8rem;
    font-size: 1.1rem;
    color: #999;
    font-weight: normal;
    margin-bottom: .2rem;
}
.copy{
  width:9.3rem;
  height: 2.2rem;
  border:.1rem solid red;
  margin:1.3rem auto;
  text-align: center;
  line-height: 2.2rem;
  color:rgba(0, 0, 0, 0.5)
}
.am-tabs-bd .am-tab-panel.am-active {
    position: relative;
    z-index: 100;
    visibility: visible;
    -webkit-transform: translateX(0);
    -ms-transform: translateX(0);
    transform: translateX(0);
    
}
.pub-info {
    padding: .28rem .68rem;
    background: #fff;
}
.pub-info dl dd {
    height: 1.2rem;
    line-height: 1.2rem;
    overflow: hidden;
    font-size: .96rem;
    color: #262626;
}
.pub-info dl dd b {
    display: inline-block;
    vertical-align: top;
    width: 3.68rem;
    text-align: justify;
    text-justify: inter-ideograph;
    opacity: .66;
    font-weight: normal;
    margin-right: 1.08rem;
}
.pub-info dl dd span {
    display: inline-block;
    vertical-align: top;
}
</style>