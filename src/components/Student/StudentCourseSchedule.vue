<template>
  <h3>我的课表</h3>
  <el-card class="timetable-card">
    <div class="timetable">
      <div class="time-b">
        <div class="time-detail">{{ startTime }} - {{ endTime }}</div>
        <div class="time-controller">
          <el-button-group>
            <el-button
                type="primary"
                @click="changeCount(1), getWeek(count)"
            >
              <el-icon>
                <DArrowLeft/>
              </el-icon>
            </el-button>
            <el-button round class="date-btn">本周</el-button>
            <el-button
                type="primary"
                @click="changeCount(-1), getWeek(count)"
            >
              <el-icon>
                <DArrowRight/>
              </el-icon>
            </el-button>
          </el-button-group>
        </div>
      </div>
      <div class="timetable-b">
        <table class="timetable-content">
          <thead>
          <tr>
            <th></th>
            <th v-for="(week, index) in weeks" :key="index">
              {{ `周${numberToChinese(week + 1, 'week')}` }}
            </th>
          </tr>
          </thead>
          <tbody>
          <tr v-for="courseNum in maxCourseLength" :key="courseNum">
            <td>
              <p>{{ `第${numberToChinese(courseNum) + '节'}` }}</p>
            </td>
            <td v-for="(week, weekIndex) in weeks" :key="weekIndex">
              <template v-if="showData(weekIndex, courseNum)">
                <div
                    class="dmsjandjs-b"
                    :style="{ backgroundColor: getRandomColor() }"
                >
                  <p>{{ showData(weekIndex, courseNum).startTime }} - {{ showData(weekIndex, courseNum).endTime }}</p>
                  <p>{{ showData(weekIndex, courseNum).subject }}</p>
                  <p>{{ showData(weekIndex, courseNum).major }}</p>
                  <p>{{ showData(weekIndex, courseNum).class }}</p>
                </div>
              </template>
            </td>
          </tr>
          </tbody>
        </table>
      </div>
    </div>
  </el-card>
</template>

<script setup>
import {computed, ref, onMounted} from 'vue';
import moment from 'moment';
import {DArrowLeft, DArrowRight} from "@element-plus/icons-vue";

// const weekCourse=ref([]);

const weekCourse = [
  {
    week: 0,
    courses: [
      {
        index: 1,
        startTime: "08:00", //开始时间
        endTime: "09:30", //结束时间
        subject: "高等数学", //学科
      },
      {
        index: 3,
        startTime: "08:00", //开始时间
        endTime: "09:30", //结束时间
        subject: "操作系统", //学科
      },
    ],
  },
  {
    week: 1,
    courses: [
      {
        index: 1,
        startTime: "08:00", //开始时间
        endTime: "09:30", //结束时间
        subject: "计算机网络", //学科
      },
      {
        index: 2,
        startTime: "08:00", //开始时间
        endTime: "09:30", //结束时间
        subject: "机器学习", //学科
      },
      {
        index: 3,
        startTime: "08:00", //开始时间
        endTime: "09:30", //结束时间
        subject: "操作系统", //学科
      },
      {
        index: 4,
        startTime: "08:00", //开始时间
        endTime: "09:30", //结束时间
        subject: "Python程序设计", //学科
      },
      {
        index: 5,
        startTime: "08:00", //开始时间
        endTime: "09:30", //结束时间
        subject: "Vue", //学科
      },
      {
        index: 6,
        startTime: "08:00", //开始时间
        endTime: "09:30", //结束时间
        subject: "Vue", //学科
      },
      {
        index: 7,
        startTime: "08:00", //开始时间
        endTime: "09:30", //结束时间
        subject: "Java", //学科
      },
      {
        index: 8,
        startTime: "08:00", //开始时间
        endTime: "09:30", //结束时间
        subject: "数据结构与算法", //学科
      },
      {
        index: 9,
        startTime: "08:00", //开始时间
        endTime: "09:30", //结束时间
        subject: "React", //学科
      },
      {
        index: 10,
        startTime: "09:30", //开始时间
        endTime: "09:30", //结束时间
        subject: "Php", //学科
      },
      {
        index: 11,
        startTime: "08:00", //开始时间
        endTime: "09:30", //结束时间
        subject: "Php", //学科
      },
    ],
  },
  {
    week: 2,
    courses: [
      {
        index: 5,
        startTime: "08:00", //开始时间
        endTime: "09:30", //结束时间
        subject: "计算机网络", //学科
      },
      {
        index: 8,
        startTime: "08:00", //开始时间
        endTime: "09:30", //结束时间
        subject: "操作系统", //学科
      },
    ]
  },
  {
    week: 3,
    courses: [
      {
        index: 1,
        startTime: "08:00", //开始时间
        endTime: "09:30", //结束时间
        subject: "计算机网络", //学科
      },
      {
        index: 2,
        startTime: "08:00", //开始时间
        endTime: "09:30", //结束时间
        subject: "计算机网络", //学科
      },
      {
        index: 3,
        startTime: "08:00", //开始时间
        endTime: "09:30", //结束时间
        subject: "操作系统", //学科
      },
    ],
  },
  {
    week: 4,
    courses: [
      {
        index: 1,
        startTime: "08:00", //开始时间
        endTime: "09:30", //结束时间
        subject: "计算机网络", //学科
      },
      {
        index: 3,
        startTime: "08:00", //开始时间
        endTime: "09:30", //结束时间
        subject: "操作系统", //学科
      },
    ],
  },
  {
    week: 5,
    courses: [
      {
        index: 4,
        startTime: "08:00", //开始时间
        endTime: "09:30", //结束时间
        subject: "计算机网络", //学科
      },
      {
        index: 3,
        startTime: "08:00", //开始时间
        endTime: "09:30", //结束时间
        subject: "操作系统", //学科
      },
    ],
  },
  {
    week: 6,
    courses: [
      {
        index: 2,
        startTime: "08:00", //开始时间
        endTime: "09:30", //结束时间
        subject: "计算机网络", //学科
      },
      {
        index: 11,
        startTime: "08:00", //开始时间
        endTime: "09:30", //结束时间
        subject: "操作系统", //学科
      },
    ],
  },
]

