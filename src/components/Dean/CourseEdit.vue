<script setup lang="ts">
import {ref} from "vue";


//抽屉显示隐藏
const visibleDrawer = ref(false)

//默认数据
const defaultForm = {
  name: '',
  type: '',
  credit: '',
  teacher: '',
  location: '',
  time: '',
  capacity: '',
  selected_number: '',
}

//准备数据
const formModel = ref({
  ...defaultForm

})

//open({})显示是添加
//open({id,……})说明是编辑
//open暴露后，可以打开抽屉
const open = (row: any) => {
  visibleDrawer.value = true//显示抽屉

  if (row.id) {
    console.log('编辑回显')
  } else {
    formModel.value = {
      ...defaultForm
    }
    console.log('添加')
  }

  console.log(row)
}

//暴漏open方法
defineExpose({
  open
})


const options1 = [
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
</script>

<template>
  <el-drawer
      v-model="visibleDrawer"
      title="课程内容"
      size="50%">
    <el-form

    >
      <el-form-item label="课程名称">
        <el-input v-model="formModel.name" style="width: 240px" placeholder="formModel.name"/>
      </el-form-item>
      <el-form-item label="类型">
        <el-select
            v-model="formModel.type"
            placeholder="formModel.type"
            style="width: 240px">
          <el-option
              v-for="item in options1"
              :key="item.value"
              :label="item.label"
              :value="item.value"
          />
        </el-select>
      </el-form-item>
      <el-form-item label="学分">
        <el-input v-model="formModel.credit" style="width: 240px" placeholder="formModel.credit"/>
      </el-form-item>
      <el-form-item label="授课教师">
        <el-input v-model="formModel.teacher" style="width: 240px" placeholder="formModel.teacher"/>
      </el-form-item>
      <el-form-item label="授课地点">
        <el-input v-model="formModel.location" style="width: 240px" placeholder="formModel.location"/>
      </el-form-item>
      <el-form-item label="授课时间">
        <el-input v-model="formModel.time" style="width: 240px" placeholder="formModel.time"/>
      </el-form-item>
      <el-form-item label="课程容量">
        <el-input v-model="formModel.capacity" style="width: 240px" placeholder="formModel.capacity"/>
      </el-form-item>
      <el-form-item label="已选人数">
        <el-input v-model="formModel.selected_number" style="width: 240px" placeholder="formModel.selected_number"/>
      </el-form-item>
      <el-form-item>
        <el-button type="primary">修改</el-button>
        <el-button type="primary">确认</el-button>
      </el-form-item>
    </el-form>
  </el-drawer>


</template>

<style scoped>

</style>