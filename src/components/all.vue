<template>
  <el-row :gutter="10" class="m-content">
    <el-col :span="3" :offset="3" style="margin-right:40px">
      <side_nav></side_nav>
    </el-col>
    <el-col :span="14">
      <el-card class="box-card">
        <el-input
          placeholder="请输入内容"
          prefix-icon="el-icon-search"
        >
        </el-input>
        <list pagenum="100"></list>
      </el-card>
    </el-col>
  </el-row>
</template>

<script>
  import side_nav from './side_nav'
  import list from './list'
  export default {
    name:'all',
    components:{
      side_nav,
      list
    }
  }
</script>
<style>
  .m-content{
    margin-top: 40px;
  }
</style>
