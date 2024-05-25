<script setup lang="ts">
import { ref ,reactive} from 'vue'
import { ElTable } from 'element-plus'

//对话框隐藏
const visibleDialog= ref(false)

//向父组件暴露对话框
const open = ( row )=>{
  visibleDialog.value=true
  console.log(row)
}
defineExpose({
  open
})

//查询内容
const formInline = reactive({
  region: '',
  date: '',
})

const onQuery=()=>{

}
const onReset=()=>{
   formInline.date=''
   formInline.region=''

}
const onAffirm=()=>{

}

//表格内容
interface User {
  exam_time: string
  exam_venues:  string
}

const multipleTableRef = ref<InstanceType<typeof ElTable>>()
const multipleSelection = ref<User[]>([])
const toggleSelection = (rows?: User[]) => {
  if (rows) {
    rows.forEach((row) => {
      // TODO: improvement typing when refactor table
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-expect-error
      multipleTableRef.value!.toggleRowSelection(row, undefined)
    })
  } else {
    multipleTableRef.value!.clearSelection()
  }
}
const handleSelectionChange = (val: User[]) => {
  multipleSelection.value = val
}

const tableData: User[] = [
  {
    exam_time: '2016-05-03',
    exam_venues: '计算机楼-A108',
  },
  {
    exam_time: '2016-05-02',
    exam_venues: '经信教学楼-B1',
  },
  {
    exam_time: '2016-05-04',
    exam_venues: '经信教学楼-A1',
  },
  {
    exam_time: '2016-05-01',
    exam_venues: '经信教学楼-C1',
  },
  {
    exam_time: '2016-05-08',
    exam_venues: '经信教学楼-f11',
  },
  {
    exam_time: '2016-05-06',
    exam_venues: '经信教学楼-f11',
  },
  {
    exam_time: '2016-05-07',
    exam_venues: '经信教学楼-f11',
  },
]


</script>

<template>

  <el-dialog
      v-model="visibleDialog"
      width="800"
  >
    <h3>考试安排</h3>
    <el-form :inline="true" :model="formInline" class="demo-form-inline">
      <el-form-item label="考试地点">
        <el-select
            v-model="formInline.region"
            placeholder="请选择考试地点"
            style="width:200px"
            clearable
        >
          <el-option label="经信教学楼" value="shanghai" />
          <el-option label="计算机楼" value="beijing" />
        </el-select>
      </el-form-item>
      <el-form-item label="考试时间">
        <el-date-picker
            v-model="formInline.date"
            type="datetime"
            placeholder="Pick a Date"
            format="YYYY-MM-DD HH:mm:ss"
            date-format="MMM DD, YYYY"
            time-format="HH:mm"
        />
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onQuery">查询</el-button>
        <el-button type="primary" @click="onReset">重置</el-button>
      </el-form-item>
    </el-form>
    <!--表格内容-->
    <el-table
        ref="multipleTableRef"
        :data="tableData"
        style="width: 100%"
        @selection-change="handleSelectionChange"
    >
      <el-table-column type="selection" width="55" />
      <el-table-column label="考试地点" width="120">
        <template #default="scope">{{ scope.row.exam_time }}</template>
      </el-table-column>
      <el-table-column  label="时间" show-overflow-tooltip >
        <template #default="scope">{{ scope.row. exam_venues }}</template>
      </el-table-column>
    </el-table>
    <div style="margin-top: 20px">
      <el-button @click="onAffirm()">确认</el-button>
      <el-button @click="toggleSelection()">清空</el-button>
    </div>
  </el-dialog>
</template>

<style scoped>

.demo-datetime-picker .block {
  padding: 30px 0;
  text-align: center;
  border-right: solid 1px var(--el-border-color);
  flex: 1;
}
.demo-datetime-picker .block:last-child {
  border-right: none;
}
.demo-datetime-picker .demonstration {
  display: block;
  color: var(--el-text-color-secondary);
  font-size: 14px;
  margin-bottom: 20px;
}
</style>