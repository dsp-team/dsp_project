<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <!-- 显示路由helloworld -->
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  /* -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center; */
  color: #2c3e50;
}
*{
  margin: 0 auto;
  padding: 0;
}
.el-message{
  display: block;
  width: 20px;
  text-align: left;
  i {
    float: left;
  }
}
</style>
