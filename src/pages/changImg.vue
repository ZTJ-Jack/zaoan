<template>
    <div class='container'>
        <div class="zaoqimsg" v-if="banshi == 1" :style="{backgroundImage: 'url(' + bgurl + ')'}" >
            <div class="top">
                <img src="../../static/images/icon10.png" alt="">
                <p class="date">13<span>2020.02</span></p>
            </div>
            <div class="center">
                <p>连续早起<br/><b>0</b>天</p>
                <p>今日早起<br><b>07:30</b></p>
                <p>10313625人正在参与<br/>比71%人起的早</p>
            </div>
            <div class="bottom">
                <img src="../../static/images/img2.png" alt="">
                <p>
                    <span>{{imgtxt}}</span>
                    <span>扫码和我互道早安</span>
                </p>
            </div>
            <button><img src="../../static/images/icon8.png" alt="">更换底图</button>
        </div>
        <div class="zaoqimsg  banshi1" v-if="banshi == 2" :style="{backgroundImage: 'url(' + bgurl + ')'}" >
            <div class="top">
                <img src="../../static/images/icon10.png" alt="">
                <p class="txt">{{imgtxt}}</p>
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
            <button><img src="../../static/images/icon8.png" alt="">更换底图</button>
        </div>
        <div class="zaoqimsg banshi2" v-if="banshi == 3" :style="{backgroundImage: 'url(' + bgurl + ')'}" >
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
                    <span>{{imgtxt}}</span>
                    <span>扫码和我互道早安</span>
                </p>
            </div>
            <button><img src="../../static/images/icon8.png" alt="">更换底图</button>
        </div>
        <div class="chooseImg" v-if="changImgType == true">
            <h3>
                <span :class="{'select' : i == imgtypenum}" v-for="(type,i) in imgtype" :key='i' @click="changetype(i)">{{type}}</span>
            </h3>
            <ul>
                <li v-if="imgtypenum == 0">
                    <input type="file">
                    <div>
                        <img src="../../static/images/icon16.png" alt=""><span>自己传</span>
                    </div>
                </li>
                <li v-for="(url,i) in imgUrl" :key="i" @click="changImg(url)"><img :src="url" alt=""></li>
            </ul>
            <div class="fixedUp">
                <div class="left">
                    <div class="changImgBtn" :class="{changTrue : changImgType == true}" @click="selectImgBtn">
                        <img src="../../static/images/icon16.png" v-if="changImgType == true" alt="">
                        <img src="../../static/images/icon19.png" v-if="changImgType == false" alt="">
                        <span>换底图</span>
                    </div>
                    <div class="changeTxtBtn" :class="{changTrue : changtxtType == true}" @click="selecttxtBtn">
                        <img src="../../static/images/icon17.png" v-if="changtxtType == false" alt="">
                        <img src="../../static/images/icon18.png" v-if="changtxtType == true" alt="">
                        <span>换文字</span>
                    </div>
                </div>
                <div class="right">生成图片</div>
            </div>
        </div>
        <div class="chooseTxt" v-if="changtxtType == true">
            <h3>
                <span class="select">推荐</span><span class="write" @click="writemyself">自己写&nbsp;+</span>
            </h3>
            <ul>
                <li v-for="(msg,i) in txt" :key="i" @click="changTxt(msg,i)" :class="{select : txtnum == i}">{{msg}}</li>
            </ul>
            <div class="fixedUp">
                <div class="left">
                    <div class="changImgBtn" :class="{changTrue : changImgType == true}" @click="selectImgBtn">
                        <img src="../../static/images/icon16.png" v-if="changImgType == true" alt="">
                        <img src="../../static/images/icon19.png" v-if="changImgType == false" alt="">
                        <span>换底图</span>
                    </div>
                    <div class="changeTxtBtn" :class="{changTrue : changtxtType == true}" @click="selecttxtBtn">
                        <img src="../../static/images/icon17.png" v-if="changtxtType == false" alt="">
                        <img src="../../static/images/icon18.png" v-if="changtxtType == true" alt="">
                        <span>换文字</span>
                    </div>
                </div>
                <div class="right">生成图片</div>
            </div>
        </div>
        <div class="bg" v-show="bg"></div>
        <div class="writemytxt" v-show="writeNone">
            <h4>编辑文字<img src="../../static/images/icon22.png" alt="" @click="imgclose"></h4>
            <div class="textarea">
                <textarea name="" id="" maxlength="30" cols="" v-model="textarea" rows=""  placeholder="请输入你的备注信息"></textarea>
                <span><b>{{textarea.length}}</b>/30</span>
            </div>
            <button :class="{ has : textarea.length > 0 }" @click="writeok">确定</button>
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
            textarea:'',
            changImgType:true,
            changtxtType:false,
            bgurl:'../../static/images/img1.png',
            imgtypenum:0,
            txtnum:0,
            imgtxt:'春风得意，一帆风顺',
            imgtype:['推荐','风景','人物','城市','萌物','插画'],
            txt:[
                "总想赢者必输，不怕输者必赢1",
                "总想赢者必输，不怕输者必赢2",
                "总想赢者必输，不怕输者必赢3",
                "总想赢者必输，不怕输者必赢4",
                "总想赢者必输，不怕输者必赢5",
                "总想赢者必输，不怕输者必赢6",
                "总想赢者必输，不怕输者必赢7",
                "总想赢者必输，不怕输者必赢8",
                "总想赢者必输，不怕输者必赢9",
                "总想赢者必输，不怕输者必赢9",
                "总想赢者必输，不怕输者必赢5",
                "总想赢者必输，不怕输者必赢4",
                "总想赢者必输，不怕输者必赢7",
                "总想赢者必输，不怕输者必赢8",
                "总想赢者必输，不怕输者必赢9",
                "总想赢者必输，不怕输者必赢9",
                "总想赢者必输，不怕输者必赢5",
                "总想赢者必输，不怕输者必赢4",
            ],
            imgUrl:[
                '../../static/images/img1.png',
                '../../static/images/img3.png',
                '../../static/images/img2.png',
                '../../static/images/img1.png',
                '../../static/images/img3.png',
                '../../static/images/img2.png',
                '../../static/images/img1.png',
                '../../static/images/img3.png',
                '../../static/images/img2.png',
                '../../static/images/img1.png',
                '../../static/images/img3.png',
                '../../static/images/img2.png',
                '../../static/images/img1.png',
                '../../static/images/img3.png',
                '../../static/images/img2.png',
                '../../static/images/img1.png',
                '../../static/images/img3.png',
                '../../static/images/img2.png',
                '../../static/images/img3.png',
            ],
            writeNone:false,
            bg:false,
            banshi:1,
        }
    },
    created() {
        console.log()
    //这边接收上个组件传递过来的arry数组，赋值给data中定义的workTask
      this.banshi = this.$route.query.type;
    },
    watch: {

    },
    methods: {
        getdata(){
            this.$axios.post( this.HOST+'img/selectimgurl',this.$qs.stringify({
                openid:"o2ebgtzRG7D32t0Z1jhFUTz4bs8I",
            }),)
            .then((res)=>{
                console.log(res)
            }).catch((res)=>{
                console.log(res);
            })
        },
        changetype(num){
            this.imgtypenum = num;
        },
        changImg(url){
            this.bgurl = url;
        },
        selectImgBtn(){
            this.changImgType = true;
            this.changtxtType = false;
        },
        selecttxtBtn(){
            this.changImgType = false;
            this.changtxtType = true;
        },
        changTxt(msg,i){
            this.txtnum = i;
            this.imgtxt = msg;
        },
        writeok(){
            if(this.textarea.length > 0){
                this.writeNone = false;
                this.bg = false;
                this.imgtxt = this.textarea;
            }
        },
        writemyself(){
            this.writeNone = true;
            this.bg = true;
        },
        imgclose(){
            this.writeNone = false;
            this.bg = false;
        }
    },
    mounted() {
        this.getdata();
    },
    props: {

    },
    destroyed() {

    },
}
</script>

