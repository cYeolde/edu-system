<script setup lang="ts">

import {ref, reactive} from 'vue'


const onEdit = (row: any) => {
  console.log(row)
}
const onDelete = (row: any) => {
  console.log(row)
}
const onSearch = () => {
  console.log('搜索课程');
};

const onReset = () => {
  input.value = '';
  value.value = '';
};

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

//定义获取参数对象
const params = ref({
  pagenum: 1,//当前页数
  pagesize: 5,//每页条数

})

//准备表格数据
const listData = reactive([
  {
    name: '',
    number: '',
  },

])

</script>

<template>
  <h3>
    选课名单
  </h3>
  <!--表单区域-->
  <el-form inline>
    <el-form-item label="课程名称">
      <el-input v-model="input" style="width: 240px" placeholder="请输入课程"/>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="onSearch">搜索</el-button>
      <el-button type="primary" @click="onReset">重置</el-button>
    </el-form-item>
  </el-form>
  <!--表格区域-->
  <el-table
      :data="listData"
      stripe
      style="width: 100%">
    <el-table-column prop="number" label="学号" width="180"/>
    <el-table-column prop="name" label="姓名" width="180"/>
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
        v-model:current-page="params.pagenum"
        v-model:page-size="params.pagesize"
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