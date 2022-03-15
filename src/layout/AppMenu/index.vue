<!--
 * @Author: XunL
 * @Description:
-->
<template>
  <el-menu
    :unique-opened="true"
    :collapse="$store.state.isCollapse"
    default-active="2"
    background-color="#304156"
    text-color="#bcc0c5"
    active-text-color="#2d8cf0"
    router
  >
    <el-menu-item index="/">
      <app-icon><Menu /></app-icon>
      <template #title>
        首页
      </template>
    </el-menu-item>
    <el-sub-menu index="1">
      <template #title>
        <app-icon><Briefcase /></app-icon>
        <span>商品</span>
      </template>
      <el-menu-item-group>
        <el-menu-item index="/product/list">
          <app-icon><Location /></app-icon>
          <template #title>
            商品列表
          </template>
        </el-menu-item>
        <el-menu-item index="/product/attr">
          <app-icon><Coordinate /></app-icon>
          <template #title>
            商品规格
          </template>
        </el-menu-item>
      </el-menu-item-group>
    </el-sub-menu>
  </el-menu>
</template>

<script lang="ts" setup>
import { Menu, Location, Briefcase, Coordinate } from '@element-plus/icons-vue'

</script>
<style lang="scss" scoped>
.el-menu {
  border-right: none;
}
.el-menu:not(.el-menu--collapse){
  width: 200px;
}
</style>
