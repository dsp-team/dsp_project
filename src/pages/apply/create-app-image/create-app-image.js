export default {
  data () {
    return {
      step: 0
    }
  },
  methods: {
    next () {
      this.active++
      // if (this.active++ > 2) this.active = 0
    }
  }
}
