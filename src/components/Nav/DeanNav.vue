<template>
  <div class="navBar">
    <el-menu
        default-active="grades-management"
        class="el-menu-vertical-demo"
        :collapse="isCollapse"
        @open="handleOpen"
        @close="handleClose"
    >
      <el-menu-item @click="toggleCollapse">
        <el-icon :class="['menu-icon',{'expand':!isCollapse}]">
          <More/>
        </el-icon>
      </el-menu-item>
      <el-menu-item index="grades-management" @click="handleMenuSelect('dean/grades-management')">
        <el-icon>
          <Check/>
        </el-icon>
        <template #title>个人信息</template>
      </el-menu-item>
      <el-menu-item index="course-management" @click="handleMenuSelect('dean/course-management')">
        <el-icon>
          <Reading/>
        </el-icon>
        <template #title>课程管理</template>
      </el-menu-item>
      <el-menu-item index="notification-management" @click="handleMenuSelect('dean/notification-management')">
        <el-icon>
          <Notification/>
        </el-icon>
        <template #title>通知管理</template>
      </el-menu-item>
      <el-menu-item index="exam-management" @click="handleMenuSelect('dean/grades-management')">
        <el-icon>
          <Calendar/>
        </el-icon>
        <template #title>考试管理</template>
      </el-menu-item>
      <el-menu-item index="" @click="handleMenuSelect('dean/grades-management')">
        <el-icon>
          <Connection/>
        </el-icon>
        <template #title>选课名单</template>
      </el-menu-item>
      <el-sub-menu index="" @click="handleMenuSelect('dean/grades-management')">
        <template #title>
          <el-icon>
            <User/>
          </el-icon>
          <span>师生信息</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="teacher-info">教师信息</el-menu-item>
          <el-menu-item index="student-info">学生信息</el-menu-item>
        </el-menu-item-group>
      </el-sub-menu>
      <el-menu-item index="admin">
        <el-icon>
          <Setting/>
        </el-icon>
        <template #title>管理员</template>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script lang="ts" setup>
import {More, User, Check, Connection, Reading, Calendar, Notification, Setting} from '@element-plus/icons-vue'
import {useRouter} from 'vue-router'
import {ref} from 'vue'

const isCollapse = ref(true)
const router = useRouter()
const handleMenuSelect = (index: string) => {
  const route = `/${index}`
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
.navBar {
  position: fixed;
  top: 0;
  left: 0;
  width: 180px;
  height: 100vh;
  z-index: 1000;
}
</style>