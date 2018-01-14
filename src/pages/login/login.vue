<template>
    <div class="login-page">
        <div class="login-container">
            <div class="login-slideshow">
                <img class="login-bg" src="../../assets/bg_1.png" alt="">
            </div>
            <div class="login-main">
                <div class="logo">
                    <img class="login-log" src="../../assets/logo.png" alt="">
                </div>
                <div class="perspective-box">
                    <div class="box-container">
                        <h2 class="title">Docker Simple Platform</h2>
                        <h4 class="subtitle">简易云平台</h4>
                        <hr class="hr-gradient">
                        <el-form :model="ruleForm2" status-icon :rules="rules2" ref="ruleForm2" label-width="100px" class="demo-ruleForm">
                            <el-form-item label="用户名" prop="username" >
                                <el-input v-model.number="ruleForm2.username" placeholder="请输入账号"></el-input>
                            </el-form-item>
                            <el-form-item label="密码" prop="password">
                                <el-input type="password" v-model="ruleForm2.password" auto-complete="off"  placeholder="请输入密码" @keyup.enter.native="submitForm('ruleForm2')"></el-input>
                            </el-form-item>                           
                            <el-form-item>
                                <el-button type="primary" @click="submitForm('ruleForm2')" >登录</el-button>
                                <el-button @click="resetForm('ruleForm2')">重置</el-button>
                            </el-form-item>
                        </el-form>
                    </div>
                    {{ruleForm2}}
                </div>
            </div>
            <footer class="login-footer">Docker Simple Platform 1.0 | Docker 简易云平台</footer>
        </div>
    </div>
</template>

<script>
 export default {
    data() {
      var checkName = (rule, value, callback) => {
        if (!value) {
          return callback(new Error('用户名不能为空'));
        }
        callback();
     
      };
      var validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入密码'));
        } 
       callback();
       
      };
      return {
        ruleForm2: {
          username: '',
          password: ''
        },
        rules2: {
          username: [
            { validator: checkName, trigger: 'blur' }
          ],
          password: [
            { validator: validatePass, trigger: 'blur' }
          ]
        }
      };
    },
    methods: {
       open() {
        const h = this.$createElement;
          this.$notify.error({
          title: '错误',
          message: '请输入正确的用户名密码'
        });
      },
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {                 
        if (valid) {
          let that = this        
          this.axios.post('/api/dsp/auth/login',this.ruleForm2).then((response) => {
              let flag = response.data
              if(flag == true) {
                sessionStorage.username = this.ruleForm2.username
                this.$router.push({name: 'home'})
                } else {
                  that.open()
                }
             }).catch((error) => {
                that.open()
             })   
        } else {
            that.open()
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();   
      }
    }
 }
</script>


<style lang="scss">
@import "./login.scss";
</style>

