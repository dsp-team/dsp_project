<template>
  <div>
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>{{ template}}</span>
      </div>
      <div class="text item">

      </div>
    </el-card>
  </div>
</template>


<script>
import { mapActions } from 'vuex'

export default {
  name: 'TempletDetail',
  data () {
    return {
      tempDetailInfo: {
        name: '',
        describe: '',
        compose: ''
      },
      // 通过当前urlparams获取模板的名称来获取模板详情
      templateName: this.$route.params.name,
      // 定义一个模板用来存储当前获取的详情
      template: {
        name: '',
        describe: '',
        compose: ''
      }

    }
  },
  created: function () {
    this.getDetailInfoByName()
    // console.log(this.templateName) // 11
  },
  methods: {
    // 通过templateName获取详情
    getDetailInfoByName () {
      var obj = {name: this.templateName}
      this.getDetailByName(obj).then((res) => {
        console.log(res)
        this.template = res.data
        this.template = res.data
        console.log(this.template)
      }).catch((error) => {
        console.log(error)
      })
    },
    ...mapActions([
      'getDetailByName'
    ])
  }
}
</script>

