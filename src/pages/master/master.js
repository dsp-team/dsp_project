import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'master',
  data () {
    return {
      msg: '主机',
      dialogVisible: false, // 1 dialog
      formLabelWidth: '40px',
      form: {
        node_ip: '',
        node_port: ''
      }
    }
  },
  created: function () {
    this.getMasters()
  },
  computed: {
    ...mapGetters(['masters'])
  },
  methods: {
    // 1 dialog
    // handleClose (done) {
    //   this.$confirm('确认关闭？')
    //     .then(_ => {
    //       done()
    //     })
    //     .catch(_ => {})
    // },
    //
    // 2 接入主机
    insertPort () {
      this.insertPorts(this.form).then((res) => {
        this.$message({
          type: 'success',
          message: `操作成功`
        })
      }).catch((error) => {
        console.log(error)
        this.$message({
          type: 'error',
          message: `操作失败`
        })
      })
    },
    ...mapActions(['getMasters', 'insertPorts'])
  }
}
