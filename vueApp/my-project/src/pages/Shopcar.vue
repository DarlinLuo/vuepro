<template>
  <div>
    <div class="car">
      购物车(<b>1</b>)
      <span class="bian" @click="gologin">去登录</span>
    </div>
    <div class="module wa-shoppingcart">
      <div class="cart-box J_cart">
        <div class="group shadow" data-group="1-13101">
          <div class="all-bar cf">
            <label class="form-checkbox">
              <input
                type="checkbox"
                checked
                data-group="1-13101"
                class="J_selectAll"
                data-multi="true"
              />
              <i class="iconfont"></i>
            </label>
            <div class="txt">
              <b>文轩现货</b>
            </div>
          </div>
          <div class="prom-bar cf">
            <a href="javascript:;">
              <i>满减</i>
              <b class="J_promsg">再购买活动商品65.2元,可减10元现金</b>
            </a>
          </div>
          <ul class="cart-list cf">
            <li class="cf J_listItem" data-proid="1201937774">
              <div class="scrollbar-box">
                <div class="scrollbar J_listItemMain">
                  <label class="form-checkbox">
                    <input type="checkbox" checked data-group="1-13101" class="J_listItemCheck" />
                    <i class="iconfont"></i>
                  </label>
                  <div class="item item-cart">
                    <div class="img">
                      <a href="//m.winxuan.com/product/1201937774">
                        <img
                          src="//img1.winxuancdn.com/1803/1201911803_49_0_original_800x800.jpg?1568259192279&imageMogr2/thumbnail/160x160"
                        />
                      </a>
                    </div>
                    <h3 class="name">
                      <a href="//m.winxuan.com/product/1201937774">拾掇70年的片段——我和我的祖国</a>
                    </h3>
                    <div class="tips" title="教材商品不参加优惠活动！"></div>
                    <div class="price">
                      <span class="price-n">￥33.80</span>
                      <span class="price-o">￥49.00</span>
                    </div>
                    <div class="form-num">
                      <button
                        class="btn-2 b-1 iconfont J_listItemBtn"
                        data-ctype="subItem"
                        data-widget="editItem"
                        @click="cutnum1"
                      >-</button>
                      <input
                        type="text"
                        class="i-2 J_listItemInput"
                        data-prist-val="1"
                        v-model="value"
                        data-orign-val="1"
                      />
                      <button
                        class="btn-2 b-2 iconfont J_listItemBtn"
                        data-ctype="addItem"
                        data-widget="editItem"
                        @click="addnum1"
                      >+</button>
                      <span class="limit" style="display:none;">
                        <b class="J_stock">984</b>
                      </span>
                    </div>
                  </div>
                  <div class="overlay J_listItemCover"></div>
                </div>
                <div class="active-btn">
                  <span class="fav J_listItemBtn" data-widget="addFavor">
                    移入
                    <br />收藏
                  </span>
                  <span class="del J_listItemBtn" data-widget="delItem">删除</span>
                </div>
                <div class="disabled"></div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <SubmitBar />
  </div>
</template>

