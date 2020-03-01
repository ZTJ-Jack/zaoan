<template>
    <div class='container'>
        <h3>{{yaoqinTxt[yaoqinTypeNum].one}}</h3>
        <h2>{{yaoqinTxt[yaoqinTypeNum].two}}</h2>
        <div class="imgMsg">
            <img src="../../static/images/img4.png" alt="" class="img">
            <div class="bot">
                <img src="../../static/images/icon10.png" alt="" class="icon">
                <div class="txt">
                    <p>{{yaoqinTxt[yaoqinTypeNum].three}}</p>
                    <p>{{yaoqinTxt[yaoqinTypeNum].four}}</p>
                </div>
                <img src="../../static/images/img2.png" alt="" class="code">
            </div>
        </div>
        <ul>
            <li v-for="(type,i) in yaoqList" :key="i" @click="choosePerson(i)">
                <img :src="type.imgUrl" alt="">
                <p>{{type.txt}}</p>
                <img src="../../static/images/icon32.png" alt="" v-if="yaoqinTypeNum == i" class="choose">
            </li>
        </ul>
        <button>立即分享给好友</button>
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
            yaoqinTypeNum:0,
            yaoqList:[
                {
                    imgUrl:require('../../static/images/img4.png'),
                    txt:'一起早起',
                },{
                    imgUrl:require('../../static/images/img1.png'),
                    txt:'找人监督',
                },{
                    imgUrl:require('../../static/images/img3.png'),
                    txt:'邀请另一半',
                },{
                    imgUrl:require('../../static/images/img4.png'),
                    txt:'邀请家人',
                }
            ],
            yaoqinTxt:[
                {
                    one:"早起打卡很好用",
                    two:'一起传递正能量',
                    three:'想掌握人生先掌握清晨，',
                    four:'扫码和我一起互道早安'
                },
                {
                    one:"找个人来监督你",
                    two:'坚持早起更有动力！',
                    three:'我在努力坚持早起，',
                    four:'需要你来监督鼓励'
                },
                {
                    one:"和家人一起打卡",
                    two:'就像陪在他们身边！',
                    three:'想掌握人生先掌握清晨,',
                    four:'想陪你每天早睡早起'
                },
                {
                    one:"和TA一起打卡",
                    two:'记录相爱的点点滴滴！',
                    three:'最幸福的事情，',
                    four:'是每天都能和你一起醒来',
                }
            ]
        }
    },
    watch: {

    },
    methods: {
        choosePerson(num){
            this.yaoqinTypeNum = num;
        }
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
        width: 100%;
        box-sizing: border-box;
        padding: 0.2rem;
    }
    .container h3{
        font-size: 0.12rem;
        line-height: 0.2rem;
    }
    .container h2{
        font-size: 0.16rem;
        line-height: 0.24rem;
        font-weight: 600;
    }
    .imgMsg{
        width: 100%;
        height: 2.75rem;
        border-radius: 0.1rem;
        box-shadow: 0 0 5px #ccc;
        margin-top: 0.15rem;
        overflow: hidden;
    }
    .imgMsg .img{
        width: 100;
        height: 2.11rem;
    }
    .imgMsg .bot{
        width: 100%;
        height: 0.64rem;
        box-sizing: border-box;
        padding: 0.07rem 0.1rem 0.07rem 0.2rem;
        display: flex;
    }
    .imgMsg .bot .icon{
        width: 0.5rem;
        height: 0.5rem;
    }
    .imgMsg .bot .code{
        width: 0.43rem;
        height: 0.43rem;
        margin-top: 0.035rem;
    }
    .imgMsg .bot .txt{
        flex: 1;
    }
    .imgMsg .bot .txt p{
        font-size:0.16rem;
        line-height: 0.25rem;
        text-align: left;
        box-sizing: border-box;
        padding: 0 0.15rem;
        font-weight: 600;
    }
    ul{
        height: 0.72rem;
        width: 100%;
        display: flex;
        justify-content: space-between;
        padding-top: 0.3rem;
    }
    ul li{
        width: 0.76rem;
        height: 0.72rem;
        box-shadow: 0 0 5px #dddddd;
        border-radius: 0.05rem;
        overflow: hidden;
        position: relative;
    }
    ul li img{
        width: 100%;
        height: 0.52rem;
        display: block;
    }
    ul li p{
        text-align: center;
        line-height: 0.2rem;
        font-size: 0.1rem;
        text-align: center;
    }
    ul li .choose{
        position: absolute;
        top: 0.05rem;
        right: 0.05rem;
        width: 0.16rem;
        height: 0.16rem;
    }
    .container button{
        width: 100%;
        height: 0.4rem;
        line-height: 0.4rem;
        text-align: center;
        font-size: 0.2rem;
        display: block;
        border-radius: 0.2rem;
        background: #FFDA64;
        margin-top: 0.6rem;
        color: #fff;
    }
</style>
