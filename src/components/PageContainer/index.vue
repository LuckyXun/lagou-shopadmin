<!--
 * @Author: XunL
 * @Description: 主展示区域面板组件
-->
<template>
  <el-space
    direction="vertical"
    class="page"
    prefix-cls="page"
  >
    <slot />
  </el-space>
</template>

<script lang="ts" setup>

</script>

<style lang="scss" scoped>
.page{
  display: flex;
  width:100%;
  height: 100%;
  overflow: auto;
  :deep(.page__item:last-child) {
    flex: 1;
    padding-bottom: unset !important;
  }
}
 :deep(.page__item){
  width: 100%;
}
</style>
