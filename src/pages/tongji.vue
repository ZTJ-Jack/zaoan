<template>
    <div class='container'>
        <div class="main">
            <div class="topouter">
                <div class="top">   
                    <p class="tjType"><span :class="{choose : tjtype ==1}" @click="changtype(1)">周统计</span><span :class="{choose : tjtype ==2}" @click="changtype(2)">月统计</span></p>
                    <p class="choosedate">
                        <img src="../../static/images/icon33.png" alt="">
                        <span>2020-02月10日至02月17日</span>
                        <img src="../../static/images/icon34.png" alt="">
                    </p>
                </div>
                <ul>
                    <li><b>11:26</b><span>平均早起</span></li>
                    <li><b>2天</b><span>连续早起</span></li>
                    <li><b>2天</b><span>本周早起</span></li>
                </ul>
            </div>
            <div class="chat1">
                <h4><span>早起统计</span><img src="../../static/images/icon35.png" alt=""></h4>
                <div id="myChart"></div>
                <ul>
                    <li><b>2天</b><span>连续早起</span></li>
                    <li><b>2天</b><span>本周早起</span></li>
                    <li><b>2天</b><span>最早起床</span></li>
                    <li><b>11:26</b><span>平均早起</span></li>
                </ul>
            </div>
            <div class="chat2" v-if="yzhou == ''">
                要坚持打卡才会有早起记录
                <span>早起统计</span>
            </div>
            <!-- <div class="chat3">
                <h4><span>早起统计</span><img src="../../static/images/icon35.png" alt=""></h4>
                <div id="myChartm"></div>
                <ul>
                    <li><b>2天</b><span>连续早起</span></li>
                    <li><b>2天</b><span>本周早起</span></li>
                    <li><b>2天</b><span>z最早起床</span></li>
                    <li><b>11:26</b><span>平均早起</span></li>
                </ul>
            </div> -->
            <button>分享我的作息报告</button>
        </div>
        <footbar></footbar>
    </div>
</template>

