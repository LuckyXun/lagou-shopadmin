<template>
  <app-icon
    @click="handleCollapse"
    :class="{
      expand:!$store.state.isCollapse
    }"
    class="hydrated icon"
    name="list"
    :size="20"
  />
</template>

<script lang="ts" setup>
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

.icon{
  cursor: pointer;
}

</style>
