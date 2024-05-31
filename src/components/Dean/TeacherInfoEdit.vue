<script setup lang="ts">
import {ref} from "vue";


//抽屉显示隐藏
const visibleDrawer = ref(false)

//默认数据
const defaultForm = {

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

//准备数据
const formModel = ref({
  ...defaultForm

})

//open({})显示是添加
//open({id,……})说明是编辑
//open暴露后，可以打开抽屉
const open = (row:any) => {
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


</script>

<template>
  <el-drawer
      v-model="visibleDrawer"
      title="教师信息"
      size="35%">
    <el-form
        :model="formModel" ref="formRef"
    >
      <el-form-item label="学号/工号">
        <el-input v-model="formModel.number" style="width: 240px" placeholder="formModel.number"/>
      </el-form-item>
      <el-form-item label="姓名">
        <el-input v-model="formModel.number" style="width: 240px" placeholder="formModel.number"/>
      </el-form-item>
      <el-form-item label="出生日期">
        <el-input v-model="formModel.name" style="width: 240px" placeholder="formModel.name"/>
      </el-form-item>
      <el-form-item label="性别">
        <el-input v-model="formModel.gender" style="width: 240px" placeholder="formModel.gender"/>
      </el-form-item>
      <el-form-item label="身份证号">
        <el-input v-model="formModel.id" style="width: 240px" placeholder="formModel.id"/>
      </el-form-item>
      <el-form-item label="籍贯">
        <el-input v-model="formModel.birthPlace" style="width: 240px" placeholder="formModel.birthPlace"/>
      </el-form-item>
      <el-form-item label="学院">
        <el-input v-model="formModel.department" style="width: 240px" placeholder="formModel.department"/>
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