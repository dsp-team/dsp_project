<template>
  <div id="apply_temple">
    {{msg}}
    <hr/>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'apply_temple',
  data () {
    return {
      msg: '应用模板'
    }
  }
}
</script>