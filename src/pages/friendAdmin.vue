<template>
    <div class='container'>
        <div class="tixing">开启通知后，好友打卡时你会收到消息提醒！</div>
        <div class="daka">
            <span><b>1</b>个好友</span><span>早打卡</span>
        </div>
        <div class="bangdan">
            <div class="left">
                <h4>榜单通知</h4>
                <p>每天第一个打卡的好友通知</p>
            </div>
            <div class="right" @click="changtype">
                <img src="../../static/images/icon6.png" v-if="isopen == true" alt="">
                <img src="../../static/images/icon7.png" v-if="isopen == false"  alt="">
            </div>
        </div>
        <ul class="list" v-if="isopen == true" >
            <li>
                <img src="../../static/images/icon10.png" alt="" class="icon">
                <div>
                    <p>Je</p>
                    <button @click="det">删除好友</button>
                </div>
                <img src="../../static/images/icon6.png" alt="" class="changetype">
            </li>
            <li>
                <img src="../../static/images/icon10.png" alt="" class="icon">
                <div>
                    <p>Je</p>
                    <button @click="det">删除好友</button>
                </div>
                <img src="../../static/images/icon7.png" alt="" class="changetype">
            </li>
            <li>
                <img src="../../static/images/icon10.png" alt="" class="icon">
                <div>
                    <p>Je</p>
                    <button @click="det">删除好友</button>
                </div>
                <img src="../../static/images/icon6.png" alt="" class="changetype">
            </li>
            <li>
                <img src="../../static/images/icon10.png" alt="" class="icon">
                <div>
                    <p>Je</p>
                    <button @click="det">删除好友</button>
                </div>
                <img src="../../static/images/icon6.png" alt="" class="changetype">
            </li>
            <li>
                <img src="../../static/images/icon10.png" alt="" class="icon">
                <div>
                    <p>Je</p>
                    <button @click="det">删除好友</button>
                </div>
                <img src="../../static/images/icon6.png" alt="" class="changetype">
            </li>
        </ul>
        <div class="bg" v-if="bg == true"></div>
        <div class="detpop" v-if="detpop == true">
            <h4>确定删除好友吗？</h4>
            <p><span @click="detFalse">取消</span><span @click="detTrue">确定</span></p>
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
            isopen:true,
            bg:false,
            detpop:false,
        }
    },
    watch: {

    },
    methods: {
        changtype(){
            this.isopen = !this.isopen
        },
        det(){
            this.bg = true;
            this.detpop = true;
        },
        detFalse(){
            this.bg = false;
            this.detpop = false;
        },
        detTrue(){
            this.bg = false;
            this.detpop = false;
        },
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
    .tixing{
        width: 100%;
        height: 0.2reml;
        line-height: 0.2rem;
        text-align: center;
        font-size: 0.12rem;
        color: #fff;
        background: #FF6C6C;
    }
    .daka{
        width: 100%;
        height: 0.4rem;
        line-height: 0.4rem;
        display: flex;
        justify-content: space-between;
        box-sizing: border-box;
        padding: 0 0.1rem;
        font-size: 0.12rem;
        box-shadow: 0 0 0.05rem #ddd;
    }
    .daka b{
        font-size: 0.14rem;

    }
    .bangdan{
        width: 3.55rem;
        height: 0.6rem;
        background: url(../../static/images/bangdanbg.png) top center no-repeat;
        background-size: 100% 100%;
        padding: 0 0.15rem;
        box-sizing: border-box;
        display: flex;
        margin: 0.15rem auto 0;
    }
    .bangdan .right{
        width: 0.4rem;
        height: 0.2rem;
        margin-top: 0.2rem;
    }
    .bangdan .right img{
        width: 100%;
        height: 100%;
        display: block;
    }
    .bangdan .left{
        flex: 1;
    }
    .bangdan .left h4{
        font-size: 0.14rem;
        line-height: 0.2rem;
        padding-top: 0.1rem;
    }
    .bangdan .left p{
        font-size: 0.12rem;
        line-height: 0.2rem;
        
    }
    .list{
        width: 3.55rem;
        margin: 0.2rem auto;
        border-radius: 0.1rem;
        box-sizing: border-box;
        padding: 0.1rem;
        box-shadow: 0 0 0.05rem #ccc;
    }
    .list li{
        height: 0.32rem;
        margin-bottom: 0.1rem;
        display: flex;
    }
    .list li:last-of-type{
        margin-bottom: 0;
    }
    .list li .icon{
        width: 0.32rem;
        height: 0.32rem;
        margin-right: 0.1rem;
    }
    .list li div{
        flex: 1;
    }
    .list li .changetype{
        width: 0.4rem;
        height: 0.2rem;
        margin-top:0.06rem;
    }
    .list li div p{
        font-size: 0.12rem;
        line-height: 0.16rem;
    }
    .list li div button{
        font-size: 0.12rem;
        line-height: 0.16rem;
        display: block;
        color: #999;
        background: none;
    }
    .bg{
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, .5);
        position: fixed;
        top: 0;
        left: 0;
    }
    .detpop{
        width: 2.09rem;
        height: 1.05rem;
        position: fixed;
        top: 50%;
        left: 50%;
        margin-top: -0.525rem;
        margin-left: -1.045rem;
        background: #fff;
        border-radius: 0.05rem;
        overflow: hidden;
    }
    .detpop h4{
        line-height: 0.75rem;
        text-align: center;
        font-size: 0.12rem;
    }
    .detpop p{
        font-size: 0.15rem;
        width: 100%;
        display: flex;
        background: #EEEEEE;
        height: 0.3rem;
        line-height: 0.3rem;
    }
    .detpop p span{
        width: 50%;
        box-sizing: border-box;
        text-align: center;
    }
    .detpop p span:last-of-type{
        color: #0080FF;
        border-left: 0.01rem solid #DCDCDC;
    }
</style>
