<template>
  <el-card class="course-card" shadow="hover">
    <div class="course-header">{{ course.name }}</div>
    <div class="course-info">
      <p>{{ course.type }} 学分:{{ course.credit }}</p>
      <p>教师: {{ course.teacher }}</p>
      <p>地点: {{ course.location }}</p>
      <p>时间: {{ course.time }}</p>
      <p>课程容量: {{ course.capacity }}</p>
      <p>已选人数: {{ course.selected_number }}</p>
    </div>
    <el-button @click="handleSelect" type="primary" size="small">选课</el-button>
  </el-card>
</template>

<script setup>
import { defineProps ,defineEmits } from 'vue';

const props = defineProps({
  course: {
    type: Object,
    required: true
  }
});

const emits=defineEmits(['select']);

const handleSelect = () => {
  emits('select', props.course);
};
</script>

<style scoped>
.course-card {
  width: 250px;
  height: 300px;
  padding: 5px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.course-header {
  font-size: 18px;
  font-weight: bold;
}

.course-info {
  font-size: 14px;
  text-align: left;
}
</style>
