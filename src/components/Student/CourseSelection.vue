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
import {ref, onMounted} from 'vue';
import {ElRow, ElCol, ElNotification} from 'element-plus';
import CourseCard from './CourseCard.vue';

const courses = ref([
      /**
       * 课程id
       * 课程名称
       * 学分
       * 教师
       * 地点
       * 时间
       * 课程容量
       * 已选人数
       */
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
      }
    ]
);

// 已选课程
const selectedCourses = ref([]);

const fetchCourseToSelect = async () => {
  try {
    const res = await fetch('http://localhost:8080/courseToSelect', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    });
    if (!res.ok) {
      console.error('Failed to fetch course to select');
    }
    courses.value = await res.json();
  } catch (error) {
    console.error('Failed to fetch course to select', error);
  }
};

onMounted(fetchCourseToSelect);

const handleSelect = (course) => {
  if (course.selected_number >= course.capacity) {
    ElNotification({
      title: '选课失败',
      message: '课程已满',
      type: 'error',
    });
  } else if (course.selected_number < course.capacity) {
    course.selected_number++;
    selectedCourses.value.push(selectedCourses); //加入已选列表
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
