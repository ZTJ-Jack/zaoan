<template>
    <div class='container'>
        <div class="main">
            <div class="topnav">
                <div class="top">
                    <img src="../../static/images/icon1.png" alt="" class="left">
                    <div class="right">
                        <h4>Hi，{{datamyself.nickname}}</h4>
                        <p><span>累计早起{{datamyself.accuday}}天</span><router-link :to="{path:'setmsg'}">编辑</router-link></p>
                    </div>
                </div>
                <ul class="nav">
                    <li>
                        <router-link :to="{path:'SetDaKa'}">
                            <img src="../../static/images/nav1.png" alt="">
                            <p>提醒</p>
                        </router-link>
                    </li>
                    <li>
                        <router-link :to="{path:'BuQian'}">
                            <img src="../../static/images/nav2.png" alt="">
                            <p>补签</p>
                        </router-link>
                    </li>
                    <li>
                        <router-link :to="{path:'ZaoQiJiLv'}">
                            <img src="../../static/images/nav3.png" alt="">
                            <p>历史打卡</p>
                        </router-link>
                    </li>
                    <li>
                        <router-link :to="{path:'chengjiu'}">
                            <img src="../../static/images/nav4.png" alt="">
                            <p>成就</p>
                        </router-link>
                    </li>
                    <li>
                        <div @click="changebanshi">
                            <img src="../../static/images/nav5.png" alt="">
                            <p>换版式</p>
                        </div>
                    </li>
                </ul>
            </div>
            <div class="zaoqimsg" v-if="datamyself.state == 1 && banshi == 1">
                <div class="top">
                    <img :src="datamyself.headimgurl" alt="">
                    <p class="date">{{times[2]}}<span>{{times[0]}}.{{times[1]}}</span></p>
                </div>
                <div class="center">
                    <p>连续早起<br/><b>{{datamyself.accumulo}}</b>天</p>
                    <p>今日早起<br><b>{{datamyself.nowtime}}</b></p>
                    <p>{{datamyself.person}}人正在参与<br/>比{{datamyself.bai}}人起的早</p>
                </div>
                <div class="bottom">
                    <div id="qrcode" ></div>
                    <p>
                        <span>春风得意，一帆风顺</span>
                        <span>扫码和我互道早安</span>               
                    </p>        
                </div>
                <router-link :to="{path:'changImg',query:{type:1}}"><img src="../../static/images/icon8.png" alt="">更换底图</router-link>
            </div>
            <div class="zaoqimsg  banshi1" v-if="datamyself.state == 1 && banshi == 2">
                <div class="top">
                    <img src="../../static/images/icon10.png" alt="">
                    <p class="txt">春风得意，一帆风顺</p>
                    <p class="date">13<span>2020.02</span></p>
                </div>
                <div class="bottom">
                    <div class="left">
                        <div class="msg">
                            <p>连续早起<br/><b>0</b>&nbsp;天</p>
                            <p>今日早起<br><b>07:30</b></p>
                        </div>
                        <p>10313625人正在参与，比71%人起的早</p>
                    </div>
                    <div class="right">
                        <span>扫码互道早安</span>
                        <img src="../../static/images/img2.png" alt="">
                    </div>
                </div>
                <router-link :to="{path:'changImg',query:{type:2}}"><img src="../../static/images/icon8.png" alt="">更换底图</router-link>
            </div>
            <div class="zaoqimsg banshi2" v-if="datamyself.state == 1 && banshi == 3">
                <div class="top">
                    <p class="date">13<span>2020.02</span></p>
                </div>
                <div class="center">
                    <img src="../../static/images/icon10.png" alt="" class="icon">
                    <div class="right">
                        <p><b>11:54</b><span>连续早起<b>2</b>天</span></p>
                        <p>1234567人正在参与，比1万人起的早</p>
                    </div>
                </div>
                <div class="bottom">
                    <img src="../../static/images/img2.png" alt="">
                    <p>
                        <span>春风得意，一帆风顺</span>
                        <span>扫码和我互道早安</span>
                    </p>
                </div>
                <router-link :to="{path:'changImg',query:{type:3}}"><img src="../../static/images/icon8.png" alt="">更换底图</router-link>
            </div>
            <div class="lijidaka" v-if="datamyself.state == 2">
                <p>您今天还没早起打卡哦~</p>
                <button @click="daka">立即去打卡</button>
            </div>
            <div class="lijibuka" v-if="datamyself.state == 3">
                <p>您今天忘记打卡了~~</p>
                <button @click="buka">去补签</button>
            </div>
            <p class="fengxiang"  v-if="datamyself.state == 1">长按发送给好友或微信群</p>
        </div>
        <footbar></footbar>
    </div>
