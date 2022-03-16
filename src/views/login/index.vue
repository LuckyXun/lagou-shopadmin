<template>
  <div class="login-container">
    <el-form
      class="login-form"
      ref="form"
      size="default"
    >
      <div class="login-form__header">
        <img
          class="login-logo"
          src="@/assets/login_logo.png"
          alt="拉勾心选"
        >
      </div>
      <el-form-item prop="account">
        <el-input
          placeholder="请输入用户名"
          v-model="user.account"
          :prefix-icon="User"
        />
      </el-form-item>
      <el-form-item prop="pwd">
        <el-input
          type="password"
          placeholder="请输入密码"
          v-model="user.pwd"
          :prefix-icon="Lock"
        />
      </el-form-item>
      <el-form-item prop="imgcode">
        <div class="imgcode-wrap">
          <el-input
            v-model="user.imgCode"
            placeholder="请输入验证码"
            :prefix-icon="Key"
          />
          <img
            class="imgcode"
            alt="验证码"
          >
        </div>
      </el-form-item>
      <el-form-item>
        <el-button
          class="submit-button"
          type="primary"
          native-type="submit"
        >
          登录
        </el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts" setup>
import { reactive } from 'vue'
import { User, Lock, Key } from '@element-plus/icons-vue'

const user = reactive({
  account: 'admin',
  pwd: '123456',
  imgCode: ''
})

</script>

<style lang="scss" scoped>
.login-container {
  min-width: 400px;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #2d3a4b;
}

.login-form {
  padding: 30px;
  border-radius: 6px;
  background: #fff;
  min-width: 350px;
  .login-form__header {
    display: flex;
    justify-content: center;
    align-items: center;
    padding-bottom: 30px;
  }
.el-input__prefix {

    left: 6px;
    top: 5px;
}

  .el-form-item:last-child {
    margin-bottom: 0;
  }

  .login__form-title {
    display: flex;
    justify-content: center;
    color: #fff;
  }

  .submit-button {
    width: 100%;
  }

  .login-logo {
    width: 271px;
    height: 74px;
  }
  .imgcode-wrap {
    display: flex;
    align-items: center;
    .imgcode {
      height: 37px;
    }
  }
}
</style>F
