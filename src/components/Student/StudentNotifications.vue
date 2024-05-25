<template>
  <div>
    <h3>通知</h3>
    <el-divider/>
    <el-tabs v-model="activeTab" class="notification-tabs">
      <el-tab-pane label="未读" name="unread">
        <div class="flex flex-wrap gap-4">
          <el-card
              v-for="(notification) in unreadNotifications"
              :key="notification.id"
              style="width: 480px; margin-top: 30px; border: 2px solid #dcdfe6; border-radius: 4px;"
              shadow="hover"
              class="notification-card"
          >
            <div slot="header" class="clearfix">
              <span>{{ notification.title }}</span>
              <el-button @click="markAsRead(notification.id)" type="text" class="delete-button">
                <el-icon>
                  <Delete/>
                </el-icon>
              </el-button>
            </div>
            <div v-text="notification.content"></div>
          </el-card>
        </div>
      </el-tab-pane>
      <el-tab-pane label="已读" name="read">
        <div class="flex flex-wrap gap-4">
          <el-card
              v-for="(notification) in readNotifications"
              :key="notification.id"
              style="width: 480px; margin-top: 30px; border: 2px solid #dcdfe6; border-radius: 4px;"
              shadow="hover"
              class="notification-card"
          >
            <div slot="header" class="clearfix">
              <span>{{ notification.title }}</span>
            </div>
            <div v-text="notification.content"></div>
          </el-card>
        </div>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { ElMessage } from 'element-plus';
import { Delete } from '@element-plus/icons-vue';

interface Notification {
  id: number;
  title: string;
  content: string;
}

const unreadNotifications = ref<Notification[]>([]);
const readNotifications = ref<Notification[]>([]);
const activeTab = ref('unread');

// 模拟数据
const mockData: Notification[] = [
  { id: 1, title: '系统通知1', content: '内容1...' },
  { id: 2, title: '系统通知2', content: '内容2...' },
  { id: 3, title: '系统通知3', content: '内容3...' }
];

const fetchNotifications = async () => {
  try {
    // 模拟请求后台获取通知数据
    const data = mockData;

    // 过滤重复数据
    data.forEach(notification => {
      if (!unreadNotifications.value.some(n => n.id === notification.id)) {
        unreadNotifications.value.push(notification);
      }
    });
  } catch (error) {
    ElMessage.error('获取通知失败');
  }
};

const markAsRead = async (id: number) => {
  try {
    // 模拟请求后台标记通知为已读
    await new Promise((resolve) => setTimeout(resolve, 500));

    // 移动通知到已读列表
    const notification = unreadNotifications.value.find(n => n.id === id);
    if (notification) {
      unreadNotifications.value = unreadNotifications.value.filter(n => n.id !== id);
      readNotifications.value.push(notification);
    }
  } catch (error) {
    ElMessage.error('标记通知为已读失败');
  }
};

onMounted(() => {
  fetchNotifications();
  setInterval(fetchNotifications, 30000); // 每30秒请求一次新数据
});
</script>

<style scoped>
.notification-tabs {
  min-height: 400px;
}

.notification-card {
  position: relative;
}

.badge {
  position: absolute;
  top: 10px;
  right: 10px;
}

.delete-button {
  float: right;
}
</style>
