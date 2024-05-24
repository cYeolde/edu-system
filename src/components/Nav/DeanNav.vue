<template>
  <div class="navBar">
    <h3 class="mb-2">教务管理</h3>
    <el-menu
        default-active="student-info"
        class="el-menu-vertical-demo"
        :collapse="isCollapse"
        @click="handleMenuSelect"
        @open="handleOpen"
        @close="handleClose"
    >
      <el-menu-item @click="toggleCollapse">
        <el-icon :class="['menu-icon',{'expand':!isCollapse}]">
          <More />
        </el-icon>
      </el-menu-item>
      <el-menu-item index="1">
        <el-icon><Check /></el-icon>
        <span>成绩管理</span>
      </el-menu-item>
      <el-menu-item index="2">
        <el-icon><Reading /></el-icon>
        <span>课程管理</span>
      </el-menu-item>
      <el-menu-item index="3">
        <el-icon><Notification /></el-icon>
        <span>通知管理</span>
      </el-menu-item>
      <el-menu-item index="4">
        <el-icon><Calendar /></el-icon>
        <span>考试管理</span>
      </el-menu-item>
      <el-menu-item index="5">
        <el-icon><Connection /></el-icon>
        <span>选课名单</span>
      </el-menu-item>
      <el-sub-menu index="6">
        <template #title>
          <el-icon><User /></el-icon>
          <span>师生信息</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="7-1">教师信息</el-menu-item>
          <el-menu-item index="7-2">学生信息</el-menu-item>
        </el-menu-item-group>
      </el-sub-menu>
      <el-menu-item index="7">
        <el-icon><Setting /></el-icon>
        <span>管理员</span>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script lang="ts" setup>
import { User, Check, Connection, Reading, Calendar, Notification,Setting } from '@element-plus/icons-vue'
import { useRouter } from 'vue-router'
import { ref } from 'vue'

const isCollapse = ref(true)
const handleMenuSelect = (index: string) => {
  const route=`/${index}`
  const router = useRouter()
  router.push(route)
}
const toggleCollapse = () => {
  isCollapse.value = !isCollapse.value
}
const handleOpen = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
const handleClose = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
</script>

<style scoped>
.navBar{
  position: fixed;
  top: 0;
  left: 0;
  width: 180px;
  height: 100vh;
  z-index: 1000;
}
</style>