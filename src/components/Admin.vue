<template>
<div class="nav-rit">
    <div class="html1">
        <div id="pt2">
          <img id="u119_img" class="img " src="../assets/u119.png">
          <span class="pont">员工管理</span>
          <!--  -->
            <el-select v-model="value" placeholder="请选择" class="yiqiw">
            <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
            :disabled="item.disabled">
            </el-option>
            </el-select>
            <!--  -->
            <el-input
            placeholder="请输入关键字"
            v-model="input"
            clearable class="yiqiw2">
            </el-input>
            <!--  -->
            <el-button class="sp" type="primary" icon="el-icon-search">查找</el-button>
            
            <div class="sp-1">
              <el-button type="primary" icon="el-icon-plus">新增员工</el-button>
              <el-button type="primary" icon="el-icon-refresh">刷新</el-button>
            </div>
            

          <!--  -->
        </div>
        <!--  -->
        <div class="tops2">
          <!-- 左 -->
          <div class="tops2-lef">
            <div class="lef-top"><span class="font-sp">分类</span></div>
            <div class="lef-nav1">
              <ul>
                <li><img class="u502" src="../assets/u502.png">显示所有</li>
                <li><img class="u502" src="../assets/u502.png">集团</li>
                <li>总经办</li>
                <li>人事部</li>
                <li>财务部</li>
                <li><img class="u502" src="../assets/u517.png">科技公司</li>
                <li><img class="u502" src="../assets/u517.png">工程公司</li>
                <li><img class="u502" src="../assets/u517.png">现代事务所</li>
                <li>北京机构</li>
                <li>杭州机构</li>
                <li>上海机构</li>
                <li>深圳机构</li>
              </ul>
            </div>
            <!-- zuo2 -->
            <div class="lef-nav2">
              <span class="lef-v2">（以上分类中包含了在职的、试用期和临时的员工）</span>
            </div>
            <!-- zuo3 -->
            <div class="lef-nav1">
              <ul>
                <li><img class="u502" src="../assets/u491.png">在职的员工</li>
                <li><img class="u502" src="../assets/u491.png">试用期员工</li>
                <li><img class="u502" src="../assets/u491.png">临时的员工</li>
                <li><img class="u502" src="../assets/u491.png">退休的员工</li>
                <li><img class="u502" src="../assets/u491.png">离职的员工</li>     
              </ul>
            </div>
            <!--  -->
          </div>
          <!-- 右 -->
          <div class="tops2-rit">
            <div class="zuoyou">
            <el-table
          :data="tableData"
          border
          style="width: 100%">
          <el-table-column
          prop="name"
          label="姓名"
          >
          </el-table-column>
          <el-table-column
          prop="sex"
          label="性别"
          >
          </el-table-column>
          <el-table-column
          prop="number"
          label="工号">
          </el-table-column>
          <el-table-column
          prop="address"
          label="从属于">
          </el-table-column>
          <el-table-column
          prop="post"
          label="职务">
          </el-table-column>
          <el-table-column
          prop="date"
          label="日期"
          >
          </el-table-column>
          <!--  -->
          <el-table-column label="操作">
      <template slot-scope="scope">
        <el-button
          size="mini"
          class="el-icon-edit"
          @click="handleEdit(scope.$index, scope.row)"></el-button>
        <el-button
          size="mini"
          type="danger"
          class="el-icon-delete"
          @click="handleDelete(scope.$index, scope.row)"></el-button>
      </template>
    </el-table-column>
          <!--  -->
          </el-table>
          </div>
          <!-- 6666 -->
           <div class="block">
            <span class="demonstration"></span>
            <el-pagination
              @size-change="handleSizeChange"
              @current-change="handleCurrentChange"
              :current-page="currentPage4"
              :page-sizes="[100, 200, 300, 400]"
              :page-size="100"
              layout="total, sizes, prev, pager, next, jumper"
              :total="400">
              </el-pagination>
            </div>
          <!-- 666 -->
          </div>
          <!--  -->
        </div>
        <!--  -->
    </div>
