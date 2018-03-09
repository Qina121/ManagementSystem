<template>
  <div>
    <el-row class="person_box"  style="margin-bottom: 40px">
      <el-col :span="10" class="info_list" :offset="4">
        <div style="font-size: 32px; border-bottom: none; font-weight: bold">{{td.name}}</div>
        <div style="font-weight: bold">个人信息</div>
        <div>
          <span style="width: 300px;display: inline-block">生日:{{td.birthday}}</span>
          <span>地址:{{td.address}}</span>
        </div>
        <div >
          <span style="width: 300px;display: inline-block">电话:{{td.phone}}</span>
          <span>邮箱:{{td.email}}</span>
        </div>
      </el-col>
      <el-col :span="4" :offset="2">
        <img :src="td.src" alt="" width="218px" height="222px">
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="10" class="info_list" :offset="4">
        <div style="font-weight: bold">工作信息</div>
        <div >
          <span style="width: 300px;display: inline-block">岗位：{{td.position}}</span>
          <span>学历：{{td.education}}</span>
        </div>
        <div>
          <span style="width: 300px;display: inline-block">工龄：{{td.age}}</span>
          <span>入职时间：{{td.time}}</span>
        </div>
        <div >
          <span style="width: 300px;display: inline-block">工资:{{td.wages}}</span>
          <span>工作表现：{{td.performance}}</span>
        </div>
      </el-col>
      <el-col :span="4" :offset="2" class="info_list" >
        <div style="font-weight: bold">岗位职责</div>
        <span style="font-size: 16px;line-height: 30px;">
          {{td.duties}}
        </span>
      </el-col>
    </el-row>
  </div>


</template>
<script>
  import {mapState} from 'vuex'
  export default {
    name:'personal',
    data(){
      return {
        td:{}
      }
    },
    computed:{
      ...mapState([
        'tableData',
      ]),

    },
    created(){
      var data = this.tableData.filter((v,i)=>{
        return v.id==this.$route.params.id;
      });
      Object.assign(this.td,data[0]);
      console.log(this.td);
    }
  }
</script>
<style>
  .person_box{
    padding: 20px 0;
  }

  .info_list div{
    height: 50px;
    line-height: 70px;
    border-bottom: 1px solid #ccc;
  }
</style>
