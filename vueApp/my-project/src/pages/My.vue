<template>
   <div id="page">
            <div class="layout grid-m100 J_Layout" data-gridid="1">
                <div class="col-main">
                    <div class="main-wrap J_Region" data-colname="main-wrap" data-support="100">
                        <!-- 用户中心 -->
                        <div class="module wa-usercenter">
                            <div class="usercenter-box">
                                <!-- 主头部 -->
                                <div class="head-banner">
                                    <h2 class="user">
                                        <div class="img">
                                            <img src="//static.winxuancdn.com/goods/def_comment.png" alt="">
                                        </div>
                                        <div class="name">
                                            您好,来自于文轩网的<b>(wx_cm3fbsgpr3)</b>
                                        </div>
                                    </h2>
                                    <div class="info">
                                        <a href="//m.winxuan.com/favorite">
                                            <span>
                                                <b>0</b>
                                                <s>我的收藏</s>
                                            </span>
                                        </a>
                                        <a href="//m.winxuan.com/footprint">
                                            <span>
                                                <b>0</b>
                                                <s>我的足迹</s>
                                            </span>
                                        </a>
                                    </div>
                                </div>
                                <!-- 主头部 end -->
                                <!-- 我的订单 -->
                                <div class="select-box-2 mylist shadow-2">
                                    <a href="//m.winxuan.com/order" class="myorder">
                                        <span>
                                            <s class="iconfont"></s>
                                            我的订单
                                        </span>
                                        <b>
                                            查看全部订单<i class="iconfont"></i>
                                        </b>
                                    </a>
                                    <div class="cont">
                                        <div class="info">
                                            <a href="//m.winxuan.com/order?status=1">
                                               <van-icon name="peer-pay" style="font-size: 1.6rem;"/>
                                                <span>待付款</span>
                                            </a>
                                            <a href="//m.winxuan.com/order?status=2">
                                               <van-icon name="logistics" style="font-size: 1.6rem;"/>
                                                <span>待收货</span>
                                            </a>
                                            <a href="//m.winxuan.com/order?status=3">
                                               <van-icon name="after-sale" style="font-size: 1.6rem;"/>
                                                <span>退款/售后</span>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <!-- 我的订单 end -->
                                <!-- 我的钱包
                                <div class="select-box-2 mylist shadow-2">
                                    <a href="//m.winxuan.com/customer/wallet">
                                        <span>
                                            <s class="iconfont"></s>
                                            我的钱包
                                        </span>
                                        <b>
                                            礼券/购书卡等<i class="iconfont"></i>
                                        </b>
                                    </a>
                                    <div class="cont">
                                        <div class="info">
                                            <a href="//m.winxuan.com/customer/account">
                                                <p class="num">
                                                    <span class="sm">￥</span>
                                                    0.00<span class="sm"></span>
                                                </p>
                                                <span>暂存款</span>
                                            </a>
                                            <a href="//m.winxuan.com/customer/presentcard/detail">
                                                <p class="num">0</p>
                                                <span>购书卡</span>
                                            </a>
                                            <a href="//m.winxuan.com/customer/present/detail">
                                                <p class="num">0</p>
                                                <span>礼券</span>
                                            </a>
                                        </div>
                                    </div>
                                </div> -->
                                <!-- 我的钱包end -->
                                <!-- 联系客服 -->
                                <div class="select-box-2 contact shadow-2">
                                    <a href="javascript:;" class="J_contact_service">
                                        <span>
                                            <s class="iconfont"></s>
                                            联系客服
                                        </span>
                                        <b>
                                            点击联系在线客服<i class="iconfont"></i>
                                        </b>
                                    </a>
                                </div>
                                <!-- 联系客服 -->
                                <!-- 帮助中心 -->
                                <div class="select-box-2 myhelp shadow-2">
                                    <a href="//m.winxuan.com/cms/usercenter_help">
                                        <span>
                                            <s class="iconfont"></s>
                                            帮助中心
                                        </span>
                                        <b>
                                            客服电话及常见问题<i class="iconfont"></i>
                                        </b>
                                    </a>
                                </div>
                                <!-- 帮助中心 end -->
                                <!-- 猜你喜欢 -->
                                <div class="select-box-2 mylike shadow-2">
                                    <a href="javascript:;">
                                        <span>
                                            <s class="iconfont"></s>
                                            猜你喜欢
                                        </span>
                                    </a>
                                    <div class="cont wa-goodsshow">
                                        <ul class="list list-4 cf"></ul>
                                    </div>
                                </div>
                                <!-- 猜你喜欢 end -->
                            </div>
                        </div>
                        <!-- 模态窗口(加载) -->
                        <div class="wa-modal-loading am-modal-out" id="loading" tabindex="-1" style="display: none; margin-top: -18px;">
                            <div class="modal-cont">
                                <div class="loading"></div>
                            </div>
                        </div>
                     
                    </div>
                </div>
            </div>
        </div>
