<template>
    <div class="hello">
        <h1>Vue</h1>
        <h2>{{msg}}</h2>
        <input placeholder="输入框"></input>
    </div>
</template>
<script>
    export default {
      data(){
        return {
          msg:'page'
        }
      },
      activated(){
        this.msg='hello page'
      }
    }
</script>
<style></style>