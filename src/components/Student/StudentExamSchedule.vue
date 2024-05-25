<template>
<!--  <h3>考试安排</h3>-->
  <div>
    <el-row>
      <el-col :span="6">
        <el-card style="margin-top: 60px;">
          <div>
            <h6>（本）前卫校区 2023-2024学年第2学期期末考试</h6>
            <p>已排考试：1</p>
            <p>交排（未交排）：0</p>
            <p>已选课未交排：11</p>
            <el-link>查看详情</el-link>
          </div>
        </el-card>
        <el-card style="margin-top: 60px;">
          <div>
            <h6>（本）各校区考试同期批次 2023-2024学年第2学期 不能按统一考试时间的课程</h6>
            <p>已排考试：2</p>
            <p>交排（未交排）：0</p>
            <p>已选课未交排：11</p>
            <el-link>查看详情</el-link>
          </div>
        </el-card>
      </el-col>
      <el-col :span="18">
        <h4 class="completed">已完成考试：{{ completedExams }}</h4>
        <el-timeline>
          <el-timeline-item center>
            <el-card class="completed">
              <h4>网络协议分析实验</h4>
              <p>考试时间：2024-05-12 18:00-20:00（星期日）</p>
              <p>考核地点：前卫校区前卫一敬信教学楼-F区第十阶梯</p>
              <p>主讲教师：</p>
              <p>考生须知：</p>
              <p>座位号：</p>
            </el-card>
          </el-timeline-item>
        </el-timeline>

        <h4>未完成考试：{{ remainingExams }}</h4>
        <el-timeline>
          <el-timeline-item v-for="exam in remainingExamsList" :key="exam.name">
            <el-card>
              <h4>{{ exam.name }}</h4>
              <p>考试时间：{{ exam.date }}（{{ exam.day }}）</p>
              <p>考核地点：{{ exam.location }}</p>
              <p>主讲教师：</p>
              <p>考生须知：</p>
              <p>座位号：</p>
              <el-button type="primary" size="small">缓考申请</el-button>
            </el-card>
          </el-timeline-item>
        </el-timeline>
      </el-col>
    </el-row>
  </div>
</template>

<script setup>
import {ref, computed} from 'vue';

const exams = ref([
  {
    name: '网络协议分析实验',
    date: '2024-05-12 18:00-20:00',
    day: '星期日',
    location: '前卫校区前卫一敬信教学楼-F区第十阶梯',
    completed: true
  },
  {
    name: '编译原理与实现（双语）',
    date: '2024-06-17 13:00-15:30',
    day: '星期一',
    location: '前卫校区前卫一敬信教学楼-F区第九阶梯',
    completed: false
  },
  {
    name: '软件件与中间件技术实践',
    date: '2024-06-26 15:30-17:30',
    day: '星期三',
    location: '前卫校区前卫一敬信教学楼-F区第九阶梯',
    completed: false
  }
]);

const completedExams = computed(() => {
  return exams.value.filter(exam => exam.completed).length;
});

const remainingExams = computed(() => {
  return exams.value.filter(exam => !exam.completed).length;
});

const remainingExamsList = computed(() => {
  return exams.value.filter(exam => !exam.completed);
});
</script>

<style scoped>
.completed {
  color: gray;
}

p {
  font-size: 13px;
}
</style>