<script>
// var echarts = require('echarts');
import footbar from "../components/footbar";
export default {
    components:{
      footbar,
    },
    computed: {

    },
    data() {
        return{
            tjtype:1,
            xzhou:['一', '二', '三', '四', '五', '六', '日'],
            yzhou:[1582761600000, 1582801893000, 1582801893000, 1582801893000 , 1582801893000, 1582801893000,1582801893000],
        }
    },
    watch: {

    },
    methods: {
        changtype(num){
            this.tjtype = num;
        },
        draw () {
             // 实例化echarts对象
             var myChart = echarts.init(document.getElementById('myChart'));
             // 绘制条形图
             myChart.setOption({

                xAxis: {
                    type: 'category',
                    data: this.xzhou,
                },
                yAxis: {
                    type: 'time',
                    data: this.yzhou,
                    //  max : 1582779600000,
                    // min : 1582761600000,
                    // splitNumber : 5,
                },
                series: [{
                    data: [1582801893000, 1582801892736, 1582801891935,1582801891732 , 1582801891935, 1582801895296, 1582801895296],
                    type: 'line',
                    itemStyle : { 
                        normal : { 
                            color:'#fcee21', //改变折线点的颜色
                            lineStyle:{ 
                                color:'#fcee21' //改变折线颜色
                            } ,
                            label : {show: true}
                        } 
                    },
                    // itemStyle : { normal: {}}
                }]
     
             })
         },
    },
    mounted() {
         this.draw();
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
     #myChart {
         width: 95%;
         height: 300px;
         margin: 20px auto;
         border: 1px solid #CCC
     }
     .topouter{
         width: 100%;
         height: 1.9rem;
         overflow: hidden;
         position: relative;
     }
     .top{
         width: 100%;
         height: 1.5rem;
         background: #fcee21;
         overflow: hidden;
         margin-bottom: 0.4rem;position: relative;
     }
     .tjType{
         width: 1.4rem;
         height: 0.3rem;
         border-radius: 0.05rem;
         margin: 0.1rem auto 0.2rem;
         border:0.01rem solid #333333;
         font-size: 0.14rem;
         display: flex;
     }
     .tjType span{
         width: 50%;
         height: 0.3rem;
         text-align: center;
         color: #333;
         line-height: 0.3rem;
     }
     .tjType span.choose{
         background: #333;
         color: #fff;
     }
     .choosedate{
         height: 0.2rem;
         width: 100%;
         box-sizing: border-box;
         padding: 0 0.8rem;
         display: flex;
     }
     .choosedate span{
         flex: 1;
         font-size: 0.1rem;
         text-align: center;
         line-height: 0.2rem;
     }
     .choosedate img{
         width: 0.2rem;
         height: 0.2rem;
     }
     .topouter ul{
         width: 3.35rem;
         height: 0.7rem;
         background: #fff;
         margin: 0.2rem auto 0;
         border-radius: 0.1rem;
         display: flex;
         font-size: 0.14rem;
         position: absolute;
         box-shadow: 0 0 0.05rem #ccc;
         bottom: 0.2rem;
         left: 0.2rem;
     }
     .topouter ul li{
         width: 33.33%;
         height: 100%;
     }
     .topouter ul li b{
         display: block;
         text-align: center;
         line-height: 0.3rem;
         font-size: 0.2rem;
         padding-top: 0.05rem;
     }
     .topouter ul li span{
         display: block;
         text-align: center;
         line-height: 0.3rem;
         font-size: 0.14rem;
     }
    .chat1{
        width: 3.35rem;
        margin: 0 auto;
        box-shadow: 0 0 0.05rem #ccc;
        border-radius: 0.1rem;
    }
    .chat1 h4{
        font-size: 0.14rem;
        box-sizing: border-box;
        padding: 0 0.1rem;
        display: flex;
        justify-content: space-between;
    }
    .chat1 h4 span{
        line-height: 0.4rem;
    }
    .chat1 h4 img{
        width: 0.25rem;
        height: 0.2rem;
        margin-top: 0.1rem;
    }
    #myChart{
        border: 0;
        margin-top: -0.3rem;
    }
    .chat1 ul{
        display: flex;
    }
    .chat1 li{
        width: 25%;
    }
    .chat1 li b{
        font-size: 0.2rem;
        text-align: center;
        display:block;
    }
    .chat1 li span{
        display:block;
        font-size: 0.14rem;
        line-height: 0.3rem;
        text-align: center;
    }
    .container button{
        width: 3.35rem;
        height: 0.4rem;
        border-radius: 0.2rem;
        background: #fcee21;
        color: #fff;
        font-size: 0.16rem;
        line-height: 0.4rem;
        text-align: center;
        display: block;
        margin: 0.6rem auto 0.3rem;
    }
    .chat2{
        width: 3.35rem;
        height: 1.8rem;
        box-shadow: 0 0 0.05rem #ccc;
        border-radius: 0.1rem;
        line-height: 1.8rem;
        font-size: 0.12rem;
        position: relative;
        color: #fcee21;
        text-align: center;
        margin: 0 auto;
    }
    .chat2 span{
        font-size: 0.14rem;
        height: 0.3rem;
        line-height: 0.3rem;
        position: absolute;
        left: 0.1rem;
        top: 0.1rem;
        color: #333;
    }
    .chat3{
        width: 3.35rem;
        margin: 0 auto;
        box-shadow: 0 0 0.05rem #ccc;
        border-radius: 0.1rem;
    }
    .chat3 h4{
        font-size: 0.14rem;
        box-sizing: border-box;
        padding: 0 0.1rem;
        display: flex;
        justify-content: space-between;
    }
    .chat3 h4 span{
        line-height: 0.4rem;
    }
    .chat3 h4 img{
        width: 0.25rem;
        height: 0.2rem;
        margin-top: 0.1rem;
    }
    #myChart{
        border: 0;
        margin-top: -0.3rem;
        height: 250px;
        margin-bottom: 0;
    }
    #myChart div,#myChart div canvas{
        height: 250px;
    }
    .chat3 ul{
        display: flex;
    }
    .chat3 li{
        width: 25%;
    }
    .chat3 li b{
        font-size: 0.2rem;
        text-align: center;
        display:block;
    }
    .chat3 li span{
        display:block;
        font-size: 0.14rem;
        line-height: 0.3rem;
        text-align: center;
    }
</style>
