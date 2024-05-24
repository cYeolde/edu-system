<script setup lang="ts">
import {ref} from "vue";
import { QuillEditor } from '@vueup/vue-quill';
import '@vueup/vue-quill/dist/vue-quill.snow.css';
import {ElMessage} from "element-plus";



const visibleDrawer=ref(false)
//日期选择器
const size = ref<'default' | 'large' | 'small'>('default')

const options = [
  {
    value: 'Option1',
    label: '草稿',
  },
  {
    value: 'Option2',
    label: '已发布',
  },
]

//默认数据
const defaultData={
  id:'',
  name: '',//标题
  date: '',//日期
  time:'',//时间
  state: '',//状态
  issuer: '',//发布人
  content:''//通知内容
}

//准备数据
const formModel=ref({
 ...defaultData
})
 const onPublish=(state)=>{

  //将已发布或者草稿的状态存入formModel
  formModel.value.state=state

   //转化对象
   const  fd=new FormData()
   for (let key in formModel.value){
     fd.append(key,formModel.value[key])
   }

   //发请求
   if (formModel.value.id){
     //编辑操作
     console.log('编辑操作')
   }else{
     //添加操作
     console.log('添加操作')
     ElMessage.success('添加成功')
     visibleDrawer.value=false
     //通知父组件
     //emit('success','add')
   }
 }
const open = ( row )=>{
  visibleDrawer.value=true
  if(row.id){
    console.log('编辑回显')
  }else{
    formModel.value={
      ...defaultData
    }
    console.log('添加')
  }

  console.log(row)
}

defineExpose({
  open
})
</script>

<template>
  <el-drawer
      v-model="visibleDrawer"
      size="50%"
  >
    <div>
      <h3>通知编辑</h3>
    </div>
    <!-- 发表通知表单 -->
    <el-form :model="formModel" ref="formRef" label-width="100px">
      <el-form-item label="标题" prop="name">
        <el-input v-model="formModel.name" placeholder="请输入标题"></el-input>
      </el-form-item>
      <el-form-item v-model="formModel.state" label="状态" prop="state">
        <el-select
            v-model="formModel.state"
            placeholder="Please Select"
            style="width: 240px "
        >
          <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
          />
        </el-select>
      </el-form-item>
      <el-form-item label="日期">
        <div class="demo-date-picker">
          <div class="block">
            <el-date-picker
                v-model="formModel.date"
                type="date"
                placeholder="Pick a day"
                :size="size"
            />
          </div>
        </div>
      </el-form-item>
      <el-form-item label="时间">
        <div class="example-basic">
          <el-time-picker v-model="formModel.time" placeholder="Arbitrary time" />
        </div>
      </el-form-item>
      <el-form-item label="发布人" prop="issuer">
        <el-input v-model="formModel.issuer" placeholder="请选择发布人"></el-input>
      </el-form-item>
      <el-form-item label="通知内容" prop="content" >
        <div class="editor">
          <quill-editor
              v-model:content="formModel.content"
              content-type="html"
              style="height: 180px"
              theme="snow">
          </quill-editor>
        </div>
      </el-form-item>
      <el-form-item class="center-buttons">
        <el-button type="primary" @click="onPublish('已发布')">发布</el-button>
        <el-button type="info" @click="onPublish('草稿')">存草稿</el-button>
      </el-form-item>
    </el-form>
  </el-drawer>

</template>

<style scoped>
.center-buttons {
  display: grid;
  grid-template-columns: repeat(2, max-content);
  justify-content: center; /* 水平居中 */
  gap: 10px; /* 按钮之间的间距 */
}
.editor {
  width: 100%;
  :deep(.ql-toolbar) {
    text-align: left;
  }
  :deep(.ql-editor) {
    min-height: 600px;
  }
}
</style>