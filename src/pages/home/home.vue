<template>
  <el-container>
    <!-- 侧栏导航 -->
    <el-aside width="200px">
    
      <el-row class="container"><!--导航-->
      <el-col :span='24'  class="nav">
        <el-menu router=true default-active="2" class="el-menu-vertical-demo" text-color="#fff" background-color="#545c64" active-text-color="#ffd04b">
          <el-submenu index="/apply">
            <template slot="title">
              <i class="el-icon-menu"></i>
              <span>应用</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="/apply/running"><i class="el-icon-document"></i>正在运行</el-menu-item>
              <el-menu-item index="/apply/stoped"><i class="el-icon-document"></i>已停止</el-menu-item>
            </el-menu-item-group>
          </el-submenu>

          <el-menu-item index="/repo">
            <i class="el-icon-menu"></i>
            <span slot="title">镜像仓库</span>
          </el-menu-item>

          <el-menu-item index="/apply_templet">
            <i class="el-icon-goods"></i>
            <span slot="title">应用模板</span>
          </el-menu-item>

          <el-menu-item index="/master">
            <i class="el-icon-star-on"></i>
            <span slot="title">主机</span>
          </el-menu-item>

          <el-menu-item index="/internet">
            <i class="el-icon-sort"></i>
            <span slot="title">网络</span>
          </el-menu-item>

          <el-menu-item index="/user_center">
            <i class="el-icon-setting"></i>
            <span slot="title">用户中心</span>
          </el-menu-item>
          
        </el-menu>
      </el-col>

      
    </el-row>
 
    </el-aside>
    
    <!--右侧  -->
    <el-container>
      <!-- 右侧header -->
      <el-header>
          <section class="blank-bar"></section>
          <section class="tool-bar"></section>
          <section class="user-bar">
            <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
                  <el-submenu index="2">
                    <template slot="title">{{username}}</template>
                    <el-menu-item index="2-1" @click="toUserinfo()">个人信息</el-menu-item>
                    <el-menu-item index="2-2" @click="toSignOut()">退出</el-menu-item>
                  </el-submenu>
                  </el-menu>
          </section>
      </el-header>

      <!-- 右侧main -->
      <el-main>
        <!--<el-col :span='24'>放置路由 显示-->
        <router-view/>
      </el-col>
      </el-main>

      <!-- 右侧footer -->
      <el-footer></el-footer>

    </el-container>

    
    
</el-container>
</template>

<style lang="scss">
@import "./home.scss";
</style>


<script src="./home.js"></script>
