<template>
  <div>
    <el-input v-model="filterValue" placeholder="Filter"></el-input>
    <el-table :data="filteredUsers" style="width: 100%">
      <el-table-column prop="id" label="ID"></el-table-column>
      <el-table-column prop="name" label="Name"></el-table-column>
      <el-table-column prop="username" label="Username"></el-table-column>
      <el-table-column prop="email" label="Email"></el-table-column>
      <el-table-column prop="company.name" label="Company"></el-table-column>
    </el-table>
  </div>
</template>

<script>
import { ref, onMounted, computed } from 'vue'
import axios from 'axios'

export default {
  name: 'UsersTable',
  setup() {
    const users = ref([])
    const filterValue = ref('')

    // 被转换为一个计算属性
    const filteredUsers = computed(() => {
      if (filterValue.value) {
        return users.value.filter(user => {
          return (
            user.id.toString().includes(filterValue.value) ||
            user.name.toLowerCase().includes(filterValue.value.toLowerCase()) ||
            user.username.toLowerCase().includes(filterValue.value.toLowerCase()) ||
            user.email.toLowerCase().includes(filterValue.value.toLowerCase()) ||
            user.company.name.toLowerCase().includes(filterValue.value.toLowerCase())
          )
        })
      } else {
        return users.value
      }
    })

    // 异步函数来获取用户数据
    async function fetchUsers() {
      try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/users')
        users.value = response.data
      } catch (error) {
        console.error('There was an error fetching the users:', error)
      }
    }

    // 使用 onMounted 钩子来在组件挂载时调用 fetchUsers
    onMounted(fetchUsers)

    // 返回所有需要在模板中访问的响应式数据和函数
    return {
      users,
      filterValue,
      filteredUsers
    }
  }
}
</script>
