<template>
  <div id="master">
    {{msg}}
    <hr/>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'master',
  data () {
    return {
      msg: '主机'
    }
  }
}
</script>