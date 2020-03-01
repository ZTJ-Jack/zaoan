<template>
    <div class='container'>
        <ul>
            <li>
                <h4>我的昵称</h4>
                <input type="text" placeholder="请输我对你的称呼" v-model="setnickname" v-on:change="changbg()">
            </li>
            <li>
                <h4>我的生日</h4>
                <div @click="showDate">
                    <span>{{chooseDate == '' ? "选择生日" : chooseDate}}</span><img src="../../static/images/icon9.png" alt="">
                </div>
            </li>
        </ul>
        <button :class="{hasmsg : (setnickname != '' && chooseDate != '') }">保存</button>
        <div class="bg" v-if="bg == true" @click="bgnone()"></div>
        <div class="settime" v-if="settime == true">
            <p>设定早起提醒时间<span @click="bgnone()">完成</span></p>
            <ul>
                <li v-for="(num,i) in times" :key="i" :class="{'select' : timeschoose == num}" @click="choosetime(num)">{{num}}</li>
            </ul>
        </div>
        <van-popup v-model="show"  position="bottom">
            <van-datetime-picker
                v-model="currentDate"
                type="date"
                title="选择日期"
                @confirm="onconfirm"
                @cancel="oncancel"
                />
        </van-popup>
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
            settime:false,
            chooseDate:'2019-10-12',
            setnickname:'',
            show:false,
            currentDate:new Date(),
        }
    },
    watch: {

    },
    methods: {
        showDate(){
            this.show = true
        },
        onconfirm(){
            this.show = false
            let choiseTime = ''
            let year = this.currentDate.getFullYear()
            let month = this.currentDate.getMonth() + 1 
            let date = this.currentDate.getDate()
            let hours = this.currentDate.getHours()
            let minutes = this.currentDate.getMinutes()
            choiseTime = year + '-' + this.changeTime(month)  + '-' + this.changeTime(date)
            this.chooseDate = choiseTime
        },
        oncancel(){
            this.show = false
        },
        changeTime (time){
            let now = 0
            now = time >= 10 ? time : '0' + time
            return  now
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
    .van-popup{
        width:100%;
    }
    .container ul{
        width: 3.35rem;
        margin: 0.5rem auto 0;
        box-sizing: border-box;
        padding: 0 0.1rem;
    }
    .container li {
        padding-bottom: 0.1rem;
    }
    .container li h4{
        font-size: 0.16rem;
        line-height: 0.34rem;
    }
    .container li input{
        font-size: 0.14rem;
        display: block;
        margin: 0.1rem auto ;
        width: 3.35rem;
        height: 0.4rem;
        border-radius: 0.2rem;
        box-sizing: border-box;
        padding: 0.09rem 0.2rem;
        border: 0.01rem solid #eeeeee;
    }
    .container li div{
        display: flex;
        justify-content: space-between;
        font-size: 0.14rem;
        margin: 0.1rem auto ;
        width: 3.35rem;
        height: 0.4rem;
        border-radius: 0.2rem;
        box-sizing: border-box;
        padding: 0.09rem 0.2rem;
        border: 0.01rem solid #eeeeee;
    }
    .container li div img{
        width: 0.2rem;
        height: 0.2rem;
    }
    .container button{
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
        background: #CCCCCC;
        position: fixed;
        bottom: 0.5rem;
        left: 0.2rem;
    }
    .container button.hasmsg{
        background:#FFDA64!important;
        color:#ffffff!important;
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