<script>
import SubmitBar from "../components/SubmitBar.vue";
export default {
  data(){
    return {
      value:'1'
    }
  },
  components: {
    SubmitBar,
    
  },
  methods:{
    gologin:function(){
      this.$router.push({path:'/login'});
    },
   addnum1:function(){
      this.value++;
    },
    cutnum1:function(){
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
.car {
  margin-top: -2.7rem;
  height: 3rem;
  background: #fff;
  text-align: center;
  line-height: 3rem;
}
.bian {
  margin-left: 6rem;
}
.wa-shoppingcart .cart-box .empty-cart {
    position: fixed;
    left: 50%;
    top: 50%;
    width: 4.4rem;
    margin-left: -2.2rem;
    height: 7rem;
    margin-top: -3.5rem;
    z-index: 200;
    text-align: center
}

.wa-shoppingcart .cart-box .empty-cart i {
    display: block;
    width: 3.9rem;
    height: 3.9rem;
    margin: 0 auto .3rem auto;
    background-color: #ccc;
    border-radius: 100%;
    font-size: 2.6rem;
    color: #fff;
    text-align: center;
    line-height: 4.2rem;
    overflow: hidden
}

.wa-shoppingcart .cart-box .empty-cart h3 {
    font-size: .46rem;
    color: #666;
    line-height: .78rem
}

.wa-shoppingcart .cart-box .empty-cart h4 {
    line-height: .8rem;
    font-size: .4rem;
    color: #999;
    font-weight: normal;
    margin-bottom: .2rem
}

.wa-shoppingcart .cart-box .empty-cart .btn {
    display: block;
    margin: auto;
    width: 3.28rem;
    height: .94rem;
    line-height: .94rem;
    font-size: .42rem;
    color: #fff;
    background-color: #f41e33;
    border-radius: .1rem
}

.wa-shoppingcart .cart-box .group {
    margin-bottom: .26rem
}

.wa-shoppingcart .cart-box .clear-active {
    padding: .26rem 0 .5rem 0;
    text-align: center
}

.wa-shoppingcart .cart-box .clear-active a {
    display: block;
    margin: 0 auto;
    width: 3.82rem;
    height: .88rem;
    line-height: .88rem;
    text-align: center;
    font-size: .36rem;
    color: #f41e33;
    border: .04rem solid #f41e33;
    border-radius: .12rem
}

.wa-shoppingcart .cart-box .all-bar {
    height: 1.32rem;
    background-color: #fff;
    border-bottom: .036rem solid #f7f7f7;
    margin-top: .3rem;
}

.wa-shoppingcart .cart-box .all-bar .form-checkbox {
    display: block;
    width: 1.74rem;
    height: 1.32rem;
    float: left
}

.wa-shoppingcart .cart-box .all-bar .txt {
    height: 1.32rem;
    line-height: 1.32rem;
    position: relative;
    margin-left: 1.74rem;
    font-size: .42rem;
}
/* 
.wa-shoppingcart .cart-box .all-bar .txt i {
    color: #ddd;
    margin-right: .24rem;
    margin-top: -0.08rem;
    line-height: 1.32rem;
    font-size: .54rem;
    vertical-align: top
} */

.wa-shoppingcart .cart-box .all-bar .txt b {
    font-size: .82rem;
    color: #262626;
    font-weight: normal;
    vertical-align: top
}

.wa-shoppingcart .cart-box .all-bar .txt .exp {
    position: absolute;
    top: .24rem;
    right: .32rem;
    font-size: .38rem;
    color: #262626;
    line-height: .44rem;
    text-align: right;
    display: table-cell
}

.wa-shoppingcart .cart-box .all-bar .txt .exp s {
    text-decoration: none;
    color: #f41e33;
    vertical-align: middle
}

.wa-shoppingcart .cart-box .all-bar .txt .exp span {
    display: block;
    font-size: .3rem;
    vertical-align: middle;
    color: #a9a9a9
}

.wa-shoppingcart .cart-box .prom-bar {
    line-height: 1.8rem;
    position: relative;
    padding-left: .6rem
}

.wa-shoppingcart .cart-box .prom-bar i {
    display: inline-block;
    color: #fff;
    font-size: .8rem;
    width: 1.8rem;
    height: .88rem;
    line-height: .88rem;
    margin-right: .2rem;
    border-radius: .06rem;
    background-color: #f41e33;
    text-align: center;
    font-style: normal;
    vertical-align: middle;
    overflow: hidden;
    margin-bottom: .2rem
}

/* .wa-shoppingcart .cart-box .prom-bar * {
    vertical-align: top
}

.wa-shoppingcart .cart-box .prom-bar a {
    display: block
} */

.wa-shoppingcart .cart-box .prom-bar b {
    font-size: .88rem;
    color: #262626;
    font-weight: normal
}

.wa-shoppingcart .cart-box .prom-bar .more {
    position: absolute;
    top: 0;
    right: 0;
    display: block;
    width: .82rem;
    height: .98rem;
    line-height: .98rem;
    text-align: center;
    color: #f41e33;
    font-size: .4rem
}

.wa-shoppingcart .cart-box .cart-list li {
    margin-bottom: .09rem;
    background-color: #f7f7f7;
    position: relative
}

.wa-shoppingcart .cart-box .cart-list li:last-child {
    margin-bottom: 0
}

.wa-shoppingcart .cart-box .cart-list .scrollbar-box {
    height: 5.68rem;
    overflow-x: scroll;
    overflow-y: auto;
    position: relative;
    z-index: 2;
    width: 100%;
    white-space: nowrap;
    margin-bottom: .26rem
}

.wa-shoppingcart .cart-box .cart-list .scrollbar-box::-webkit-scrollbar {
    width: 0;
    display: none
}

.wa-shoppingcart .cart-box .cart-list .scrollbar {
    position: relative;
    display: inline-block;
    width: 100%;
    height: 3.28rem;
    z-index: 2;
    background-color: #f7f7f7;
    vertical-align: top;
    transform: translate(0, 0);
    transition-duration: .4s;
    -webkit-transform: translate(0, 0);
    -webkit-transition-duration: .4s
}

.wa-shoppingcart .cart-box .cart-list .scrollbar .overlay {
    display: none;
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 3.06rem;
    background-color: rgba(255,255,255,0.3)
}

.wa-shoppingcart .cart-box .cart-list .cover .overlay {
    display: block !important
}

.wa-shoppingcart .cart-box .cart-list .active {
    transform: translate(-3.6rem, 0);
    transition-duration: .4s;
    -webkit-transform: translate(-3.6rem, 0);
    -webkit-transition-duration: .4s
}

.wa-shoppingcart .cart-box .cart-list .scrollbar-margin {
    display: inline-block;
    width: 3.6rem;
    height: 0;
    background-color: red;
    vertical-align: top
}

.wa-shoppingcart .cart-box .cart-list .active-btn {
    z-index: 2;
    position: absolute;
    right: .8rem;
    top: 1.2rem;
    width: 4.6rem;
    height: 3.06rem;
    overflow: hidden
}

.wa-shoppingcart .cart-box .cart-list .active-btn span {
    display: table-cell;
    width: 2.8rem;
    height: 3.04rem;
    vertical-align: middle;
    text-align: center;
    font-size: .68rem;
    color: #fff;
    line-height: 140%
}

.wa-shoppingcart .cart-box .cart-list .active-btn .fav {
    background-color: #aaa;

}

.wa-shoppingcart .cart-box .cart-list .active-btn .del {
    background-color: #f41e33;
}

.wa-shoppingcart .cart-box .cart-list .form-checkbox {
    position: absolute;
    left: 0;
    top: 0;
    width: 1.74rem;
    height: 3.28rem
}

.wa-shoppingcart .cart-box .cart-list .item-cart {
    margin: .1rem .26rem .1rem 1.74rem;
    padding-left: 3.26rem;
    position: relative;
    overflow: hidden
}

.wa-shoppingcart .cart-box .cart-list .item-cart .img {
    position: absolute;
    left: 0;
    top: .6rem;
    width: 2.98rem;
    height: 2.98rem;
    background-color: #fff
}

.wa-shoppingcart .cart-box .cart-list .item-cart .img img {
    max-width: 100%;
    max-height: 100%
}

.wa-shoppingcart .cart-box .cart-list .item-cart .name {
    height: .9rem;
    overflow: hidden;
    line-height: 1.2rem;
    font-size: .66rem;
    white-space: normal;
    margin-top: .1rem
}

.wa-shoppingcart .cart-box .cart-list .item-cart .name a {
    color: #666;
    height: 100%;
    overflow: hidden;
    display: inline-block
}

.wa-shoppingcart .cart-box .cart-list .item-cart .tips {
    position: relative;
    z-index: 999;
    font-size: .36rem;
    color: #f41e33;
    width: 100%;
    height: .46rem;
    line-height: .46rem;
    margin: .1rem 0;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis
}

.wa-shoppingcart .cart-box .cart-list .item-cart .price {
    height: .4rem;
    line-height: .4rem;
    margin-bottom: .15rem;
    margin-bottom: .3rem;
}

.wa-shoppingcart .cart-box .cart-list .item-cart .price .price-n {
    font-size: .78rem;
    color: #f41e33;
    margin-right: .34rem;
    vertical-align: top
}

.wa-shoppingcart .cart-box .cart-list .item-cart .price .price-o {
    font-size: .7rem;
    color: #a9a9a9;
    text-decoration: line-through;
    vertical-align: top
}

.wa-shoppingcart .cart-box .cart-list .item-cart .tag {
    position: absolute;
    left: 0;
    bottom: 0;
    width: .82rem;
    height: .38rem;
    line-height: .38rem;
    color: #fff;
    background-color: rgba(0,0,0,0.8);
    border-radius: .06rem;
    text-align: center;
    font-size: .26rem;
    letter-spacing: .04rem
}

.wa-shoppingcart .cart-box .cart-list .item-cart .limit {
    margin-left: .42rem;
    font-size: .3rem;
    color: #f41e33;
    vertical-align: bottom;
    display: inline-block
}

.wa-shoppingcart .cart-box .cart-list .item-cart .limit b {
    font-weight: normal
}
.i-2{
  width:3.6rem;
  text-align: center;
}

</style>