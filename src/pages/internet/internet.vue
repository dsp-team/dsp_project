<template>
  <div id="internet">
    {{msg}}
    <hr/>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'internet',
  data () {
    return {
      msg: '网络'
    }
  }
}
</script>