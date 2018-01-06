import $ from 'jquery'

export default {
  name: 'app',
  data: function () {
    return {
      title: 'home'
    }
  },
  mounted: window.onresize = function () {
    $('.el-container').height($(window).height())
  }
}
