<template>
  <div id="create-app-image">
    <!-- <div class="step-box"> -->
      <el-steps :active="step" finish-status="success" class="step">
        <el-step title="选择镜像"></el-step>
        <el-step title="应用信息"></el-step>
        <el-step title="审核部署"></el-step>
      </el-steps>
      <el-button style="margin-top: 12px;" @click="next">下一步</el-button>
    <!-- </div> -->
    <!-- <router-view class="view"></router-view> -->
    
  </div>
</template>
<script src="./create-app-image.js">

</script>

