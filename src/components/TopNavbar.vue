<template>
  <div>
    <div>
      <img
        :class="{ 'small-logo': isScrolled }"
        src="https://img1.baidu.com/it/u=4226960193,518676408&fm=253&fmt=auto&app=138&f=JPEG?w=280&h=200"
        alt="Logo"
      />
      <el-menu
        :default-active="activeIndex"
        mode="horizontal"
        @select="handleSelect"
      >
        <el-menu-item index="/students"><i class="el-icon-user"></i>学员</el-menu-item>
        <el-menu-item index="/contracts"><i class="el-icon-document"></i>合同</el-menu-item>
        <el-menu-item index="/payments"><i class="el-icon-money"></i>付费</el-menu-item>
        <el-menu-item index="/classhours"><i class="el-icon-time"></i>课时</el-menu-item>
        <el-menu-item index="/reports"><i class="el-icon-data-analysis"></i>报表</el-menu-item>
      </el-menu>
    </div>
  </div>
</template>

<script>
import { ref, onMounted, onUnmounted } from "vue";
import { useRouter } from "vue-router"; // 引入 useRouter

export default {
  setup() {
    const router = useRouter(); // 使用 useRouter
    const activeIndex = ref("/students");
    const isScrolled = ref(false);

    const handleScroll = () => {
      isScrolled.value = window.scrollY > 0;
    };

    onMounted(() => {
      window.addEventListener("scroll", handleScroll);
    });

    onUnmounted(() => {
      window.removeEventListener("scroll", handleScroll);
    });

    const handleSelect = (index, indexPath) => {
      console.log(index, indexPath);
      router.push(index); // 使用 router.push 进行路由跳转
    };

    return {
      activeIndex,
      handleSelect,
      isScrolled,
    };
  },
};
</script>