</template>

<script>
import QRCode  from "qrcodejs2"
import footbar from "../components/footbar";
export default {
    components:{
      footbar,
      QRCode,
    },
    computed: {

    },
    data() {
        return{
            name:'ja',
            dktype:1,
            banshi:1,
            datamyself:'',
            times:[],
            imgCode:'',
            link:'',
        }
    },
    watch: {

    },
    methods: {
         qrcode () {
            let that = this;
            let qrcode = new QRCode('qrcode', {
                width: 80,
                height: 80,        // 高度
                text:  that.link,   // 二维码内容
                render: 'canvas' ,   // 设置渲染方式（有两种方式 table和canvas，默认是canvas）
                // background: '#f0f',   // 背景色
                // foreground: '#ff0'    // 前景色
            })
        },
        changebanshi(){
            this.banshi++;
            if(this.banshi > 3){
                this.banshi = 1;
            }
        },
        getData(){
            this.$axios.post( this.HOST+'signIn/insertSign',this.$qs.stringify({
                  openid:"o2ebgtzRG7D32t0Z1jhFUTz4bs8I",
              }),)
            .then((res)=>{
                console.log(res);
                if(res.data.state == 2000){
                    this.datamyself = res.data.data;
                    this.times = res.data.data.day.split('-');
                    this.link = res.data.data.erurl;
                    this.$nextTick (function () {
                        this.qrcode();
                    })
                }
            }).catch((res)=>{
                console.log(res);
            })
        },
        daka(){
            this.$axios.post( this.HOST+'signIn/insert',this.$qs.stringify({
                  openid:"o2ebgtzRG7D32t0Z1jhFUTz4bs8I",
              }),)
            .then((res)=>{
                if(res.data.state == 2000){
                    this.$router.go(0);
                }
            }).catch((res)=>{
                console.log(res);
            })
        },
        buka(){
            this.$axios.post( this.HOST+'signIn/mend',this.$qs.stringify({
                  openid:"o2ebgtzRG7D32t0Z1jhFUTz4bs8I",
              }),)
            .then((res)=>{
                if(res.data.state == 2000){
                    this.$router.go(0);
                }
            }).catch((res)=>{
                console.log(res);
            })
        },
    },
    mounted() {
        this.getData();
    },
    props: {

    },
    destroyed() {

    },
}
</script>

