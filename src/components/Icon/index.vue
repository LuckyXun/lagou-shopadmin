<!--
 * @Author: XunL
 * @Description: 全局Icon组件
-->
<template>
  <ElIcon
    :size="options.size"
    :color="options.color"
  >
    <slot />
  </ElIcon>
</template>

<script setup lang="ts">
interface Props {
  size?: number,
  color?:string
}
const options = withDefaults(defineProps<Props>(), {
  size: 20,
  color: 'black'
})

</script>

<style scoped lang="scss">

</style>
