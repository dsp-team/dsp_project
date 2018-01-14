<template>
  <div id="user_center">
     <div class="container">
        <div class="user-info">
          <span class="title">我的信息</span>
        </div>
        <div class="user-name">
          <span class="title-name">用户名</span>
          <span class="name">{{username}}</span>
        </div>
        <div class="user-pass">
          <span class="pass">密码</span>
          <el-input type="password" v-model="newpass" placeholder="请输入新密码" class="change" @input="input()"></el-input>
          <el-button type="primary" @click="updatePass()" >修改密码</el-button>
        </div>
     </div>
  </div>
</template>

<script>
export default {
  name: 'user_center',
  data () {
    return {
      username: sessionStorage.getItem('username'),
      newpass: ''
    }
  },
  mounted () {
      let changePassButton = document.querySelector('.el-button')  
      changePassButton.classList.add("is-disabled")
  },
  methods: {
    input() {
      let changePassButton = document.querySelector('.el-button')  
      let changePassInput = document.querySelector('.el-input__inner')      
      changePassButton.classList.remove("is-disabled")
      if(changePassInput.value == '' ) {
        changePassButton.classList.add("is-disabled")
        changePassButton.classList.add("disabled")
        
      }
    },
    success() {
      const h = this.$createElement;
        this.$notify({
          title: '成功',
          message: '修改密码成功',
          type: 'success'
      });
    },
    fail() {
      const h = this.$createElement;
        this.$notify.error({
          title: '失败',
          message: '修改密码失败',
          type: 'warning'
      });
    },
    updatePass() {
      let username = sessionStorage.getItem('username')
      let newpass = this.newpass
      let that = this
      let changePassInput = document.querySelector('.el-input__inner')
      let changePassButton = document.querySelector('.el-button')   
      if(changePassInput.value == '') {
        // that.fail()
      } else {
          this.axios.post('/api/dsp/auth/changepass', {"username": `${username}`,"newpass": `${newpass}`}).then((response) => {
          if(response.data == true) {
             that.success()    
             changePassInput.value = ""
             changePassButton.classList.add("is-disabled")
            }
          }).catch((error) => {
             that.fail()
          })   
       }
  }
}
}
</script>

<style lang="scss">
@import "./user_center.scss";
</style>
