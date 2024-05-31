<script setup lang="ts">

import {reactive, ref} from 'vue'
import TeacherInfoEdit from "@/components/Dean/TeacherInfoEdit.vue";
import {ElTableColumn} from "element-plus";

const input = ref('')
const value = ref('')


//准备数据
let teacher_infoData = reactive([
  {
    /**
     * 学号
     * 姓名
     * 性别
     * 出生日期
     * 民族
     * 身份证号
     * 籍贯
     */
    number: '',
    name: '',
    gender: '',
    birthDate: '',
    nation: '',
    id: '',
    birthPlace: '',
  }
])

const teacherInfoEditRef = ref()

// const onAddCourse = () => {
//   teacherInfoEditRef.value.open({})
// }

const onEdit = (row:any) => {
  teacherInfoEditRef.value.open({row})
}
const onDelete = (row:any) => {
  console.log(row)
}
const onSearch = () => {
  console.log('搜索课程');
  fetch('http://localhost:8080/teacher_info', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      number: input.value,
      name: value.value
    })
  }).then(response => response.json())
    .then(data => {
      if (data.code === 200){
         //search_result={number:1,name:2,sex:'男',birthDate:'2021-09-01',nation:'汉',id:'123456789',birthPlace:'四川成都'}
        teacher_infoData = data.data
      } else {
        console.error(data.msg)
      }
    })
  // correct response ={code:200,data:{number:1,name:2}}
  // wrong response ={code:400,msg:'error'}
};

const onReset = () => {
  input.value = '';
  value.value = '';
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

</script>

<template>
  <div><h3>
    学生信息
  </h3></div>
  <!--表单区域-->
  <el-form inline>
    <el-form-item label="学号">
      <el-input v-model="input" style="width: 240px" placeholder="Please input"/>
    </el-form-item>
    <el-form-item label="姓名">
      <el-input v-model="input" style="width: 240px" placeholder="Please input"/>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="onSearch">搜索</el-button>
      <el-button type="primary" @click="onReset">重置</el-button>
    </el-form-item>
  </el-form>
  <!--表格区域-->
  <el-table
      :data="teacher_infoData"
      stripe
      style="width: 100%">
    <el-table-column prop="name" label="姓名" width="180"/>
    >
    <el-table-column prop="number" label="学号" width="180"/>
    <el-table-column prop="gender" label="性别" width="180"/>
    <el-table-column prop="birthdate" label="出生日期" width="180"/>
    <el-table-column prop="nation" label="民族" width="180"/>
    <el-table-column prop="id" label="身份证号" width="180"/>
    <el-table-column prop="birthplace" label="籍贯" width="180"/>
    <el-table-column label="年级" prop="grade" width="180"/>
    <el-table-column label="班级" prop="class" width="180"/>
    <el-table-column label="院系" prop="department" width="180"/>
    <el-table-column label="专业" prop="major" width="180"/>
    <el-table-column fixed="right" label="操作" width="120">
      <template #default="{ row }">
        <el-button link type="primary" size="small" @click="onEdit(row)">
          编辑
        </el-button>
        <el-button link type="primary" size="small" @click="onDelete(row)">
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