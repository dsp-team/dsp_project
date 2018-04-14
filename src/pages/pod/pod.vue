<template>
  <div id="pod">
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <p>容器</p>
      </div>
      <div class="content">
        <div class="btn-box" >
            <el-button
              type="primary"
              class="btn">
              <i class="el-icon-plus"></i>
              新增容器
            </el-button>
          </div>
        <div class="tabel-box">
          <el-card class="box-card">
            <el-table
              :data="pods"
              style="width: 100%"
              v-model="deleteForm"
              ref="multipleTable">
              <el-table-column
                type="selection"
                width="55"
              ></el-table-column>
              <el-table-column
                prop="name"
                label="容器">
              </el-table-column>
              <el-table-column
                prop="image"
                label="镜像">
              </el-table-column>
              <el-table-column
                prop="ip_port"
                label="端口">
              </el-table-column>
              <el-table-column
                prop="state"
                label="当前状态">
              </el-table-column>
              <el-table-column
                prop="status"
                label="启动时间">
              </el-table-column>
            </el-table>
          </el-card>
        </div>
      </div>
    </el-card>
  </div>
</template>

<style lang="scss">
@import './pod.scss'
</style>

<script src="./pod.js"></script>