<template>
  
  <el-row class="templet_container">
    <el-col :span="24">
      <el-button 
        type="primary"
        icon="el-icon-plus"
        class="templet_btn"
        @click="dialogVisible = true">创建应用模板</el-button>
        <!-- <el-button 
        type="primary"
        icon="el-icon-plus"
        class="templet_btn"
        @click="zhuji">创建应用模板</el-button> -->
    </el-col>
    <el-col :span="24" class="templet">
       <ul>
         <li
          v-for="item in templets"
          :key="item"
          class="templet_box"
          href="javascript:void(0)"
          @click="gotoDetail(item)">
           <img src="../../assets/templet.png"/>
           <span>{{item}}</span>
         </li>
       </ul>
    </el-col>

  <!-- 创建模板模态框 -->
  <!-- :before-close="handleClose" -->
    <el-dialog
      :title="title"
      class="templet_dialog"
      :visible.sync="dialogVisible"
      width="30%">
      <span>名称</span>
      <el-input v-model="input" placeholder="请输入名称"></el-input>
      <el-input v-model="input" placeholder="请输入简介"></el-input>
      <el-input v-model="input" placeholder="请输入内容"></el-input>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
      </span>
    </el-dialog>

  </el-row>

  
  

</template>
<style lang="scss">
@import "./apply_templet.scss";
</style>
<script src="./apply_templet.js"></script>