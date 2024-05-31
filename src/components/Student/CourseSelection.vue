<template>
  <div class="course-selection">
    <h3>选课</h3>
    <el-row :gutter="20">
      <el-col :span="6" v-for="course in courses" :key="course.id">
        <CourseCard :course="course" @select="handleSelect"/>
      </el-col>
    </el-row>
  </div>
</template>

<script setup>
import {ref} from 'vue';
import {ElRow, ElCol, ElNotification} from 'element-plus';
import CourseCard from './CourseCard.vue';

const courses = ref([
  {
    id: 1,
    name: '计算机网络',
    type: '必修',
    credit: 3,
    teacher: '张老师',
    location: '经信教学楼',
    time: '周一 8:00-10:00',
    capacity: 100,
    selected_number: 50,
  },
  {
    id: 2,
    name: '英语',
    type: '软件系统开发',
    credit: 2,
    teacher: '王老师',
    location: '计算机楼A108',
    time: '周三 14:00-16:00',
    capacity: 50,
    selected_number: 50,
  },
  {
    id: 1,
    name: '计算机网络',
    type: '必修',
    credit: 3,
    teacher: '张老师',
    location: '经信教学楼',
    time: '周一 8:00-10:00',
    capacity: 40,
    selected_number: 30,
  },
  {
    id: 1,
    name: '计算机网络',
    type: '必修',
    credit: 3,
    teacher: '张老师',
    location: '经信教学楼',
    time: '周一 8:00-10:00',
    capacity: 40,
    selected_number: 30,
  }
]);

const selectedCourses = ref([]);

const handleSelect = (course) => {
  if (course.selected_number >= course.capacity) {
    ElNotification({
      title: '选课失败',
      message: '课程已满',
      type: 'error',
    });
  }
      // else if(selectedCourses.value.find(c => c.id === course.id)) {
      //   ElNotification({
      //     title: '选课失败',
      //     message: '课程已选',
      //     type: 'error',
      //   });
  // }
  else if (course.selected_number < course.capacity) {
    course.selected_number++;
    selectedCourses.value.push(course);
    ElNotification({
      title: '选课成功',
      message: '选课成功',
      type: 'success',
    });
  }
};
</script>

<style scoped>
.course-selection {
  padding: 20px;
}
</style>
