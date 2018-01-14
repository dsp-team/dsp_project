import $ from 'jquery'

export default {
  name: 'app',
  data: function () {
    return {
      title: 'home',
      username: sessionStorage.getItem('username')
    }
  },
  mounted: window.onresize = function () {
    $('.el-container').height($(window).height())
  },
  methods: {
    toUserinfo () {
      this.$router.push({name: 'user_center'})
      console.log('信息')
    },
    toSignOut () {
      this.$router.push({name: 'login'})
      sessionStorage.removeItem('username')
    }
  }
}
