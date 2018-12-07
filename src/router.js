import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
import lifeTest from './components/pages/lifetest.vue'
import lifeTest2 from './components/pages/lifetest2.vue'

var router=new VueRouter({
  routes:[
    {path:'/a',component:lifeTest},
    {path:'/b',component:lifeTest2}
  ]
})
export default router