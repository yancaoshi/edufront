<template>
  <div class="header-container">
    <div class="logo-container">
      <img src="@/assets/logo.png" class="logo" />
    </div>
    <div class="menu-container">
      <el-menu
        :default-active="activeIndex"
        class="menu-nav"
        mode="horizontal"
        @select="handleSelect"
      >
        <el-menu-item index="/students">
          <el-icon><User /></el-icon>
          学员
        </el-menu-item>

        <el-menu-item index="/contracts">
          <el-icon><Document /></el-icon>
          合同
        </el-menu-item>

        <el-menu-item index="/payments">
          <el-icon><Money /></el-icon>
          付费
        </el-menu-item>

        <el-menu-item index="/classhours">
          <el-icon><Clock /></el-icon>
          课时
        </el-menu-item>
        <el-menu-item index="/reports">
          <el-icon><DataLine /></el-icon>
          报表
        </el-menu-item>
        <el-menu-item index="/settings">
          <el-icon><Setting /></el-icon>
          设置
        </el-menu-item>
      </el-menu>
    </div>
  </div>
</template>
<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { useRouter } from 'vue-router'
import { watch } from 'vue'

// 使用 ref 创建响应式变量
const activeIndex = ref('/')

// 使用 useRouter 获取 router 实例
const router = useRouter()
// 定义选择处理函数
const handleSelect = (index, indexPath) => {
  console.log(index, indexPath)
  router.push(index)
  activeIndex.value = index
}

watch(
  () => router.path,
  (newPath) => {
    activeIndex.value = newPath // 更新activeIndex为新的路由路径
  },
  { immediate: true },
)
</script>
<style scoped>
.menu-nav {
  display: flex;
  justify-content: center;
  flex-grow: 1;
}
.header-container {
  display: flex;
  width: 100%;
  background-color: #409EFF;
  align-items: center; /* 垂直居中 */
  justify-content: flex-start; /* 将logo和菜单分散对齐 */
}
.logo-container {
  display: flex;
  justify-content: center;
  align-content: center;
}
.menu-container {
  display: flex;
  justify-content: center;
  align-content: center;
  flex-grow: 1;
}
.logo {
  height: 50px; /* 设置logo高度，宽度会自动等比例调整 */
  margin: 10px;
}
.el-menu {
  background-color: #409EFF;
  border-bottom: 1px solid #409EFF;
}
.el-menu-item {
  color: #fff;
  font-size: large;
  font-weight: bold;
}
.el-menu-item.is-active {
  background-color: #fff;
  color: #409EFF;
}
.el-icon {
  margin-right: 10px;
  font-size: x-large;
}
</style>
