<!--
 * @Author: XunL
 * @Description: 布局样式
-->
<template>
  <el-container>
    <el-aside>
      <AppMenu />
    </el-aside>
    <el-container>
      <el-header>
        <AppHeader />
      </el-header>
      <el-main>
        <router-view />
      </el-main>
    </el-container>
  </el-container>
</template>
<script setup lang="ts">
import AppMenu from './AppMenu/index.vue'
import AppHeader from './AppHeader/index.vue'
</script>
<style lang="scss" scoped>

.el-container {
  height: 100vh;
}

.el-header {

  color: #333;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.el-aside {
  width: auto;
  background-color: #304156;
  color: #333;
}

.el-main {
  background-color: #E9EEF3;
  color: #333;
}

</style>
