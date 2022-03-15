<!--
 * @Author: XunL
 * @Date: 2022-02-12 00:46:22
 * @LastEditTime: 2022-03-14 18:29:16
 * @Description: file content
-->
<template>
  <el-config-provider
    :locale="locale"
    id="app"
  >
    <router-view />
  </el-config-provider>
</template>
<script setup lang="ts">
import locale from 'element-plus/lib/locale/lang/zh-cn'
</script>
