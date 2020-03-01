<template>
    <div class='container'>
        <div class="top">
            <img src="../../static/images/icon11.png" alt="" class="rili"><span><b>{{buqian.mendsum}}</b>张补签卡</span><img class="wenhao" src="../../static/images/icon13.png" alt="">
        </div>
        <div class="txt">早起打卡不需要补签</div>
        <h3>如何获取补签卡？</h3>
        <div class="buqian">
            <div class="top">
                <div class="left">
                    <h4>邀请{{buqian.persum + buqian.bperson}}名新用户</h4>
                    <p>再邀请 <span>{{buqian.bperson}}</span>人得<span>1</span>张补签卡</p>
                </div>
                <div class="right">
                    <button @click="yaoqin">马上邀请</button>
                </div>
            </div>
            <div class="bot">已邀请{{buqian.persum}}人</div>
        </div>
        <div class="leiji">
            <div class="top">
                <h4>早起累计打卡{{buqian.card + buqian.acard}}次</h4>
                <p>已打卡{{buqian.card}}次，再打卡<span>{{buqian.acard}}</span>次得<span>1</span>张补签卡</p>
                <div class="bot">
                    <div class="left">
                        <div class="yellow" :style="'width:' + buqian.card / (buqian.card + buqian.acard) * 100 + '%'"></div>
                        <div class="num"><b>{{buqian.card}}</b>/{{buqian.card + buqian.acard}}</div>
                    </div>
                    <div class="right">
                        <img src="../../static/images/icon12.png" alt=""><span>+1</span>
                    </div>
                </div>
            </div>
        </div>
        <div class="bg" v-show="bg"></div>
        <div class="fengxiang" v-show="bg">
            <h4>48小时内有效</h4>
            <h3>长按图片发送给朋友</h3>
            <div class="msg">
                <img src="../../static/images/img3.png" alt="">
                <div class="top">
                    <img src="../../static/images/icon1.png" alt="">
                    <div class="right">
                        <h5>扫码帮我打卡补签</h5>
                        <p>加入全民早起打卡计划</p>
                    </div>
                </div>
                <div class="bottom">
                    <img src="../../static/images/img2.png" alt="">
                    <p>公众号名称</p>
                </div>
            </div>
            <img src="../../static/images/icon14.png" alt="" class="close" @click="closefengx">
        </div>
    </div>
</template>

<script>
export default {
    components: {

    },
    computed: {

    },
    data() {
        return{
            bg:false,
            fengxiang:false,
            buqian:'',
            credit_ratio:0,
        }
    },
    watch: {

    },
    methods: {
        yaoqin(){
            this.bg = true;
            this.fengxiang = true;
        },
        closefengx(){
            this.bg = false;
            this.fengxiang = false;
        },
        getData(){
            // console.log(1)
            this.$axios.post( this.HOST+'signIn/lookmend',this.$qs.stringify({
                  openid:"o2ebgtzRG7D32t0Z1jhFUTz4bs8I",
              }),)
            .then((res)=>{
                    console.log(res)
                if(res.data.state == 2000){
                    this.buqian = res.data.data;
                    console.log(this.buqian);
                }
            }).catch((res)=>{
                console.log(res);
            })
        },
    },
    mounted() {
        this.getData()
    },
    props: {
        
    },
    destroyed() {

    },
}
</script>

