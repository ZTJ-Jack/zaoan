<template>
    <div class="content">
        <h4>
            <span>开启每日早起提醒</span>
            <span @click="choosetixin">
                <img src="../../static/images/icon6.png" alt="" v-if="isopen">
                <img src="../../static/images/icon7.png" alt="" v-else>
            </span>
        </h4>
        <div class="isopentrue" v-if="isopen == true">
            <div class="tixintype">
                提醒方式（二选一）
            </div>
            <ul class="type">
                <li @click="choosezhineng">
                    <img src="../../static/images/icon4.png" alt="" v-if="zhinengtixin == true">
                    <img src="../../static/images/icon5.png" alt="" v-if="zhinengtixin == false">
                    <span>智能提醒</span>
                </li>
                <li @click="choosezidingyi">
                    <img src="../../static/images/icon3.png" alt="" v-if="zidingyitixin == true">
                    <img src="../../static/images/icon2.png" alt="" v-if="zidingyitixin == false">
                    <span>自定义提醒</span>
                </li>
            </ul>
            <div class="choosetype1" v-if="zhinengtixin == true">
                <p>智能提醒会根据你最近的平均打卡时间<br/>发送一条消息提醒你打卡哟</p>
            </div>
            <div class="choosetype2" v-if="zidingyitixin == true">
                <div class="times">
                    <span>设定早起提醒时间</span><span @click="show()"><b>{{timeschoose}}</b><img src="../../static/images/icon15.png" alt=""></span>
                </div>
                <p>自定义提醒会在你设定的时间<br/>发送一条消息提醒你打卡哟</p>

            </div>
        </div>
        <div class="isopenfalse" v-if="isopen == false">
            <p>打卡提醒已关闭<br/>早起提醒不能每天提醒你了哟</p>
        </div>
        <button>保存</button>
        <div class="bg" v-if="bg == true" @click="bgnone()"></div>
        <div class="settime" v-if="settime == true">
            <p>设定早起提醒时间<span @click="bgnone()">完成</span></p>
            <ul>
                <li v-for="(num,i) in times" :key="i" :class="{'select' : timeschoose == num}" @click="choosetime(num)">{{num}}</li>
            </ul>
        </div>
    </div>
</template>
 
<script>
export default {
    name: 'vueName',
    data () {
        return {
            isopen:true,
            zhinengtixin:true,
            zidingyitixin:false,
            times:['6:00','6:15','6:30','6:45','7:00','7:15','7:30','7:45','8:00','8:15','8:30'],
            timeschoose:'6:00',
            bg:false,
            settime:false,
        }
    },
    mounted() {
        this.getData();
    },
    methods: {
        show(){
            this.bg = true;
            this.settime = true;
        },
        choosetixin(){
            this.isopen = !this.isopen;
        },
        choosezhineng(){
            this.zhinengtixin = true;
            this.zidingyitixin = false;
        },
        choosezidingyi(){
            this.zhinengtixin = false;
            this.zidingyitixin = true;
        },
        choosetime(num){
            this.timeschoose = num;
            this.bg = false;
            this.settime = false;
        },
        bgnone(){
            this.bg = false;
            this.settime = false;
        },
        getData(){
            this.$axios.post( this.HOST+'Daka/lookDaka',this.$qs.stringify({
                  openid:"o2ebgtzRG7D32t0Z1jhFUTz4bs8I",
              }),)
            .then((res)=>{
                console.log(res)
            }).catch((res)=>{
                console.log(res);
            })
        },
    },
}
</script>
 
<style scoped>
    .content{
        width: 100%;
        height: 100%;
        overflow: hidden;
        box-sizing: border-box;
        padding: 0 0.1rem;
    }
    .content h4{
        line-height: 0.4rem;
        height: 0.4rem;
        font-size: 0.14rem;
        display: flex;
        justify-content: space-between;
        border-bottom: 1px solid #F6F6F6;
    }
    .content h4 img{
        width: 0.4rem;
        height: 0.2rem;
        margin-top: 0.1rem;
    }
    .tixintype{
        line-height: 0.4rem;
        height: 0.4rem;
        font-size: 0.14rem;
        padding-bottom: 0.1rem;
    }
    .type li {
        display: block;
        width: 100%;
        height: 0.6rem;
        line-height:0.6rem;
        padding: 0.2rem 0;
        padding-left: 1.1rem;
    }
    .type li span{
        font-size: 0.12rem;
        display: inline-block;
        line-height: 0.6rem;
        vertical-align: top;
    }
    .type li img{
        width: 0.5rem;
        line-height: 0.6rem;
        vertical-align: top;
    }
    .type li:first-of-type img{
        margin-top: 0.075rem;
    }
    .type li:last-of-type img{
        margin-top: 0.035rem;
    }
    .choosetype1,.choosetype2{
        width: 100%;
    }
    .choosetype1 p,.choosetype2 p{
        font-size: 0.12rem;
        text-align: center;
        line-height: 0.18rem;
    }
    .choosetype2 .times{
        height: 0.4rem;
        line-height: 0.4rem;
        font-size: 0.14rem;
        display: flex;
        justify-content: space-between;
        border-bottom: 1px solid #F6F6F6;
        margin-bottom: 0.2rem;
    }
    .choosetype2 .times span img{
        width: 0.07rem;
        height: 0.12rem;
        padding-left: 0.1rem;
        vertical-align: top;
        margin-top: 0.14rem;
    }
    .choosetype2 .times span b{
        vertical-align: top;
    }
    .isopenfalse p{
        font-size: 0.12rem;
        text-align: center;
        line-height: 0.18rem;
        padding-top: 0.3rem;
    }
    .content button{
        width: 3rem;
        height: 0.4rem;
        border-radius: 0.2rem;
        background: #FFDA64;
        color: #ffffff;
        line-height: 0.4rem;
        text-align: center;
        font-size: 0.2rem;
        display: block;
        position: fixed;
        bottom: 0.8rem;
        left: 50%;
        margin-left: -1.5rem;
    }   
    .bg{
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, .5);
        position: fixed;
        top: 0;
        left: 0;
        z-index: 9;
    }
    .settime{
        width: 100%;
        height: 2.4rem;
        background: #ffffff;
        position: fixed;
        bottom: 0;
        left: 0;
        z-index: 10;
    }
    .settime p{
        font-size: 0.14rem;
        line-height: 0.4rem;
        height: 0.4rem;
        background: #EEEEEE;
        text-align: center;
        position: relative;
    }
    .settime p span{
        position: absolute;
        right: 0.1rem;
        top: 0;
        height: 0.4rem;
        line-height: 0.4rem;
        color: #F7BC00;
    }
    .settime ul{
        width: 100%;
        height: 2rem;
        box-sizing: border-box;
        padding: 0 0.1rem;
        font-size: 0.14rem;
        overflow-y: scroll;
    }
    .settime ul li{
        display: block;
        line-height: 0.39rem;
        height: 0.39rem;
        border-bottom: 0.01rem solid #EEEEEE;
        text-align: center;
        color: #999999;
    }
    .settime ul li.select{
        color: #333333;
    }
</style>