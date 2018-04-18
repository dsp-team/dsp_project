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
.el-table{
  // border:1px solid #EBEEF5;
  .el-table__header-wrapper{
    th{
      text-align: center;
      background-color:#F1F3F6;
      height: 40px;
      line-height: 40px; 
      font-size: 16px;
    }
  }
  .el-table__body-wrapper{
    .el-table__body{
      tbody{
        tr{
          min-height: 50px !important;  
        }
      }
    
  }
  }
  
}
</style>
