import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'pod',
  data () {
    return {
      multipleSelection: [],
      // 删除容器的表单
      deleteForm: {
        name: '',
        image: '',
        ip_port: '',
        state: '',
        status: ''
      },
      dialogVisible: false,
      formLabelWidth: '80px', // 添加容器对话框表单的label宽度
      createPodForm: { // 创建容器时表单
        image: '',
        command: '',
        exports: ''
      },
      // 表单验证
      rules: {
        image: [
          {required: true, message: '镜像名称不能为空', trigger: 'blur'}
        ],
        command: [
          {required: true, message: '启动命令不能为空', trigger: 'blur'},
          {
            pattern: /^(\/([0-9a-zA-Z]+))+/,
            message: '请输入正确的路径',
            trigger: 'blur'
          }
        ],
        exports: [
          {required: true, message: '映射端口不能为空', trigger: 'blur'},
          {
            pattern: /^\d{4}:(\d{1,})+/,
            message: '请输入正确的映射端口',
            trigger: 'blur'
          }
        ]
      }
    }
  },
  created: function () {
    this.getPods()
  },
  computed: {
    ...mapGetters(['pods'])
  },
  methods: {
    // 添加容器对话框的删除export的input
    // removeExport (item) {
    //   var index = this.createPodForm.domains.indexOf(item)
    //   if (index !== -1) {
    //     this.createPodForm.domains.splice(index, 1)
    //   }
    // },
    // addExport () {
    //   this.createPodForm.domains.push({
    //     exports: ''
    //   })
    // },
    //  取消弹框
    callOff () {
      this.dialogVisible = false
      this.$refs.relCreatePod.resetFields()
    },
    // 创建容器
    createPod () {
      console.log(this.createPodForm)
      this.$refs.relCreatePod.validate((valid) => {
        if (valid) {
          this.createPodServer(this.createPodForm).then((res) => {
            this.$message({
              showClose: true,
              type: 'success',
              message: `添加容器成功`
            })
            this.dialogVisible = false
            this.$refs.relCreatePod.resetFields()
          }).catch((error) => {
            console.log(error)
            this.$message({
              showClose: true,
              type: 'error',
              message: `添加容器失败`
            })
          })
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    ...mapActions(['getPods', 'createPodServer'])
  }
}
