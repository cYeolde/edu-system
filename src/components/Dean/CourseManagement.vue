<template>

  <div>
    <h2>课程管理</h2>

  </div>
  <!--表单区域-->
  <el-form inline>
    <el-form-item label="课程名称">
      <el-input v-model="input" style="width: 240px" placeholder="Please input" />
    </el-form-item>
    <el-form-item label="类型">
      <el-select
          v-model="value"
          placeholder="Select"
          style="width: 240px">
        <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
        />
      </el-select>
    </el-form-item>
    <el-button type="primary" @click="onSearch">搜索</el-button>
    <el-button type="primary" @click="onReset">重置</el-button>
    <el-button type="primary" @click="onAddCourse">添加课程</el-button>
  </el-form>
  <!--表格区域-->
  <el-table :data="courseData" stripe style="width: 100%">
    <el-table-column prop="name" label="课程"  width="180" >
      <template #default="{ row }">
        <el-link type="primary" :underline="false">{{ row.name }}</el-link>
      </template>
    </el-table-column>
    <el-table-column prop="type" label="类型" width="180" />
    <el-table-column prop="credit" label="学分" width="180" />
    <el-table-column prop="teacher" label="授课教师" width="180" />
    <el-table-column prop="location" label="授课地点" width="180" />
    <el-table-column prop="time" label="时间" width="180" />
    <el-table-column prop="capacity" label="课程容量" width="180" />
    <el-table-column prop="selected_number" label="已选人数" width="180"/>
    <el-table-column fixed="right" label="Operations" width="120">
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
  <course-edit ref="courseEditRef"></course-edit>



</template>
<script setup lang="ts">

import { ref } from 'vue'
import CourseEdit from "@/components/Dean/CourseEdit.vue";
const courseEditRef = ref()
const onAddCourse=()=>{
  courseEditRef.value.open({})
}

const onEdit = (row) => {
  courseEditRef.value.open({ row })
}
const onDelete = (row) => {
  console.log(row)
}
const onSearch = () => {
  console.log('搜索课程');
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



const input = ref('')
const value = ref('')

const options = [
  {
    value: 'Option1',
    label: '必修',
  },
  {
    value: 'Option2',
    label: '专业选修',
  },
  {
    value: 'Option3',
    label: '公共选修',
  },
  {
    value: 'Option4',
    label: '专业限选',
  },
]
const courseData = ref([
  {
    name:'计算机网络',
    type: '必修',
    credit:'3',
    teacher:'张老师',
    location:'经信教学楼',
    time:'周一 8:00-10:00',
    capacity:'100',
    selected_number:'50',
  },
  {
    name: '软件系统开发',
    type: '必修',
    credit: 2,
    teacher: '王老师',
    location:'经信教学楼',
    time: '周三 14:00-16:00',
    capacity: 50,
    selected_number: 50,
  },
  {

    name: '计算机网络',
    type: '必修',
    credit: 3,
    teacher: '张老师',
    location:'经信教学楼',
    time: '周一 8:00-10:00',
    capacity: 40,
    selected_number: 30,
  },
  {
    name: '计算机网络',
    type: '必修',
    credit: 3,
    teacher: '张老师',
    location:'经信教学楼',
    time: '周一 8:00-10:00',
    capacity: 40,
    selected_number: 30,
  },
  {
    name: '毛泽东思想',
    type: '必修',
    credit: 3,
    teacher: '李淑梅',
    location:'经信教学楼',
    time: '周二 4:20-5;10',
    capacity: 40,
    selected_number: 30,
  },
]);

</script>



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