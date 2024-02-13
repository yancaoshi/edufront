<template>
  <el-table
    ref="table"
    :data="tableData"
    style="width: 100%"
    @row-click="handleRowClick"
    row-key="id"
  >
    <el-table-column
      prop="date"
      label="日期"
      width="180">
    </el-table-column>
    <el-table-column
      prop="name"
      label="姓名"
      width="180">
    </el-table-column>
    <el-table-column
      prop="address"
      label="地址">
    </el-table-column>
    <el-table-column
      type="expand">
      <template #default="scope">
        <!-- 这里自定义你的详情内容 -->
        <p>行详情: {{ scope.row.address }}</p>
      </template>
    </el-table-column>
  </el-table>
</template>

<script>
export default {
  data() {
    return {
      tableData: [{
        id: '1',
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        id: '2',
        date: '2016-05-04',
        name: '张小三',
        address: '上海市普陀区金沙江路 1517 弄'
      }],
      expandedRows: [],
    }
  },
  methods: {
    handleRowClick(row, event, column) {

      // const rowIndex = this.expandedRows.indexOf(row.id);
      // if (rowIndex > -1) {
      //   // 如果已经展开，则关闭
      //   this.expandedRows.splice(rowIndex, 1);
      // } else {
      //   // 展开行
      //   this.expandedRows.push(row.id);
      // }
      // // 更新展开的行
      this.$refs.table.toggleRowExpansion(row);
    },
  }
}
</script>
