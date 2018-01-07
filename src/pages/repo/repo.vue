<template>
  <div id="repo">
    {{msg}}
    <hr/>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'repo',
  data () {
    return {
      msg: '镜像仓库'
    }
  }
}
</script>