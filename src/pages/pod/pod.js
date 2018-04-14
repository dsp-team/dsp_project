import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'pod',
  data () {
    return {
      multipleSelection: [],
      deleteForm: {
        name: '',
        image: '',
        ip_port: '',
        state: '',
        status: ''
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
    ...mapActions(['getPods'])
  }
}