<style  scoped>
    .container{
        box-sizing: border-box;
        padding: 0.1rem;
    }
    .container>.top{
        width: 3.35rem;
        height: 0.36rem;
        padding: 0.2rem 0;
        margin: 0 auto;
        overflow: hidden;
    }
    .container>.top .rili{
        width: 0.4rem;
        height: 0.36rem;
        float: left;
        margin-right: 0.1rem;
    }
    .container>.top span{
        font-size: 0.16rem;
        line-height: 0.36rem;
        font-weight: 600;
        float: left;
        margin-right: 0.1rem;
    }
    .container>.top span b{
        font-size: 0.26rem;
        line-height: 0.36rem;
        font-weight: 600;
        float: left;
        margin-right: 0.1rem;
    }
    .container>.top .wenhao{
        width: 0.15rem;
        height: 0.15rem;
        float: left;
        margin-top: 0.105rem;
    }
    .txt{
        width: 3.55rem;
        height: 0.6rem;
        line-height: 0.6rem;
        text-align: center;
        font-size: 0.14rem;
        background: #FFDA64;
        border-radius: 0.1rem;
    }
    .container h3{
        font-size: 0.16rem;
        line-height: 0.4rem;
    }
    .container .buqian{
        width: 3.55rem;
        height: 0.9rem;
        box-shadow: 0 0 0.3rem #ccc;
        border-radius: 0.05rem;
        box-sizing: border-box;
        padding: 0 0.1rem;
    }
    .container .buqian .top{
        padding: 0.1rem 0;
        height: 0.34rem;
    }
    /* .container .buqian  */
    .container .buqian .top>div{
        width: 50%;
        height: 100%;
        float: left;
    }
    .container .buqian .top>div h4{
        font-size: 0.14rem;
        line-height: 0.18rem;
        padding-top: 0.02rem;
    }
    .container .buqian .top>div p{
        font-size: 0.1rem;
        line-height: 0.2rem;
    }
    .container .buqian .top>div p span{
        display: inline-block;
        color: #FFDA64;
    }
    .container .buqian .top>div button{
        width: 0.78rem;
        height: 0.28rem;
        background: #FFDA64;
        float: right;
        color: #fff;
        border-radius: 0.14rem;
        text-align: center;
        line-height: 0.28rem;
        margin-top: 0.03rem;
        font-size: 0.14rem;
    }
    .container .buqian .bot{
        width: 100%;
        height: 0.36rem;
        box-sizing: border-box;
        border-top: 1px solid #eee;
        font-size: 0.1rem;
        line-height: 0.36rem;
    }
    .leiji{
        width: 3.55rem;
        height: 0.84rem;
        box-shadow: 0 0 0.3rem #ccc;
        border-radius: 0.05rem;
        box-sizing: border-box;
        padding: 0 0.1rem;
        margin: 0.1rem auto 0;
    }
    .leiji .top h4{
        font-size: 0.14rem;
        font-weight: 600;
        line-height: 0.2rem;
        padding-top: 0.1rem;
    }
    .leiji .top p{
        font-size: 0.1rem;
        line-height: 0.2rem;
    }
    .leiji .top .bot{
        width: 100%;
        height: 0.14rem;
        display: flex;
        padding-top: 0.1rem;
    }
    .leiji .top .bot .left{
        width: 3rem;
        height: 0.12rem;
        background: #EEEEEE;
        border: 0.01rem solid #DDDDDD;
        border-radius: 0.06rem;
        overflow: hidden;
        margin-right: 0.05rem;
        flex-shrink: 0;
        position: relative;
        z-index: 9;
    }
    .leiji .top .bot .left .yellow{
        width: 0.5rem;
        height: 0.14rem;
        border-radius: 0.07rem;
        position: absolute;
        left: -0.01rem;
        top: -0.01rem;
        background: #FFDA64;
        z-index: 10;
    }
    .leiji .top .bot .left .num{
        line-height: 0.12rem;
        height: 0.12rem;
        font-size: 0.08rem;
        position: absolute;
        right: 0.1rem;
        top: 0;
        z-index: 11;
        color: #999;
    }
    .leiji .top .bot .left .num b{
        color: #000;
        font-weight: 500;
    }
    .leiji .top .bot .right{
        flex: 1;
    }
    .leiji .top .bot .right img{
        width: 0.11rem;
        height: 0.1rem;
        float: left;
        margin-top: 0.02rem;
    }
    .leiji .top .bot .right span{
        font-size: 0.1rem;
        color: #999;
        float: left;
        line-height: 0.16rem;
        margin-left: 0.01rem;
    }
    .bg{
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, .8);
        position: fixed;
        top: 0;
        left: 0;
        z-index: 9;
    }
    .fengxiang{
        width: 3.35rem;
        height: 4.5rem;
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        z-index: 20;
    }
    .fengxiang h4{
        font-size: 0.14rem;
        line-height: 0.2rem;
        text-align:center;
        color: #fff;
        padding-bottom: 0.05rem;
    }
    .fengxiang h3{
        font-size: 0.16rem;
        line-height: 0.24rem;
        text-align:center;
        padding-bottom: 0.1rem;
        color: #fff;
    }
    .fengxiang .msg{
        width: 3.35rem;
        height: 3.35rem;
        border-radius: 0.1rem;
        overflow: hidden;
        position: relative;
    }
    .fengxiang .msg>img{
        width: 100%;
        height: 100%;
    }
    .fengxiang .msg .top{
        width: 80%;
        height: 0.5rem;
        position: absolute;
        left: 0.2rem;
        top: 0.2rem;
        z-index: 15;
    }
    .fengxiang .msg .top img{
        width: 0.5rem;
        height: 0.5rem;
        float: left;
        margin-right: 0.1rem;
    }
    .fengxiang .msg .top .right h5{
        font-size: 0.2rem;
        line-height: 0.25rem;
        color: #fff;
    }
    .fengxiang .msg .top .right p{
        font-size: 0.16rem;
        line-height: 0.25rem;
        color: #fff;
    }
    .fengxiang .msg .bottom{
        width: 0.6rem;
        height: 0.8rem;
        position: absolute;
        right: 0.1rem;
        bottom: 0.1rem;
    }
    .fengxiang .msg .bottom img{
        display: block;
        height: 0.56rem;
        width: 0.56rem;
        margin: 0 auto;
    }
    .fengxiang .msg .bottom p{
        font-size: 0.1rem;
        padding-top: 0.04rem;
        line-height: 0.2rem;
        text-align: center;
        color: #fff;
    }
    .close{
        width: 0.36rem;
        height: 0.36rem;
        position: absolute;
        bottom: 0;
        left: 50%;
        margin-left: -0.18rem;
    }
</style>
