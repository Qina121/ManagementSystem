<template>
  <el-card class="intro-card" >
    <div class="block">
      <span class="demonstration"></span>
      <el-carousel height="450px">
        <!--<el-carousel-item v-for="item in 4" :key="item">-->
          <!--<img src="../assets/218.png" style="width: 100%;height: 100%;"/>-->
        <!--</el-carousel-item>-->
        <el-carousel-item v-for="(data,i) in list" :key="i">
          <!--<img src='../assets/desert5.jpg'/>-->
          <img v-bind:src="data.src" style="width: 100%;height: 100%;"/>
        </el-carousel-item>
      </el-carousel>
    </div>
  </el-card>
</template>
<script>
  export default {
    name:'intro',
    components:{

    },
    data(){
      return {
        list : [
          {src:'http://a3.att.hudong.com/67/31/01300000329092127874318010008.jpg' },
          {src:'http://www.taopic.com/uploads/allimg/111008/6462-11100Q3005723.jpg' },
          {src:'http://www.51pptmoban.com/d/file/2015/04/11/4e72b5191aef7124b1cbabe6c5b55b33.png' },
          {src:'http://pic31.photophoto.cn/20140508/0025008225689550_b.jpg'}
        ]
      }
    }
  }
</script>
<style>
  .intro-card{
    width: 1000px;
    height: 500px;
    margin:0 auto;
    margin-top: 40px;
  }
</style>
