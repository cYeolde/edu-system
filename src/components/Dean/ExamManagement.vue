<script setup lang="ts">

import Exam_manage from "@/components/Dean/Exam_manage.vue";
import {ref, reactive} from 'vue'
import {Search, Upload, Download, EditPen} from '@element-plus/icons-vue'


const examManageRef = ref()

const formInline = reactive({
  user: '',
  region: '',
  date: '',
})
const onEdit = (row: any) => {
  examManageRef.value.open(row)
}
const onSearch = () => {
  console.log('正在搜索')
}
const onUpload = () => {
  console.log('正在导入数据')
}
const onAllocated = () => {
  console.log('分配考场')
}
const onDownload = () => {
  console.log('下载考场信息')
}

const onSchedule = () => {
  examManageRef.value.open({})

}

//准备数据
// const defaultData = [
//   {
//     student_id: '',
//     name: '',
//     majority: '',
//     course_id: '111231',
//     subject_category: '',
//     state: true,
//     exam_venues: '',
//     exam_time: ''
//   },
// ]
const examData = [
  {
    name: '数据库原理',
    teacher: '张老师',
    major: '计算机',
    course_id: '1000109',
    state: true,
    exam_venues: '经信教学楼-B1',
    exam_time: '2016-05-02'
  },
  {
    name: '计算机网络',
    teacher: '张老师',
    major: '计算机',
    course_id: '111231',
    state: true,
    exam_venues: '计算机楼-A108',
    exam_time: '2016-05-02'
  },
  {
    name: '计算机网络',
    teacher: '张老师',
    major: '计算机',
    course_id: '111231',
    state: false,
    exam_venues: '',
    exam_time: ''
  },
  {

    name: '计算机网络',
    teacher: '张老师',
    major: '计算机',
    course_id: '111231',
    state: false,
    exam_venues: '',
    exam_time: ''
  },
  {
    name: '计算机网络',
    teacher: '张老师',
    major: '计算机',
    course_id: '111231',
    state: false,
    exam_venues: '',
    exam_time: ''
  }
]


const onSuccess = () => {

}

//获取通知列表...
</script>


<template>
  <!--考试管理-->
  <!--
  考试的时间，课程，地点
  主界面：教学班的考试，（课程编号，课程名，时间，地点，是否已安排考试，学科类别，授课教师）
        查询考生的考试：
        查询某个教学班的考试：
        安排考试，选择考试地点，考试时间
  考试的添加，修改，删除，查询

  -->
  <div>
    <h3>考试管理</h3>
  </div>
  <el-form :inline="true" :model="formInline" class="demo-form-inline">
    <el-form-item>
      <el-select
          v-model="formInline.region"
          placeholder="请选择是否已分配考场"
          clearable
      >
        <el-option label="已分配考场" value="room_allocated"/>
        <el-option label="未分配考场" value="room_unallocated"/>
      </el-select>
      <el-button type="primary" :icon="Search" @click="onSearch">搜索</el-button>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="onUpload">
        导入数据
        <el-icon class="el-icon--right">
          <Upload/>
        </el-icon>
      </el-button>
      <el-button type="primary" @click="onAllocated">
        分配考场
        <el-icon class="el-icon--right">
          <EditPen/>
        </el-icon>
      </el-button>
      <el-button type="primary" @click="onDownload">
        下载考场信息
        <el-icon class="el-icon--right">
          <Download/>
        </el-icon>
      </el-button>
    </el-form-item>
  </el-form>
  <!--表格信息-->
  <el-table :data="examData" style="width: 100%">
    <el-table-column fixed prop="name" label="课程" width="150"/>
    <el-table-column prop="teacher" label="授课教师" width="120"/>
    <el-table-column prop="course_id" label="课程代码" width="120"/>
    <el-table-column prop="major" label="学科类别" width="120"/>
    <el-table-column prop="state" label="是否安排考试" @click="onSchedule" width="120">
      <template #default="scope">
        <el-switch v-model="scope.row.state"/>
      </template>
    </el-table-column>
    <el-table-column prop="exam_venues" label="考试地点" width="120"/>
    <el-table-column prop="exam_time" label="考试时间" width="120"/>
    <el-table-column fixed="right" label="操作" width="120">
      <template #default="scope">
        <el-button link type="primary" size="small" @click="onEdit( scope.row )">编辑</el-button>
      </template>
    </el-table-column>
  </el-table>

  <exam_manage ref="examManageRef" @success="onSuccess"></exam_manage>


</template>

<style scoped>
.demo-form-inline .el-input {
  --el-input-width: 220px;
}

.demo-form-inline .el-select {
  --el-select-width: 220px;
}
</style>