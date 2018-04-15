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
                label="容器">
                <template slot-scope="scope">
                  <span>{{scope.row.name[0].slice(1) }}</span>
                </template>
              </el-table-column>
              <el-table-column
                prop="image"
                label="镜像">
              </el-table-column>
              <el-table-column
                label="端口">
                <template slot-scope="scope">
                  <p v-for="ip in scope.row.ip_port" :key="ip">
                    {{ip }}
                  </p>
                </template>
              </el-table-column>
              <el-table-column
                prop="state"
                label="当前状态">
                <template slot-scope="scope">
                  <!-- 对当前状态进行判断 为running时显示绿色的进度条 否则进度条绿色为0 -->
                  <el-progress v-if="scope.row.state == 'running'" :percentage="100" status="success" :show-text='false'></el-progress>
                  <el-progress v-if="scope.row.state !== 'running'" :percentage="0" status="exception" :show-text='false'></el-progress>
                </template>
              </el-table-column>
              <el-table-column
                label="启动时间">
                <template slot-scope="scope">
                  <span>{{'更新于' + scope.row.status.slice(3, 5) + '小时前'}}</span>
                </template>
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