<template>

    <el-row >
      <el-col :span="8" :offset="8" class="submit">
        <el-form ref="ruleForm2" label-width="100px" class="demo-ruleForm" >
          <el-form-item label="账户名" prop="name">
            <el-input v-model="username" ref="user" placeholder="邮箱/手机号/账号"></el-input>
          </el-form-item>
          <el-form-item label="密码" prop="pass">
            <el-input type="password" ref="pwd" v-model="password" placeholder="登录密码" auto-complete="off"></el-input>
          </el-form-item>
          <el-form-item label="确认密码" prop="checkPass">
            <el-input type="password" ref="re_pwd" v-model="re_password" placeholder="确认密码" auto-complete="off"></el-input>
          </el-form-item>
          <el-form-item class="btn">
            <el-col :span="8" :offset="2">
              <el-button type="button" @click="loginMethod" style="width: 100%;">提交</el-button>
            </el-col>
            <el-col :span="8" :offset="2">
              <el-input type="reset" value="重置"/>
            </el-col>
          </el-form-item>
        </el-form>

      </el-col>
    </el-row>



</template>

<script>
  import {mapState,mapMutations} from 'vuex'
  import ElCard from "element-ui/packages/card/src/main";
  export default {
    components: {ElCard},
    name:'login',
    data(){
      return {
        username:"",
        password:"",
        re_password:""
      }
    },
    computed:{
      ...mapState([
        'userInfo',
      ])
    },
    methods:{
      ...mapMutations([
        'editLogined'
      ]),
      loginMethod(){
        if(this.username==this.userInfo.username){
          if(this.password==this.userInfo.password){
            if(this.re_password==this.userInfo.re_password){
              //登陆成功
              console.log('登陆成功')
              console.log(this.$cookie);
              var date = new Date();
              date.setDate(date.getDate()+7);
              this.$cookie.set('token_id','0000090',{ expires: date.toGMTString() });
              window.location.reload();
              this.editLogined(true);
              this.$router.push({
                path:'all'
              });

            }else{
              this.$message({
                type:"error",
                message:"确认密码不正确",
                showClose:true,
                duration:1000
              });
              this.$refs.re_pwd.focus();
            }

          }else{
            this.$message({
              type:"error",
              message:"密码不正确",
              showClose:true,
              duration:1000
            });
            this.$refs.pwd.focus();
          }
        }else{
          this.$message({
            type:"error",
            message:"用户名不存在",
            showClose:true,
            duration:1000
          });
          this.$refs.user.focus();
        }
      }
    }
  }
</script>

<style>
  body{
    background-color: beige;
  }
.submit{
  margin-top: 100px;
}
.font-c{
  color: #fff;
}
</style>
