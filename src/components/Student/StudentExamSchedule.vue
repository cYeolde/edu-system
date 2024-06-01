<template>
  <div>
    <el-row>
      <el-col>
        <h4 class="finished">已完成考试：{{ completedExamsNum }}</h4>
        <el-timeline>
          <el-timeline-item v-for="exam in completedExamsList" :key="exam.name">
            <el-card class="finished">
              <h4>{{ exam.name }}</h4>
              <p>考试时间：{{ exam.date }}（{{ exam.day }}）</p>
              <p>考核地点：{{ exam.location }}</p>
              <p>主讲教师：</p>
              <p>考生须知：</p>
              <p>座位号：</p>
            </el-card>
          </el-timeline-item>
        </el-timeline>

        <h4 class="unfinished">未完成考试：{{ remainingExamsNum }}</h4>
        <el-timeline>
          <el-timeline-item v-for="exam in remainingExamsList" :key="exam.name">
            <el-card class="unfinished">
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
import {ref, computed, onMounted} from 'vue';

const exams = ref([
  /**
   * 考试名称
   * 考试日期
   * 考试星期
   * 考试地点
   * 是否已完成
   */
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

const fetchExams = async () => {
  try {
    const res = await fetch('http://localhost:8080/exams', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    });
    if (!res.ok) {
      console.error('Failed to fetch exams');
    }
    exams.value = await res.json();
  } catch (error) {
    console.error("Error fetching exams");
  }
};

onMounted(fetchExams);

const completedExamsNum = computed(() => {
  return exams.value.filter(exam => exam.completed).length;
});

const completedExamsList = computed(() => {
  return exams.value.filter(exam => exam.completed);
});

const remainingExamsNum = computed(() => {
  return exams.value.filter(exam => !exam.completed).length;
});

const remainingExamsList = computed(() => {
  return exams.value.filter(exam => !exam.completed);
});

</script>

<style scoped>
.finished {
  color: gray;
  width: 700px;
}

.unfinished {
  width: 700px;
}

p {
  font-size: 13px;
}
</style>
