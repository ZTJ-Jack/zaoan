<template>
    <div class='container'>
        <div class="top">
            <div class="inner">
                <img src="../../static/images/icon10.png" alt="" class="icon">
                <p>已连续签到{{datacJ.max}}天</p>
                <div class="bottom">
                    <div>
                        <p>已获得勋章</p>
                        <p>{{datacJ.sum}}</p>
                    </div>
                    <div>
                        <p>超越人数</p>
                        <p>{{datacJ.sper}}</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="tit">连续打卡</div>
        <ul>
        <ul>
            <li :class="{success : datacJ.cardth == 1}">
                <img src="../../static/images/n1.png" alt="" v-if="datacJ.cardth == 0">
                <img src="../../static/images/y1.png" alt="" v-if="datacJ.cardth == 1">
                <h5>连续打卡3天</h5>
                <p>{{datacJ.cardthday}}</p>
            </li>
            <li :class="{success : datacJ.cardse == 1}">
                <img src="../../static/images/n2.png" alt="" v-if="datacJ.cardse == 0">
                <img src="../../static/images/y2.png" alt="" v-if="datacJ.cardse == 1">
                <h5>连续打卡7天</h5>
                <p>{{datacJ.cardseday}}</p>
            </li>
            <li :class="{success : datacJ.cardfif == 1}">
                <img src="../../static/images/n3.png" alt="" v-if="datacJ.cardfif == 0">
                <img src="../../static/images/y3.png" alt="" v-if="datacJ.cardfif == 1">
                <h5>连续打卡15天</h5>
                <p>{{datacJ.cardfifday}}</p>
            </li>
            <li :class="{success : datacJ.cardthi == 1}">
                <img src="../../static/images/n4.png" alt="" v-if="datacJ.cardthi == 0">
                <img src="../../static/images/y4.png" alt="" v-if="datacJ.cardthi == 1">
                <h5>连续打卡30天</h5>
                <p>{{datacJ.cardthiday}}</p>
            </li>
            <li :class="{success : datacJ.cardsi == 1}">
                <img src="../../static/images/n5.png" alt="" v-if="datacJ.cardsi == 0">
                <img src="../../static/images/y5.png" alt="" v-if="datacJ.cardsi == 1">
                <h5>连续打卡60天</h5>
                <p>{{datacJ.cardsiday}}</p>
            </li>
        </ul>
        </ul>
        <div class="tit">社交达人</div>
        <ul class="shejiao">
            <li :class="{success : datacJ.perone == 1}">
                <img src="../../static/images/n6.png" alt=""  v-if="datacJ.perone == 0">
                <img src="../../static/images/y6.png" alt=""  v-if="datacJ.perone == 1">
                <h5>邀请1位好友</h5>
                <p>{{datacJ.peroneday}}</p>
            </li>
            <li :class="{success : datacJ.perthr == 1}">
                <img src="../../static/images/n7.png" alt=""  v-if="datacJ.perthr == 0">
                <img src="../../static/images/y7.png" alt=""  v-if="datacJ.perthr == 1">
                <h5>邀请3位好友</h5>
                <p>{{datacJ.perthrday}}</p>
            </li>
            <li :class="{success : datacJ.perfiv == 1}">
                <img src="../../static/images/n8.png" alt=""  v-if="datacJ.perfiv == 0">
                <img src="../../static/images/y8.png" alt=""  v-if="datacJ.perfiv == 1">
                <h5>邀请5位好友</h5>
                <p>{{datacJ.perfivday}}</p>
            </li>
            <li :class="{success : datacJ.perten == 1}">
                <img src="../../static/images/n9.png" alt=""  v-if="datacJ.perten == 0">
                <img src="../../static/images/y9.png" alt=""  v-if="datacJ.perten == 1">
                <h5>邀请10位好友</h5>
                <p>{{datacJ.pertenday}}</p>
            </li>
            <li :class="{success : datacJ.pertwe == 1}">
                <img src="../../static/images/n10.png" alt=""  v-if="datacJ.pertwe == 0">
                <img src="../../static/images/y10.png" alt=""  v-if="datacJ.pertwe == 1">
                <h5>邀请20位好友</h5>
                <p>{{datacJ.pertweday}}</p>
            </li>
        </ul>
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
            datacJ:'',
        }
    },
    watch: {

    },
    methods: {

    },
    mounted() {
            this.$axios.post( this.HOST+'success/looksuccess',this.$qs.stringify({
                openid:"o2ebgtzRG7D32t0Z1jhFUTz4bs8I",
              }),)
            .then((response)=>{
                console.log(response.data.data);
                this.datacJ = response.data.data
            }).catch((response)=>{
                console.log(response);
            })
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
        overflow-x: hidden;
        overflow-y: scroll;
    }
    .top{
        width: 100%;
        height: 1.85rem;
        background: url(../../static/images/img5.png) top center no-repeat;
        background-size: 100% 100%;
        margin-bottom: 0.78rem;
        box-sizing: border-box;
        padding-top: 0.95rem;
    }
    .inner{
        width: 3.45rem;
        height: 1.5rem;
        border-radius: 0.1rem;
        background: #fff;
        box-shadow: 0 0 0.05rem #999;
        margin: 0 auto;
        position: relative;
        box-sizing: border-box;
        padding-top: 0.37rem;
    }
    .inner .icon{
        width: 0.74rem;
        height: 0.74rem;
        border-radius: 50%;
        position: absolute;
        left: 50%;
        top: -0.37rem;
        margin-left: -0.37rem;
    }
    .inner>p{
        font-size: 0.16rem;
        text-align: center;
        line-height: 0.3rem;
        padding-bottom: 0.2rem;
    }
    .bottom{
        width: 100%;
        height: 0.28rem;
    }
    .bottom div{
        width: 50%;
        height: 0.28rem;
        float: left;
    }
    .bottom div:first-of-type{
        box-sizing: border-box;
        border-right: 0.01rem solid  #D8D8D8;
    }
    .bottom div p{
        font-size: 0.12rem;
        line-height: 0.14rem;
        text-align: center;
    }
    .tit{
        width: 0.88rem;
        height: 0.23rem;
        background: url(../../static/images/icon23.png) top center no-repeat;
        background-size: 100% 100%;
        line-height: 0.23rem;
        text-align: center;
        font-size: 0.12rem;
        margin: 0 auto 0.15rem;
    }
    ul{
        width: 100%;
        overflow: hidden;
    }
    ul li{
        width: 33.33%;
        float: left;
        margin-bottom: 0.2rem;
    }
    ul li img{
        width: 1.06rem;
        height: 0.78rem;
        display: block;
        margin: 0 auto;
    }
    ul li h5{
        padding-top: 0.05rem;
        font-size: 0.12rem;
        line-height: 0.2rem;
        text-align: center;
        color: #666;
    }
    ul li p{
        font-size: 0.1rem;
        line-height: 0.16rem;
        text-align: center;
        color: #666;
    }
    ul li.success h5,ul li.success p{
        color: #333;
    }
    .shejiao img{
        height: 0.66rem;
    }
</style>
