<template>
    <div class='container'>
            <div class="zaoqimsg select">
                <div class="top">
                    <img src="../../static/images/icon1.png" alt="">
                    <p class="date">01<span>2018：01</span></p>
                </div>
                <div class="center">
                    <p>连续早起<br/><b>2</b>天</p>
                    <p>今日早起<br><b>09：20</b></p>
                    <p>123456人正在参与<br/>比70%人起的早</p>
                </div>
                <div class="bottom">
                    <div id="qrcode" ><img src="../../static/images/img2.png" alt=""></div>
                    <p>
                        <span>春风得意，一帆风顺</span>
                        <span>扫码和我互道早安</span>
                    </p>        
                </div>
            </div>
            <div class="zaoqimsg  banshi1">
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
                        <p>625人参与，比7%人起的早</p>
                    </div>  
                    <div class="right">
                        <span>扫码</span>
                        <img src="../../static/images/img2.png" alt="">
                    </div>
                </div>
            </div>
            <div class="zaoqimsg banshi2">
                <div class="top">
                    <p class="date">13<span>2020.02</span></p>
                </div>
                <div class="center">
                    <img src="../../static/images/icon10.png" alt="" class="icon">
                    <div class="right">
                        <p><b>11:54</b><span>连续早起<b>2</b>天</span></p>
                        <p>67人参与，比20人早</p>
                    </div>
                </div>
                <div class="bottom">
                    <img src="../../static/images/img2.png" alt="">
                    <p>
                        <span>春风得意，一帆风顺</span>
                        <span>扫码和我互道早安</span>
                    </p>
                </div>
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

        }
    },
    watch: {

    },
    methods: {

    },
    mounted() {

    },
    props: {

    },
    destroyed() {

    },
}
</script>

<style  scoped>
.container{
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
}
.zaoqimsg{
        width: 1.73rem;
        height: 1.73rem;
        background: url(../../static/images/img1.png) top center no-repeat;
        background-size: 100% 100%;
        margin: 0 auto;
        border-radius: 0.1rem;
        box-sizing: border-box;
        padding: 0.05rem;
        position: relative;
        border: 0.03em solid #eee;
        margin-top: 0.15rem;
        margin-bottom: 0.1rem;
    }
    .select{
        border-color: #fae500!important;
    }
    .zaoqimsg .top{
        height: 0.3rem;
        width: 100%;
        display: flex;
        justify-content: space-between;
        padding-bottom: 0.05rem;
    }
    .zaoqimsg .top img{
        width: 0.3rem;
        height: 0.3rem;
        border-radius: 50%;
    }
    .zaoqimsg .top .date{
        line-height: 0.16rem;
        color: #fff;
        font-size: 0.14rem;
        text-align: right;
    }
    .zaoqimsg .top .date span{
        display: block;
        line-height: 0.14rem;
        font-size: 0.1rem;
    }
    .zaoqimsg .center{
        width: 1rem;
        color: #fff;
    }
    .zaoqimsg .center p:first-of-type{
        font-size: 0.1rem;
        color: #fff;
        line-height: 0.14rem;
    }
    .zaoqimsg .center p:first-of-type b{
        font-size: 0.14rem;
        padding-right: 0.05rem;
    }
    .zaoqimsg .center p:nth-of-type(2){
        font-size: 0.12rem;
        color: #fff;
        border-bottom: 0.01rem solid #ffffff;
        line-height: 0.15rem;
    }
    .zaoqimsg .center p:nth-of-type(2) b{
        font-size: 0.14rem;
    }
    .zaoqimsg .center p:nth-of-type(3){
        font-size: 0.1rem;
        line-height: 0.15rem;
    }
    .zaoqimsg .bottom{
        padding-top: 0.08rem;
        width: 100%;
        height: 0.3rem;
    }
    .zaoqimsg .bottom img{
        width: 0.3rem;
        height: 0.3rem;
        float: right;
        padding-left: 0.05rem;
    }
    .zaoqimsg .bottom  p{
        float: right;
        /* padding-top: 0.02rem; */
        font-size: 0.1rem;
        text-align: center; 
        line-height: 0.15rem;
        color: #fff;
    }
    .zaoqimsg .bottom  p span{
        display: block;
        text-align: right;
    }
    
    .banshi1,.banshi2{
        background: url(../../static/images/img4.png) top center no-repeat;
        background-size: 100% 100%;
    }
    .banshi1 .top .txt{
        flex: 1;
        font-size: 0.08rem;
        line-height: 0.3rem;
        height: 0.3rem;
        overflow: hidden;
        box-sizing: border-box;
        padding: 0 0.05rem;
    }
    .banshi1 .top .date{
        color: #333;
    }
    .banshi1 .bottom{
        width: 1.6rem;
        height: 0.5rem;
        background: rgba(255, 255, 255, .5);
        box-sizing:border-box;
        padding: 0.05rem;
        display: flex;
        border-radius: 0.1rem;
        position: absolute;
        bottom: 0.1rem;

    }
    .banshi1 .bottom .right{
        height: 0.5rem;
        width: 0.25rem;
        font-size: 0.05rem;
        color: #333333;
        display: block;
        overflow: hidden;
    }
    .banshi1 .bottom .right img{
        display: block;
        width: 0.25rem;
        height: 0.25rem;
        margin: 0 auto;
        padding-left: 0;
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
        height: 0.3rem;

    }
    .banshi1 .bottom .left .msg p{
        width: 50%;
        color: #333;
        text-align: center;
    }
    .banshi1 .bottom .left .msg p b{
        font-size: 0.12rem;
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
        width: 1.6rem;
        height: 0.5rem;
        background: rgba(255, 255, 255, .5);
        box-sizing: border-box;
        padding: 0.05rem;
        border-radius: 0.1rem;
        display: flex;
        margin-top: 0.1rem;
    }
    .banshi2 .center img{
        width: 0.25rem;
        height: 0.25rem;
        margin-top: 0.07rem;
        margin-right: 0.05rem;
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
        padding-top: 0.3rem;
        display: flex;
        justify-content: space-between;
    }
    .banshi2 .center p:first-of-type>b{
        font-size: 0.06rem;
        padding-right: 0.05rem;
    }
    .banshi2 .center p:first-of-type>span b{
        font-size: 0.06rem;
        padding-right:0;
    }
    .banshi2 .bottom img{
        width: 0.25rem;
        height: 0.25rem;
    }
</style>
