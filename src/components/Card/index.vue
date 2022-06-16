<!--
 * @Author: XunL
 * @Description:
-->

<template>
  <el-card class="card">
    <template #header>
      <slot
        name="header"
        class="card_header"
      />
    </template>
    <slot />
  </el-card>
</template>

<script lang="ts" setup>

</script>

<style lang="scss" scoped>
.card{
  box-sizing: border-box;
  overflow: auto;
  height: 100%;
}
.card > :deep(.el-card__header:empty){
  display: none;
}
</style>
