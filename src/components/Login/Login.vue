<template>
  <el-card style="width: 400px" shadow="always">
    <el-form :model="form" label-width="auto" style="max-width: 600px">
      <!-- 学号/工号输入框 -->
      <el-form-item label="学号/工号" prop="username">
        <el-input v-model="form.username" placeholder="请输入用户名" />
      </el-form-item>

      <!-- 密码输入框 -->
      <el-form-item label="密码" prop="password">
        <el-input v-model="form.password" placeholder="请输入密码" type="password" />
      </el-form-item>

      <!-- 身份单选框 -->
      <el-form-item label="身份" prop="identity">
        <el-radio-group v-model="form.identity">
          <el-radio label="student">学生</el-radio>
          <el-radio label="dean">教务</el-radio>
        </el-radio-group>
      </el-form-item>

      <!-- 登录按钮 -->
      <el-form-item>
        <el-row justify="center">
          <el-col>
            <el-button type="primary" style="width: 370px;" @click="$router.push(getIdentify())">登录</el-button>
          </el-col>
        </el-row>
      </el-form-item>
    </el-form>
  </el-card>
</template>

<script setup>
import { reactive } from 'vue'

const form = reactive({
  username: '',
  password: '',
  identity: 'student'
})

const getIdentify = () => {
  return form.identity === 'student' ? '/student' : '/dean'
}

</script>

<style scoped>

</style>
