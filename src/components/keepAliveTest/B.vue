<template>
    <div class="b">
        <h1>{{msg}}</h1>
        <router-link to="/a">go a</router-link>
    </div>
</template>
<script>
    export default {
      data(){
        return {
          msg:'b'
        }
      },
      // beforeRouteLeave(to,from,next){
      //   console.log('b')
      //   to.meta.keepAlive=true
      //   next()
      // }
    }
</script>
<style></style>