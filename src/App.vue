<template>
  <div>
    <TopNavbar /> <!-- 在页面顶部显示导航栏 -->
    <router-view /> <!-- 路由视图，用于显示基于当前路由的组件 -->
  </div>
</template>

<script>
import TopNavbar from './components/TopNavbar.vue'

export default {
  name: 'App',
  components: {
    TopNavbar // 注册 TopNavbar 使其可以在模板中使用
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
