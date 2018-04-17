<template>
  <div id="running">
    <!-- <el-card class="box-card"> -->
    <div class="box-card">
      <div class="content">
        <div class="btn-box" >
            <el-button
              type="primary"
              class="btn"
              @click="dialogVisible = true">
              <i class="el-icon-plus"></i>
              部署应用
            </el-button>
            <el-button
              type="danger"
              class="btn"
              icon="el-icon-delete"
              @click="deleteApps()"
              >
            </el-button>
          </div>
        <div class="tabel-box">
          <el-card class="box-card">
            <!-- <div style="display:none">{{deletePodsForm}}{{deletePodsForm2}}</div> -->
            <el-table
              :data="applys"
              style="width: 100%"
              ref="multipleTable"
              @selection-change="handleSelectionChange">
              <el-table-column
                type="selection"
                width="55">
              </el-table-column>
              <el-table-column
                label="应用名称"
                prop="service_name">
              </el-table-column>
              <el-table-column
                prop="image_name"
                label="镜像名">
              </el-table-column>
              <el-table-column
                label="端口"
                prop="endpoint">
              </el-table-column>
              <el-table-column
                label="创建时间">
                <template slot-scope="scope">
                  <!-- <span>{{scope.row.create_date | moment }}</span> -->
                  <span>{{scope.row.create_date}}</span>
                </template>
              </el-table-column>
            </el-table>
            {{deleteAppsForm}}
          </el-card>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
@import './running.scss'
</style>

<script src="./running"></script>