</template>

<script>
import Vue from 'vue';
import { Icon } from 'vant';

Vue.use(Icon);
export default {
   
}
</script>
<style>
#page{
    margin-top: -2.7rem;
}
.wa-usercenter .usercenter-box .head-banner {
    height: 8rem;
    position: relative;
    overflow: hidden;
    margin-bottom: 1.2rem;
    /* background: url(data:image/jpg;base64,/9j/4QAYRXhpZgAASUkqAAgAAAAAAAAAAAAAAP/sABFEdWNreQABA…7cpSlKUvkvx31y8Ll5X4v/2gAIAQICBj8AOU//2gAIAQMCBj8AOU//2gAIAQEBBj8ANtP/2Q==) center top no-repeat; */
    background-size: cover;
}
.head-banner .user {
    overflow: hidden;
    margin-top: -.5rem;
    height: 8.6rem;
    background: rgb(121, 119, 119);
}
.head-banner .user .img {
    width: 2.6rem;
    height: 2.6rem;
    padding: 1.2rem;
    margin: .58rem auto .28rem auto;
    border: .036rem solid #fff;
    border-radius: 100%;
}
.head-banner .user .img img {
    display: block;
    width: 4.335rem;
    height: 4.335rem;
    border-radius: 100%;
    margin: -.8rem -.9rem;
}
.head-banner .user .name {
    line-height: .5rem;
    text-align: center;
    font-size: .42rem;
    color: #fff;
}
.head-banner .user .name b {
    font-weight: normal;
}
.head-banner .info {
    position: absolute;
    width: 100%;
    left: 0;
    bottom: 0;
}
.head-banner .info a {
    display: inline-block;
    width: 50%;
    height: 1.6rem;
}
.head-banner .info a span {
    display: block;
    margin-right: 3rem;
    line-height: .54rem;
    height: 1.6rem;
    /* background-color: rgba(0,0,0,0.1); */
    text-align: center;
    color: #fff;
}
.head-banner .info a span b {
    display: block;
    font-size: .5rem;
    padding-top: .24rem;
}
.head-banner .info a span s {
    display: block;
    font-size: .38rem;
    text-decoration: none;
}
.head-banner .info a {
    display: inline-block;
    width: 50%;
    height: 1.6rem;
}
.head-banner .info a:last-child span {
    margin-left: .05rem;
    margin-right: 0;
}
.head-banner .info a span b {
    display: block;
    font-size: .5rem;
    padding-top: .24rem;
}
.head-banner .info a span s {
    display: block;
    font-size: .38rem;
    text-decoration: none;
}
.select-box-2 {
    background-color: #fff;
    margin-bottom: .19rem
}

.select-box-2>a {
    display: block;
    height: 3.22rem;
    line-height: 3.22rem;
    position: relative
}

.select-box-2>a span {
    display: block;
    margin-left: .28rem;
    font-size: .86rem;
    color: #262626
}

.select-box-2>a span s {
    margin-right: .28rem;
    text-decoration: none;
    font-size: 1.58rem;
    color: #c28bfa;
    vertical-align: middle
}

.select-box-2>a b {
    position: absolute;
    display: block;
    height: .46rem;
    line-height: .46rem;
    top: 50%;
    right: .28rem;
    margin-top: -0.23rem;
    font-size: .36rem;
    color: #888;
    font-weight: normal
}

