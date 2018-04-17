import { mapGetters, mapActions } from 'vuex'

export default {
  data () {
    return {
      multipleSelection: [],
      deleteAppsForm: {
        apps: []
      }

    }
  },
  created: function () {
    this.getApplys()
  },
  computed: {
    ...mapGetters(['applys'])
  },
  methods: {
    ...mapActions([
      'getApplys',
      'deleteServerApps'
    ]),
    // 删除应用
    handleSelectionChange (val) {
      this.multipleSelection = val
      this.deleteAppsForm.apps = [] // 没选一个或者取消选择时 让app[]为空的 因为每次选择或取消选中 都会触发一次遍历
      this.multipleSelection.forEach(element => {
        console.log(element.id)
        this.deleteAppsForm.apps.push(element.id)
      })
    },
    deleteApps () {
      console.log(this.deleteAppsForm)
      this.deleteServerApps(this.deleteAppsForm).then((res) => {
        this.$message({
          showClose: true,
          message: '删除应用成功',
          type: 'success'
        })
      }).catch((error) => {
        console.log(error)
        this.$message({
          showClose: true,
          message: '删除应用失败',
          type: 'error'
        })
      })
    }
  }
}
