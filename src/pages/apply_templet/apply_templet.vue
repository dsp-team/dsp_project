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
    <el-col :span="24"
      class="templet">
       <ul>
         <li class="templet_box"
          v-for="item in templates"
         :key="item"
          href="javascript:void(0)">
            <img src="../../assets/templet.png" @click="gotoDetail(item)"/>
            <span :model="templateName">{{item}}</span>{{templateName}}
            <div class="top clearfix">
              <el-button
                type="danger"
                icon="el-icon-close"
                circle
                size="mini"
                @click="deleteTemp(item)"></el-button>
            </div>
          </li>
          
        </ul>
    </el-col>
  

  <!-- 创建模板模态框 -->
  <!-- :before-close="handleClose" -->
    <el-dialog
      :title="title"
      class="templet_dialog"
      :visible.sync="dialogVisible"
      center
      width="30%">
      <el-form
        :label-position="labelPosition"
        label-width="80px"
        ref="addTemplate"
        :rules="rules"
        :model="addTempDialog">
        <el-form-item label="名称" prop="name">
          <el-input
            v-model="addTempDialog.name"
            placeholder="请输入名称"
            clearable>
          </el-input>
        </el-form-item>
        <el-form-item label="简介" prop="describe">
          <el-input
            v-model="addTempDialog.describe"
            placeholder="请输入简介"
            clearable>
          </el-input>
        </el-form-item>
        <el-form-item label="内容" prop="compose">
          <el-input
            v-model="addTempDialog.compose"
            placeholder="请输入内容"
            clearable>
          </el-input>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="callOfDialog()">取 消</el-button>
        <el-button type="primary" @click="addTemp(addTempDialog)">确 定</el-button>
      </span>
    </el-dialog>

  </el-row>

  
  

</template>
<style lang="scss">
@import "./apply_templet.scss";
</style>
<script src="./apply_templet.js"></script>