<template>
  <div class="box-page">
    <div class="top">
      <img class="cha" @click="router.push('/')" src="../assets//icon_9k77fcxlhlt/cha.svg" alt="" />
      <p class="deng">登录</p>
    </div>
    <van-form @submit="onSubmit">
      <van-cell-group inset>
        <van-field
          v-model="LoginDate.account"
          name="手机号"
          placeholder="请输入手机号"
          :rules="[{ required: true, message: '请填写手机号' }]"
        />
        <van-field
          v-model="LoginDate.password"
          type="password"
          name="密码"
          placeholder="请输入密码"
          :rules="[{ required: true, message: '请填写密码' }]"
        />
      </van-cell-group>
      <div style="margin: 16px">
        <van-button block type="primary" native-type="submit"> 登录 </van-button>
      </div>
    </van-form>
    <div class="buttom">
      <span>账号注册</span>
      <span>找回密码</span>
    </div>
    <div class="login-info">
      Copyright © 2017-2022 ixook.com 版权所有<br />
      <a href="https://beian.miit.gov.cn">苏ICP备14015141号</a>
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue'
import { LoginApi } from '@/utils/index'
import type { loginType } from '@/types/login'
import router from '../router/index'
import { showToast } from 'vant'
const LoginDate = reactive<loginType>({
  account: '',
  password: ''
})
const onSubmit = () => {
  LoginApi(LoginDate).then((res) => {
    console.log(res)

    if (res.code == 200) {
      localStorage.setItem('token', res.data.token)
      router.push('/')
      showToast(res.message)
    } else {
      showToast(res.message)
    }
  })
}
</script>

<style lang="scss" scoped>
.box-page {
  padding: 10px;
}

.cha {
  width: 20px;
}

.deng {
  font-size: 20px;
  font-weight: 600;
  margin: 45px 30px;
}
.buttom {
  padding: 2px 19px;
  display: flex;
  justify-content: space-between;
}
.login-info {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 25px;
  line-height: 20px;
  color: #aaa;
  font-size: 14px;
  text-align: center;
  a {
    color: #aaa;
  }
}
</style>