.select-box-2>a b i {
    font-size: .4rem;
    vertical-align: middle
}

.wa-modal {
    width: 4.38rem;
    position: fixed;
    left: 50%;
    top: 50%;
    margin-left: -2.19rem;
    background-color: rgba(0,0,0,0.8);
    border-radius: .1rem;
    display: none;
    z-index: 1001
}

.wa-modal .modal-cont {
    text-align: center;
    color: #fff;
    font-size: .42rem
}

.wa-modal .modal-cont .icontip {
    padding: .24rem 0
}

.wa-modal .modal-cont .icontip i {
    display: block;
    width: .88rem;
    margin: auto;
    font-size: .88rem;
    line-height: 1.1rem
}

.wa-modal .modal-cont .icontip b {
    display: block;
    line-height: .8rem;
    font-weight: normal
}

.wa-modal-loading {
    position: fixed;
    left: 50%;
    top: 50%;
    z-index: 1001;
    display: none
}

.wa-modal-loading .loading {
    width: 1.1rem;
    height: 1.1rem;
    margin-left: -0.55rem;
    opacity: .4;
    background: url("data:image/png;base64,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") no-repeat;
    background-size: cover;
    /* -webkit-animation-name: rotate;
    -webkit-animation-duration: 1.2s;
    -webkit-animation-iteration-count: infinite;
    -webkit-animation-timing-function: linear */
}
.wa-usercenter .usercenter-box .mylist .cont .info {
    height: 3.9rem;
    border-top: .036rem solid #eee;
    overflow: hidden
}

.wa-usercenter .usercenter-box .mylist .cont .info a {
    float: left;
    display: block;
    width: 33.3333%;
    text-align: center;
    font-size: .34rem
}

.wa-usercenter .usercenter-box .mylist .cont .info a .num {
    color: #f41e33;
    font-size: .53rem
}

.wa-usercenter .usercenter-box .mylist .cont .info a .num .sm {
    display: inline;
    font-size: .4rem;
    color: #f41e33
}

.wa-usercenter .usercenter-box .mylist .cont .info i {
    display: block;
    width: .82rem;
    height: .82rem;
    margin: .36rem auto .06rem auto;
    text-align: center;
    position: relative;
    font-size: .78rem;
    color: #888
}

.wa-usercenter .usercenter-box .mylist .cont .info i s {
    position: absolute;
    display: block;
    height: .5rem;
    line-height: .46rem;
    width: .5rem;
    border: .036rem solid #f41e33;
    border-radius: 100%;
    text-decoration: none;
    top: -0.16rem;
    right: -0.16rem;
    font-size: .36rem;
    color: #f41e33;
    text-align: center;
    background-color: #fff
}

.wa-usercenter .usercenter-box .mylist .cont .info .more s {
    line-height: .25rem;
    font-weight: bold
}

.wa-usercenter .usercenter-box .mylist .cont .info .more s:after {
    content: '...'
}

.wa-usercenter .usercenter-box .mylist .cont .info span {
    display: block;
    line-height: .66rem;
    color: #262626;
    font-size: .86rem;
    margin-left: .6rem;
    margin-top: .9rem;
}

.wa-usercenter .usercenter-box .myhelp a span s {
    color: #fdc780
}

.wa-usercenter .usercenter-box .contact a span s {
    color: #8bd4fa
}

.wa-usercenter .usercenter-box .mylike a span s {
    color: #fca8cc
}

.wa-usercenter .usercenter-box .mylike .cont {
    padding: .2rem 0 .8rem 0
}

.wa-usercenter-fav .am-tabs .am-tabs-nav li {
    width: 50%
}

.wa-usercenter-fav .list .item-2 .price {
    padding-bottom: 2.1rem
}

.wa-usercenter-fav .list .item-2 .active-btn {
    position: absolute;
    right: .38rem;
    bottom: .36rem
}

.wa-usercenter-fav .list .item-2 .active-btn a {
    margin-left: .36rem
}

.wa-usercenter-fav .list .item-2 a .price {
    margin-top: -0.3rem;
    padding-bottom: 0
}
.van-icon{
    size: .6rem;
}
</style>