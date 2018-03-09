<template>
  <el-container>

    <el-header class="my-header">

      <app-header></app-header>

    </el-header>

    <el-main class="main-img">
      <router-view></router-view>
    </el-main>

  </el-container>
</template>

<script>
  import appHeader from './header'
  //import all from './all'
  import intro from './intro'
  export default {
    name:'index',
    components:{
      appHeader,
      intro
    }
  }
</script>
<style>
  .main-img{
    height: 100%;
    background-color: #f7f7f7;
    /*background-image:url('../assets/bg.jpg');*/
    /*background-size: 100% 100%;*/
  }
</style>
