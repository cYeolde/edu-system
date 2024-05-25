<template>
  <div class="navBar">
    <el-menu
        default-active="student-info"
        class="el-menu-vertical-demo"
        :collapse="isCollapse"
    >
      <el-menu-item @click="toggleCollapse">
        <el-icon :class="['menu-icon',{'expand':!isCollapse}]">
          <More/>
        </el-icon>
      </el-menu-item>
      <el-menu-item index="student-info" @click="handleMenuSelect('student/student-info')">
        <el-icon>
          <User/>
        </el-icon>
        <template #title>个人信息</template>
      </el-menu-item>
      <el-menu-item index="grades" @click="handleMenuSelect('student/student-grades')">
        <el-icon>
          <Check/>
        </el-icon>
        <template #title>成绩单</template>
      </el-menu-item>
      <el-menu-item index="course-selection" @click="handleMenuSelect('student/student-courses')">
        <el-icon>
          <Opportunity/>
        </el-icon>
        <template #title>选课</template>
      </el-menu-item>
      <el-menu-item index="course-schedule" @click="handleMenuSelect('student/student-course-schedule')">
        <el-icon>
          <Reading/>
        </el-icon>
        <template #title>课表</template>
      </el-menu-item>
      <el-menu-item index="exam-schedule" @click="handleMenuSelect('student/student-exam-schedule')">
        <el-icon>
          <Calendar/>
        </el-icon>
        <template #title>考试安排</template>
      </el-menu-item>
      <el-menu-item index="notifications" @click="handleMenuSelect('student/student-notifications')">
        <el-icon>
          <Notification/>
        </el-icon>
        <template #title>通知</template>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script lang="ts" setup>
import {More, User, Check, Opportunity, Reading, Calendar, Notification} from '@element-plus/icons-vue'
import {useRouter} from 'vue-router'
import {ref} from 'vue'

const isCollapse = ref(true);
const router = useRouter();
const handleMenuSelect = (index: string) => {
  const route = `/${index}`;
  router.push(route);
};
const toggleCollapse = () => {
  isCollapse.value = !isCollapse.value
};
</script>

<style scoped>
.navBar {
  position: fixed;
  top: 0;
  left: 0;
  width: 180px;
  height: 100vh;
  transition: width 0.3s ease;
  z-index: 1000;
}

.menu-icon {
  cursor: pointer;
  transition: transform 0.3s ease;
}

.menu-icon.expand {
  transform: rotate(90deg);
}
</style>
