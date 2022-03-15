<template>
  <app-icon>
    <Expand
      @click="handleCollapse"
      :class="{
        expand:!$store.state.isCollapse
      }"
    />
  </app-icon>
</template>

<script lang="ts" setup>
import { Expand } from '@element-plus/icons-vue'
import { useStore } from '@/store'

const store = useStore()

const handleCollapse = () => {
  store.commit('setIsCollapse', !store.state.isCollapse)
}
</script>

<style lang="scss" scoped>
.expand{
  transform: rotate(180deg);
}

</style>
