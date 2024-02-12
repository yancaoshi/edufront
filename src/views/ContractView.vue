<template>
  <div>
    <el-input placeholder="Filter"></el-input>
    <el-table style="width: 100%">
      <el-table-column prop="id" label="ID"></el-table-column>
      <el-table-column prop="name" label="Name"></el-table-column>
      <el-table-column prop="username" label="Username"></el-table-column>
      <el-table-column prop="email" label="Email"></el-table-column>
      <el-table-column prop="company.name" label="Company"></el-table-column>
    </el-table>
  </div>
</template>