</div>
</template>
<script>
export default {
   methods: {
      handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
      },
      handleCurrentChange(val) {
        console.log(`当前页: ${val}`);
      }
    },
    data() {
      return {
        currentPage1: 5,
        currentPage2: 5,
        currentPage3: 5,
        currentPage4: 4
      };
    },
    data() {
      return {
        options: [{
          value: '选项1',
          label: '按姓名'
        }, {
          value: '选项2',
          label: '按工号'
        }, {
          value: '选项3',
          label: '按职务'
        }, {
          value: '选项4',
          label: '按入职日期'
        }, {
          value: '选项5',
          label: '按出生日期'
        },{
          value: '选项6',
          label: '按最高学历'
        },{
          value: '选项7',
          label: '按专业方向'
        }],
        //    
        tableData: [{
          date: '2016-05-02',
          number:'Ahz-001',
          post:'分公司经理',
          sex:'男',
          name: '王小虎',
          address: '杭州机构'
        }, {
          date: '2016-05-04',
          sex:'男',
          number:'Ahz-001',
          post:'分公司经理',
          name: '王小虎',
          address: '杭州机构'
        }, {
          date: '2016-05-01',
          sex:'男',
          number:'Ahz-001',
          post:'分公司经理',
          name: '王小虎',
          address: '杭州机构'
        }, {
          date: '2009-3-13',
          sex:'女',
          number:'Azb-035',
          post:'采购员',
          name: '陈慧红',
          address: '采购部'
        }, 
        {
          date: '2009-3-13',
          sex:'女',
          number:'Azb-035',
          post:'采购员',
          name: '陈慧红',
          address: '采购部'
        }, 
        {
          date: '2009-3-13',
          sex:'女',
          number:'Azb-035',
          post:'采购员',
          name: '陈慧红',
          address: '采购部'
        }, 
        {
          date: '2009-3-13',
          sex:'女',
          number:'Azb-035',
          post:'采购员',
          name: '陈慧红',
          address: '采购部'
        }, 
        {
          date: '2009-3-13',
          sex:'女',
          number:'Azb-035',
          post:'采购员',
          name: '陈慧红',
          address: '采购部'
        }, 
        {
          date: '2009-3-13',
          sex:'女',
          number:'Azb-035',
          post:'采购员',
          name: '陈慧红',
          address: '采购部'
        }, 
        
        {
          date: '2016-05-03',
          sex:'男',
          number:'Ahz-001',
          post:'分公司经理',
          name: '王小虎',
          address: '杭州机构'
        }],
        // 
        value: ''
      }
    }
  }
</script>
<style scoped>
.zuoyou{
    margin-bottom: 2%;
}
.tops2-rit{
      width: 1062px;
    float: right;
    /* border: 1px solid rgba(223, 223, 223, 1); */

}
.lef-v2{
    width: 90%;
    color: #9E9E9E;
    float: left;
    margin-left: 5%;
    margin-top: 5%;
}
.lef-nav2{
    width: 100%;
    height: 70px;
    border-bottom: 1px solid #dfdfdf;
    font-size: 14px;
}
.u502{
    text-align: left;
    margin-left: -15%;
    margin-right: 5%;
}
.lef-nav1 ul{
    margin-left: -40px;
    font-size: 14px;
}
.lef-nav1 ul li:hover{
    color: rgb(30, 159, 255);
}
.lef-nav1 ul li{
list-style: none;
    cursor: pointer;
    margin-left: 40px;
    padding: 5px 0 5px 24px;
    text-align: left;
}
.lef-nav1{
    width: 100%;
    /* height: 360px; */
    border-bottom: 1px solid #dfdfdf;
}
.font-sp{
      font-size: 15px;
    position: absolute;
    margin-left: 12px;
    margin-top: 8px;
    font-weight: 700;
}
.lef-top{
    width: 100%;
    height: 40px;
      border-bottom: 1px solid rgba(223, 223, 223, 1);
    background-color: rgba(245, 245, 245, 1);

    box-shadow: none;
    font-family: '微软雅黑 Bold', '微软雅黑 Regular', '微软雅黑';
    font-weight: 700;
    font-style: normal;
    font-size: 14px;
    text-align: left;
}
.tops2-lef{
  width: 260px;
  /* height: 680px; */
  float: left;
      border:1px solid rgba(223, 223, 223, 1);
}
.tops2{
    width: 100%;
    height: 83%;
    /* background: beige; */
    /* border: 1px solid; */
    float: left;
    margin-top: 1%;
}
.sp-1{
      float: right;
}
.el-button--primary:focus, .el-button--primary:hover {
    /* background: #66b1ff; */
    
    border-color: #66b1ff;
    /* color: #66b1ff; */
    color: #FFF;
}
.el-button--primary {
    color: #FFF;
    background-color: rgba(255, 255, 255, 1);
    border-color: rgba(201, 201, 201, 1);
    color: #666666;
}
.sp{
  margin-left: 25%;
}
.el-input {
    position: relative;
    font-size: 14px;
    display: inline-block;
    width: 85%;
}
.yiqiw2{
left: 324px;
    top: 0px;
    float: left;
    width: 397px;
}
.yiqiw{
float: left;
    left: 316px;
    width: 200px;
}
.nav-rit {
    margin: 0px;
    background-image: none;
    position: relative;
    left: -30px;
    width: 1341px;
    margin-left: auto;
    margin-right: auto;
    text-align: left;
    top: -54px;
    height: 934px;
}
.html1{
    width: 100%;
    height: 934px;
}
#pt2{
    margin-top: 102px;
    float: left;
    width: 100%;
}
#u119_img {
    border-width: 0px;
    position: absolute;
    left: 30px;
    top: 112px;
    width: 24px;
    height: 30px;
}
.pont {
font-size: 26px;
    font-weight: 500;
    margin-left: -39%;
    top: 106px;
    position: absolute;
}
.el-input__inner{
    height: 35px;
}
</style>