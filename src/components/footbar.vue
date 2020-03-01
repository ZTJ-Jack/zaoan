<template>
  <div class="bottombar">
    <router-link to="/Home">
      <div @click="switchTo('/Home')">
        <img :src="'/Home'===$route.path?sysrc:sysrc1" alt="">
        <p>我的</p>
      </div>
    </router-link>
    <router-link to="/friendsNum">
      <div @click="switchTo('/friendsNum')">
        <img :src="'/friendsNum'===$route.path?flsrc:flsrc1" alt="">
        <p>好友排名</p>
      </div>
      </router-link>
    <router-link to="/allNum">
      <div @click="switchTo('/allNum')">
        <img :src="'/allNum'===$route.path?gsrc:gsrc1" alt="">
        <p>全国排名</p>
      </div>
      </router-link>
    <router-link to="/tongji">
      <div @click="switchTo('/tongji')">
        <img :src="'/tongji'===$route.path?gwcsrc1:gwcsrc" alt="">
        <p>作息</p>
      </div>
      </router-link>
  </div>
</template>

<script>
    export default {
      name: "footer",
      data(){
          return {
            sysrc1:require("../../static/images/tb1.png"),
            sysrc:require("../../static/images/tb1y.png"),
            flsrc1:require("../../static/images/tb2.png"),
            flsrc:require("../../static/images/tb2y.png"),
            gsrc1:require("../../static/images/tb3.png"),
            gsrc:require("../../static/images/tb3y.png"),
            gwcsrc:require("../../static/images/tb4.png"),
            gwcsrc1:require("../../static/images/tb4y.png"),
          }
      },
      methods:{
        switchTo(path){
          this.$router.replace(path)
        }
      }
    }
</script>

<style scoped>
  .bottombar{
    width: 100%;
    height: 0.5rem;
    box-shadow: 0 0 0.05rem #ccc;
    display: flex;
    justify-content: space-around;
  }
  .bottombar a{
    width: 0.5rem;
    font-size: 0.12rem;
  }
  .bottombar a img{
    width: 0.25rem;
    height: 0.25rem;
    display: block;
    margin: 0.05rem auto 0;
  }
  .bottombar a p{
    text-align: center;
  }
</style>
