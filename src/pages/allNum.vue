<template>
    <div class='container'>
        <div class="main">
            <div class="aboutUs">
                <div class="top">
                    <div>
                        <p>{{personData.nowtime}}</p>
                        <p>我的早起</p>
                    </div>
                    <div>
                        <img :src="personData.headimgurl" alt="">
                    </div>
                    <div>
                        <p>{{personData.myrank}}</p>
                        <p>全国排名</p>
                    </div>
                </div>
            </div>
            <div class="paiming">
                <h4>排名</h4>
                <ul>
                    <li v-for="(num,i) in personData.mysort" :key="i">
                        <div class="left">
                            <span class="num">{{i+1}}</span>
                            <span class="icon"><img :src="num.headimgurl" alt=""></span>
                            <span class="name">{{num.nickname}}</span>
                        </div>
                        <div class="right">
                            <span class="zai" @click="dianzan(num.openid)"><img src="../../static/images/icon29.png" alt=""><b>{{num.check == null ? 0 : num.check}}</b></span>
                            <span class="time">{{num.nowtime}}</span>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
        <footbar></footbar>
    </div>
</template>

<script>
import footbar from "../components/footbar";
export default {
    components:{
      footbar,
    },
    computed: {

    },
    data() {
        return{
            personData:'',
        }
    },
    watch: {

    },
    methods: {
        getData(){
            // console.log(1)
            this.$axios.post( this.HOST+'signIn/lookSort',this.$qs.stringify({
                  openid:"o2ebgtzRG7D32t0Z1jhFUTz4bs8I",
              }),)
            .then((res)=>{
                if(res.data.state == 2000){
                    this.personData = res.data.data;
                    // console.log(this.personData);
                }
            }).catch((res)=>{
                console.log(res);
            })
        },
        dianzan(id){
            console.log(id);
            this.$axios.post( this.HOST+'signIn/check',this.$qs.stringify({
                  openid:"o2ebgtzRG7D32t0Z1jhFUTz4bs8I",
                  bopenid:id,
              }),)
            .then((res)=>{
                console.log(res)
                if(res.data.state == 2000){
                    this.personData = res.data.data;
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
.aboutUs{
    width: 100%;
    height: 1.9rem;
    background: url(../../static/images/img6.png) top center no-repeat;
    background-size: 100% 100%;
    box-sizing: border-box;
    padding: 0.2rem 0.1rem;
}
.top{
    width: 100%;
    height: 0.5rem;
    margin-top: 0.1rem;
    display: flex;
}
.top div{
    width: 33.33%;
}
.top div img{
    width: 0.5rem;
    height: 0.5rem;
    display: block;
    margin: 0 auto;
    border-radius: 50%;
}
.top div p{
    text-align: center;
    font-size: 0.24rem;
    line-height: 0.32rem;
    padding-bottom: 0.02rem;
    font-weight: 600;
}
.top div p:last-of-type{
    line-height: 0.16rem;
    font-size: 0.12rem;
    font-weight: 500;
}
.bottom{
    width: 3.55rem;
    height: 0.52rem;
    border-radius: 0.1rem;
    background: #fff;
    margin-top: 0.17rem;
    box-sizing: border-box;
    padding: 0.08rem 0;
    display: flex;
}
.bottom div{
    width: 33.33%;
    box-sizing: border-box;
    border-right: 0.01rem solid #DDDDDD;
    text-align: center;
    line-height: 0.36rem;
    font-size: 0.14rem;
}
.bottom div img{
    height: 0.2rem;
    width: 0.22rem;
}
.paiming {
    width: 3.55rem;
    border-radius: 0.1rem;
    box-sizing: border-box;
    padding: 0.1rem;
    margin: -0.9rem auto 0.3rem;
    background: #fff;
    box-shadow: 0 0 5px #ccc;
}
.paiming  h4{
    font-size: 0.14rem;
    line-height: 0.2rem;
    text-indent: 0.1rem;
    padding-bottom: 0.05rem;
}
.paiming ul li{
    height: 0.32rem;
    width: 100%;
    display: flex;
    padding: 0.07rem 0;
}
.paiming ul li>div{
    width: 50%;
}
.paiming ul li .left {
    display: flex;
}
.paiming ul li .left span{
    height: 0.32rem;
    line-height: 0.32rem;
}
.paiming ul li .left .num{
    font-size: 0.14rem;
    width: 0.3rem;
    text-align: center;
}
.paiming ul li .left .icon{
    width: 0.32rem;
    height: 0.32rem;
    border-radius: 50%;
    border: 0.01rem solid #F6A5A5;
    margin-right: 0.1rem;
    overflow: hidden;
}
.paiming ul li:nth-of-type(1) .left .icon{
    border-radius: 0.01rem solid #FFE45F
}
.paiming ul li:nth-of-type(2) .left .icon{
    border-radius: 0.01rem solid #DADADA
}
.paiming ul li:nth-of-type(3) .left .icon{
    border-radius: 0.01rem solid #FFB73F;
}
.paiming ul li .left .icon img{
    width: 100%;
    height:100%;
    display: block;
}
.paiming ul li .left .name{
    flex: 1;
    font-size: 0.14rem;
}
.paiming ul li .right span{
    float: right;
}
.paiming ul li .time{
    font-size: 0.14rem;
    line-height: 0.32rem;
    font-weight: 600;
    padding-right: 0.3rem;
}
.paiming ul li .zai{
    font-size: 0.10rem;
}
.paiming ul li .zai img{
    display: block;
    height: 0.12rem;
    width: 0.13rem;
    margin: 0.03rem auto 0;
}
.paiming ul li .zai b{
    text-align: center;
    display: block;
    font-weight: 500;
}
.paiming ul li.dianzai .zai{
    color: #FFE45F;
}
</style>
