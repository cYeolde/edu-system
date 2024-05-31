<template>
  <el-card style="width: 400px" shadow="always">
    <el-form :model="loginForm" label-width="auto" style="max-width: 600px">
      <!-- 学号/工号输入框 -->
      <el-form-item label="学号/工号" prop="username">
        <el-input v-model="loginForm.username" placeholder="请输入用户名"/>
      </el-form-item>

      <!-- 密码输入框 -->
      <el-form-item label="密码" prop="password">
        <el-input v-model="loginForm.password" placeholder="请输入密码" type="password"/>
      </el-form-item>

      <!-- 身份单选框 -->
      <el-form-item label="身份" prop="identity">
        <el-radio-group v-model="loginForm.identity">
          <el-radio label="0">学生</el-radio>
          <el-radio label="1">教务</el-radio>
        </el-radio-group>
      </el-form-item>

      <!-- 登录按钮 -->
      <el-form-item>
        <el-row justify="center">
          <el-col>
            <el-button type="primary" style="width: 370px;" @click="handleLogin">登录</el-button>
          </el-col>
        </el-row>
      </el-form-item>
    </el-form>
  </el-card>
</template>

<script setup>
import {reactive} from 'vue'

let loginForm = reactive({
  /**
   * 用户名
   * 密码
   * 身份 0-学生，1-教务
   */
  username: '',
  password: '',
  identity: '0',
})

const handleLogin = async () => {
  const res = await fetch('http://localhost:8080/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(loginForm)
  })
  if (!res.ok) {
    console.error('Failed to login');
  }

  const data = await res.json()

  if (data.identity === 0) {
    // 学生登录成功
    router.push('/student')
  } else {
    // 教务登录成功
    router.push('/dean')
  }
}


</script>

<style scoped>

</style>
