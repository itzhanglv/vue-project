<template>
    <div class="c">
        <h1>{{msg}}</h1>
        <router-link to="/a">go a</router-link>
    </div>
</template>
<script>
    export default {
      data(){
        return {
          msg:'c'
        }
      },
      // beforeRouteLeave(to,from,next){
      //   console.log('c')
      //  to.meta.keepAlive=false
      //   next()
      // }
    }
</script>
<style></style>