import Vue from 'vue'
import Router from 'vue-router'
import SetDaKa from '@/pages/SetDaKa'
import ZaoQiJiLv from '@/pages/ZaoQiJiLv'
import Home from '@/pages/Home'
import SetMsg from '@/pages/SetMsg'
import BuQian from '@/pages/BuQian'
import changImg from '@/pages/changImg'
import chengjiu from '@/pages/chengjiu'
import friendsNum from '@/pages/friendsNum'
import allNum from '@/pages/allNum'
import tongji from '@/pages/tongji'
import addFriends from '@/pages/addFriends'
import friendAdmin from '@/pages/friendAdmin'
import dianzai from '@/pages/dianzai'
import nyr from '@/pages/nyr'
import choujiang from '@/pages/choujiang'
import banshi from '@/pages/banshi'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/Home',
      name: 'Home',
      component: Home
    },{
      path: '/SetDaKa',  
      name: 'SetDaKa',
      component: SetDaKa
    },{
      path: '/SetMsg',  
      name: 'SetMsg',
      component: SetMsg
    },{
      path: '/BuQian',  
      name: 'BuQian',
      component: BuQian
    },{
      path: '/changImg',  
      name: 'changImg',
      component: changImg
    },{
      path: '/chengjiu',  
      name: 'chengjiu',
      component: chengjiu
    },{
      path: '/ZaoQiJiLv',  
      name: 'ZaoQiJiLv',
      component: ZaoQiJiLv
    },{
      path: '/friendsNum',  
      name: 'friendsNum',
      component: friendsNum
    },{
      path: '/allNum',  
      name: 'allNum',
      component: allNum
    },{
      path: '/tongji',  
      name: 'tongji',
      component: tongji
    },{
      path: '/addFriends',  
      name: 'addFriends',
      component: addFriends
    },{
      path: '/friendAdmin',  
      name: 'friendAdmin',
      component: friendAdmin
    },{
      path: '/dianzai',  
      name: 'dianzai',
      component: dianzai
    },{
      path: '/nyr',  
      name: 'nyr',
      component: nyr
    },{
      path: '/choujiang',  
      name: 'choujiang',
      component: choujiang
    },{
      path: '/banshi',  
      name: 'banshi',
      component: banshi
    },
    
    {
      path: '/',
      redirect: "/Home"
    }
  ]
})
