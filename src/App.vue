<!-- <template>
  <div ><TopNavbar /></div>
</template> -->
<template>
  <div class="header">
    <TopNavbar />
  </div>
  <div class="main">
    <router-view />
  </div>
</template>

<script setup>

import TopNavbar from './components/TopNavbar.vue'
import { RouterView } from 'vue-router'


</script>

<style>
html {
  box-sizing: border-box;
}
*, *::before, *::after {
  box-sizing: inherit;
}
#app {
  font-family: "PingFang SC", "Helvetica Neue", Helvetica, "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
  min-height: 100vh;
  min-width: 100vw;
  display: flex;
  flex-direction: column;
}


.header {
  width: 100%;
  height: 60px;
  display: flex;
}

.main {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
