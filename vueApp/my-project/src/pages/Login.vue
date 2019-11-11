<template>
  <div id="page">
    <div class="layout grid-m100 J_Layout" data-gridid="1">
        <div class="col-main">
            <div class="main-wrap J_Region" data-colname="main-wrap" data-support="100">
                <!-- 登录顶部条 -->
                <div class="module wa-head-secondary shadow">
                        <div class="cont">
                            <h2>文轩登录</h2>
                        </div>
                </div>
                <div class="wa-head-height"></div>
                <!-- 登录顶部条 end -->
                <!-- 登录主体 -->
                <div class="module wa-loginregister">
                    <div class="cont-box">
                        <!-- 登录表单 -->
                        <div class="select-box-group select-box-group-form">
                            <div class="tip-title hide">账户名或密码不正确！</div>
                            <a class="item" href="javascript:;"><input class="text" id="username" value="" type="text" placeholder="用户名/邮箱/手机号">
                            </a>
                            <a class="item" href="javascript:;"><input class="text" id="password" value="" type="password" placeholder="请输入密码"><b><strong id="J_showPwd" class="switch-btn"><i ></i><em class="iconfont"></em></strong></b> 
                            </a>
                            <div class="submit" style="padding-top: .66rem;">
                                <button class="btn-big J_login" @click="secesshome">登录</button>
                            </div>
                        </div>
                    </div>
                </div>
               
            </div>
        </div>
    </div>
</div>
</template>

<script>
 export default {
  
  methods:{
    secesshome:function(){
      this.$router.push({path:'/main/my'});
    }
  }
};
</script>
<style>

.layout {
    width: 100%;
    zoom:1;}

.layout:after, .main-wrap:after, .col-left:after, .col-right:after {
    clear: both;
    content: " ";
    display: block;
    height: 0;
}


.grid-m100 .col-main {
    width: 100%;
}

.grid-m100 .main-wrap {
    margin: 3.6rem auto;
}

.form-checkbox {
    display: inline-block;
    position: relative;
    width: 4rem;
    height: 6rem;
    vertical-align: middle
}

.form-checkbox i {
    display: block;
    position: absolute;
    left: 50%;
    top: 50%;
    margin-left: -0.29rem;
    margin-top: -0.29rem;
    width: .58rem;
    height: .58rem;
    line-height: .6rem;
    text-align: center;
    font-size: .42rem;
    color: #fff;
    border-radius: 100%;
    border: .04rem solid #ccc;
    overflow: hidden
}

.form-checkbox input {
    display: none
}

.form-checkbox input:checked+i {
    background-color: #f41e33;
    border: 0 none
}

.form-checkbox input:checked+i:after {
    content: '\e621'
}

.form-num {
    overflow: hidden;
    height: .88rem
}

.form-num * {
    vertical-align: top
}

.form-num i {
    font-style: normal;
    margin-right: .8rem
}

.form-num .i-1 {
    width: 2.8rem;
    height: .88rem;
    line-height: .88rem;
    background-color: #eee;
    border-radius: .1rem;
    text-align: center;
    border: 0 none
}

.form-num s {
    display: inline-block;
    color: #eee;
    margin: 0 .4rem;
    padding: 0;
    line-height: .88rem
}

.form-num .btn-2 {
    border: 0 none;
    background-color: #eee;
    width: .88rem;
    height: .88rem;
    line-height: .88rem;
    font-size: .3rem
}

.form-num .btn-2[disabled] {
    color: #c5c5c5;
    background-color: #eee !important
}

.form-num .b-1 {
    border-top-left-radius: .1rem;
    border-bottom-left-radius: .1rem
}

.form-num .b-2 {
    border-top-right-radius: .1rem;
    border-bottom-right-radius: .1rem
}

.form-num .i-2 {
    width: 1.05rem;
    height: .88rem;
    line-height: .88rem;
    border: 0 none;
    border-top: .018rem solid #eee;
    border-bottom: .018rem solid #eee;
    background-color: #fff;
    border-radius: 0;
    text-align: center;
    font-size: .5rem
}

.form-text {
    position: relative
}

.form-text .text {
    display: block;
    width: 100%;
    height: .89rem;
    line-height: .87rem;
    padding: 0 .16rem;
    border-radius: .12rem;
    border: .036rem solid #eee;
    font-size: .36rem
}

.form-text .tip {
    height: .89rem;
    line-height: .89rem;
    position: absolute;
    top: 0;
    right: .4rem;
    color: #f41e33;
    font-size: .36rem
}

.form-text .tip i {
    font-size: .42rem;
    margin-right: .1rem;
    line-height: .89rem;
    vertical-align: middle
}

.wa-head-secondary {
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    z-index: 201;
    background: rgb(73, 161, 243);
}

.wa-head-secondary .head-box {
    position: relative;
    overflow: hidden;
    height: 1.32rem;
    padding: 0 1.7rem;
    background-color: #fafafa
}

.wa-head-secondary .back {
    display: block;
    width: 1.7rem;
    height: 1.32rem;
    position: absolute;
    left: 0;
    top: 0;
    text-align: center;
    color: #f41e33
}

.wa-head-secondary .back span {
    line-height: 1.32rem;
    font-size: .7rem
}

.wa-head-secondary .cont h2 {
    line-height: 1.32rem;
    font-size: 1.2rem;
    color: #af5858;
    text-align: center
}

.wa-head-secondary .edit {
    display: block;
    width: 1.9rem;
    height: 1.32rem;
    position: absolute;
    top: 0;
    right: 1.9rem;
    text-align: center;
    line-height: 1.32rem;
    font-size: .42rem;
    color: #666
}

.wa-head-secondary .contact {
    display: block;
    width: 1.9rem;
    height: 1.32rem;
    position: absolute;
    top: 0;
    right: 0;
    text-align: center;
    line-height: 1.32rem;
    font-size: .42rem;
    color: #666
}

.wa-head-height {
    height: 1.32rem
}

.wa-loginregister .select-box-group {
    padding-left: 0
}

.wa-loginregister .select-box-group .tip-title {
    height: .9rem;
    line-height: .9rem;
    padding: 0 .66rem;
    color: #f41e33;
    font-size: .32rem;
    background-color: #eee;
    display: none;
}

.wa-loginregister .select-box-group a .text {
    padding: 0 .5rem;
    width: 100%;
    height: 2.2rem;
    margin-top: .6rem;
    display: block;
    color: #000;
}

.wa-loginregister .select-box-group .provision {
    padding: .5rem .66rem;
    line-height: .62rem;
    background-color: #eee;
    overflow: hidden
}

.wa-loginregister .select-box-group .provision .form-checkbox {
    width: .6rem;
    height: .6rem;
    float: left
}

.wa-loginregister .select-box-group .provision b {
    display: block;
    margin-left: .2rem;
    float: left;
    font-weight: normal;
    font-size: .42rem;
    color: #262626;
    line-height: .62rem
}

.wa-loginregister .select-box-group .provision b a {
    display: inline;
    color: #f41e33
}

.wa-loginregister .select-box-group .submit {
    background-color: #eee;
    padding: 0 .66rem;
    widows: 3.6rem;
}

.wa-loginregister .select-box-group .submit .btn-big {
    display: block;
    border: 0 none;
    width: 100%;
    height: 2.07rem;
    line-height: 1.07rem;
    text-align: center;
    font-size: 1.2rem;
    color: #fff;
    background-color: #f41e33;
}
</style>