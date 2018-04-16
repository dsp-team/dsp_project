import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'repo',
  data () {
    return {
      msg: '镜像仓库'
    }
  },
  created: function () {
    this.getRepos()
  },
  computed: {
    ...mapGetters(['repos'])
  },
  methods: {
    ...mapActions(['getRepos', 'deleteServerRepo']),
    deleteRepo (imageName) {
      console.log(imageName)
      this.deleteServerRepo(imageName).then((res) => {
        this.$message({
          showClose: true,
          message: '删除成功',
          type: 'success'
        })
      }).catch((error) => {
        console.log(error)
        this.$message({
          showClose: true,
          message: '删除失败',
          type: 'error'
        })
      })
    }
  }
}
