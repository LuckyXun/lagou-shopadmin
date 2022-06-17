<!--
 * @Author: XunL
 * @Date: 2022-02-12 00:46:22
 * @LastEditTime: 2022-06-17 10:42:54
 * @Description: file content
-->
<template>
  <el-config-provider
    :locale="locale"
  >
    <router-view />
  </el-config-provider>
</template>
<script setup lang="ts">
import locale from 'element-plus/lib/locale/lang/zh-cn'
</script>
<style scoped  lang="scss">
//TODO 优化为动态值
 :global(.el-dialog__body) {
    max-height: calc(100vh - var(--el-dialog-margin-top,15vh) - 250px);
    overflow: auto;
}
 </style>
