<template>
  <div class="all">
    <div class="logo">
      <!--<img src="../../assets/logo.jpg" alt="logo" class="logoImg">-->
      <h1 style="color: #fff;font-weight: 400;font-size: 22px;">街镇志愿者后台管理</h1>
    </div>
    <div class="admin">
      <el-dropdown>
      <span class="el-dropdown-link">
        <span style="font-size: 18px;color: #fff">用户名：{{this.$store.state.userData.admin_name}}</span>
        <i class="el-icon-arrow-down el-icon--right"></i>
      </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item @click.native="changePassword">修改密码</el-dropdown-item>
          <el-dropdown-item @click.native="logout">退出登录</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
      <p class="timeLast">上次登录时间：<span>{{this.$store.state.userData.admin_lasttime? this.$store.state.userData.admin_lasttime:'暂无'}}</span></p>
    </div>

    <el-dialog
      title="修改密码"
      :visible.sync="dialogVisible"
      v-if="dialogVisible"
      width="40%"
      :modal-append-to-body='false'
      @close="cancelAdd('form')"
    >
      <el-form ref="form"
               :model="form"
               label-width="180px"
               @submit.native.prevent
               :rules="addRules"
               size="small"
               :label-position="labelPosition"
               :hide-required-asterisk="request"
      >
        <el-form-item label="旧密码" prop="oldpassword">
          <el-input v-model="form.oldpassword" clearable type="password" placeholder="请输入旧密码.."></el-input>
        </el-form-item>
        <el-form-item label="新密码" prop="newpassword">
          <el-input v-model="form.newpassword" type="password" clearable placeholder="请输入新密码.."></el-input>
        </el-form-item>
        <el-form-item label="再次输入新密码" prop="againInput">
          <el-input v-model="form.againInput" type="password" clearable placeholder="请再次输入新密码.."></el-input>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
    <el-button @click="cancelAdd('form')">取 消</el-button>
    <el-button type="primary" @click="submitForm('form')">确 定</el-button>
  </span>
    </el-dialog>
  </div>
</template>

<script>

  export default {
    name: "index",
    data() {
      let user_pwd = (rule, value, callback) => {
        let reg = /^(?![\d]+$)(?![a-zA-Z]+$)(?![^\da-zA-Z]+$).{6,20}$/
        if (!reg.test(value)) {
          callback(new Error('请输入6-20位字符，数字、字母、标点符号（除空格），至少包含以上2种，区分大小写'))
        } else {
          callback()
        }
      }
      let validatePass2 = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请再次输入密码'));
        } else if (value !== this.form.newpassword) {
          callback(new Error('两次输入密码不一致!'));
        } else {
          callback();
        }
      }
      return {
        dialogVisible: false,
        request: false,
        labelPosition: 'left',
        form: {
          oldpassword: '',
          newpassword: '',
          againInput: ''
        },
        addRules: {
          oldpassword: [
            {required: true, message: '请输入旧密码', trigger: 'blur'},
          ],
          newpassword: [
            {required: true, message: '请输入新密码', trigger: 'blur'},
            {validator: user_pwd, trigger: 'blur'}
          ],
          againInput: [
            {required: true, message: '请再次输入密码', trigger: 'blur'},
            {validator: validatePass2, trigger: 'blur'},
          ]
        },
      }
    },
    methods: {
      logout() {
        this.$confirm('确定要退出吗？', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          sessionStorage.clear()
          this.$store.state.token = ''
          this.$message({
            type: 'success',
            message: '退出成功!'
          });
          // 跳转到登录页
          setTimeout(() => {
            this.$router.push('/')
          }, 1000)
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消'
          });
        });
      },
      //新增用户弹窗
      changePassword() {
        this.dialogVisible = true
      },
      //更改密码校验
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            this.onSubmit()
          }
        });
      },
      //发送数据
      onSubmit() {
        this.$axios.post('/modifyPwd', this.form).then(res => {
          if (res.data.code == 20000) {
            this.$alert('修改密码成功', '提示', {
              confirmButtonText: '确定',
              callback: action => {
              }
            });
          } else {
            this.$message.info(res.data.msg)
          }
          this.cancelAdd()
        }).catch(err => {
          this.$message.error('请求失败')
          this.cancelAdd()
        })
      },
      //取消操作重置表单
      cancelAdd() {
        this.dialogVisible = false
        this.$refs['form'].resetFields();
      }
    },
    created() {
    },
    mounted() {
      setInterval(() => {
        this.time = funs.formatDate(new Date().getTime())
      }, 1000)
    }
  }
</script>

<style scoped lang="scss">
  .all {
    width: 100%;
    height: 80px;
    box-sizing: border-box;
    padding-right: 50px;
    background: #000;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .logo {
      display: flex;
      justify-content: space-between;
      align-items: center;
      .logoImg {
        height: auto;
        width: auto;
        max-height: 60px;
        border-radius: 6px;
      }
      h1 {
        margin-left: 20px;
      }
    }
    .admin {
      .timeLast {
        margin-top: 10px;
        color: #9f9f9f;
        font-size: 14px;
      }
    }
  }
</style>
