<script setup lang="ts">
import { reactive, onMounted } from 'vue'
import axios from 'axios'


// 获取数据并写入表单
    const infoForm = reactive({
      name: '',
      id: '',
      password: '',
      address: '安徽',
      date: '2000-01-01',
      sex:'',

    })

const options = [
  {
    value: 'man',
    label: '男',
  },
  {
    value: 'woman',
    label: '女',
  },
]
const onLogout = () => {
  console.log('onLogout!')
}

const onEdit = () => {
  console.log('onLogout!')
}

</script>

<template>
<!--管理员设置需要包含的东西--->
  <!-------
  name(姓名)：
  id（学号/工号）：
  password（密码）：
  date（出生日期）：
  addresss（居住地）：
  sex（性别）：
  Edit（修改信息）：button
  logout（注销/登出）：button
  ------->
<!--界面信息可修改，直接从数据库读取信息到el-form表单，修改后直接渲染新的信息-->


  <div>
    <h3>
      管理员设置
    </h3>
  </div>

  <el-form :model="infoForm" label-width="auto" style="max-width: 600px">
    <el-form-item label="姓名">
      <el-input v-model="infoForm.name" placeholder="infoForm.name" />
    </el-form-item>
    <el-form-item label="工号">
      <el-input v-model="infoForm.id" placeholder="infoForm.id" />
    </el-form-item>
    <el-form-item label="密码">
      <el-input v-model="infoForm.password" placeholder="infoForm.password"/>
    </el-form-item>
    <el-form-item label="居住地址">
      <el-select v-model="infoForm.address" placeholder="infoForm.address">
        <el-option label="Zone one" value="shanghai" />
        <el-option label="Zone two" value="beijing" />
      </el-select>
    </el-form-item>
    <el-form-item label="出生日期"  style="width: 600px">
      <el-col :span="11">
        <el-date-picker
            v-model="infoForm.date"
            type="date"
            placeholder="infoForm.date"
            style="width: 100%"
        />
      </el-col>
    </el-form-item>
    <el-form-item label="性别">
      <el-select
          v-model="infoForm.sex"
          placeholder="infoForm.sex"
          size="large"
          style="width: 240px"
      >
        <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
        />
      </el-select>
    </el-form-item>
     <el-form-item  style="display: flex; justify-content: center;">
       <el-button type="primary" @click="onLogout">登出</el-button>
       <el-button type="primary" @click="onEdit">修改信息</el-button>
     </el-form-item>
  </el-form>

</template>

<style scoped>

</style>