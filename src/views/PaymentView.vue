<template>
  <div class="body-container">
    <div class="search-area">
      <div class="search-item">
        <label for="search-input">搜索：</label>
        <el-input placeholder="输入内容" v-model="searchQuery" id="search-input"></el-input>
      </div>
      
      <div class="search-item">
        <label for="select">分类：</label>
        <el-select v-model="selectedValue" placeholder="请选择" id="select">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
      </div>
      
      <div class="search-item">
        <label for="date-picker">日期：</label>
        <el-date-picker
          v-model="selectedDate"
          type="date"
          placeholder="选择日期"
          id="date-picker">
        </el-date-picker>
      </div>
      
      <div class="search-item">
        <label for="number-input">数量：</label>
        <el-input-number v-model="numberValue" id="number-input"></el-input-number>
      </div>
      
      <el-button @click="search" type="primary" class="search-btn">搜索</el-button>
    </div>
    
    <el-table
      :data="tableData"
      style="width: 100%"
      border
      height="auto"
      max-height="70vh"
      :default-sort="{prop: 'date', order: 'descending'}"
    >
      <el-table-column
        prop="id"
        label="学号"
        width="120"
        fixed
        sortable="custom"
        :filters="[{ text: '1', value: '1' }, { text: '2', value: '2' }]"
        :filter-method="filterHandler">
      </el-table-column>
      <el-table-column
        prop="name"
        label="姓名"
        sortable="custom"
        :filters="[{ text: '1', value: '1' }, { text: '2', value: '2' }]"
        :filter-method="filterHandler">
      </el-table-column>
      <el-table-column
        prop="date"
        label="出生日期"
        sortable="custom"
        :filters="[{ text: '1', value: '1' }, { text: '2', value: '2' }]"
        :filter-method="filterHandler">
      </el-table-column>
      <el-table-column
        prop="status"
        label="状态"
        sortable="custom"
        :filters="[{ text: '1', value: '1' }, { text: '2', value: '2' }]"
        :filter-method="filterHandler">
      </el-table-column>
      <el-table-column
        fixed="right"
        label="操作"
        width="120">
        <template #default="{row}">
          <el-button type="text" size="small">编辑</el-button>
          <el-button type="text" size="small">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const searchQuery = ref('');
const selectedValue = ref('');
const selectedDate = ref(null);
const numberValue = ref(0);
const options = ref([{ value: 'option1', label: '选项1' }, { value: 'option2', label: '选项2' }]);
const tableData = ref(Array.from({ length: 20 }, (_, i) => ({
  id: `00${i+1}`,
  name: `学生${i+1}`,
  date: `199${i}-01-01`,
  status: i % 2 === 0 ? '在读' : '毕业'
})));

const search = () => {
  console.log('执行搜索...');
};
// 筛选函数示例
const filterHandler = (value, row, column) => {
  const property = column['property'];
  return row[property] === value;
};
</script>

<style scoped>
.body-container {
  padding: 20px;
  width: 100vw;
}

.search-area {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  align-items: flex-end;
  margin-bottom: 20px;
}

.search-item {
  display: flex;
  align-items: center;
  flex-basis: calc(25% - 20px);
}

.search-btn {
  flex-basis: 100%;
}

label {
  margin-right: 8px;
}
</style>
