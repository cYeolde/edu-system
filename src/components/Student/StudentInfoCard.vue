<template>
  <div>
    <h3>个人信息</h3>
    <!-- 学生详细信息表格 -->
    <el-table
        :data=[studentInfo]
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
      <el-table-column label="年级" prop="grade"></el-table-column>
      <el-table-column label="班级" prop="class"></el-table-column>
      <el-table-column label="院系" prop="department"></el-table-column>
      <el-table-column label="专业" prop="major"></el-table-column>
    </el-table>
  </div>
</template>

<script setup lang="ts">
import {reactive, onMounted} from 'vue';
import {ElTable, ElTableColumn} from 'element-plus';

const studentInfo = reactive({
  /**
   * 学号
   * 姓名
   * 性别
   * 出生日期
   * 民族
   * 政治面貌
   * 身份证号
   * 籍贯
   * 年级
   * 班级
   * 院系
   * 专业
   */
  // number: '',
  // name: '',
  // gender: '',
  // birthDate: '',
  // nation: '',
  // politics: '',
  // id: '',
  // birthPlace: '',
  // grade: '',
  // class: '',
  // department: '',
  // major: ''
})

// 请求学生详细信息的函数
const fetchStudentInfo = async () => {
  try {
    const res = await fetch('http://localhost:8080/studentInfo', { // 请根据实际的后端接口地址替换
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    });
    if (!res.ok) {
      console.error('Failed to fetch student information');
    }

    const data = await res.json();

    // 更新studentInfo的值
    Object.assign(studentInfo, data);
  } catch (error) {
    console.error('Error fetching student information:', error);
  }
};

onMounted(fetchStudentInfo);

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