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
    // 2 接入主机
    insertPort () {
      this.insertMaster(this.form).then((res) => {
        this.$message({
          showClose: true,
          type: 'success',
          message: `添加主机成功`
        })
      }).catch((error) => {
        console.log(error)
        this.$message({
          showClose: true,
          type: 'error',
          message: `添加主机失败`
        })
      })
    },
    //  删除主机
    deleteMaster (index, row) {
      console.log(row._address)
      this.deleteMasters(row._address).then((res) => {
        this.$message({
          showClose: true,
          type: 'success',
          message: `删除主机成功`
        })
      }).catch((error) => {
        console.log(error)
        this.$message({
          showClose: true,
          type: 'success',
          message: `删除主机失败`
        })
      })
    },
    ...mapActions(['getMasters', 'insertMaster', 'deleteMasters'])
  }
}
