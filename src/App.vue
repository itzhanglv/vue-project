<template>
    <div class="appContainer">
        <h1>hello app</h1>
        <button @click="updateFlag">点击我</button>
        <!--<life-test v-show="show"></life-test>-->
        <!--<life-test2 v-show="!show"></life-test2>-->
        <router-link to="/b">go b</router-link>
        <router-link to="/c">go c</router-link>
        <!--<router-view></router-view>-->
        <!--<keep-alive>-->
            <!--<router-view v-if="$route.meta.keepAlive"></router-view>-->
        <!--</keep-alive>-->
        <!--<router-view v-if="!$route.meta.keepAlive"></router-view>-->
        <keep-alive include="a">
            <router-view></router-view>
        </keep-alive>
    </div>
</template>
<script>
  import lifeTest from './components/pages/lifetest.vue'
  import lifeTest2 from './components/pages/lifetest2.vue'

  export default {
    data () {
      return {
        show: true
      }
    },
    methods: {
      updateFlag () {
        this.show = !this.show
      }
    },
    components: {
      lifeTest,
      lifeTest2
    }
  }
</script>
<style scoped></style>