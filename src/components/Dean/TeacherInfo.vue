<script setup lang="ts">

import { ref,reactive } from 'vue'
import TeacherInfoEdit from "@/components/Dean/TeacherInfoEdit.vue";
import {ElTableColumn} from "element-plus";

const teacherInfoEditRef = ref()
const onAddTeacher=()=>{
  teacherInfoEditRef.value.open({})
}

const onEdit = (row:any) => {
  teacherInfoEditRef.value.open({ row })
}
const onDelete = (row:any) => {
  console.log(row)
}
const onSearch = () => {
  console.log('搜索课程');
};

const onReset = () => {
  name.value = '';
  number.value = '';
};



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



const name = ref('')
const number = ref('')


//准备数据
const student_infoData = reactive([
  {
    number: '',
    name: '',
    gender: '',
    birthDate: '',
    nation: '',
    status: '',
    id: '',
    birthPlace: '',
    department: '',
  }
])

</script>

<template>
  <div><h3>
    教师信息
  </h3></div>
  <!--表单区域-->
  <el-form inline>
    <el-form-item label="工号">
      <el-input v-model="number" style="width: 240px" placeholder="请输入工号" />
    </el-form-item>
    <el-form-item label="姓名">
      <el-input v-model="name" style="width: 240px" placeholder="请输入姓名" />
    </el-form-item>
    <el-form-item>
    <el-button type="primary" @click="onSearch">搜索</el-button>
    <el-button type="primary" @click="onReset">重置</el-button>
      <el-button type="primary" @click="onAddTeacher">添加</el-button>
    </el-form-item>
  </el-form>
  <!--表格区域-->
  <el-table
      :data="student_infoData"
      stripe
      style="width: 100%">
    <el-table-column prop="name" label="姓名"  width="180"/> >
    <el-table-column prop="number" label="工号" width="180" />
    <el-table-column prop="gender" label="性别" width="180" />
    <el-table-column prop="birthdate" label="出生日期" width="180" />
    <el-table-column prop="nation" label="民族" width="180" />
    <el-table-column label="政治面貌" prop="status"  width="180" />
    <el-table-column prop="id" label="身份证号" width="180" />
    <el-table-column prop="birthplace" label="籍贯" width="180" />
    <el-table-column prop="department" label="院系" width="180"/>
    <el-table-column fixed="right" label="操作" width="120">
      <template #default="{ row }">
        <el-button link type="primary" size="small" @click="onEdit(row)">
          编辑
        </el-button>
        <el-button link type="primary" size="small"  @click="onDelete(row)">
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
    />
  </div>
  <!--添加需要编辑的抽屉-->
  <teacher-info-edit ref="teacherInfoEditRef"></teacher-info-edit>
</template>

<style scoped>
.demo-pagination-block {
  display: flex;
  justify-content: center; /* Centers the pagination horizontally */
  align-items: center; /* Centers the pagination vertically, if needed */
}
.demo-pagination-block + .demo-pagination-block {
  margin-top: 10px;
}
.demo-pagination-block .demonstration {
  margin-bottom: 16px;
}
</style>