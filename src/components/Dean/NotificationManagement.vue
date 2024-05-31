<script setup lang="ts">
import {ref} from 'vue'
import {
  Edit,
  Delete,
} from '@element-plus/icons-vue'
import NotificationEdit from "@/components/Dean/NotificationEdit.vue";

const input1 = ref('')
const input2 = ref('')
const value = ref('')

//分页
const small = ref(false)
const background = ref(false)
const disabled = ref(false)
const notificationEditRef = ref()
const onSearch = () => {
  console.log('搜索通知');
};

const onReset = () => {
  input1.value = '';
  input2.value = '';
  value.value = '';
};
const onAdd = () => {
  notificationEditRef.value.open({})
}
//编辑逻辑
const onEdit = (row) => {
  notificationEditRef.value.open(row)
  console.log(row)
}
//删除逻辑
const onDelete = (row) => {
  console.log(row)
}
//通知数据
const tableData = [
  {
    id: '1',
    name: 'Tom',
    date: '2016-05-03',
    time: '',
    state: 'California',
    issuer: 'Los Angeles',
    content: 'No. 189, Grove St, Los Angeles',
  },
  {
    id: 2,
    date: '2016-05-03',
    name: 'Tom',
    state: 'California',
    issuer: 'Los Angeles',
    object: 'No. 189, Grove St, Los Angeles',
  },
  {
    id: 2,
    date: '2016-05-03',
    name: 'Tom',
    state: 'California',
    issuer: 'Los Angeles',
    object: 'No. 189, Grove St, Los Angeles',
  },
  {
    id: 4,
    date: '2016-05-03',
    name: 'Tom',
    state: 'California',
    issuer: 'Los Angeles',
    object: 'No. 189, Grove St, Los Angeles',
  },
]
//定义获取参数对象
const params = ref({
  pagenum: 1,//当前页数
  pagesize: 5,//每页条数

})
//处理分页逻辑
const handleSizeChange = (val: number) => {
  console.log(`${val} items per page`)
}
const handleCurrentChange = (val: number) => {
  console.log(`current page: ${val}`)
}

//添加成功回调
const onSuccess = () => {
}

//获取通知列表...

</script>

<template>
  <div>
    <h3>通知管理</h3>
  </div>
  <!--
  通知内容需要包括的有：
  通知标题
  通知时间
  通知内容
  通知发布人
  通知被发布人：all,student,teacher确定的被发布人-->
  <!--通知表格-->
  <el-form inline>
    <el-form-item label="通知标题">
      <el-input v-model="input1" style="width: 240px" placeholder="输入标题"/>
    </el-form-item>
    <el-form-item label="通知发布人">
      <el-input v-model="input2" style="width: 240px" placeholder="输入发布人"/>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="onSearch">搜索</el-button>
      <el-button type="primary" @click="onReset">重置</el-button>
      <el-button type="primary" @click="onAdd">添加通知</el-button>
    </el-form-item>
  </el-form>
  <!--表格区域-->
  <el-table :data="tableData" style="width: 100%">
    <el-table-column prop="name" label="通知" width="240"/>
    <el-table-column prop="date" label="日期" width="180"/>
    <el-table-column prop="time" label="时间" width="180"/>
    <el-table-column prop="state" label="状态" width="180"/>
    <el-table-column prop="issuer" label="发布人" width="240"/>
    <el-table-column fixed="right" label="操作" width="120">
      <template #default="{ row }">
        <!--利用作用于插槽row获得当前行的数据-->
        <el-button circle plain type="primary" :icon="Delete" @click="onDelete(row)"></el-button>
        <el-button circle plain type="primary" :icon="Edit" @click="onEdit(row)"></el-button>
      </template>
    </el-table-column>
  </el-table>
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
  <notification-edit ref="notificationEditRef" @success="onSuccess"></notification-edit>
</template>

<style scoped>
.demo-pagination-block + .demo-pagination-block {
  margin-top: 10px;
}

.demo-pagination-block .demonstration {
  margin-bottom: 16px;
}
</style>