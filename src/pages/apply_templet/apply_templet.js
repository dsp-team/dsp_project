// import axios from 'axios'
// import $ from 'jquery'
import { mapGetters, mapActions } from 'vuex'
import dialog from '../dialogs/add_templet.vue'

export default {
  components: {
    dialog
  },
  data () {
    return {
      // dialog: false
      title: '创建应用模板',
      dialogVisible: false
    }
  },
  created: function () {
    this.find()
    this.zhuji()
  },
  computed: {
    ...mapGetters(['templets'])
  },
  methods: {
    // create_templet: function () {
    //   this.dialog = true
    //   this.title = '创建模板'
    // },
    ...mapActions([
      'find',
      'zhuji'
    ])
  }
}
