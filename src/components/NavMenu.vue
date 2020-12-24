<template>
<div id="nvmen">
   <el-row class="tac">
 <el-col :span="12">
     
    <div id="nvmen2">
        <el-header style="height: 215px;padding:0;">
            <p class="asc">人力资源管理系统</p>
            <div style="width: 100%;height: 70px;">
                <div class="u50"><img id="u50_img" class="img " src="../assets/u50.png"></div>
                <div class="ln"><img id="u52_img" class="img " src="../assets/u52.png"><p class="lina">李娜</p></div>
                <div class="ln"><p class="pt">探索协同运营管理之道</p></div>
            </div>
        </el-header>
    </div>
    <el-menu
      default-active="2"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"
      background-color="rgba(11, 84, 117, 1)"
      text-color="#fff"
      active-text-color="#ffd04b">
      
      <el-menu-item index="1">
        <router-link to=""></router-link>
        <span slot="title">我的桌面</span>
      </el-menu-item>
      
      <el-menu-item index="2">
        <router-link to="../components/pepo.vue"></router-link>
        <span slot="title">我的人事</span>
      </el-menu-item>
    </el-menu>
  </el-col>
 
</el-row>

</div>
</template>
<script>

  export default {
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }
</script>
<style scoped>
.lina{
    margin-left: 12%;
}
.u52_img{
        border-width: 0px;
    position: absolute;
    
    top: 95px;
    width: 14px;
    height: 14px;
}
.ln{
width: 64%;
width: 64%;
    text-align: left;
    height: 37px;
    margin-top: -25px;
    float: right;
    color: #FFFFFF;
}
.pt{
    margin-top: 32px;
    font-size: 12px;
    color: #D9D9D9;
    font-weight: 600;
}
.el-menu-item{
    width: 260px;
}
#nvmen{
    width: 260px;
    height: 100%;
        overflow: hidden;
}
  .el-header, .el-footer {
    /* background-color: #B3C0D1;
    color: #333; */
    background-color: rgba(11, 84, 117, 1);
    text-align: center;
    line-height: 60px;
  }
  
  .el-aside {
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
    line-height: 200px;
  }
  
  .el-main {
    /* background-color: #E9EEF3; */
    color: #333;
    text-align: center;
    line-height: 160px;
  }
#nvmen2{
    margin-top: -16px;
    margin-bottom: 10%;
/* background-color: rgba(6, 57, 75, 1); */
    background-color: rgba(0, 0, 0, 0.2);
    width: 260px;
    padding: 0;
    border-width: 0px;
    /* position: absolute; */
    left: 0px;
    top: 0px;
}
  body > .el-container {
    margin-bottom: 40px;
  }
  
  .el-container:nth-child(5) .el-aside,
  .el-container:nth-child(6) .el-aside {
    line-height: 260px;
  }
  #u50_img {
    position: absolute;
    left: 24px;
    /* top: 82px; */
    width: 60px;
    height: 60px;
}
  
  .el-container:nth-child(7) .el-aside {
    line-height: 320px;
  }
.asc{
font-family: '微软雅黑';
    font-weight: 400;
    font-style: normal;
    font-size: 18px;
    color: #FFFFFF;
}
</style>