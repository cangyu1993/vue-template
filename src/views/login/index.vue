<template>
  <!--登录页-->
  <div class="loginPage">
    <h1 class="title_frist">街镇志愿者</h1>
    <div class="say_box">
      <div class="login_box">
        <h2 class="login_name">管理后台登陆</h2>
        <el-form :model="form"
                 status-icon
                 :rules="rules"
                 ref="form"
                 @submit.native.prevent
                 class="demo-ruleForm"
                 :label-position="labelPosition"
                 :hide-required-asterisk="asterisk"
        >
          <el-form-item prop="admin_name">
            <el-input v-model="form.admin_name" clearable placeholder="请输入账号.." class="input_"></el-input>
          </el-form-item>
          <el-form-item prop="admin_pwd">
            <el-input type="password" v-model="form.admin_pwd"
                      clearable placeholder="请输入密码.."
                      class="input_"
                      @keyup.enter.native="submitForm('form')"
            ></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="danger"
                       @click="submitForm('form')"
                       @keyup.enter.native="submitForm('form')"
                       :loading="loading_"
                       class="btn">登录
            </el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "index",
    data() {
      return {
        asterisk: true,
        labelPosition: 'left',
        loading_: false,
        form: {
          admin_name: '',
          admin_pwd: ''
        },
        rules: {
          admin_name: [
            {required: true, message: '请输入账号', trigger: 'blur'}
          ],
          admin_pwd: [
            {required: true, message: '请输入密码', trigger: 'blur'}
          ]
        }
      }
    },
    methods: {
      submitForm(form) {
        this.$refs[form].validate((valid) => {
          if (valid) {
            this.login();
          } else {
            return false;
          }
        })
      },
      login() {
        this.loading_ = true
        this.$axios.post('/login', this.form).then(res => {
          if (res.data.code = 20000) {
            this.$message.success('登录成功')
            this.$store.commit('USER_DATA', res.data.data)
            this.$store.commit('SAVE_TOKEN', res.data.data.admin_token)
            setTimeout(() => {
              this.$router.push('/allPages')
            }, 1000)
          } else {
            this.$message.info(res.data.msg)
          }
          this.loading_ = false
        }).catch(err => {
          this.$message.error('请求出错,请确认密码是否正确或账号被禁用，请联系管理员')
          this.loading_ = false
        })
      }
    },
  }
</script>

<style scoped lang="scss">
  .loginPage {
    height: 100vh;
    width: 100vw;
    background: #202533;
    position: relative;
    .title_frist{
      font-size: 28px;
      color: #fff;
      font-weight: 400;
      text-align: center;
      padding-top: 150px;
    }
    .login_box{
      width: 390px;
      height: 400px;
      box-sizing: border-box;
      background: #fff;
      border-radius: 6px;
      margin: 30px auto;
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: center;
      .login_name{
        font-size: 20px;
        color: #5b5b5b;
        padding: 30px 0;
      }
      .demo-ruleForm{
        padding-top: 20px;
        width: 80%;
        .btn{
          width: 100%;
        }
        .input_{
          background-color: #ccc;
        }
      }
    }
  }
</style>
