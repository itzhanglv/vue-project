<template>
    <div class="lifeContainer">
        <h2>查看lifetest2实例的生命周期</h2>
    </div>
</template>
<script>
  export default {
    data(){
      return {}
    },
    destroyed(){
      console.log("lifetest2 vue 实例被销毁了")
    },

  }
</script>
<style scoped></style>