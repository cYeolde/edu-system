<script setup lang="ts">

import {reactive, ref} from 'vue'

const formInline = reactive({
  number: '',//学号
  name: '',//课程

})


const gradeData = [
  {
    number: '',//学号
    name: '',//课程
    grade: '',//成绩
    teacher: '',
    location: '',

  }
]


const currentPage3 = ref(5)
const pageSize3 = ref(100)
const small = ref(false)
const background = ref(false)
const disabled = ref(false)

const handleSizeChange = (val: number) => {
  console.log(`${val} items per page`)
}
const handleCurrentChange = (val: number) => {
  console.log(`current page: ${val}`)
}


const onQuery = () => {
  console.log('submit!')
}

const onReset = () => {

}
const onEdit = () => {

}
const onDelete = () => {

}
</script>


<template>

  <div>
    <h2>成绩管理</h2>
  </div>

  <!--
  成绩管理：增删改查
       某个学生的单科成绩和全部成绩
       某个教学班的成绩
  -->
  <el-form :inline="true" :model="formInline" class="demo-form-inline">
    <el-form-item label="学号">
      <el-input v-model="formInline.number" placeholder="请输入学号" clearable/>
    </el-form-item>
    <el-form-item label="课程">
      <el-input v-model="formInline.name" placeholder="请输入课程" clearable/>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="onQuery">查询</el-button>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="onReset">重置</el-button>
    </el-form-item>
  </el-form>
  <el-table
      :data="gradeData"
      stripe
      style="width: 100%">
    <el-table-column prop="name" label="学号" width="180"></el-table-column>
    <el-table-column prop="name" label="课程" width="180"></el-table-column>
    <el-table-column prop="name" label="成绩" width="180"></el-table-column>
    <el-table-column prop="teacher" label="授课教师" width="180"/>
    <el-table-column prop="location" label="授课地点" width="180"/>
    <el-table-column fixed="right" label="操作" width="120">
      <template #default="{ row }">
        <el-button link type="primary" size="small" @click="onEdit()">
          编辑
        </el-button>
        <el-button link type="primary" size="small" @click="onDelete()">
          删除
        </el-button>
      </template>
    </el-table-column>
  </el-table>
  <!--分页-->
  <div class="demo-pagination-block">
    <el-pagination
        v-model:current-page="currentPage3"
        v-model:page-size="pageSize3"
        :small="small"
        :disabled="disabled"
        :background="background"
        layout="prev, pager, next, jumper"
        :total="1000"
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        style="margin-top:20px;justify-content:center "
    />
  </div>


</template>

<style scoped>

</style>