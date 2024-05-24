<template>
  <div>
    <h3>成绩单</h3>
    <el-card>
      <el-table :data="courses" border style="width: 100%">
        <el-table-column prop="courseName" label="课程名称"></el-table-column>
        <el-table-column prop="studyTime" label="修读时间"></el-table-column>
        <el-table-column prop="score" label="分数">
          <template v-slot="{ row }:{ row: { score:number } }">
            <span :style="{ color: row.score < 60 ? 'red' : 'black' }">{{ row.score }}</span>
          </template>
        </el-table-column>
        <el-table-column prop="gradePoint" label="绩点"></el-table-column>
        <el-table-column prop="retake" label="是否重修">
          <template v-slot="{ row }:{ row: { retake:boolean } }">
            {{ row.retake ? '是' : '否' }}
          </template>
        </el-table-column>
      </el-table>
    </el-card>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';

const courses = ref([
  {
    courseName: '计算机网络',
    studyTime: '2021-2022学年第一学期',
    score: 90,
    gradePoint: 4.0,
    retake: false,
  },
  {
    courseName: '数据库系统',
    studyTime: '2021-2022学年第一学期',
    score: 100,
    gradePoint: 3.7,
    retake: false,
  },
  {
    courseName: '操作系统',
    studyTime: '2021-2022学年第一学期',
    score: 58,
    gradePoint: 1.0,
    retake: false,
  },
]);

//const courses = ref([]);

// 获取课程数据的方法
const fetchCourses = async () => {


  try {
    const response = await fetch('/api/courses');
    const data = await response.json();
    courses.value = data;
  } catch (error) {
    console.error('Failed to fetch courses', error);
  }
};

onMounted(fetchCourses);
</script>

<style scoped>
table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;
}

th, td {
  border: 1px solid #ddd;
  padding: 8px;
  text-align: left;
}

th {
  background-color: #f2f2f2;
}
</style>