// router/index.js
import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import StudentView from '../views/StudentView.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView,
  }, 
  {
    path: '/students',
    name: 'Student',
    component: StudentView,
  },
  {
    path: '/contracts',
    name: 'Contract',
    component: () => import('../views/ContractView.vue'),
  },
  {
    path: '/payments',
    name: 'Payment',
    component: () => import('../views/PaymentView.vue'),
  },
  {
    path: '/reports',
    name: 'Report',
    component: () => import('../views/ReportView.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.VITE_BASE_URL),
  routes,
});

export default router;
