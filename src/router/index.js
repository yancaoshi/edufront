// router/index.js
import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import StudentView from '../views/StudentView.vue';
import ContractView from '../views/ContractView.vue';


const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView,
  }
  {
    path: '/students',
    name: 'Student',
    component: StudentView,
  },
  {
    path: '/contracts',
    name: 'Contract',
    component: ContractView,
  },
  // 其他路由配置...
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
