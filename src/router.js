import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
import lifeTest from './components/pages/lifetest.vue'
import lifeTest2 from './components/pages/lifetest2.vue'
import hello from './components/pages/hello.vue'
import page from './components/pages/page.vue'
import A from './components/keepAliveTest/A.vue'
import B from './components/keepAliveTest/B.vue'
import C from './components/keepAliveTest/C.vue'
var router=new VueRouter({
  routes:[
    {path:'/lifetest',component:lifeTest},
    {path:'/lifetest2',component:lifeTest2},
    {
      path:'/hello',
      name:'hello',
      component:hello,
      meta:{
        keepAlive:false
      }
    },
    {
      path:'/page',
      name:'page',
      component:page,
      meta:{
        keepAlive:true
      }
    },
    {
      path:'/a',
      name:'a',
      component:A,
      // meta:{
      //   keepAlive:true
      // }
    },
    {
      path:'/b',
      name:'b',
      component:B,
    },
    {
      path:'/c',
      name:'c',
      component:C
    }
  ]
})
export default router