<style  scoped>
    .container{
        background: #333333;
        width: 100%;
        height: 100%;
        overflow: hidden;
        display: flex;
        flex-direction: column;
    }
    .zaoqimsg{
        width: 3.55rem;
        height: 3.55rem;
        background-position: top center;
        background-size: 100% 100%;
        margin: 0 auto;
        box-sizing: border-box;
        padding: 0.1rem;
        position: relative;
    }
    .zaoqimsg button{
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
    .zaoqimsg button img{
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
        width: 0.44rem;
        height: 0.4rem;
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
        /* padding-top: 0.1rem; */
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
    .zaoqimsg .bottom img{
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
    .chooseImg{
        flex: 1;
        background: #ffffff;
        border-top-left-radius: 0.12rem;
        border-top-right-radius: 0.12rem;
        overflow: hidden;
        display: flex;
        flex-direction: column;
    }
    .chooseImg h3{
        width: 100%;
        height: 0.38rem;
        display: flex;
        justify-content: space-around;
        border-bottom: 0.01rem solid #eeeeee;
        margin-bottom: 0.1rem;
    }
    .chooseImg h3 span{
        font-size: 0.14rem;
        line-height: 0.36rem;
        border-bottom: 0.02rem solid transparent;
    }
    .chooseImg h3 span.select{
        border-bottom: 0.02rem solid #FFDA64;
    }
    .chooseImg ul{
        flex: 1;
        overflow-y: scroll;
        box-sizing: border-box;
        padding: 0 0.1rem;
        display:flex;
        justify-content: space-evenly;
        flex-wrap: wrap;
    }
    .chooseImg ul li{
        width: 0.86rem;
        height: 0.86rem;
        margin-bottom: 0.03rem;
        position: relative;
    }
    .chooseImg ul li>img{
        display: block;
    }
    .chooseImg ul li div{
        width: 100%;
        height: 100%;
        background: #666666;
        line-height: 0.86rem;
        text-align: center;
    }
    .chooseImg ul li div img{
        width: 0.2rem;
        height: 0.15rem;
        vertical-align: top;
        margin-top: 0.355rem;
        margin-right: 0.05rem;
    }
    .chooseImg ul li div span{
        color: #FFDA64;
        font-size: 0.14rem;
        line-height: 0.86rem;
        height: 0.86rem;
        vertical-align: top;
    }
    .chooseImg ul li input{
        position: absolute;
        width: 0.86rem;
        height: 0.86rem;
        left: 0;
        top: 0;
        opacity: 0;
    }
    .fixedUp{
        width: 100%;
        height: 0.49rem;
        background: #fff;
        display: flex;
    }
    .fixedUp .right{
        width: 0.88rem;
        height: 0.49rem;
        background: #FFDA64;
        color:#fff;
        line-height: 0.49rem;
        text-align: center;
        font-size:0.12rem;
    }
    .fixedUp .left{
        flex: 1;
        overflow: hidden;
        font-size: 0.12rem;
    }
    .fixedUp .left div{
        color: #999999;
        width: 50%;
        float: left;
        box-sizing: border-box;
        padding: 0.1rem;
        line-height: 0.29rem;
    }
    .fixedUp .left div span{
        line-height: 0.29rem;
    }
    .changImgBtn img{
        width: 0.27rem;
        height: 0.2rem;
        vertical-align: top;
        margin-top: 0.045rem;
        margin-right: 0.05rem;
    }
    .fixedUp .left .changTrue{
        color: #FFDA64;
    }
    .changeTxtBtn img{
        width: 0.2rem;
        height: 0.2rem;
        vertical-align: top;
        margin-top: 0.045rem;
        margin-right: 0.05rem;
    }

    .chooseTxt{
        flex: 1;
        background: #ffffff;
        border-top-left-radius: 0.12rem;
        border-top-right-radius: 0.12rem;
        overflow: hidden;
        display: flex;
        flex-direction: column;
    }
    .chooseTxt h3{
        width: 100%;
        height: 0.38rem;
        display: flex;
        justify-content: space-between;
        border-bottom: 0.01rem solid #eeeeee;
        margin-bottom: 0.1rem;
        box-sizing: border-box;
        padding: 0 0.2rem;
    }
    .chooseTxt h3 span{
        font-size: 0.14rem;
        line-height: 0.36rem;
        border-bottom: 0.02rem solid transparent;
    }
    .chooseTxt h3 span.select{
        border-bottom: 0.02rem solid #FFDA64;
    }
    .chooseTxt ul{
        flex: 1;
        overflow-y: scroll;
        box-sizing: border-box;
        padding: 0 0.1rem;
    }
    .chooseTxt ul li{
        font-size: 0.14rem;
        line-height: 0.3rem;
        box-sizing: border-box;
        padding-left: 0.2rem;
        text-align: left;
        display: block;
        background: url(../../static/images/icon20.png) left center no-repeat;
        background-size: 0.1rem;
    }
    .chooseTxt ul li.select{
        background: url(../../static/images/icon21.png) left center no-repeat;
    }
    .chooseTxt h3 .write{
        color: #FFDA64;
    }
    .bg{
        position: fixed;
        top: 0;
        left: 0;
        background: rgba(0, 0, 0, .5);
        width: 100%;
        height: 100%;
    }
    .writemytxt{
        width: 3.55rem;
        height: 2.64rem;
        position: fixed;
        top: 40%;
        margin-top: -1.32rem;
        left: 0.1rem;
        background: #fff;
        border-radius: 0.1rem;
        box-sizing: border-box;
        padding: 0 0.1rem;
    }
    .writemytxt h4{
        position: relative;
        line-height: 0.36rem;
        text-align: center;
        font-size: 0.14rem;
        color: #006666;
        padding: 0.05rem 0;
    }
    .writemytxt h4 img{
        position: absolute;
        right: 0.1rem;
        top: 0.15rem;
        width: 0.16rem;
        height:0.16rem;
    }
    .writemytxt .textarea{
        width: 3.2rem;
        margin: 0 auto;
        display: block;
        height: 1.3rem;
        box-sizing: border-box;
        border: 0.01rem solid #CCCCCC;
        padding: 0.05rem;
        border-radius: 0.1rem;
        position: relative;
    }
    .writemytxt .textarea textarea{
        width: 100%;
        height: 100%;
        border: none;
        outline:none;
        line-height: 0.24rem;
        font-size: 0.12rem;
    }
    .writemytxt .textarea span{
        font-size: 0.12rem;
        position: absolute;
        bottom: 0.1rem;
        right: 0.1rem;
    }
    .writemytxt .textarea span b{
        font-weight: 500;
    }
    .writemytxt button{
        background: #EEEEEE;
        width: 1.38rem;
        height: 0.4rem;border-radius: 0.2rem;
        display: block;
        margin: 0.3rem auto 0;
        color: #999999;
    }
    .writemytxt button.has{
        background: #FFDA64;
        color: #fff;
    }

    .banshi1,.banshi2{
        background: url(../../static/images/img4.png) top center no-repeat;
        background-size: 100% 100%;
        position: relative;
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
    .banshi2 button{
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
