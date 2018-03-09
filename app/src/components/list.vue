<template>
  <el-table
    :data="tableData"
    height="432"
    style="width: 100% ;"
    @row-click="personal_info">
    <el-table-column
      prop="id"
      label="工号"
      width="120">
    </el-table-column>
    <el-table-column
      prop="name"
      label="姓名"
      width="140">
    </el-table-column>
    <el-table-column
      prop="position"
      label="职位"
      width="140">
    </el-table-column>
    <el-table-column
      prop="age"
      label="入职时长"
      width="120">
    </el-table-column>
    <el-table-column
      prop="performance"
      label="在职表现"
      width="100">
    </el-table-column>
    <el-table-column
      prop="other"
      label="其他">
    </el-table-column>
  </el-table>

</template>

<script>
  import {mapState,mapMutations} from 'vuex'
  export default {
    name:'list',
    computed: {
      ...mapState([
        'tableData'
      ])
    },
    methods:{
      ...mapMutations([
        'personal_info'
      ]),
      personal_info(row,event,column){
        console.log(row,event,column);
        this.$router.push({
          path:'personal/'+row.id
        });
      }
    }
  }
</script>