const colorList = [
  "#4BBDEE",
  "#E86EEB",
  "#4BBDEE",
  "#13DAC2",
  "#7464FB",
  "#F18141",
  "#57C946",
  "#E8BE2A",
  "#508AFA",
]

const startTime = ref('');
const endTime = ref('');
const colorListRef = ref(colorList);
const weekCourseRef = ref(weekCourse); //todo
// const weeks = computed(() => weekCourse.value.map(item => item.week));
const weeks = computed(() => weekCourseRef.value.map(item => item.week));
const maxCourseLength = ref(0);
const count = ref(0);

const changeCount = (i) => {
  count.value += i;
};

const sortData = () => {
  weekCourseRef.value.sort((a, b) => a.week - b.week);
  weekCourseRef.value.forEach(item => {
    if (item.courses) {
      item.courses.sort((a, b) => a.index - b.index);
    }
  });
};

const init = () => {
  maxCourseLength.value = 0;
  weeks.value.forEach(week => {
    const maxIndex = Math.max(...weekCourseRef.value.find(item => item.week === week).courses.map(course => course.index));
    maxCourseLength.value = Math.max(maxCourseLength.value, maxIndex);
  });
};

const showData = (weekIndex, courseNum) => {
  const course = weekCourseRef.value[weekIndex]?.courses?.find(course => course.index === courseNum);
  return course ? course : null;
};

const numberToChinese = (n, identifier) => {
  const chnArr = [
    '零', '一', '二', '三', '四', '五', '六', '七', '八', '九', '十', '十一', '十二'
  ];
  return identifier === 'week' && (n === 0 || n === 7) ? '日' : chnArr[n];
};

const getRandomColor = () => {
  const colorRandom = Math.floor(Math.random() * colorListRef.value.length);
  return colorListRef.value[colorRandom];
};

const getWeek = (i) => {
  const weekOfDay = parseInt(moment().format('E'));
  startTime.value = moment().subtract(weekOfDay + 7 * i - 1, 'days').format('YYYY-MM-DD');
  endTime.value = moment().subtract(weekOfDay + 7 * (i - 1), 'days').format('YYYY-MM-DD');
};

sortData();
init();
getWeek(0);

const fetchCourseSchedule = async () => {
  try {
    const res = await fetch('http://localhost:8080/student/courseSchedule', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    });
    if (!res.ok) {
      console.error('Failed to fetch course schedule');
    }
    weekCourseRef.value = await res.json();
    // sortData();
    // init();
    // getWeek(0);
  } catch (error) {
    console.error('Error fetching course schedule:', error);
  }
}

onMounted(fetchCourseSchedule);
</script>

<style scoped lang="scss">
.timetable-card {
  width: 1100px; /* 设置卡片宽度 */
  height: 600px;
}

.timetable {
  background-color: #f1f7ff;
  border-radius: 8px; /* 设置边框圆角 */
  padding: 16px; /* 设置内边距 */
}

.time-b {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 12px;
}

.time-detail {
  font-size: 18px;
  font-weight: bold;
}

.time-controller {
  display: flex;
  align-items: center;
}

.date-btn {
  font-size: 10px;
  padding: 8px 12px;
}

.timetable-b {
  max-height: 800px; /* 设置表格最大高度 */
  overflow: auto; /* 添加滚动条 */
}

.timetable-content {
  width: 100%;
  table-layout: fixed;
  border-collapse: separate;
}

th,
td {
  padding: 8px;
  text-align: center;
}

.dmsjandjs-b {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2px;
  background-color: #e8f0fe;
  border-radius: 20px;
  margin-bottom: 4px;
}

</style>

