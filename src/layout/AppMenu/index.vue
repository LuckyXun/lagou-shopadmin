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
    <menu-item
      v-for="menu in $store.state.menus"
      :menu="menu"
      :key="menu.path"
    />
  </el-menu>
</template>

<script lang="ts" setup>
import MenuItem from './menuItem.vue'

</script>
<style lang="scss" scoped>
.el-menu {
  border-right: none;
}
.el-menu:not(.el-menu--collapse){
  width: 200px;
}
</style>
