<template>
    <div class='container'>
        <div class="dianzai">
            <span>点赞通知</span>
            <div class="chang" @click="change">
                <img src="../../static/images/icon6.png" alt="" v-if="idopen == true" class="changetype">
                <img src="../../static/images/icon7.png" alt="" v-if="idopen == false" class="changetype">
            </div>
        </div>
        <ul v-if="idopen == true">
            <li v-for="(per,i) in dianzaiMsg" :key="i">
                <img :src="per.icon" alt="">
                <p>{{per.name}}</p>
                <span>{{per.time}}</span>
            </li>
        </ul>
        <div class="nodata" v-if="idopen == false || dianzaiMsg.length ==  0">您今天还没有收到赞</div>
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
            idopen:false,
            dianzaiMsg:[
                {
                    icon:require('../../static/images/icon10.png'),
                    name:'Je',
                    time:'13:30'
                },{
                    icon:require('../../static/images/icon1.png'),
                    name:'JeJe',
                    time:'13:30'
                },
                {
                    icon:require('../../static/images/icon10.png'),
                    name:'Je',
                    time:'13:30'
                },{
                    icon:require('../../static/images/icon1.png'),
                    name:'JeJe',
                    time:'13:30'
                }
            ],
        }
    },
    watch: {

    },
    methods: {
        change(){
            this.idopen = !this.idopen;
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
    .dianzai{
        width: 100%;
        height: 0.4rem;
        box-shadow: 0 0 0.05rem #eee;
        font-size: 0.14rem;
        display: flex;
        justify-content: space-between;
        box-sizing: border-box;
        padding: 0 0.1rem;
    }
    .dianzai span{
        line-height: 0.4rem;
    }
    .dianzai div{
        width: 0.4rem;
        height: 0.2rem;
        margin-top: 0.1rem;
    }
    .dianzai div img{
        width: 100%;
        height: 100%;
    }
    .nodata{
        width: 100%;
        height: 0.2rem;
        font-size: 0.14rem;
        text-align: center;
        line-height: 2rem;
    }
    ul{
        width: 3.55rem;
        box-sizing: border-box;
        padding: 0.1rem;box-shadow: 0 0 0.05rem #ddd;
        margin: 0.15rem auto 0;
    }
    ul li{
        display: flex;
        height: 0.32rem;
        font-size: 0.12rem;
        margin-bottom: 0.1rem;
    }
    ul li img{
        width: 0.32rem;
        height: 0.32rem;
    }
    ul li p{
        flex: 1;
        box-sizing: border-box;
        padding: 0 0.1rem;
        line-height: 0.32rem;
    }
    ul li span{
        line-height: 0.32rem;
    }
</style>
