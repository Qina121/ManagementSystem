<template>
  <el-card style="height:512px;">
    <h3 slot="header" ><i class="el-icon-menu"></i>导航菜单</h3>
    <el-menu
      :router="true"
    >
      <el-menu-item index="all">全部</el-menu-item>
      <el-menu-item index="good">职工</el-menu-item>
      <el-menu-item index="share">职位</el-menu-item>
      <el-menu-item index="share">工资</el-menu-item>
      <el-menu-item index="share">年龄</el-menu-item>
    </el-menu>
  </el-card>
</template>

<script>
  export default {
    name:'side_nav',
    components:{

    }
  }
</script>
