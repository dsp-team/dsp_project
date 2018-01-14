<template>
  <div id="user_center">
     <div class="container">
        <div class="user-info">
          我的信息
        </div>
        <div class="user-name">
          名字
        </div>
        <div class="user-pass">
          密码
        </div>
     </div>
  </div>
</template>

<script>
export default {
  name: 'user_center',
  data () {
    return {
      name: '用户中心'
    }
  }
}
</script>

<style lang="scss">
@import "./user_center.scss";
</style>
