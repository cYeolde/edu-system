<template>
  <div>
    <h3>个人信息</h3>
      <!-- 学生详细信息表格 -->
      <el-table
          :data="detailedStudentInfo"
          stripe
          border
          style="width: 100%">
        <el-table-column label="学号" prop="number"></el-table-column>
        <el-table-column label="姓名" prop="name"></el-table-column>
        <el-table-column label="性别" prop="gender"></el-table-column>
        <el-table-column label="出生日期" prop="birthDate"></el-table-column>
        <el-table-column label="民族" prop="nation"></el-table-column>
        <el-table-column label="政治面貌" prop="status"></el-table-column>
        <el-table-column label="身份证号" prop="id"></el-table-column>
        <el-table-column label="籍贯" prop="birthPlace"></el-table-column>
        <el-table-column label="年级" prop="grade"></el-table-column>、
        <el-table-column label="班级" prop="class"></el-table-column>
        <el-table-column label="院系" prop="department"></el-table-column>
        <el-table-column label="专业" prop="major"></el-table-column>
      </el-table>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { ElTable, ElTableColumn } from 'element-plus';

// 学生基本信息
const studentInfo = ref({

});

// 学生详细信息数据（假数据，实际需根据业务获取）
const detailedStudentInfo = ref([

]);

// 模拟获取学生个人信息的函数
const fetchStudentInfo = () => {
  // 模拟异步获取学生信息
  setTimeout(() => {
    studentInfo.value = {
      name: '张三',
      studentId: '20230001',
      class: '高三一班',
      contact: '13812345678'
      // 其他个人信息
    };
  }, 500); // 延迟 500ms 模拟请求耗时
};

// 在组件挂载后获取学生个人信息
onMounted(() => {
  fetchStudentInfo();
});
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