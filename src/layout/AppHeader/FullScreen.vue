<template>
  <app-icon>
    <full-screen @click="toggleFullScreen" />
  </app-icon>
</template>

<script lang="ts" setup>
import { FullScreen } from '@element-plus/icons-vue'

const toggleFullScreen = () => {
  if (!document.fullscreenElement) {
    document.documentElement.requestFullscreen()
  } else {
    if (document.exitFullscreen) {
      document.exitFullscreen()
    }
  }
}
</script>

<style lang="scss" scoped></style>
