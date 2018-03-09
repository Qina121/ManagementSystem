<template>
  <el-row style="background-color:#000;height:80px;">
    <el-col :span="4" :offset="1" style="height: 80px;">
      <img class="logo" src="../assets/218.png" alt="" style="width: 100%;height:100%;">
    </el-col>
    <el-col :span="5" :offset="2">
      <h2 class="logo_name">企业员工信息管理系统</h2>
    </el-col>
    <!--<el-col :span="6" :offset="1" style="margin-top: 20px">-->
      <!--<el-input placeholder="请输入内容" class="input-with-select">-->

        <!--<el-button slot="append" icon="el-icon-search"></el-button>-->
      <!--</el-input>-->
    <!--</el-col>-->
    <el-col v-if="!$cookie.get('token_id')" :span="2" :offset="8" style="margin-top: 20px">
      <el-button @click="login_btn" type="success">登陆{{$cookie.get('token_id')}}</el-button>
    </el-col>
    <el-col v-if="$cookie.get('token_id')" :span="3" :offset="6" style="margin-top: 20px">
      <img style="vertical-align: middle;" src="../assets/header.jpg" height="40" alt="">
      <a href="#" style="color:yellowgreen;">Manager</a>
      <a href="javascript:;" @click="logout" style="color:red;">退出</a>
    </el-col>
  </el-row>
</template>

<script>
  import {mapState,mapMutations} from 'vuex'
  export default {
    name:'app-header',
    data(){
      return {
        cok:this.$cookie.get('token_id')
      }
    },
    computed:{
      ...mapState([
        'logined',
        'intro'
      ])
    },
    methods:{
      ...mapMutations([
        'editLogined'
      ]),
      login_btn(){
        this.$router.push({
          path:'login'
        });
      },
      logout(){
        this.$cookie.delete('token_id');
        window.location.reload();
        this.editLogined(false);
        this.$router.push({
          path:'intro'
        });
      }
    }
  }
</script>
<style>
  body{
    padding: 0;
    margin: 0;
  }
  .el-header{
    padding: 0;
  }
  .logo_name{
    line-height: 80px;
    color: #fff;
  }
  h2{
    padding: 0;
    margin: 0;
  }
</style>