<style  scoped>
    .container{
        width: 100%;
        height: 100%;
        overflow: hidden;  
        display: flex;
        flex-direction: column; 
    }
    .main{
        flex: 1;
        overflow-y: scroll;
    }
    .topnav{
        width: 100%;
        height: 1.35rem;
        background: #FFDA64;
        margin-bottom: 0.7rem;
    }
    .topnav .top{
        height: 0.96rem;
        width: 100%;
        box-sizing: border-box;
        padding: 0.2rem 0.1rem 0.26rem;
        display: flex;
    }
    .topnav .nav{
        width: 3.55rem;
        height: 0.9rem;
        background: #fff;
        box-shadow: 0 0 0.2rem #ccc;
        border-radius: 0.05rem;
        margin: 0 auto;
        box-sizing: border-box;
        padding: 0.09rem 0 0;
        display: flex; 
        justify-content: space-around;
    }
    .topnav .nav li{
        width: 0.48rem;
        height: 0.6rem;
    }
    .topnav .nav li img{
        width: 0.4rem;
        height: 0.4rem;
        display: block;
        margin: 0 auto;
    }
    .topnav .nav li  p{
        font-size: 0.12rem;
        line-height: 0.16rem;
        padding-top: 0.04rem;
        text-align: center;
    }
    .topnav .top .left{
        width: 0.5rem;
        height: 0.5rem;
        margin-right: 0.1rem;
        flex-shrink: 0;
    }
    .topnav .top .right{
        flex: 1;
    }
    .topnav .top .right h4{
        font-size: 0.14rem;
        line-height: 0.2rem;
    }
    .topnav .top .right p{
        line-height: 0.2rem;
        font-size: 0.1rem;
        height: 0.2rem;
        padding-top: 0.1rem;
    }
    .topnav .top .right p a{
        width: 0.52rem;
        height: 0.2rem;
        border-radius: 0.1rem;
        background: #fff;
        margin-left: 0.5rem;
        display: inline-block;
        text-align: center;
        font-size: 0.1rem;
    }
    .zaoqimsg{
        width: 3.55rem;
        height: 3.55rem;
        background: url(../../static/images/img1.png) top center no-repeat;
        background-size: 100% 100%;
        margin: 0 auto;
        border-radius: 0.1rem;
        box-sizing: border-box;
        padding: 0.1rem;
        position: relative;
    }
    .zaoqimsg a{
        position: absolute;
        background: #FFDA64;
        border-radius: 0.17rem;
        display: block;
        width: 1.02rem;
        height: 0.34rem;
        text-align: center;
        line-height: 0.34rem;
        font-size: 0.12rem;
        top: 50%;
        left: 50%;
        margin-left: -0.51rem;
        margin-top: -0.14rem;
        color: #fff;
    }
    .zaoqimsg a img{
        width: 0.2rem;
        height: 0.15rem;
        vertical-align: top;
        margin-top: 0.095rem;
        margin-right: 0.05rem;
    }
    .zaoqimsg .top{
        height: 0.5rem;
        width: 100%;
        display: flex;
        justify-content: space-between;
    }
    .zaoqimsg .top img{
        width: 0.4rem;
        height: 0.4rem;
        border-radius: 50%;
    }
    .zaoqimsg .top .date{
        line-height: 0.33rem;
        color: #fff;
        font-size: 0.25rem;
        text-align: right;
    }
    .zaoqimsg .top .date span{
        display: block;
        line-height: 0.17rem;
        font-size: 0.12rem;
    }
    .zaoqimsg .center{
        width: 1.2rem;
        color: #fff;
    }
    .zaoqimsg .center p:first-of-type{
        font-size: 0.12rem;
        color: #fff;
        line-height: 0.3rem;
    }
    .zaoqimsg .center p:first-of-type b{
        font-size: 0.25rem;
        padding-right: 0.1rem;
    }
    .zaoqimsg .center p:nth-of-type(2){
        font-size: 0.12rem;
        color: #fff;
        padding-top: 0.1rem;
        padding-bottom: 0.05rem;
        border-bottom: 0.01rem solid #ffffff;
        line-height: 0.3rem;
    }
    .zaoqimsg .center p:nth-of-type(2) b{
        font-size: 0.26rem;
    }
    .zaoqimsg .center p:nth-of-type(3){
        font-size: 0.12rem;
        line-height: 0.16rem;
        padding-top: 0.1rem;
    }
    .zaoqimsg .bottom{
        padding-top: 0.5rem;
        width: 100%;
        height: 0.43rem;
    }
    .zaoqimsg .bottom #qrcode{
        width: 0.43rem;
        height: 0.43rem;
        float: right;
        padding-left: 0.1rem;
    }
    .zaoqimsg .bottom  p{
        float: right;
        padding-top: 0.02rem;
        font-size: 0.12rem;
        text-align: center;
        line-height: 0.2rem;
        color: #fff;
    }
    .zaoqimsg .bottom  p span{
        display: block;
        text-align: right;
    }
    .lijidaka,.lijibuqian{
        width: 100%;
        overflow: hidden;
    }
    .lijidaka p,.lijibuka p{
        font-size: 0.12rem;
        line-height: 2.6rem;
        text-align: center;
    }
    .lijidaka button,.lijibuka button{
        display: block;
        margin: 0.1rem auto ;
        width: 3.35rem;
        height: 0.4rem;
        border-radius: 0.2rem;
        box-sizing: border-box;
        padding: 0.09rem 0.2rem;
        border: 0.01rem solid #eeeeee;
        text-align: center;
        font-size:0.2rem;
        line-height: 0.2rem;
        background:#FFDA64!important;
        color:#ffffff!important;
    }
    .fengxiang{
        font-size: 0.12rem;
        text-align: center;
        line-height: 0.2rem;
        padding-top: 0.1rem;
    }
    .banshi1,.banshi2{
        background: url(../../static/images/img4.png) top center no-repeat;
        background-size: 100% 100%;
    }
    .banshi1 .top .txt{
        flex: 1;
        font-size: 0.12rem;
        line-height: 0.5rem;
        box-sizing: border-box;
        padding: 0 0.2rem;
    }
    .banshi1 .top .date{
        color: #333;
    }
    .banshi1 .bottom{
        width: 3.35rem;
        height: 0.78rem;
        background: rgba(255, 255, 255, .5);
        box-sizing:border-box;
        padding: 0.08rem 0.1rem 0;
        display: flex;
        border-radius: 0.1rem;
        position: absolute;
        bottom: 0.1rem;

    }
    .banshi1 .bottom .right{
        height: 0.68rem;
        width: 0.8rem;
        font-size: 0.1rem;
        color: #333333;
        display: block;
        overflow: hidden;
    }
    .banshi1 .bottom .right img{
        display: block;
        width: 0.43rem;
        height: 0.43rem;
        margin: 0 auto;
        padding-left: 0;
        padding-right: 0.18rem!important;
        padding-top: 0.05rem;
     }
     .banshi1 .bottom .right span{
         display: block;
         text-align: center;
     }
    .banshi1 .bottom .left{
        flex: 1;
    }
    .banshi1 .bottom .left .msg{
        width: 100%;
        height: 0.42rem;

    }
    .banshi1 .bottom .left .msg p{
        width: 50%;
        color: #333;
        text-align: left;
    }
    .banshi1 .bottom .left .msg p b{
        font-size: 0.24rem;
    }
    .banshi1 .bottom .left>p{
        color: #666666;
        text-align: left;
        width: 100%;
    }
    .banshi2 .top{
        display: block;
    }
    .banshi2 .top .date{
        color: #333;
    }
    .banshi2 .center{
        width: 3.35rem;
        height: 0.78rem;
        background: rgba(255, 255, 255, .5);
        box-sizing: border-box;
        padding: 0.05rem 0.15rem;
        border-radius: 0.1rem;
        display: flex;
        margin-top: 0.8rem;
    }
    .banshi2 .center img{
        width: 0.44rem;
        height: 0.44rem;
        margin-top: 0.12rem;
        margin-right: 0.15rem;
    }
    .banshi2 .center .right{
        flex: 1;
    }
    .banshi2 .center .right p{
        color: #333!important;
    }
    .banshi2 .center .right p:first-of-type{
        padding-top: 0.05rem;
    }
    .banshi2 .center .right p:last-of-type{
        border-bottom: none;
        padding-top: 0;
    }
    .banshi2 a{
        top: 0;
        margin-top: 0;
    }
    .banshi2 .bottom{
        padding-top: 0.8rem;
    }
    .banshi2 .center p:first-of-type>b{
        font-size: 0.25rem;
        padding-right: 0.15rem;
    }
    .banshi2 .center p:first-of-type>span b{
        font-size: 0.22rem;
        padding-right:0;
    }
</style>
