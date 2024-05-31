<template>
  <div>
    <h3>成绩单</h3>
    <el-table :data="studentGrades" border style="width: 100%">
      <el-table-column prop="courseName" label="课程名称" width="200"></el-table-column>
      <el-table-column prop="studyTime" label="修读时间" width="300"></el-table-column>
      <el-table-column prop="score" label="分数">
        <template v-slot="{ row }:{ row: { score:number } }">
          <span :style="{ color: row.score < 60 ? 'red' : 'black' }">{{ row.score }}</span>
        </template>
      </el-table-column>
      <el-table-column prop="gradePoint" label="绩点"></el-table-column>
      <el-table-column prop="retake" label="是否重修">
        <template v-slot="{ row }:{ row: { retake:boolean } }">
          <span>{{ row.retake ? '是' : '否' }}</span>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script setup lang="ts">
import {reactive, onMounted} from 'vue';

const studentGrades = reactive([
  {
    /**
     * 课程名称
     * 修读时间
     * 分数
     * 绩点
     * 是否重修
     */
    // courseName: '',
    // studyTime: '',
    // score: '',
    // gradePoint: '',
    // retake: '',
  }
]);

const fetchStudentGrades = async () => {
  try {
    const res = await fetch('http://localhost:8080/studentGrades', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    });
    if(!res.ok) {
      console.error('Failed to fetch student grades');
    }

    const data = await res.json();
    Object.assign(studentGrades, data);
  }catch (error) {
    console.error('Failed to fetch student grades');
  }
};

onMounted(fetchStudentGrades);
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